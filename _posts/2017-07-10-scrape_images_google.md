---
title: 'How to Scrape Images from Google'
author: "flovv"
layout: post
published: true
status: publish
tags: R
draft: no
---
 

 
In my last post, I tried to train a deep neural net to detect brand logos in images. For that, I downloaded the [Flickr27-dataset](http://image.ntua.gr/iva/datasets/flickr_logos), containing 270 images of 27 different brands. 
As this dataset is rather small I turned to google image search and wrote a small R script to download the first 20 images for each search term.
 
In order to use the script you need to download [phantomJS](http://phantomjs.org/) and create a small Javascript file. (See the Gist-file at the end of this post.)
If you have the phantomJS.exe, the small JS-file and the R-file in one folder, you just need to run the following lines to download the images ...
 

{% highlight r %}
gg <- scrapeJSSite(searchTerm = "adidas+logo")
downloadImages(as.character(gg$images), i)
{% endhighlight %}


![exampleLogos](/images/adidas_logos.PNG)
 
Good luck scraping some images from Google.
I will use the script to enhance the brand logo dataset, hopefully improving my model with some better image data.

 <script src="https://gist.github.com/flovv/63e79a3149729b57d0397bb22a589856.js"></script>
 
