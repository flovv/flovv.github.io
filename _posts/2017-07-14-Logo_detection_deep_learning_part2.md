---
title: 'Deep Learning for Brand Logo Detection - part II'
author: "flovv"
layout: post
published: true
status: publish
tags: R
draft: no
---
 

 
 
A month ago, I started playing with the deep learning framework [Keras for R](https://rstudio.github.io/keras/). As a use-case I picked logo detection in images. While the training of a net worked out fine, the results were mediocre.
(Check out the [full post](http://flovv.github.io/Logo_detection_deep_learning/) to for details on the model and the setup.)
Here is the recap of the outcome; training the model on the  [Flickr27-dataset](http://image.ntua.gr/iva/datasets/flickr_logos), with only 270 images of 27 classes, the validation accuracy came out at 15%.
 

![plot last session](/figures/post21/TrainingHistory.png)

 
However, there are at least two points to remember; the dataset is really small -especially to train a deep neural network, and some brands are hard to recognize, even for the human eye. 
 
In order to improve on the use-case (logo detection in advertisements), I downloaded 20 additional images for each brand logo from google image search using a [rough script](http://flovv.github.io/scrape_images_google/).
 
Equipped with the enhanced dataset, I trained the model again, using the same model setup as in the last post but with slightly different parameters.
 
 
![plot of chunk unnamed-chunk-8](/figures/post22/unnamed-chunk-8-1.png)
 
The effect is visible; the validation accuracy jumps up to 44%.
One thing that I also improved on is a more experimental approach to parameter variation.
 
In the grid search approach, I varied the learning (lr), image size and input filter parameters.
Plotting the validation accuracy over the 200 epochs, we see a high variation in the achieved accuracy. Some parameters combinations do not lead the model to learn information about images, while other variations quite quickly converge to good results.
 

![plot of chunk unnamed-chunk-9](/figures/post22/unnamed-chunk-9-1.png)
 
What I still find confusing is that the parameters seem to have an interaction effect on model convergence and performance.
While the learning rate of 0.001 works well with 32 pixel image sizes, it completely fails in the case of 64 pixel images. The even lower learning rate of 1e-04 (0.0001) at least moves constantly upwards in all cases but much more so in the case of 64 pixel images.
 
In order to improve on the existing model, I plan to further augment the training dataset, and finally use a pre-trained image model.
 
For reference, this is the setup from the previous post:
 
<script src="https://gist.github.com/flovv/3d992cc06d2ab20c4b02e9ea8f8e8892.js"></script>
 
 
 
