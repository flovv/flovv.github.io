---
title: 'Evaluating LLMs/AI for Media Planning in R'
author: "flovv"
layout: post
published: true
status: publish
tags: [R, ai, llm, evals, media-planning, advertising]
draft: no
---

LLMs can produce a convincing media recommendation in a few seconds. The more useful question is whether the recommendation is correct: are the reach calculations right, are the assumptions visible, and does the plan fit the brief?

I work at Havas Media and I am the author of the [Havas AI Media Quality Index (HAI-Q)](https://havasmedia.de/hqai/#benchmark), a benchmark for media planning in the German market. I built it because generic knowledge tests are not enough for professional AI applications. A model can write a plausible paragraph about media strategy and still get a budget allocation, a target group definition, or a GRP calculation wrong.

This post has three parts. First, I will build a small media-planning evaluation in R using the [vitals package](https://vitals.tidyverse.org/). Then I will discuss why media-planning questions are unusually difficult to evaluate. Finally, I will focus on what the HAI-Q results tell us about general-purpose LLMs.

## 1. A small eval in R

At its simplest, an LLM eval has three components:

1. A dataset containing questions and targets.
2. A solver that answers the questions.
3. A scorer that evaluates the answers.

This is the basic structure used by [vitals](https://vitals.tidyverse.org/articles/vitals.html). The `target` column does not always need to contain one exact answer. For open-ended questions, it can contain grading guidance: what a good answer must include, which assumptions must be stated, and which errors should lose credit.

This is useful for testing the final answer of an LLM. It is less useful as a complete test of an AI agent. An agent consists of a harness and one or more models: it may retrieve data, call tools, run calculations, retry a failed step, maintain state, and decide when to ask for help. `vitals` mainly gives us a dataset, a solver, and a scorer. It does not automatically tell us whether the agent used the right tool, passed the right arguments, or recovered safely from an intermediate failure. It can be extended with custom solvers, but then the agent harness and trajectory checks still have to be built separately.

### The questions

Here is a deliberately small evaluation set. The questions cover calculation, planning, and interpretation. The targets are written as instructions for a grader rather than as model answers.

{% highlight r %}
library(dplyr)
library(tibble)

media_questions <- tribble(
  ~id, ~input, ~target, ~domain, ~task,

  "grp-calculation",
  "A campaign delivers 60% reach at an average frequency of 3. What is the campaign's GRP? State the assumption behind the calculation.",
  "A full-credit answer calculates 60 * 3 = 180 GRP. It explains that this is the standard simplified relationship GRP = reach (in percent) * average frequency. It must not describe GRP as the number of unique people reached.",
  "Reach and GRP", "Calculation",

  "budget-allocation",
  "A client has EUR 100,000 to reach adults aged 25-49 in Germany. There is no historical channel performance data. Propose a first-pass media allocation and explain how you would improve it after launch.",
  "There is no single correct allocation. A strong answer makes the uncertainty explicit, explains the role of each channel, avoids inventing CPMs or reach figures, and proposes a measurement and test-and-learn plan. It should distinguish a planning hypothesis from an observed result.",
  "Media strategy", "Recommendation",

  "reach-frequency-tradeoff",
  "Two plans have the same budget. Plan A has higher reach and lower frequency; Plan B has lower reach and higher frequency. How would you decide between them?",
  "A full-credit answer says that the choice depends on the communication objective, the selected channesls, the overall attention, audience size, purchase cycle, creative strength, and expected response. It should explain the reach-frequency trade-off and ask for missing information instead of declaring one plan universally better.",
  "Media strategy", "Reasoning"
)

media_questions
{% endhighlight %}

The questions are intentionally specific. “Create a good media plan” is difficult to score because almost any fluent answer can sound reasonable. A question about GRP, in contrast, gives us a concrete numerical check. The budget question tests something different: whether the model knows when it does not have enough information to justify a precise allocation.

In a real eval, I would expand this table with questions about channel roles, target-group definitions, reach curves, media costs, campaign objectives, and German market data. I would also add metadata such as difficulty, source, market, and the date on which the underlying data was valid.

### The solver and scorer

The [vitals introduction](https://vitals.tidyverse.org/articles/vitals.html) uses `Task$new()` to combine the dataset, a solver, and a scorer. The following example uses Claude as the solver and an LLM-based grader. An API key for the selected provider is required.

{% highlight r %}
library(vitals)
library(ellmer)

media_task <- Task$new(
  dataset = media_questions,
  solver = generate(
    chat_openrouter(model = "claude-sonnet-4.6")
  ),
  scorer = model_graded_qa(partial_credit = TRUE),
  name = "A small media-planning eval"
)

# Run the solver and scorer.
media_task$eval()

# Bind the results into a tibble for analysis.
media_scores <- vitals_bind(media_task)
media_scores

media_scores |>
  count(score)
{% endhighlight %}

With `partial_credit = TRUE`, the scorer can return `C` for correct, `P` for partially correct, or `I` for incorrect. This is more useful than a single binary score for media planning. A response may use the right calculation but fail to explain its assumptions. Another answer may be directionally useful but invent a media cost. Those are different failures and should not be hidden in one number.

The result is not the end of the evaluation. I would inspect the individual answers and the grading decisions, especially on the first few runs. If the grader repeatedly gives full credit to a response that I consider unsafe, the problem may be the grading guidance rather than the model.

### Comparing models

Once the task exists, comparing solvers is straightforward. For example, the same questions can be evaluated with an OpenAI model and then combined with the first run.

{% highlight r %}
media_task_openai <- media_task$clone()

media_task_openai$eval(
  solver_chat = chat_openrouter(model = "gpt-5.4")
)

comparison <- vitals_bind(
  claude = media_task,
  openai = media_task_openai
) |>
  mutate(model = recode(
    task,
    claude = "Claude",
    openai = "OpenAI"
  ))

comparison |>
  count(model, score)
{% endhighlight %}

The exact model names will change over time. The important part is to keep the questions and scoring rules stable while changing one component at a time. Otherwise, a score difference is difficult to interpret.

This example is an LLM eval, not an agent eval. It compares the text returned at the end of the solver. For an agent, I would additionally log the tool calls, retrieved documents, intermediate calculations, retries, latency, cost, and final answer. The test should then assert properties of the whole trajectory, not only the final prose.

## 2. Why media-planning evals are hard

Media planning looks like a natural use case for LLMs. The work involves briefs, audience descriptions, channel recommendations, calculations, and written rationales. But the same combination makes the evaluation difficult.

### There is rarely one correct plan

Many planning questions are underdetermined. A sensible allocation depends on the objective, budget, campaign length, audience size, creative assets, buying conditions, historical performance, and measurement setup. Two experienced planners can recommend different channel mixes and both be right.

This means that a target should often describe required properties rather than prescribe one number. For example, a full-credit answer might need to:

- state its assumptions;
- stay within the budget;
- connect channel choices to the objective;
- distinguish facts from hypotheses; and
- explain how the plan would be measured and revised.

The evaluator has to reward sound reasoning without turning one planner's preference into a false ground truth.

### Media facts are local and time-dependent

A media answer can be correct in one market and wrong in another. Reach, costs, inventory, audience definitions, platform availability, and panel methodology all vary by country and by date. A model that has learned general media vocabulary does not automatically have access to the latest German market data.

This is why a useful eval should record the market and the data vintage. It should also test whether the model provides a source or clearly labels an assumption when a current figure is unavailable. “The average CPM is X” is not a safe answer if the model cannot explain where X came from.

### Definitions matter more than fluent prose

Media planning has many terms that are close enough to sound interchangeable but are not interchangeable in a calculation. Reach can mean gross or net reach. Frequency can be average or effective frequency. GRP is not the same as the number of unique people reached. Target-group percentages need a denominator.

These distinctions create easy failure modes. A response can contain the right formula but apply it to the wrong quantity. It can also produce a tidy table whose totals do not add up. Numerical checks and constraint checks therefore need to be part of the eval, not just a general assessment of writing quality.

### LLM-as-a-judge is useful but not sufficient

The `model_graded_qa()` scorer in `vitals` makes open-ended evaluation scalable. It is also a model judging another model's answer, which introduces its own errors. A grader may prefer confident language, overlook a subtle numerical mistake, or accept an answer because it resembles the supplied guidance.

For a serious benchmark, I would calibrate the grader against human-labelled examples and keep a sample for manual review. I would also separate different dimensions where possible:

- factual accuracy;
- numerical accuracy;
- constraint satisfaction;
- quality of reasoning; and
- usefulness of the recommendation.

One overall score is convenient, but it can hide which part of the planning process is failing.

### `vitals` is not an agent harness

The distinction matters in practice. `vitals` is a useful way to ask an LLM a fixed set of questions and score the answers. It is not, by itself, a test harness for an AI agent. If an agent has access to a reach database, a calculator, or a planning API, the evaluation needs to check the interaction with those components as well.

For an end-to-end agent eval, I would test at least four layers: whether the harness selects the right tool, whether the tool call is valid, whether the intermediate result is interpreted correctly, and whether the final answer communicates uncertainty. A final response can look reasonable even when one of those earlier steps failed.

## 3. Results from the Havas HAI-Q

The [Havas HAI-Q page](https://havasmedia.de/hqai/#benchmark) describes a benchmark built for media planning in the German market. It contains 35 practical tasks across five areas:

1. Media strategy
2. Channel and budget allocation
3. Target-group evaluation
4. Reach and GRP
5. Media and effectiveness metrics

In this post I focus on the general-purpose LLM results:

| Model | Correct answers | Share correct |
|---|---:|---:|
| GPT-5 | 16 / 35 | 45.7% |
| Claude Sonnet 4.5 | 6 / 35 | 17.1% |
| GPT-4o | 4 / 35 | 11.4% |

The headline is uncomfortable: even GPT-5, the strongest general-purpose model in this comparison, is correct on fewer than half of the questions. It answers 16 of 35 questions correctly, leaving 19 answers that are not counted as correct. For practical media-planning work, that is not a safe error rate.

When I look at the individual HAI-Q questions, the errors are not evenly distributed. The models particularly struggle with numeric questions involving reach figures and audience sizes. They can produce a fluent explanation of a planning idea and still make a basic mistake in a denominator, a percentage, or the interpretation of a reach number. This is exactly the type of failure that is easy to miss if evaluation is based on plausibility rather than calculation.

There is also a clear improvement between the older and newer models. GPT-4o answers 4 of 35 questions correctly, compared with 16 of 35 for GPT-5. That is 12 additional correct answers and an improvement from 11.4% to 45.7%, or 34.3 percentage points. GPT-5 gets four times as many questions correct as GPT-4o on this benchmark. The improvement is substantial, even though the newer model is still not reliable enough for unsupervised media decisions.

Claude Sonnet 4.5 scores lower in this test, with 6 of 35 correct answers. This does not mean that the model is generally poor. It means that a general language benchmark and a domain-specific media-planning benchmark answer different questions. The HAI-Q is designed around the German market and a specific definition of correctness, including the numerical details that matter in planning.

The aggregate scores should still be read with care. They do not show the difficulty of every question, the variance across repeated runs, or the exact scoring decision for every answer. But the pattern is clear enough to be useful: current general-purpose LLMs are good at sounding like media planners, while still struggling to answer roughly half of these practical questions correctly.

## Takeaways

An LLM eval for media planning should start with real questions from the workflow, not generic prompts about marketing. In R, a tibble with `input` and `target` is enough to get started, and `vitals` provides a practical way to connect questions, solvers, scorers, and result inspection.

The difficult part is not running the model. It is defining what “correct” means when several plans can be reasonable, data changes by market and date, and a plausible answer can contain a subtle but consequential error. For agents, the evaluation also needs to cover the harness, tools, intermediate steps, and failure handling. A final answer score is not enough.

The HAI-Q results show that the latest general-purpose LLMs still answer more than half of these media-planning questions incorrectly. The largest weaknesses appear in numerical reasoning around reach and audience sizes. At the same time, the jump from GPT-4o to GPT-5 shows that model development is moving in the right direction.

For me, the practical conclusion is simple: use LLMs to accelerate media work, but test every numerical recommendation before relying on it. The next step is to combine model evals such as HAI-Q with end-to-end agent tests that measure tool use and the full planning workflow.

### Resources

- [Getting started with vitals](https://vitals.tidyverse.org/articles/vitals.html)
- [vitals documentation](https://vitals.tidyverse.org/)
- [HAI-Q: Havas AI Media Quality Index](https://havasmedia.de/hqai/#benchmark)
- [ellmer documentation](https://ellmer.tidyverse.org/)
