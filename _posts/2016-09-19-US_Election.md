---
title: "Analysing the US election using Youtube data"
author: "flovv"
published: true
status: publish
tags: R
draft: no
---

Youtube is one of the channels the candidates for the US election use extensively to promote themself.
Using the public [Youtube API](https://developers.google.com/youtube/v3/docs/standard_parameters) and the [R package tuber](https://cran.r-project.org/web/packages/tuber/tuber.pdf) it is pretty straightforward to create a snapshop of the online discussion and sentiment.


First, I slightly exended the tuber functionality to gather the channel data for both the Hillary Clinton and Donald Trump youtube channel. (All code is posted at the end of this post.)
To do that, I first gathered all video IDs of all posted videos and then run queries to gather the video detail data. 
 
Both candidates have been quite active in their channels, Hillary posted 180 videos, Donald 101. So let's have a quick view on the aggregate stats per video. 
 
![plot of chunk unnamed-chunk-2](/figures/post11/unnamed-chunk-2-1.png)
 
The plots show the mean (dot) for all videos and the standard error of the mean (wings) for both candidates side by side.
 
Here are my take-aways:
* The average number of views per video are pretty similar.
* Hillary leads in terms of likes per video.
* She also leads in the number of dislikes per video.
* Donald has more comments per video.
 
As both; dislikes/likes numbers are higher for Hillary, it might make sense to aggregate them to a "sentiment" measure.
 
![plot of chunk unnamed-chunk-3](/figures/post11/unnamed-chunk-3-1.png)
 
Overall, Hillary has more dislikes than likes, while Donald has a postive share of likes. This looks pretty surprising from a European perspective. (Just from my subjective perspective; even the -supposely neutral- media reports very positively on Hillary and through-out negative on Donald.)
 
Another potential interesting fact might be an engagement rate, measuring the number of "activities" per view. An activity can be either a like, dislike or comment.
 
![plot of chunk unnamed-chunk-4](/figures/post11/unnamed-chunk-4-1.png)
 
Here we find that Donald has roughly 30% more engagement per video view on average. Expressed differently; one out of every tenth view leads to an activity.
 
To sum up; it is great that youtube offers the possibility to easily gather sentiment and activity data for channels and videos. In terms of predictive analytics and election forecasting, I assume the data is pretty meaningless. (At least I hope so :).
 
 <script src="https://gist.github.com/flovv/78f12ce7f534e3c6c2c70f96adab5842.js"></script>
 
 
