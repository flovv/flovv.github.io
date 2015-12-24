---
layout: post
title: The German Data Scientist Job Market
author: flovv
published: true
status: publish
draft: false
tags: R 
---
 
 

 
There are plenty of news stories about the increased importance of (big) data, data analysis, and machine learning for business success. Is this all cheap talk or how big is the job market for data scientist in Germany?
 
To get some facts, I scraped all available job openings from the sites: Monster, Stepstone and Indeed searching for the term "Data Scientist".
 
Altogether I found 137 open positions from ``58`` companies. 
 

```
Platform  N
Indeed 65
Monster 36
Stepstone 36
```
 
As some companies publish the same position on all three platforms, I try to reduce this double counting by removing all positions that are published by the same company in the same city on the same date more than once.
 

{% highlight text %}
## [1] "Number of listed job positions: 80"
{% endhighlight %}
 
That sounds like a rather low number given that there are ~500K open positions in Germany. 
To get a better relative perspective, we can try to compare the number of job postings using different search terms.
 
![plot of chunk unnamed-chunk-4](/figures/post3/unnamed-chunk-4-1.png) 
 
We see that the term "data scientist" returns by far the lowest number of open positions compared to "trader" or "data analyst". If we look at skills;  "SAP ERP" has a factor 4 higher number of positions than "machine learning". 
 
Which companies are currently looking for data scientists?
 
![plot of chunk unnamed-chunk-5](/figures/post3/unnamed-chunk-5-1.png) 
 
The chart does not show a clear pattern in terms of industry category. Automotive (BMW), Energy (EnBW), Retail (Lidl) as well as the technology sector (Altran) are actively looking. By far the most (desperate) aggressively looking company is Deloitte. 
 
Finally, we are interested in the regional distribution of the job positions. Where are the data science clusters?
 
![plot of chunk unnamed-chunk-6](/figures/post3/unnamed-chunk-6-1.png) 
No surprises here, we see clusters in Berlin, Munich, and in south-west Germany. No jobs in east Germany and surprisingly few jobs in North Rhine-Westphalia.
 
Given this analysis, I would conclude that Germany is not (yet) a hot market for data scientist. Both in terms of regional distribution as well as the low absolute and relative number of open positions suggests that the job market is not well developed.
 
In order to measure the changes in popularity, I intent to run this analysis on a regular basis. In case you are looking for a job; have a look over [here.](http://umww.de/karriere/stellenangebote/)
