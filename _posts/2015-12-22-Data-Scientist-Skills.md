---
layout: post
title: Analyzing Job Postings: Data-related Job Requirements 
author: flovv
published: true
status: publish
draft: false
tags: R 
---
 
 

[Previously](http://flovv.github.io/Data-Scientist-Job-Market/) I wrote about the German data science job market. The scripts are easy to extend to a data-related job requirement analysis. As before I scraped the websites Monster, Indeed and Stepstone for certain keywords. Compared to the previous analysis, this time I just look at the number of listed positions. To give an example the keyword search for "SAS" returned 
 

{% highlight text %}
Term Monster Indeed Stepstone Category
SAS     138    804        10 Language
{% endhighlight %}
 
As Monster does return "1000+", for a result-list over 1000, and and Stepstone and Indeed results are highly correlated (r=0.81), in the following, I focus on the "Indeed"-search results.
So, what are the key "data skills"" listed in job market postings in Germany?
 

![plot of chunk unnamed-chunk-3](/figures/post4/unnamed-chunk-3-1.png) 
 
Overall Excel is the big outlier, probably because it is listed in wide variety of job postings.
To drill a bit deeper, I classified the search term by "Category". 
 
![plot of chunk unnamed-chunk-4](/figures/post4/unnamed-chunk-4-1.png) 
 
Due to the type of analysis, I had to omit, R and C ;).
 
![plot of chunk unnamed-chunk-5](/figures/post4/unnamed-chunk-5-1.png) 
 
No surprises in the technology category.
 
![plot of chunk unnamed-chunk-6](/figures/post4/unnamed-chunk-6-1.png) 
 
Quite interesting to see that GIT as caught on in the enterprise world as well. Note to myself, add "SVN" to the list (876 Positions).
 
 
![plot of chunk unnamed-chunk-7](/figures/post4/unnamed-chunk-7-1.png) 
 
Finally, let's look at Buzzwords, apparently I forgot "Big Data" (2014 job posting mentions) in my initial search term list.
 
![plot of chunk unnamed-chunk-8](/figures/post4/unnamed-chunk-8-1.png) 
 
I am curious to see if and how terms change in popularity, as before I intent to run this analysis on a regular basis. And yes, in case you are looking for a job; have a look over [here.](http://umww.de/karriere/stellenangebote/)
