---
layout: post
title: Image Recognition and Face Detection
author: flovv
published: true
status: publish
draft: false
tags: Image Recognition, R, Emotion Detection
---


Image recognition and face detection has been around for some years. However, usage and adoption was limited due to quality and ease of development. 
With the release of Microsoft's [Project Oxford](https://www.projectoxford.ai), the accessibility to such tools has massively improved. 
Their simple to use REST API provides an excellent opportunity for the average developer to augment their apps with fancy -state of the art- machine learning features.

To give you an example how this looks like:

![Detecting Arnold Schwarzenegger](/figures/arnold.PNG)

The API detects two faces (correct), one male one female (correct), the male face smiles (correct), the female face does not (correct). 
It also provides an age guess for Maria Shriver(36) and Arnold Schwarzenegger(48). As I don't know when the photo was taken, it is hard to judge the accuracy. However, I assume that the guess is too low.

Let's take a look at a more complex example; the German government.

![Detecting German Government](/figures/angie.PNG)

Even though the images are pretty small, and faces are tilted in different ways the API does a good job at identifying faces, emotions, gender and ages.

In case you want to try it yourself, head over to my minimalistic [implementation](https://flovv.shinyapps.io/image-shiny); provide an url of an image (with faces) and hit "classify".

For the interested coder, I compiled a small R package [Roxford](https://github.com/flovv/Roxford) providing access to the API. Please read the short installation guide.

To sum up; giving the complexity of image/face detection, I find it pretty amazing (and scary!) how easy it is. As faces get unique IDs, the API also provides functionality to label individuals in a large image library.



