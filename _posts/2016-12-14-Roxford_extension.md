---
title: "Image description with Microsoft's Cognitive Services and R"
author: "flovv"
layout: post
published: true
status: publish
tags: R
draft: no
---
 

 
 
A while back, I created the small package [Roxford](http://flovv.github.io/Image-Recognition/) to access Microsoft's Cognitive Services API in order to easily recognize objects in images.
Back then Microsoft called the service "Project Oxford", hence the name "Roxford". Since then Microsoft extended their API to include image tagging, description and celebrity detection. 
In the following post, I will try to illustrate the functionality and how it is called through the package. To install the package, just follow the [guide](https://github.com/flovv/Roxford).


After installing the package, usage is (hopefully) straight forward. Set your API key and call the function, either by providing a path to a local image or to a remote image url. If you use remote images, use functions which end with "URL".
The following code exemplifies this for the "getDescription" for an image function.
 

{% highlight r %}
res <- Roxford::getDescriptionResponseURL(url, visionKey, maxCandidates = 4)
{% endhighlight %}
 
![plot of chunk unnamed-chunk-3](/figures/post16/unnamed-chunk-3-1.png)
 
All the text in the chart is provided in the API response. First the title is the "caption text" and the confidence score attached to it. Additionally, the call returns a list of tags associated to the image. Both the tags and the caption look pretty good to me.
 
Compared to the previous version, the updated API offers a "tagging" service.
While the tags in the image above are pretty extensive, this call returns just one categorization.
 

{% highlight r %}
resTag <- Roxford::getTaggingResponseURL(url, visionKey)
resTag["tags", ]$name
## [1] "person"
{% endhighlight %}


{% highlight text %}
resTag["tags", ]$confidence
## [1] "0,999826610088348"
{% endhighlight %}
 
Finally, the last extension is the possibility to call domain-specific models.
In a a first step the API returns a list of what domain models are available (currently just 'celebrities').  
 

{% highlight text %}
##                  name categories
## models    celebrities    people_
## requestId        <NA>       <NA>
{% endhighlight %}
 
In a second step, one can provide the image resource and the model specification ('celebrities') to get a classification of the provided image.
 
![plot of chunk unnamed-chunk-6](/figures/post16/unnamed-chunk-6-1.png)
 
Again, all text in the chart is returned by the API. I wonder if Microsoft plans to open up their backend in order for others to plugin in this domain-specific modelling aspect. I could imagine that there are developers who would love to share their models through a centralized market place.
Overall I find the API quite convenient to work with.
Happy classification :).
 
