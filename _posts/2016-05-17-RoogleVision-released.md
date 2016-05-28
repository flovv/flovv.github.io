---
layout: post
title: RoogleVision released - a Package for Image Recognition 
author: flovv
published: true
status: publish
draft: false
tags: R
---

First to the naming; it basically is an arbitrary condensation of "R + Google Cloud Vision API". I wonder why google chooses to mix google with vision. 
In my opinion it sounds pretty much like "to goggle with vision", which makes limited sense.
For the functionality; the package enables convenient Image Recognition, Object Detection, and OCR using the Google's Cloud Vision API.
More precisely the user can pick between the following image recognition modes: FACE_DETECTION, LANDMARK_DETECTION, LOGO_DETECTION, LABEL_DETECTION, TEXT_DETECTION.
Without further undo, here is how you get started:


## Install
```
#install.packages("devtools")
require(devtools)
install_github("flovv/RoogleVision")
```

## Get API Keys
* Visit [Google's developer console](https://console.cloud.google.com)
* sign in
* create a project, enable billing and enable 'Google Cloud Vision API' 
* go to credentials, create an OAuth 2.0 client ID; copy client_id and client_secret from JSON file.


## Usage

```
require(RoogleVision)
#devtools::install_github("MarkEdmondson1234/googleAuthR")
require(googleAuthR)


### plugin your credentials
options("googleAuthR.client_id" = "xxx.apps.googleusercontent.com")
options("googleAuthR.client_secret" = "")

## use the fantastic Google Auth R package
### define scope!
options("googleAuthR.scopes.selected" = c("https://www.googleapis.com/auth/cloud-platform"))
googleAuthR::gar_auth()

############
#Basic: you can provide both, local as well as online images:
o <- getGoogleVisionResponse("brandlogos.png")
o <- getGoogleVisionResponse(imagePath="brandlogos.png", feature="LOGO_DETECTION", numResults=4)
getGoogleVisionResponse("https://media-cdn.tripadvisor.com/media/photo-s/02/6b/c2/19/filename-48842881-jpg.jpg", feature="LANDMARK_DETECTION")


### FEATURES
# with the parameter 'feature' you can define which type of analysis you want. Results differ by feature-type.
# The default is set to 'LABEL_DETECTION' but you can choose one out of: 
FACE_DETECTION, LANDMARK_DETECTION, LOGO_DETECTION, LABEL_DETECTION, TEXT_DETECTION
```
Previously, I created a R/shiny [demo](https://flovv.shinyapps.io/gVision-shiny/) and blog posts [1](http://flovv.github.io/Image-Recognition-Google-Vision/) 
and [2](http://flovv.github.io/Brand-Logos/) detailing some of the output.

To give you a final example; this is return of the LANDMARK_DETECTION-call.
![Notre Dame](https://media-cdn.tripadvisor.com/media/photo-s/02/6b/c2/19/filename-48842881-jpg.jpg)

| description         | score     |
|---------------------|-----------|
| Notre Dame de Paris | 0.9245162 |
| Paris               | 0.8143099 |


