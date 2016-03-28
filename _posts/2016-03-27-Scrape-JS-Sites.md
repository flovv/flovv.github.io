---
title: "Web-Scraping JavaScript rendered Sites"
author: "Florian Teschner"
layout: post
output: html_document
published: true
status: publish
tags: R, PhantomJS, Web Scraping, Data Gathering
draft: no
---
 
Gathering data from the web is one of the key tasks in order to generate easy data-driven insights into various topics.
Thanks to the fantastic [Rvest R package](http://blog.rstudio.org/2014/11/24/rvest-easy-web-scraping-with-r/) web scraping is pretty straight forward.
It basically works like this; go to a website, find the right items using the [selector gadget](http://selectorgadget.com/) and plug the element path into your R-code.
There are various, great tutorials on how to do that  (e.g. [1](https://rpubs.com/catlin/rvest), [2](http://francojc.github.io/web-scraping-with-rvest/) ).
 
 
Increasingly, I see that websites, which (un-)consciously make it hard to scrape their site by employing delayed JavaScript-based rendering. In these cases the simple approach of using rvest breaks down. Examples include the Bwin betting site or the German site [busliniensuche](https://www.busliniensuche.de/). Busliniensuche is a site to compare bus travel providers on price, duration and schedule. 
 
As side-note, the German bus travel market has been deregulated in 2013, hence the market is still rapidly developing. I thought it would be interesting to analyse the basic market elements and compare bus travel to the established train provider Deutsche Bahn.
 
As mentioned the site employs some kind of delayed JavaScript rendering. It basically loads the page content with a delay. This would be great if the web site would call a structured JSON endpoint. This is not the case, rather I believe they make it intentionally hard to gather their data in a structured form.
 
##How-to scrape JS-rendered websites?
 
One way to gather the data nonetheless is using a "headless" browser such as [PhantomJS](http://phantomjs.org/).
"A headless browser is a web browser without a graphical user interface. Headless browsers provide automated control of a web page in an environment similar to popular web browsers" (Source: Wikipedia). In order to control PhantomJS from R we need two scripts; a) the PhantomJS file and b) a R file that manipulates and runs PhantomJS. Both files are included at the end of this post.
 
The PhantomJS file has one parameter; the URL that is supposed to be scraped, here placed right at the beginning of the file.
The headless browser loads the URL, waits 2500 milliseconds and saves the file to disk (file-name: 1.html).
The R file changes the URL to the target site, runs the headless browser using a system call and works with the locally saved file in an rvest-like way.
 
So to get started on your own: Download PhantomJS, place the .exe file in your working R-directory and adapt the source code accordingly.
 
Happy Scraping!
 
<script src="https://gist.github.com/flovv/91453712e8a6ba957e63.js"></script>
 
 
 
 
 
 
 
