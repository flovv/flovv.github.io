---
title: "From Image Recognition to Brand Logo Detection"
author: "Florian Teschner"
layout: post
output: html_document
published: true
status: publish
tags: R, Image Detection
draft: no
---
 
 
I previously did a short [review](http://flovv.github.io/Image-Recognition/) on Microsoft's image recognition and face detection API. A couple of weeks ago Google [announced](https://cloudplatform.googleblog.com/2016/02/Google-Cloud-Vision-API-enters-beta-open-to-all-to-try.html) their vision API providing some similar features.
Even though there is no R package or code to dive into this API and their API documentation is rather sparse, I thought it could be fun and inspiring to give it a try.



In general, it works as Microsoft's API, provide an image, select which kind of analysis you like and receive a (well) coded response.
 
To give you an idea how that looks like for "face detection".
Let's use the same Arnold Schwarzenegger photo.
 
![Face detection example](/figures/arnold_wife.jpg)
 
For the provided image, one receives a table with the following columns:  "boundingPoly"           "fdBoundingPoly"         "landmarks"              "rollAngle"              "panAngle"               "tiltAngle"              "detectionConfidence"    "landmarkingConfidence"  "joyLikelihood"          "sorrowLikelihood"       "angerLikelihood"        "surpriseLikelihood"    "underExposedLikelihood" "blurredLikelihood"      "headwearLikelihood".
 
with 2 rows. One for Arnold, one for his wife. The following sub-setted table shows the results:
 
| tiltAngle   | detectionConfidence | landmarkingConfidence | joyLikelihood | sorrowLikelihood |
|-------------|---------------------|-----------------------|---------------|------------------|
| -12,861,863 | 0,99996805          | 0,73490918            | VERY_LIKELY   | VERY_UNLIKELY    |
| -0,25818413 | 0,99998611          | 0,76625621            | VERY_UNLIKELY | VERY_UNLIKELY    |
 
In comparison to Microsoft's API: Not very impressive. 
So let's try something else: The API also provides access to a functionality called logo detection.
 
![brand recognition example](/figures/brandlogos.png)
Providing the image above, with parameter of 40 results yields the following response:
 
| description     | score      |
|-----------------|------------|
| Walmart         | 0.50977039 |
| Coca Cola Shoes | 0.48768377 |
| Sainsburys      | 0.47962409 |
| IKEA            | 0.45845419 |
| Kellogg's       | 0.454154   |
| Disney          | 0.44845602 |
| Guardian Co Uk  | 0.42800492 |
| Nintendo        | 0.41539443 |
| Heinz           | 0.41503713 |
 
 
Interesting! The results show that some brand logos are correctly detected. However most logos go unrecognized, even their own brands Google and the YouTube are not returned. I tried some other other images with different brands and the results are mixed at best. As a quick note: Google's Vision API is not on par with human recognition.
 
Let's finally test their OCR capabilities by providing the same image of brand logos.
 
As a result the API returns:
 
"Tube, Sainsbury's, Royal Mail, Colgate 4, You, HEINZ BBC, VISA, PEPSI, MARKS, SPENCER, Vodafone, Dove, amazon YAHOO!, twitter, Nintendo, WIKIPEDIA, ISNEp r BlackBerry, Google IKKEA, C2, facebook, Oxfam, BTe, ER the, market, com, dyson, Microsoft, compare, TESCO John Lewis, Walmart, Save money. Live better., AMSUN, orange, CHANEL, SONY, guardian, SkV, MasterCard, BARCLAYS, "
 
That looks pretty impressive to me. Even though all brands use their own typo and colors, most brand names are well returned.
 
In case you want to try it yourself, please see the commented R-code.
Compared to Microsoft, you need to provide billing information even though the first 1000 API calls are supposed to be free...
 
<script src="https://gist.github.com/flovv/524f5bf2f465e5a4da25.js"></script>
 
 
 
 
