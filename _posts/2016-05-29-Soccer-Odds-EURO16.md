---
layout: post
title: Arbitrage in Euro'16 soccer odds?
author: flovv
published: true
status: publish
draft: false
tags: R 
---
 
 

With the Euro'16 coming up in 2 weeks, I thought it would be great to look up the odds for each team.
Using a small [R-Script](https://gist.github.com/flovv/461dc6a505b21eda10a9), I got the data from this [site](http://www.wettfreunde.net/em-2016-quoten/).
As [previously](http://flovv.github.io/Soccer-Odds/) discussed, I cleaned the data (calculate the probability from the odds and then normalize the probability to account for the bookmaker's revenue).


Here it is: Germany has an 22% chance of winning the cup, followed by France and Spain.
<iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~flovv/11.embed"></iframe>

Wow, that looks too good to be true. A couple of days ago, I saw much better odds for France over at [predictwise.com](http://www.predictwise.com).
So let's see how the odds change, if we look on the website of the same bookmaker in another country.
Here is the data collected from Italy:

<iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~flovv/10.embed"></iframe>

It seems there is a bit of a home bias at work. German bettors expect Germany to win with a higher probability than bettors in other countries do.
See the full table:

| Teams          | Odds from Spain | Odds from UK | Odds from Italy | Odds from Germany |
|----------------|-----------------|--------------|-----------------|-------------------|
| France         | 20.6%           | 23.5%        | 22.3%           | 19.6%             |
| Germany        | 19.5%           | 20.1%        | 19.8%           | 22.1%             |
| Spain          | 13.0%           | 12.8%        | 13.7%           | 14.7%             |
| England        | 9.2%            | 8.3%         | 9.4%            | 7.4%              |
| Belgium        | 8.8%            | 6.4%         | 7.4%            | 7.4%              |
| Italy          | 5.9%            | 4.4%         | 5.2%            | 5.2%              |
| Portugal       | 4.2%            | 3.5%         | 4.2%            | 5.2%              |
| Croatia        | 3.0%            | 2.5%         | 3.1%            | 3.0%              |
| Austria        | 2.6%            | 1.8%         | 2.2%            | 2.6%              |
| Poland         | 1.7%            | 1.4%         | 1.7%            | 1.3%              |
| Switzerland    | 1.3%            | 1.1%         | 1.3%            | 1.3%              |
| Russia         | 1.3%            | 1.1%         | 1.3%            | 1.3%              |
| Wales          | 1.3%            | 0.9%         | 1.1%            | 1.7%              |
| Turkey         | 1.1%            | 0.9%         | 1.1%            | 1.1%              |
| Sweden         | 1.1%            | 0.7%         | 0.9%            | 0.9%              |
| Ukraine        | 1.1%            | 0.7%         | 0.9%            | 0.9%              |
| Iceland        | 0.9%            | 0.7%         | 0.9%            | 1.1%              |
| Czech Republic | 0.9%            | 0.7%         | 0.9%            | 1.1%              |
| Rep of Ireland | 0.6%            | 0.5%         | 0.6%            | 0.6%              |
| Slovakia       | 0.6%            | 0.5%         | 0.6%            | 0.6%              |
| Romania        | 0.6%            | 0.4%         | 0.5%            | 0.4%              |
| Hungary        | 0.3%            | 0.2%         | 0.3%            | 0.3%              |
| N Ireland      | 0.3%            | 0.2%         | 0.3%            | 0.2%              |
| Albania        | 0.2%            | 0.1%         | 0.2%            | 0.2%              |
 
Side-note: all data comes from bet365.com except for Spain (bwin.com) gathered on 29th of May.

There is quite some variation in the odds; England for example is given the probability of 9.4% in Italy and only 7.4% in Germany.
So why not arbitrage the differences away? Well bookies make a decent cut of roughly 30%. 
If you buy a full portfolio (all teams), you have to invest ~1.3 Euro to gain one Euro. Hence the differences between countries are not big enough to make a case. 
