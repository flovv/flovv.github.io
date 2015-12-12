---
layout: post
title: Digital Data Leakage
---

## Introduction
We live in a connected world. No matter which website we visit, which app we use and which people we interact with: We leave a digital footprint.  
Day by day, there is more behavioral data created and it often makes using the internet more comfortable. Here is an example: Netflix concludes from user data which movies we like and subsequently optimizes which videos are suggested to us individually.
Google individualizes search results and advertisers measure the effect of ad impressions on purchase probability. Tracking data helps companies to better understand consumer behavior and to customize their services.
User behavior on websites and platforms is mostly captured via tracking pixels (cookies). A “pixel” or “TAG” is a small piece of software that is loaded in the background of a website to collect information (undetected), about users and their behavior on the website.
But sometimes these TAGs are forgotten and live on as tiny pieces of code somewhere in the depths of a website. In this case they keep collecting data – mostly unwittingly to the website owner. 
The control over these code snippets is often spread over multiple divisions and partners of a company (e.g. IT, website UX (creative agency), marketing (media agency) and customer relations (social media agency)). As a consequence, nobody is really responsible. But especially in this area it is important to know who is actually getting which information. Here is an example in the fashion industry: After the end of a joint campaign, an external data provider keeps collecting data about the website’s users (who are attractive for other brands) via the campaign TAG that was implemented to measure effects of the campaign. Without the website holder’s knowledge, these user profiles could be sold e.g. to a premium timepiece company or even to a competitor from the fashion industry to make a competitor’s campaign more efficient.
The sad truth is that many companies neither know that many of these (external) code snippets still lie dormant on their websites nor for which party these TAGs collect data and which value this data could have for both the own company’s marketing and for other companies.
Companies often lack a holistic, deliberately implemented data strategy, although answers to such questions are decisive for companies from many perspectives. 

## How does the German tagging landscape look like?
For my job, I examined the 350 most important German websites over the past couple weeks to learn more about the current tagging landscape.
The analysis shows that the average German website has 16 external pixels implemented with the range being very wide reaching from almost 40 pixels in the tourism industry to just 2 in the pharmaceutical industry. As a general pattern we see that industries dealing with sensitive data (e.g. banks and insurances) tend to have fewer pixels on their websites.
The distribution of single providers is interesting as well. Among analytics providers there is a clear order of use: Google Analytics can be found on 47% of all websites, followed by Adobe with Omniture (11%), Webtrekk (10%) and Piwik (4%) take 3rd and 4th position.
 
## Utilization of pixel data
Providers whose pixels/TAGs are implemented on multiple websites can track user behavior across the different websites to create detailed user profiles. These profile segments are very useful from the advertiser’s perspective because they enable them to address members of their target group in a favorable environment. 
But website operators are often left out when it comes to monetize the data. From the website operators’ perspective it is therefore important to check whether data from external providers is used for such profiling and if so, how much their data is worth in this pool of profiles.
Current rates for user profile data depend on the quality of the data and range from 1€ to 5€ CPM based on impressions. For a website with a lot of traffic and detailed user profiles, the value of these data can add up to 100.000€ per month.

## Consequences for security & e-commerce
Another problem occurs in the area of website security and user experience. As soon as unsafe pixels (http connection) are implemented into “safe” websites (https connection), the whole online traffic is no longer encoded. Some browsers (e.g. Internet Explorer) display security warnings in such cases. 
These security warnings interfere with the user and can lead to user aborting his/her online purchase. Thus, the implementation of unsafe TAGs has a direct effect on the user experience and thereby also an indirect effect on conversion rates or sales. Most TAGs are invocable as both https and http TAGs.

## Design of a deliberate data strategy:
The first step is to get an overview of the owned platforms and to analyze the pixels that are used on them. A possible platform to do that can be found here: (Link to dcd15.com). 
The second step is the ongoing control of the implemented pixels and their regular check regarding necessity and use. So-called “TAG Management Systems” offered by Google and Adobe help to do that. These systems are especially useful to avoid time consuming agreements between IT and marketing. It is not surprising that such systems are widely spread already, they can be found on 35% of all websites. But companies using such systems are not fundamentally protected against mistakes.
<img src="https://raw.githubusercontent.com/flovv/flovv.github.io/master/images/scan.png" width="450px">
It is the aim of such systems to administrate and control all external pixels at one place. But there are a couple of websites where pixels are implemented outside the “Tag Management System” and thereby undermine the idea of the system. For example, figure 4 shows that the Google Tag Manager is implemented, however many pixels are loaded directly from the main website. So the arrows point from the actual website in purple directly to the pixels in blue. 
Considering the abundance and the complexity of the snares it is to be asked why so many pixels are still implemented and used. The benefit seems to exceed the costs by far. That mainly comes from a more efficient ad delivery because of carefully built user segments which can be addressed via targeting. On the consumer side, this segmentation usually happens on Data Management Platforms (DMP). In our survey, pixels of DMPs are found on 50% of the analyzed websites. Some DMPs also offer to advertisers to buy cookie data from third parties and to deliver ads on an individual basis. 

## More information
*[Data Clean Up Site](http://dcd15.com)
*[Tracking the Trackers, Gary Kovacs](https://www.youtube.com/watch?v=f_f5wNw-2c0)
