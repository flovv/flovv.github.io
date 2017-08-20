---
title: 'Transfer Learning with augmented Data for Logo Detection'
author: "flovv"
layout: post
published: true
status: publish
tags: R
draft: no
---
 

 
 
The last months, I have worked on brand logo detection in R with Keras. Starting with a [model from scratch ](http://flovv.github.io/Logo_detection_deep_learning/)  [adding more data](http://flovv.github.io/Logo_detection_deep_learning_part2/)  and [using a pretrained model](http://flovv.github.io/Logo_detection_transfer_learning/). The goal is to build a (deep) neural net that is able to identify brand logos in images.
 
Just to recall, the dataset is a combination of the [Flickr27-dataset](http://image.ntua.gr/iva/datasets/flickr_logos), with 270 images of 27 classes and self-scraped images from google image search. In case you want to reproduce the analysis, you can download the set [here](https://github.com/flovv/flovv.github.io/blob/master/data/LogoData.zip).
 
In the last post, I used the VGG-16 pretrained model and showed that it can be trained to achieve an accuracy of 55% on the training 35% on the validation set.
In this post, I will show how to further improve the model accuracy.
 
Keras (in R) provides a set of pretrained models:
+ Xception
+ VGG16
+ VGG19
+ ResNet50
+ InceptionV3
+ MobileNet
 
Naturally, it raises the question which model is best suited for the task at hand.
The article [10 advanced deep learning architectures](https://www.analyticsvidhya.com/blog/2017/08/10-advanced-deep-learning-architectures-data-scientists/) points out that Google Xception model performs better than VGG in transfer learning cases. 
 
In addition to changing the pre-trained model, I wanted to see how data augmentation changes the results.
The function "image_data_generator"  takes the input data and randomly alters the original training images.
 
Here is the code:

{% highlight r %}
require(keras)
 
### Xception Transfer-learning example
img_width <- 75
img_height <- 75
batch_size <- 8
 
train_directory <- "flickrData/train"
test_directory <- "flickrData/test"
 
train_generator <- flow_images_from_directory(train_directory, generator = image_data_generator(),
                                              target_size = c(img_width, img_height), color_mode = "rgb",
                                              class_mode = "categorical", batch_size = batch_size, shuffle = TRUE,
                                              seed = 123)
 
validation_generator <- flow_images_from_directory(test_directory, generator = image_data_generator(),                                                   target_size = c(img_width, img_height), color_mode = "rgb", classes = NULL, class_mode = "categorical", batch_size = batch_size, shuffle = TRUE, seed = 123)
 
 
train_samples = 498
validation_samples = 177
 
########### generator to enhance the dataset, artificially alter the original data ################
datagen <- image_data_generator(
  rotation_range = 20,
  width_shift_range = 0.2,
  height_shift_range = 0.2,
  horizontal_flip = TRUE
)
 
train_augmented_generator <-  flow_images_from_directory(test_directory, generator = datagen,
                                                         target_size = c(img_width, img_height), color_mode = "rgb", classes = NULL, class_mode = "categorical", batch_size = batch_size, shuffle = TRUE,  seed = 123)
 
## define the pretrained model, here: Xception 
base_model <- application_xception(weights = 'imagenet', include_top = FALSE, input_shape = c(img_width, img_height, 3))
 
 
 
predictions <- base_model$output %>% 
  layer_global_average_pooling_2d(trainable = T) %>% 
  layer_dense(64, trainable = T) %>%
  layer_activation("relu", trainable = T) %>%
  layer_dropout(0.4, trainable = T) %>%
  layer_dense(27, trainable=T) %>%    ## important to adapt to fit the 27 classes in the dataset!
  layer_activation("softmax", trainable=T)
 
 
# this is the model we will train
model <- keras_model(inputs = base_model$input, outputs = predictions)
 
#################
for (layer in base_model$layers)
  layer$trainable <- FALSE
 
summary(model)
###################
model %>% compile(
  loss = "categorical_crossentropy",
  optimizer = optimizer_rmsprop(lr = 0.003, decay = 1e-6),
  metrics = "accuracy"
)
 
hist <- model %>% fit_generator(
  train_generator,
  steps_per_epoch = as.integer(train_samples/batch_size), 
  epochs = 100, 
  validation_data = validation_generator,
  validation_steps = as.integer(validation_samples/batch_size),
  verbose=2
)
###################### Train on augmented: artificially altered data #######
hist_aug <- model %>% fit_generator(
  train_augmented_generator,
  steps_per_epoch = as.integer(train_samples/batch_size), 
  epochs = 50, 
  validation_data = validation_generator,
  validation_steps = as.integer(validation_samples/batch_size),
  verbose=2
)
{% endhighlight %}
 
I trained the model first 100 epochs on the original training data and added 50 epochs on the augmented (altered) dataset.
Plotting the training history shows that training on the original data results in a validation accuracy of ~57% after 50 epochs. After that the neither the training nor the validation accuracy increases any further. Further training the model on the augmented data (red colored lines) leads to another boost in the validation accuracy. 
 
 
![plot of chunk unnamed-chunk-3](/figures/post24/unnamed-chunk-3-1.png)
 
 
To sum up, just changing a couple of lines from the previous setup changes the network's performance significantly. Using a different pre-trained network and adding data augmentation doubles the classification accuracy. 
 
as a sidenote; it appears (to me) that the current DL landscape is very dynamic and fast evolving. It is a safe bet to say that the content of this post is probably outdated in 6 months. Just in the last month the Rstudio/Keras repository has significantly changed;
 
> Excluding merges, 3 authors have pushed 178 commits to master and 178 commits to all branches. On master, 349 files have changed and there have been 5,468 additions and 1,719 deletions.
 
Kudos to the rstudio-team for the great work on the package.
 
 
 
