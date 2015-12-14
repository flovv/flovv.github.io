---
layout: post
title: Analyzing "Brand Ticker" data.
author: flovv
published: true
status: publish
draft: false
tags: R 
---
 
 
 

 
[The Brand Ticker](http://www.thebrandticker.com) provides brand specific marketing data. On a day to day basis they list the brand value and top 3 associations gathered from news mentions and social data. They provide no documentation on how they process the data or which sources they use. 
 
Here is short look at their service.
I pulled half a year's data in irregular intervals from their API using a small r-script. See this [GIST](https://gist.github.com/flovv/30a74925958908372e98)  
 
Due to some recent attention we start the analysis by looking at the Volkswagen (VW) data.
 

{% highlight text %}
##    attr_1 attr_1_flag      attr_2 attr_2_flag   attr_3 attr_3_flag
## 25  liked       green complicated         red advanced       green
## 26  faked         red   polluting         red  secured       green
## 27  liked       green complicated         red advanced       green
## 28  faked         red   polluting         red  secured       green
## 29  faked         red   polluting         red  secured       green
## 30  faked         red   polluting         red  secured       green
##      change    value         brand brandId       Date
## 25 2.957404 5109.233 Volkswagen VW     439 2015-11-25
## 26 3.678028 5389.976 Volkswagen VW     439 2015-11-27
## 27 7.359091 6147.744 Volkswagen VW     439 2015-12-02
## 28 7.359091 6147.744 Volkswagen VW     439 2015-12-02
## 29 2.977252 6574.628 Volkswagen VW     439 2015-12-08
## 30 2.977252 6574.628 Volkswagen VW     439 2015-12-08
{% endhighlight %}
 
The first 6 columns are the brand associations, gathered from news data, or a survey (who knows...?). It's helpful that the flag attributes already label the associations as positiv/negativ (red or green). The value column is the so-called "Brand Value".
 
 
![plot of chunk unnamed-chunk-3](/figures/post2/unnamed-chunk-3-1.png) 
 
In order to see if the brand value is related to associations, I color-code the brand value with the top (attr_1) association.
 
 
![plot of chunk unnamed-chunk-4](/figures/post2/unnamed-chunk-4-1.png) 
 
For the diesel-gate event, we see that the top association is a rather lagging than predicting variable. The brand value massively drops, the association remains "secure". The association change from "secure" to "polluting" happens  with a distinct lag.
In order to visualize the second and third association, we can use a simple histogram of mentions in the data set.
 
<img src="/figures/post2/unnamed-chunk-5-1.png" title="plot of chunk unnamed-chunk-5" alt="plot of chunk unnamed-chunk-5" width="900px" />
 
As before, we can add all associations to the brand value time series.
 
<img src="/figures/post2/unnamed-chunk-6-1.png" title="plot of chunk unnamed-chunk-6" alt="plot of chunk unnamed-chunk-6" width="900px" />
 
In order to unterstand the brand value variable it bit better, I scraped VW's stock market data from Yahoo. See this [GIST](https://gist.github.com/flovv/50ed4495911576040e34)   
 
![plot of chunk unnamed-chunk-7](/figures/post2/unnamed-chunk-7-1.png) 
 
Apparently brand value is just a linear function of stock market data and can be regarded as  more or less identical. 
 

<table style="text-align:center"><caption><strong>Brandtickers Brand value has a direct relation to VW's stock price</strong></caption>
<tr><td colspan="3" style="border-bottom: 1px solid black"></td></tr><tr><td style="text-align:left"></td><td colspan="2"><em>Dependent variable:</em></td></tr>
<tr><td></td><td colspan="2" style="border-bottom: 1px solid black"></td></tr>
<tr><td style="text-align:left"></td><td colspan="2">value</td></tr>
<tr><td style="text-align:left"></td><td>(1)</td><td>(2)</td></tr>
<tr><td colspan="3" style="border-bottom: 1px solid black"></td></tr><tr><td style="text-align:left">Close</td><td>365.498<sup>***</sup></td><td>273.071<sup>***</sup></td></tr>
<tr><td style="text-align:left"></td><td>(22.435)</td><td>(6.069)</td></tr>
<tr><td style="text-align:left"></td><td></td><td></td></tr>
<tr><td style="text-align:left">Constant</td><td>-3,057.386<sup>***</sup></td><td></td></tr>
<tr><td style="text-align:left"></td><td>(724.722)</td><td></td></tr>
<tr><td style="text-align:left"></td><td></td><td></td></tr>
<tr><td colspan="3" style="border-bottom: 1px solid black"></td></tr><tr><td style="text-align:left">Observations</td><td>30</td><td>30</td></tr>
<tr><td style="text-align:left">R<sup>2</sup></td><td>0.905</td><td>0.986</td></tr>
<tr><td style="text-align:left">Adjusted R<sup>2</sup></td><td>0.901</td><td>0.985</td></tr>
<tr><td style="text-align:left">Residual Std. Error</td><td>854.555 (df = 28)</td><td>1,073.895 (df = 29)</td></tr>
<tr><td style="text-align:left">F Statistic</td><td>265.414<sup>***</sup> (df = 1; 28)</td><td>2,024.172<sup>***</sup> (df = 1; 29)</td></tr>
<tr><td colspan="3" style="border-bottom: 1px solid black"></td></tr><tr><td style="text-align:left"><em>Note:</em></td><td colspan="2" style="text-align:right"><sup>*</sup>p<0.1; <sup>**</sup>p<0.05; <sup>***</sup>p<0.01</td></tr>
</table>
 
 
I find it quite misleading to speak of "Brand Value" and taking stock market data as a reference. Plenty of factors (economic condictions, production costs, ...) have an impact on stock prices, while the value of a brand is related to subjective perceptions. 
 
