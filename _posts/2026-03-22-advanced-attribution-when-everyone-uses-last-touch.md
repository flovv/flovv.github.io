---
title: 'Why Advanced Attribution Matters More When Everyone Else Uses Last Touch'
author: "flovv"
layout: post
published: true
status: publish
tags: [advertising, attribution, measurement, incrementality, last-touch, marketing-science]
draft: no
---

![Beyond last touch cover](/images/advanced-attribution-cover_0.jpg)

## Short practical advice on attribution:

1. **Treat last-touch as a bias, not as a neutral baseline** - If most advertisers optimize to last-touch conversions, budgets and auction pressure will drift toward channels that are easy to credit rather than channels that are truly incremental.

2. **Advanced attribution is valuable because it changes spending behavior** - The upside is not cleaner reporting. The upside is spending less on overpriced "credit-capturing" inventory and more on channels that create demand earlier in the journey.

3. **Non-click measurement matters most in click-biased markets** - If the market still rewards final clicks, then impression effects, sequence effects, and assisted conversions are systematically underpriced.

4. **Do not expect more sophistication to automatically raise profit** - Better measurement only helps if it changes bidding, budget allocation, and evaluation rules inside the company.

5. **Add incrementality before adding complexity** - A simple holdout, geo test, or lift study is often more useful than another dashboard built on the same click-based attribution logic.


## Long Version

I just read Ron Berman's paper *Beyond the Last Touch: Attribution in Online Advertising*, and I think the most useful implication for practitioners is slightly different from the headline result.

The paper compares no attribution, last-touch attribution, and Shapley-value attribution in a multi-publisher advertising market. Its central result is that **attribution is not just a reporting layer. It changes bidding incentives and therefore changes market outcomes.**

That matters because most advertisers still do not operate with advanced measurement. In many cases they rely on some mix of:

- last-touch or last-click attribution
- platform-reported conversions
- weak or infrequent incrementality testing
- budget allocation rules based on short-term ROAS

In that world, advanced attribution has a second source of value: it helps you avoid the distortions created by everyone else's bad measurement.

### What the paper actually shows

Berman models a market where one advertiser buys media across multiple publishers while other advertisers are more local. Consumers may see ads across different publishers, and one exposure can affect the value of another. That creates externalities across touchpoints.

The important result is that these externalities make optimization hard even when everyone is symmetric in information. This is not just a fraud problem or a platform-information problem. It is a structural feature of multi-publisher advertising.

The paper then shows two things that are highly relevant in practice:

1. **Last-touch attribution often pushes advertisers to overbid.**
2. **A more balanced attribution rule such as the Shapley value usually performs better than last touch for the advertiser.**

There is also a useful warning in the paper: more accurate attribution does not always increase advertiser profit. Once you account for market equilibrium and competitor response, the relationship between better measurement and better outcomes is not trivial.

That is the academic result. The practical extension is where things get interesting.

### Why advanced attribution becomes more valuable when most advertisers still use last touch

If most of the market uses last-touch logic, then the market is not being priced on incremental contribution. It is being priced on who gets the final credit.

That sounds like a reporting issue, but it is really a budget allocation issue.

Channels that close demand tend to look stronger than they are. Branded search, retargeting, affiliate traffic, and other lower-funnel placements often appear to be doing all the work because they sit close to the conversion event. Channels that create demand earlier in the journey often look weaker because they rarely receive the final touch.

If enough advertisers optimize this way, a predictable pattern emerges:

- lower-funnel inventory becomes crowded and expensive
- channels that harvest existing intent absorb too much budget
- upper- and mid-funnel channels look worse than their true contribution
- advertisers confuse ease of measurement with causal impact

This is exactly where advanced attribution helps.

It helps not because it gives you a prettier customer journey chart, but because it gives you a better pricing model for media. If your attribution system captures assisted effects, non-click influence, or incremental lift more accurately than the market standard, you can avoid overpaying for touchpoints that are merely good at showing up last.

### Why non-click measurement matters

The paper itself is about attribution rules, not a direct comparison of click-based versus non-click-based systems. But the implication is clear.

If the dominant market standard is click-biased last-touch measurement, then any method that can recover value from non-click exposures has a structural advantage.

That could include:

- impression-based attribution
- conversion lift studies
- geo experiments
- holdout tests
- media mix modeling
- sequence analysis using first-party exposure data

These methods are imperfect, and they answer slightly different questions. But they all do something last-touch usually cannot do well: they credit touchpoints that influence conversion without demanding a final click.

In a market full of click-based optimization, that means advanced measurement can uncover media that is genuinely incremental but systematically undervalued.

### The real gain is not better reporting. It is better spending behavior.

I think this is the most important practical takeaway from the paper.

Advanced attribution should be judged by whether it improves decisions such as:

- Which channels deserve more budget?
- Which channels are just harvesting demand that already exists?
- Where are we overbidding because the market over-credits the final touch?
- Which publishers look weak only because our measurement ignores assisted effects?

If your attribution system changes those decisions, it has value.

If it only creates a more sophisticated dashboard while the company still optimizes to platform ROAS and last-click conversions, it has much less value.

That is also why many measurement projects disappoint. The model gets better, but the organization does not change the control system. Finance still trusts the old KPI. Paid media teams still chase the same targets. Creative teams still optimize for clicks because clicks are what get reported weekly.

The paper's logic fits this well: attribution changes incentives. If the incentives do not change, the gains from attribution are limited.

### A simple mental model for advertisers

If most competitors use last touch, assume three things:

1. **Some inventory is overpriced because it captures credit, not because it creates lift.**
2. **Some inventory is underpriced because it influences conversion without closing it.**
3. **Your edge comes from estimating that gap better than the market.**

That is why advanced attribution and incrementality measurement can be valuable even if they are noisy. You do not need a perfect model. You need a model that is less wrong than the one most of the market is using.

### Where the paper is most useful, and where it is limited

One thing I like about the paper is that it is transparent about trade-offs. It does not claim that better attribution always improves everything. In fact, some attribution rules improve advertiser profit partly by shifting profit away from publishers, not by massively improving total market efficiency.

That is a useful correction to the usual industry narrative that "better measurement" always makes the whole system work better.

At the same time, the paper is stylized. It uses a game-theoretic model with a limited number of publishers and advertisers. It is not a direct operational guide to how to run MMM, lift testing, or conversion APIs in a modern stack.

So I would use it for the strategic lesson, not for a literal implementation recipe.

The strategic lesson is:

**When the market overuses last-touch attribution, advanced measurement becomes more valuable because it helps advertisers resist the bidding and budgeting distortions created by everyone else's simplistic measurement.**

### What I would do in practice

If I were working with an advertiser that still leans heavily on last-touch reporting, I would not start by building a highly complex attribution model.

I would start with a simpler sequence:

1. Keep last-touch reporting as an operational lens, not the source of truth.
2. Add one credible incrementality layer such as a holdout test, geo test, or lift study.
3. Separate channels that **create demand** from channels that mostly **capture demand**.
4. Use attribution outputs to inform budget ranges, not to automate every bid immediately.
5. Revisit evaluation metrics so teams are not punished for investing in channels that assist but rarely close.

That is probably the highest-return path for most advertisers because the biggest issue is usually not lack of modeling sophistication. It is overdependence on a biased attribution rule.

### Bottom line

If most advertisers still use last touch and weak testing, advanced attribution is more valuable than it first appears.

Not because it makes reports look better, but because it can help you spend against **incremental contribution** while the rest of the market spends against **credited contribution**.

That gap is where the advantage is.

---

Paper: Ron Berman, *Beyond the Last Touch: Attribution in Online Advertising*.
