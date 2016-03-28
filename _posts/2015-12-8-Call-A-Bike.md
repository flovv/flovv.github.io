---
layout: post
title: Analyzing "Call a Bike" bike sharing data.
author: flovv
published: true
status: publish
draft: false
tags: R 
---
 
 
 

 
[Call a bike](www.callabike.de) is a service of the "Deutsche Bahn", providing a rental bikes for short trips similar to [citibikeNYC](https://www.citibikenyc.com/). I used it extensively for some time. Recently I found out that they provide individual trip data trough their API.
I pulled last year's data from the ["CallaBike"-SOAP API](https://github.com/flovv/CallaBike-DataCollect).
 
 
So it looks like I did 403  trips using a Call a Bike in 2014.
 

 
After some data cleaning, we will take an initial glimpse at the data.
 
<img src="/figures/post1/unnamed-chunk-3-1.png" title="plot of chunk unnamed-chunk-3" alt="plot of chunk unnamed-chunk-3" width="850px" />
 
We see a clear pattern of high usage during the week and at commuting hours.
 
![plot of chunk unnamed-chunk-4](/figures/post1/unnamed-chunk-4-1.png) 
 
Commute times are basically the same for the morning/evening trips.
 
![plot of chunk unnamed-chunk-5](/figures/post1/unnamed-chunk-5-1.png) 
 
Commute times did not change over the year. (some ups and downs -but it's basically stable.)
 
According to Google Maps the distance is 4.9km. Which makes a total of 1969.8 KM in 2014, at an average speed of: 20.45.
 

 
As this data indicates starting and ending of commutes, we can calculate the time spend at work.
 
![plot of chunk unnamed-chunk-7](/figures/post1/unnamed-chunk-7-1.png) 
 
Looks like an easy 50.512 hours week (on average). With the time spend at work being quite similar from Monday till Tuesday, and Fridays being more relaxed.
 
![plot of chunk unnamed-chunk-8](/figures/post1/unnamed-chunk-8-1.png) 
 
And finally some regression model (using the fantastic stargazer package) to explain the time spend at work ...
 

{% highlight r %}
lm <- lm(wt~wday+mon+dt.x+dt.y, data=working)
lm1 <- lm(wt~wday+mon, data=working)
 
stargazer(lm1, lm,  type = "html", title="Explaining time spend at work.")
{% endhighlight %}


<table style="text-align:center"><caption><strong>Explaining time spend at work.</strong></caption>
<tr><td colspan="3" style="border-bottom: 1px solid black"></td></tr><tr><td style="text-align:left"></td><td colspan="2"><em>Dependent variable:</em></td></tr>
<tr><td></td><td colspan="2" style="border-bottom: 1px solid black"></td></tr>
<tr><td style="text-align:left"></td><td colspan="2">wt</td></tr>
<tr><td style="text-align:left"></td><td>(1)</td><td>(2)</td></tr>
<tr><td colspan="3" style="border-bottom: 1px solid black"></td></tr><tr><td style="text-align:left">wday2 Di</td><td>0.154</td><td>0.115</td></tr>
<tr><td style="text-align:left"></td><td>(0.188)</td><td>(0.186)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td></tr>
<tr><td style="text-align:left">wday3 Mi</td><td>0.022</td><td>0.004</td></tr>
<tr><td style="text-align:left"></td><td>(0.190)</td><td>(0.186)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td></tr>
<tr><td style="text-align:left">wday4 Do</td><td>0.108</td><td>0.144</td></tr>
<tr><td style="text-align:left"></td><td>(0.204)</td><td>(0.200)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td></tr>
<tr><td style="text-align:left">wday5 Fr</td><td>-1.499<sup>***</sup></td><td>-1.536<sup>***</sup></td></tr>
<tr><td style="text-align:left"></td><td>(0.197)</td><td>(0.193)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td></tr>
<tr><td style="text-align:left">mon02 Feb</td><td>-0.726<sup>**</sup></td><td>-0.775<sup>***</sup></td></tr>
<tr><td style="text-align:left"></td><td>(0.284)</td><td>(0.279)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td></tr>
<tr><td style="text-align:left">mon03 Mrz</td><td>-0.613<sup>**</sup></td><td>-0.680<sup>**</sup></td></tr>
<tr><td style="text-align:left"></td><td>(0.302)</td><td>(0.296)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td></tr>
<tr><td style="text-align:left">mon04 Apr</td><td>-0.842<sup>***</sup></td><td>-0.930<sup>***</sup></td></tr>
<tr><td style="text-align:left"></td><td>(0.261)</td><td>(0.258)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td></tr>
<tr><td style="text-align:left">mon05 Mai</td><td>-1.369<sup>***</sup></td><td>-1.303<sup>***</sup></td></tr>
<tr><td style="text-align:left"></td><td>(0.290)</td><td>(0.286)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td></tr>
<tr><td style="text-align:left">mon06 Jun</td><td>-1.260<sup>***</sup></td><td>-1.262<sup>***</sup></td></tr>
<tr><td style="text-align:left"></td><td>(0.254)</td><td>(0.250)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td></tr>
<tr><td style="text-align:left">mon07 Jul</td><td>-0.858<sup>***</sup></td><td>-0.947<sup>***</sup></td></tr>
<tr><td style="text-align:left"></td><td>(0.234)</td><td>(0.234)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td></tr>
<tr><td style="text-align:left">mon08 Aug</td><td>-0.395</td><td>-0.406</td></tr>
<tr><td style="text-align:left"></td><td>(0.286)</td><td>(0.280)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td></tr>
<tr><td style="text-align:left">mon09 Sep</td><td>-0.600<sup>**</sup></td><td>-0.585<sup>**</sup></td></tr>
<tr><td style="text-align:left"></td><td>(0.296)</td><td>(0.290)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td></tr>
<tr><td style="text-align:left">mon10 Okt</td><td>-0.922<sup>***</sup></td><td>-0.894<sup>***</sup></td></tr>
<tr><td style="text-align:left"></td><td>(0.237)</td><td>(0.233)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td></tr>
<tr><td style="text-align:left">mon11 Nov</td><td>-0.559<sup>**</sup></td><td>-0.656<sup>***</sup></td></tr>
<tr><td style="text-align:left"></td><td>(0.251)</td><td>(0.250)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td></tr>
<tr><td style="text-align:left">dt.x</td><td></td><td>-0.037</td></tr>
<tr><td style="text-align:left"></td><td></td><td>(0.025)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td></tr>
<tr><td style="text-align:left">dt.y</td><td></td><td>-0.041<sup>**</sup></td></tr>
<tr><td style="text-align:left"></td><td></td><td>(0.016)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td></tr>
<tr><td style="text-align:left">Constant</td><td>11.071<sup>***</sup></td><td>12.252<sup>***</sup></td></tr>
<tr><td style="text-align:left"></td><td>(0.213)</td><td>(0.487)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td></tr>
<tr><td colspan="3" style="border-bottom: 1px solid black"></td></tr><tr><td style="text-align:left">Observations</td><td>161</td><td>161</td></tr>
<tr><td style="text-align:left">R<sup>2</sup></td><td>0.491</td><td>0.520</td></tr>
<tr><td style="text-align:left">Adjusted R<sup>2</sup></td><td>0.442</td><td>0.466</td></tr>
<tr><td style="text-align:left">Residual Std. Error</td><td>0.759 (df = 146)</td><td>0.743 (df = 144)</td></tr>
<tr><td style="text-align:left">F Statistic</td><td>10.069<sup>***</sup> (df = 14; 146)</td><td>9.743<sup>***</sup> (df = 16; 144)</td></tr>
<tr><td colspan="3" style="border-bottom: 1px solid black"></td></tr><tr><td style="text-align:left"><em>Note:</em></td><td colspan="2" style="text-align:right"><sup>*</sup>p<0.1; <sup>**</sup>p<0.05; <sup>***</sup>p<0.01</td></tr>
</table>
 
Why is time spend at work negatively correlated with drive time back from work (variable dt.y)?
Finally 3 models to explain the commute time back from work.
 

{% highlight r %}
lm3 <- lm(dt.y~wt, data=working)
lm4 <- lm(dt.y~wt+wday, data=working)
lm5 <- lm(dt.y~wt+wday +mon, data=working)
 
stargazer(lm3,lm4,lm5,  type = "html", title="Explaining commute time back from work.")
{% endhighlight %}


<table style="text-align:center"><caption><strong>Explaining commute time back from work.</strong></caption>
<tr><td colspan="4" style="border-bottom: 1px solid black"></td></tr><tr><td style="text-align:left"></td><td colspan="3"><em>Dependent variable:</em></td></tr>
<tr><td></td><td colspan="3" style="border-bottom: 1px solid black"></td></tr>
<tr><td style="text-align:left"></td><td colspan="3">dt.y</td></tr>
<tr><td style="text-align:left"></td><td>(1)</td><td>(2)</td><td>(3)</td></tr>
<tr><td colspan="4" style="border-bottom: 1px solid black"></td></tr><tr><td style="text-align:left">wt</td><td>-0.558<sup>*</sup></td><td>-0.759<sup>**</sup></td><td>-1.061<sup>**</sup></td></tr>
<tr><td style="text-align:left"></td><td>(0.308)</td><td>(0.381)</td><td>(0.420)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td><td></td></tr>
<tr><td style="text-align:left">wday2 Di</td><td></td><td>-1.534</td><td>-1.367</td></tr>
<tr><td style="text-align:left"></td><td></td><td>(0.968)</td><td>(0.958)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td><td></td></tr>
<tr><td style="text-align:left">wday3 Mi</td><td></td><td>-0.447</td><td>-0.324</td></tr>
<tr><td style="text-align:left"></td><td></td><td>(0.967)</td><td>(0.963)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td><td></td></tr>
<tr><td style="text-align:left">wday4 Do</td><td></td><td>0.276</td><td>0.592</td></tr>
<tr><td style="text-align:left"></td><td></td><td>(1.044)</td><td>(1.034)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td><td></td></tr>
<tr><td style="text-align:left">wday5 Fr</td><td></td><td>-1.438</td><td>-2.103<sup>*</sup></td></tr>
<tr><td style="text-align:left"></td><td></td><td>(1.127)</td><td>(1.182)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td><td></td></tr>
<tr><td style="text-align:left">mon02 Feb</td><td></td><td></td><td>-2.597<sup>*</sup></td></tr>
<tr><td style="text-align:left"></td><td></td><td></td><td>(1.470)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td><td></td></tr>
<tr><td style="text-align:left">mon03 Mrz</td><td></td><td></td><td>-2.163</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td><td>(1.553)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td><td></td></tr>
<tr><td style="text-align:left">mon04 Apr</td><td></td><td></td><td>-3.239<sup>**</sup></td></tr>
<tr><td style="text-align:left"></td><td></td><td></td><td>(1.371)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td><td></td></tr>
<tr><td style="text-align:left">mon05 Mai</td><td></td><td></td><td>-1.090</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td><td>(1.582)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td><td></td></tr>
<tr><td style="text-align:left">mon06 Jun</td><td></td><td></td><td>-2.306<sup>*</sup></td></tr>
<tr><td style="text-align:left"></td><td></td><td></td><td>(1.391)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td><td></td></tr>
<tr><td style="text-align:left">mon07 Jul</td><td></td><td></td><td>-3.666<sup>***</sup></td></tr>
<tr><td style="text-align:left"></td><td></td><td></td><td>(1.242)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td><td></td></tr>
<tr><td style="text-align:left">mon08 Aug</td><td></td><td></td><td>-0.901</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td><td>(1.460)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td><td></td></tr>
<tr><td style="text-align:left">mon09 Sep</td><td></td><td></td><td>-0.042</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td><td>(1.521)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td><td></td></tr>
<tr><td style="text-align:left">mon10 Okt</td><td></td><td></td><td>-1.016</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td><td>(1.265)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td><td></td></tr>
<tr><td style="text-align:left">mon11 Nov</td><td></td><td></td><td>-3.420<sup>***</sup></td></tr>
<tr><td style="text-align:left"></td><td></td><td></td><td>(1.297)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td><td></td></tr>
<tr><td style="text-align:left">Constant</td><td>20.698<sup>***</sup></td><td>23.409<sup>***</sup></td><td>28.390<sup>***</sup></td></tr>
<tr><td style="text-align:left"></td><td>(3.130)</td><td>(4.019)</td><td>(4.771)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td><td></td></tr>
<tr><td colspan="4" style="border-bottom: 1px solid black"></td></tr><tr><td style="text-align:left">Observations</td><td>161</td><td>161</td><td>161</td></tr>
<tr><td style="text-align:left">R<sup>2</sup></td><td>0.020</td><td>0.051</td><td>0.157</td></tr>
<tr><td style="text-align:left">Adjusted R<sup>2</sup></td><td>0.014</td><td>0.020</td><td>0.070</td></tr>
<tr><td style="text-align:left">Residual Std. Error</td><td>3.966 (df = 159)</td><td>3.953 (df = 155)</td><td>3.852 (df = 145)</td></tr>
<tr><td style="text-align:left">F Statistic</td><td>3.271<sup>*</sup> (df = 1; 159)</td><td>1.660 (df = 5; 155)</td><td>1.800<sup>**</sup> (df = 15; 145)</td></tr>
<tr><td colspan="4" style="border-bottom: 1px solid black"></td></tr><tr><td style="text-align:left"><em>Note:</em></td><td colspan="3" style="text-align:right"><sup>*</sup>p<0.1; <sup>**</sup>p<0.05; <sup>***</sup>p<0.01</td></tr>
</table>
 
There are more potential factors that explain drive time as well, such as weather conditions (especially west wind).
 
To sum up; Deutsche Bahn could easily know where I live, where I work, and how much I work. I assume that car sharing data is similar privacy sensitive.
