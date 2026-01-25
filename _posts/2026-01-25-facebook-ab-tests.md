---
layout: post
title: 'When AdTech Misrepresent Their Own A/B Tests'
author: "flovv"
published: true
status: publish
tags: A/B testing, statistics, advertising platforms
draft: no
---

Preamble: I had a roughly 8 year break from blogging and focussed on kids plus related duties. This year, I will try to start again.   
My goal is to write about (advertising-related) research and how practitioners can apply the insights.

Todays paper is from the "International Journal of Research in Marketing" and decribing how big Ad Tech companies (Google / Meta) are miscommunicating their methods and potentially inflating the results of advertising A/B-tests. 

## Takeaways for advertising practitioners?

1. **Treat platform "A/B tests" with skepticism**: When Google or Meta say they'll run an A/B test, assume it's observational analysis unless they specifically confirm proper randomization. Don't rely on these results for high-stakes decisions.

2. **Understand the limitations**: Observational analysis can still be valuable, but you need to understand its limitations. It can show correlations, not causation. Use it for insights, not definitive conclusions.

3. **Push for better options**: If you're a large advertiser, push your platform representatives for truly experimental testing options. The technology exists - it's just not being offered.

4. **Consider third-party solutions**: For valid A/B testing, you may need to use third-party tools or build your own testing infrastructure outside the platform's built-in tools.

## Long Version:

I recently came across a paper by Bögershausen, Oertzen, and Bock (2025) titled "On the persistent mischaracterization of Google and Facebook A/B tests" that exposes something important about how major advertising platforms represent their testing tools. The paper reveals that Google and Meta have been systematically misrepresenting the nature of their A/B testing capabilities to researchers and advertisers.

Here's the core issue: Google and Meta present their A/B testing tools as conducting clean, randomized controlled experiments. They position these as proper experimental designs where users are randomly assigned to different ad variations, allowing advertisers to compare performance in a scientifically valid way. But the reality is quite different.

The authors analyzed what these platforms actually do, and found that their "A/B tests" aren't true experiments at all. Instead of random assignment, these tools typically use non-ex observational approaches that don't establish proper control groups. Users aren't randomly assigned to treatment conditions - they're just shown different ads based on whatever targeting the platform's algorithm decides.

This matters because true A/B testing requires randomization to establish causal inference. Without proper random assignment, you can't attribute differences in performance to the ad variations themselves - there could be systematic differences in who sees which ad, confounding factors, or other biases. The platforms are essentially selling observational analysis dressed up as experimental design.

Why would the platforms do this? The paper suggests it's partly a communication problem - the tools are marketed as "A/B tests" because that's a familiar, reassuring term to advertisers, even though the actual methodology doesn't match what that term means in experimental design. It's also probably easier to sell "we'll run an A/B test" than "we'll show different ads to different people and analyze the results."

The problem is serious for several reasons:

First, it misleads advertisers who think they're running scientifically valid experiments. When an advertiser sees Google or Meta say "run an A/B test to compare your ads," they expect proper randomization and causal inference. But they're not getting that - they're getting observational analysis with all the limitations that entails.

Second, it creates false confidence in marketing decisions. Advertisers make budget allocation and creative decisions based on these "A/B test" results, believing they have experimental evidence when they don't. This can lead to suboptimal marketing strategies because the fundamental validity of the results is compromised.

Third, it creates a credibility problem for the platforms. When researchers dig into how these tools actually work and discover they're not true experiments, it undermines trust in the platforms more broadly. The paper notes that this misrepresentation has persisted across both companies for years, despite researchers pointing out the issues.

The authors call (and I totally agree) for Google and Meta to do two things:

1. **Communicate more accurately** about what their A/B testing tools actually do. Be clear that these are observational analyses, not randomized controlled experiments. Stop using terminology that implies proper experimental design when that's not what's happening.

2. **Provide truly experimental options**. Ideally, the platforms should offer advertisers and researchers a way to conduct actual randomized A/B tests where users are properly assigned to different ad variations in a truly random manner. This would give the option for valid causal inference when it's needed.

This is particularly interesting because it's not about technical complexity - the platforms have the infrastructure to run proper experiments (they do it internally all the time). The issue is about transparency and offering the right tools to advertisers.

The paper is an important reminder that we need to be critical of what platforms tell us about their tools, even - or especially - when the terminology sounds familiar and reassuring. "A/B test" has a specific meaning in experimental design, and marketing platforms shouldn't be allowed to co-opt that term for something fundamentally different.

Reference:
Bögershausen, A., Oertzen, T. v., & Bock, K. (2025). On the persistent mischaracterization of Google and Facebook A/B tests.

Note: AI-supported content.