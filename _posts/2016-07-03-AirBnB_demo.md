---
title: "A look at AirBnB demopgraphics"
author: flovv
published: true
status: publish
draft: false
tags: R 
---
 

Once in a while I use AirBnB. There are a couple of features that I (intuitively) use to judge if an apartment is save to book; ratings, images of the flat and the user avatar. Apparently, these avatars play an important part in the overall service and usage of AirBnB.
A recent [study](http://thenextweb.com/insider/2016/04/26/attractive-airbnb-hosts-are-more-likely-to-get-bookings/#gref) finds that "Attractive Airbnb hosts are more likely to get bookings, even with bad reviews".


With the easy availability of image recognition services, even the everyday researcher can do a small analysis.
A [friend](http://www.timmteubner.de/) provided a small sample of 200 AirBnB avatars which I ran through [Microsoft's face recognition API](http://flovv.github.io/Image-Recognition/).
 
![Face detection example](/figures/image_collection.png)
 
Of the 200 images, 117 were labeled as faces, for these faces the API provides a couple of features:
e.g. age, gender, smile detection, mustache detection and the size of the face.
 
So let's have a look at the aggregate demographics of our (probably unrepresentative) sample of AirBnB hosts. 62% are male, with an average age of 37.5. 
The age distribution is shifted upwards for the male population.
 
![plot of chunk unnamed-chunk-2](/figures/post10/unnamed-chunk-2-1.png)
 
The difference is substantial and significant. Male AirBnB hosts are almost 7 years older than female hosts.
 
![plot of chunk unnamed-chunk-3](/figures/post10/unnamed-chunk-3-1.png)
 
Let's have a look at the emotion expressed in the avatars. Are female avatars more likely to smile?
 
![plot of chunk unnamed-chunk-4](/figures/post10/unnamed-chunk-4-1.png)
 
Contrary to my base assumption, this is not the case. 
Another feature that might be worth exploring is the size of the face rectangle. It is basically a measure of the face to image size ratio. 
 
![plot of chunk unnamed-chunk-5](/figures/post10/unnamed-chunk-5-1.png)
 
It seems that guys are more likely to use close-ups as avatars. Even though this study is very limited in the features and sample size used, I can already see the potential of image recognition as an implicit data source to improve e-commerce services. 
I wonder if and how AirBnB uses face detection. 

<script src="https://gist.github.com/flovv/5ec358c17c4e4a735f5e4b39f3435dea.js"></script>
 
 
 
 
