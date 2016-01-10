---
layout: post
title: Who is going down? Bundesliga Betting Odds
author: flovv
published: true
status: publish
draft: false
tags: R 
---
 
 

 
An essential part of the typical office talk in Germany is about soccer and the Bundesliga. One of the current key questions is; which team will be relegated. The two local teams (SV Darmstadt and Eintracht Frankfurt) are (hot) candidates. 
 
While I love the banter, let's be data-driven and have a close look at the current odds.
I wrote a small [R-script](https://gist.github.com/flovv/461dc6a505b21eda10a9) to get the data from bookies on this topic from this [site](http://www.wettfreunde.net/bundesliga-absteiger-wetten/).


The probability of being relegated is given by P=1/odds. To exemplify this; on the 20th of December 2015, if you placed 1€ on Darmstadt and they go down, you would have gotten 2.25€ back. That equates to an implied probability of roughly 1/2.25=44%.
 
There is at least one issue with this simple calculation; the bookies want to make a cut and add a (small) fee to the odds. How can we take the fee out of the probability? We need to normalize all odds by the number of teams being relegated.
We know that at least two teams go down directly, the team placed on the third to last position plays the direct relegation (two games against the third team in the second league). As the last few relegation games all went in favour for the team in the first league, let's say that just two teams go down.
Side-note; given this prior the simple betting odds are quite inflated (or from another perceptive; the expected return for the bookies on these bets is over 20%).
So here it is; Darmstadt has a chance of 34% of going down, and Frankfurt a chance of 79% of staying in the league.
 
![plot of chunk unnamed-chunk-2](/figures/post6/unnamed-chunk-2-1.png) 
 
On the 9th of January I gathered the data again to see if things changed in the last weeks. I expected to see no real changes. 
 
![plot of chunk unnamed-chunk-3](/figures/post6/unnamed-chunk-3-1.png) 
 
It seems that the 3 additional players that Frankfurt bought in the last few weeks, significantly lowered their probability of going down. As all odds are linked, Darmstadt, with no changes to their team is now given a 36% probability of relegation.
 
I am excited to see how things play out.
 
