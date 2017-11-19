---
title: 'Content Evaluation: What is the Value of Social Media?'  
author: "flovv"
layout: post
published: true
status: publish
tags: R
draft: no
---
 
 
As most bloggers, I do check my analytics stats on a regular basis. What I do not really look at is social shares. For most blog posts traffic follows a clear pattern; 2 days of increased traffic, followed by a steady decrease to the base traffic volume. 
The amplitude varies massively depending on how interesting/viral the post was. However, in the long-term this virality does not drive the majority of the traffic but rather the search ranking of individual posts, as 80% of the base traffic comes through organic search results. 
 
There is plenty of discussion on the value of a share/like with very different take-aways.
I thought it would be great to analyse if social shares do increase my traffic.
 
In addition, I realized that it is pretty easy to get the number of Facebook and LinkedIn shares for each of my blog posts from r-bloggers. (Please find the script at the end of the post.)
 
For the analysis, I scraped the social share numbers and merged them with my Google Analytics stats.
In order to compare the traffic between blog posts, I normalise the total traffic per post by number of days the post is online.
 
To get a first picture of the data we can plot the normalized traffic over the number of shares (both by blog post).
 
![plot of chunk unnamed-chunk-3](/figures/post27/unnamed-chunk-3-1.png)
 
Next, we can analyse how the variables are correlated. I included the total pageviews as reference.
 

{% highlight r %}
M <- cor(dff[,c("shares", "linkedIn1", "pageviews", "normalizedPageViews")])
corrplot.mixed(M)
{% endhighlight %}

![plot of chunk unnamed-chunk-4](/figures/post27/unnamed-chunk-4-1.png)
 
We see that LinkedIn and Facebook shares are positively correlated with r=.56 and that the correlation between shares and normalized pageviews is the same.
When looking at the total page views we see that have a much lower correlation with shares both from facebook as well as Linkedin. 
 
To determine the "value" of social media to drive traffic volume, we can regress the number of social shares on the normalized traffic numbers. 
 

{% highlight r %}
dff$DaysOnline <- as.numeric(Sys.Date()-dff$Date)
fit1 <- lm(normalizedPageViews ~ shares + linkedIn1, data=dff)
fit2 <- lm(normalizedPageViews ~ shares + linkedIn1, data=dff)
fit3 <- lm(normalizedPageViews ~ shares + linkedIn1+ DaysOnline, data=dff)
 
stargazer(fit1, fit2, fit3, type = "html" ,title = "The value of shares for daily traffic")
{% endhighlight %}

<table style="text-align:center"><caption><strong>The value of shares for daily traffic</strong></caption><tr><td colspan="4" style="border-bottom: 1px solid black"></td></tr><tr><td style="text-align:left"></td><td colspan="3"><em>Dependent variable:</em></td></tr>
<tr><td></td><td colspan="3" style="border-bottom: 1px solid black"></td></tr>
<tr><td style="text-align:left"></td><td colspan="3">normalizedPageViews</td></tr>
<tr><td style="text-align:left"></td><td>(1)</td><td>(2)</td><td>(3)</td></tr>
<tr><td colspan="4" style="border-bottom: 1px solid black"></td></tr><tr><td style="text-align:left">shares</td><td>0.043<sup>**</sup></td><td>0.043<sup>**</sup></td><td>0.026</td></tr>
<tr><td style="text-align:left"></td><td>(0.017)</td><td>(0.017)</td><td>(0.022)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td><td></td></tr>
<tr><td style="text-align:left">linkedIn1</td><td>0.138</td><td>0.138</td><td>0.101</td></tr>
<tr><td style="text-align:left"></td><td>(0.126)</td><td>(0.126)</td><td>(0.129)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td><td></td></tr><tr><td style="text-align:left">DaysOnline</td><td></td><td></td><td>-0.008</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td><td>(0.006)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td><td></td></tr>
<tr><td style="text-align:left">Constant</td><td>1.462</td><td>1.462</td><td>5.744</td></tr>
<tr><td style="text-align:left"></td><td>(1.114)</td><td>(1.114)</td><td>(3.571)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td><td></td></tr>
<tr><td colspan="4" style="border-bottom: 1px solid black"></td></tr><tr><td style="text-align:left">Observations</td><td>33</td><td>33</td><td>33</td></tr>
<tr><td style="text-align:left">R<sup>2</sup></td><td>0.341</td><td>0.341</td><td>0.375</td></tr>
<tr><td style="text-align:left">Adjusted R<sup>2</sup></td><td>0.297</td><td>0.297</td><td>0.310</td></tr><tr><td style="text-align:left">Residual Std. Error</td><td>5.042 (df = 30)</td><td>5.042 (df = 30)</td><td>4.994 (df = 29)</td></tr>
<tr><td style="text-align:left">F Statistic</td><td>7.755<sup>***</sup> (df = 2; 30)</td><td>7.755<sup>***</sup> (df = 2; 30)</td><td>5.802<sup>***</sup> (df = 3; 29)</td></tr>
<tr><td colspan="4" style="border-bottom: 1px solid black"></td></tr><tr><td style="text-align:left"><em>Note:</em></td><td colspan="3" style="text-align:right"><sup>*</sup>p<0.1; <sup>**</sup>p<0.05; <sup>***</sup>p<0.01</td></tr></table>


As in the correlation plot, we see that highly shared posts have more daily visits. If you take the estimates at face value one can also state that a linkedIn share is worth 3 times a facebook share in terms of additional traffic.
In the last regression I also included a variable (DaysOnline) to capture my learning effect. The longer post is online the lower is the daily traffic. (e.g. posts published when I started blogging).
 
While writing this post, I realized that the script can also be used to analyse;
* which topics are highly shared 
* which authors are popular
* how social sharing changed over time 
on r-bloggers.
 
Have fun!

<script src="https://gist.github.com/flovv/7fda29822024d5c07b4043fd6195c544.js"></script>
 
 
 
 
 
 
