---
title: 'Test & Roll: Why Smaller A/B Tests Can Make More Money'
author: "flovv"
layout: post
published: true
status: publish
tags: [advertising, ab-testing, experimentation, bayesian, decision-theory, sample-size]
draft: no
---

## Short practical advice on A/B testing:

1. **Stop sizing tests only for statistical significance** - In finite campaigns, your goal is profit, not perfect inference.

2. **Treat testing as a trade-off** - Every extra test exposure buys learning but also burns revenue if that exposure gets the weaker treatment.

3. **Use smaller tests when outcomes are noisy** - This paper shows profit-maximizing test sizes rise much more slowly than classical power-based sizes.

4. **Scale test size with reachable audience** - If your population is limited, test size should reflect that constraint directly.

5. **Allow unequal splits when priors differ** - If one treatment is likely better a priori (e.g., treatment vs holdout), asymmetric test cells can be optimal.


## Shiny App to test the implications:

[Test and Roll Shiny App](https://testandroll.shinyapps.io/testandroll/)


## Long Version

I just read *Test & Roll: Profit-Maximizing A/B Tests* by Elea McDonnell Feit and Ron Berman (2019), and it challenges one of the default habits in marketing experimentation: planning tests as if the main objective were statistical significance.

Their point is simple: in most real marketing experiments, you have a finite population (email list, campaign budget, limited traffic window). In that setting, the right objective is **total expected profit across test + rollout**, not p-values.

### The core idea

A classic A/B setup has two stages:

1. **Test stage**: expose `n1` users to treatment A and `n2` users to treatment B.
2. **Roll stage**: deploy the winner to the remaining `N - n1 - n2` users.

Bigger tests improve certainty, but they also create opportunity cost: more users in test means more users potentially seeing the weaker treatment before rollout.

The paper formalizes this as a decision problem and derives **profit-maximizing sample sizes**. Under Normal priors and Normal outcomes, they get closed-form solutions.

### Why this matters in practice

If you use classical hypothesis-test sizing, recommended `n` can be huge, especially when effect sizes are small and response is noisy (which is exactly what we see in advertising).

Their framework produces much smaller test sizes because it optimizes business outcomes, not Type I/II error control.

Two important takeaways:

1. **Optimal test sizes grow sub-linearly with response noise**, while classical sample size rules grow much faster.
2. **Optimal test sizes scale with the square root of population size `N`**, which makes them workable for smaller markets and finite campaigns.

### Comparison with bandits

The authors benchmark against Thompson sampling (multi-armed bandit). Bandits usually win on pure optimization, but the gap is often modest in their examples.

That is useful operationally: a two-stage "test then roll" process is far easier to implement, explain, and govern than a continuously-adapting bandit, especially in organizations with approval and reporting constraints.

### The applications are the best part

They test the approach in three contexts:

1. Website design experiments
2. Display advertising decisions
3. Catalog holdout tests

Across cases, profit-maximizing designs use **substantially smaller test cells** than classical power calculations and produce higher expected profit.

A particularly practical result: small holdout groups (common in catalog and CRM practice) can be fully rational when priors are asymmetric. In other words, "unequal splits" are not always bad design; they can be the optimal design.

### What I changed in my own thinking

Before this, I treated "underpowered" mostly as a red flag. After this paper, I think a better question is:

**Underpowered for what objective?**

If the objective is publication-grade inference, classical power logic is right.
If the objective is campaign profit in a finite horizon, a smaller test can be the better business decision.

### Practical implementation checklist

If you run tactical tests (email, paid media, landing pages), this paper suggests a better workflow:

1. Define total reachable population `N` for the decision horizon.
2. Set priors for treatment means from past similar experiments.
3. Estimate response variance from historical data.
4. Compute profit-maximizing `n1`, `n2`.
5. Pre-commit the rollout decision rule (posterior expected profit winner).
6. Report expected regret alongside expected upside.

That last point is underrated: decision-makers usually understand "expected dollars at risk" better than p-values.


### Bottom line

For many real marketing tests, "smaller than textbook" is not bad science. It is better decision design.

If your experiment exists to drive a business action on a finite audience, *Test & Roll* gives a rigorous way to choose sample sizes that maximize profit instead of statistical purity.

---

Paper: Feit, E. M., & Berman, R. (2019). *Test & Roll: Profit-Maximizing A/B Tests*. SSRN: https://ssrn.com/abstract=3274875
