---
layout: post
title: Analyzing Job Postings; A Cross Country Comparison 
author: flovv
published: true
status: publish
draft: false
tags: R 
---
 
 

 
Writing my first [post](http://flovv.github.io/Data-Scientist-Job-Market/) about the German data scientist job market, I was surprised to find such a low number of open positions.
The [scripts](https://github.com/flovv/Data-Science-Job-Market) are easy to extend to a cross-country comparison. To simplify the analysis, this time I focused on the Indeed website only. 
 
As a baseline, I scanned the websites for the number of open positions which contain the term "Excel".
 
 
![plot of chunk unnamed-chunk-2](/figures/post5/unnamed-chunk-2-1.png) 
 
We see a higher number of results for both search terms in the UK. 
The number of results are highly correlated (r=0.98)
 
![plot of chunk unnamed-chunk-3](/figures/post5/unnamed-chunk-3-1.png) 
 
This is confirmed by looking at a scatter-chart. However, we see that Germany is already below the linear regression line (red).
 

{% highlight r %}
fit <- lm(Positions.y ~Positions.x,data=m)
predict(fit, newdata = data.frame(Positions.x=c(28279)))
{% endhighlight %}



{% highlight text %}
##        1 
## 261.1218
{% endhighlight %}
 
If we expect a linear relationship between both numbers and plug in the number of open "Excel"-Positions (28279), we see that Germany places well below the expected number (261). Moreover, the difference to the current number is with 74 missing positions quite big.
 
Another way to illustrate this missing number of positions is by charting the ratio between open Excel and Data Science positions.
In the Netherlands, for 100 "Excel"-results, we get 2 "Data Scientist"" results.
 
![plot of chunk unnamed-chunk-5](/figures/post5/unnamed-chunk-5-1.png) 
 
Germany ranks way at the bottom. Even France, usually a country which is not known to easily adapt English words (looking at you "ordinateur"), outranks  Germany in terms of relative number of open Data Scientist positions.
To sum up, the first impression that there are actually relatively few data jobs in Germany is supported with this analysis. It looks like there is media/press hype about data and analytics in Germany which does not manifest when looking the current job market.
 
Given the importance of data and analytics, let's hope German HR is catching up soon.
 
I am curious to see if and how terms change in popularity, as before I intent to run this analysis on a regular basis. And finally, in case you are looking for a job; have a look over [here.](http://umww.de/karriere/stellenangebote/)
