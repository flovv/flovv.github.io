---
layout: page
title: Spotlift Software — Agentic-First Quantitative & Programmatic Media Engines
permalink: /software/
---

<style>
.agent-banner {
  background: linear-gradient(135deg, #1e1e2f 0%, #2a2b45 100%);
  color: #f1f5f9;
  border-radius: 10px;
  padding: 24px 28px;
  margin: 20px 0 35px 0;
  border: 1px solid #3b3d5c;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}
.agent-banner h2 {
  color: #38bdf8;
  margin-top: 0;
  font-size: 22px;
}
.agent-banner p {
  color: #cbd5e1;
  font-size: 16px;
  line-height: 1.6;
}
.product-card {
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 24px 28px;
  margin-bottom: 30px;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.product-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}
.product-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  border-bottom: 1px solid #f1f5f9;
  padding-bottom: 12px;
  margin-bottom: 16px;
}
.product-title {
  font-size: 22px;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
}
.product-tag {
  display: inline-block;
  background: #eff6ff;
  color: #2563eb;
  padding: 4px 10px;
  border-radius: 9999px;
  font-size: 13px;
  font-weight: 600;
}
.badge-row {
  margin: 14px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.skill-box {
  background: #f8fafc;
  border-left: 4px solid #8b5cf6;
  padding: 12px 18px;
  border-radius: 0 8px 8px 0;
  margin: 16px 0;
  font-family: monospace;
  font-size: 14px;
}
.links-row {
  margin-top: 18px;
  padding-top: 14px;
  border-top: 1px dashed #e2e8f0;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  font-size: 15px;
  font-weight: 600;
}
.links-row a {
  color: #2563eb;
  text-decoration: none;
}
.links-row a:hover {
  text-decoration: underline;
}
.merchant-footer {
  margin-top: 50px;
  padding: 24px 28px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  font-size: 14px;
  color: #475569;
}
.merchant-footer h3 {
  margin-top: 0;
  color: #1e293b;
  font-size: 18px;
}
</style>

<div class="agent-banner">
  <h2>🤖 Built for the Agentic AI Era</h2>
  <p>
    <strong>Spotlift</strong> builds high-performance quantitative ad-tech and econometric media engines. 
    Unlike legacy enterprise software bloated with manual web dashboards, every Spotlift engine is engineered <strong>Agentic-First</strong>:
  </p>
  <ul>
    <li><strong>Deterministic AST Evaluation:</strong> Safe script interpreters that execute logic locally without dangerous <code>eval()</code> or <code>exec()</code>.</li>
    <li><strong>Machine-Readable Contracts:</strong> Rich CLI tooling with <code>--json</code> flags designed specifically for autonomous agent tool-calling.</li>
    <li><strong>Zero-Credential Benchmark Fixtures:</strong> Instant synthetic simulation fixtures so agents and developers can test pipelines completely offline.</li>
    <li><strong>Native Agent Skills:</strong> One-command domain skills for Cursor, Claude Code, Antigravity, and GitHub Copilot via <a href="https://skills.sh" style="color: #38bdf8;">skills.sh</a>.</li>
  </ul>
</div>

---

## Software Portfolio

Our software packages follow an open-core architecture: core grammar validation, simulation, and data loading are open-source under the MIT license, while advanced statistical calibration, optimization algorithms, and compiled C-extensions are available under commercial licenses via [Polar.sh](https://polar.sh/spotlift).

<!-- PRODUCT CARD 1: dv360-bidkit -->
<div class="product-card">
  <div class="product-header">
    <h3 class="product-title">🎯 dv360-bidkit</h3>
    <span class="product-tag">Programmatic Bidding & DSL Engine</span>
  </div>
  <p>
    <strong>Turn DV360 report data into verified, high-performance custom bidding algorithms without guesswork, AST syntax errors, or platform rejections.</strong>
  </p>
  <p>
    Engineered for quantitative programmatic traders and media agencies running custom machine-learning bidding algorithms on Google Display & Video 360 (DV360). Features complete AST linter against Google's 2026 DSL specification, safe local pre-flight simulator, Google S2 training readiness checks (500 advertiser / 50 line-item positives), Empirical Bayes Active View shrinkage, client funnel mass-balancing, and automated ternary outlier capping.
  </p>

  <div class="badge-row">
    <a href="https://pypi.org/project/dv360-bidkit/"><img src="https://img.shields.io/pypi/v/dv360-bidkit.svg" alt="PyPI"></a>
    <a href="https://github.com/flovv/dv360-bidkit/actions/workflows/ci.yml"><img src="https://github.com/flovv/dv360-bidkit/actions/workflows/ci.yml/badge.svg" alt="CI"></a>
    <a href="https://skills.sh/flovv/dv360-bidkit/dv360-custom-bidding"><img src="https://img.shields.io/badge/Agent%20Skill-dv360--custom--bidding-purple" alt="Agent Skill"></a>
    <a href="https://buy.polar.sh/polar_cl_jeD6EDIDtJxQJiCWKF1dfQ9vWHUomQUV7XxQD3Yj7bT"><img src="https://img.shields.io/badge/Polar.sh-Get%20Pro%20License-blueviolet" alt="Polar Pro"></a>
  </div>

  <div class="skill-box">
    <strong>Install Agent Skill:</strong><br>
    <code>npx skills add flovv/dv360-bidkit/dv360-custom-bidding</code>
  </div>

  <div class="links-row">
    <a href="https://flovv.github.io/dv360-bidkit/">📖 Documentation</a>
    <a href="https://github.com/flovv/dv360-bidkit">💻 GitHub Repository</a>
    <a href="https://pypi.org/project/dv360-bidkit/">📦 PyPI Package</a>
    <a href="https://buy.polar.sh/polar_cl_jeD6EDIDtJxQJiCWKF1dfQ9vWHUomQUV7XxQD3Yj7bT">💎 Purchase Pro License</a>
  </div>
</div>

<!-- PRODUCT CARD 2: spotlift -->
<div class="product-card">
  <div class="product-header">
    <h3 class="product-title">📺 SpotLift</h3>
    <span class="product-tag">TV-to-Web & Omnichannel Attribution</span>
  </div>
  <p>
    <strong>Turn TV airing broadcast logs and web traffic into reproducible campaign response curves and incremental sales lift.</strong>
  </p>
  <p>
    SpotLift is an agent-ready econometric attribution engine engineered to measure the causal visitor response of <strong>Linear TV broadcast airings</strong> against minute-level <strong>Google Analytics 4 (GA4)</strong> web traffic and <strong>Amazon Marketing Cloud (AMC)</strong> telemetry. Features diurnal baseline decomposition, concurrent airing overlap separation, multi-station attribution, and statistical confidence intervals.
  </p>

  <div class="badge-row">
    <a href="https://pypi.org/project/spotlift/"><img src="https://img.shields.io/pypi/v/spotlift.svg" alt="PyPI"></a>
    <a href="https://github.com/flovv/spotlift/actions/workflows/ci_tests.yml"><img src="https://github.com/flovv/spotlift/actions/workflows/ci_tests.yml/badge.svg" alt="CI"></a>
    <a href="https://skills.sh/flovv/spotlift/tv-to-web-measurement"><img src="https://img.shields.io/badge/Agent%20Skill-tv--to--web--measurement-purple" alt="Agent Skill"></a>
    <a href="https://polar.sh/checkout/polar_c_hXcFNDtAA9LqZvTCK3ZVj2XWIakGbUyLWzeIx0sHutk"><img src="https://img.shields.io/badge/Polar.sh-Get%20Pro%20License-blueviolet" alt="Polar Pro"></a>
  </div>

  <div class="skill-box">
    <strong>Install Agent Skill:</strong><br>
    <code>npx skills add flovv/spotlift/tv-to-web-measurement</code>
  </div>

  <div class="links-row">
    <a href="https://flovv.github.io/spotlift/">📖 Documentation</a>
    <a href="https://github.com/flovv/spotlift">💻 GitHub Repository</a>
    <a href="https://pypi.org/project/spotlift/">📦 PyPI Package</a>
    <a href="https://polar.sh/checkout/polar_c_hXcFNDtAA9LqZvTCK3ZVj2XWIakGbUyLWzeIx0sHutk">💎 Purchase Pro License</a>
  </div>
</div>

---

## Agentic Integration Quickstart

All Spotlift software tools can be invoked directly by AI coding agents (Claude Code, Cursor, Antigravity, GitHub Copilot) through standardized skill definitions.

To equip your coding agent with programmatic media intelligence, install the corresponding skills:

```bash
# 1. Install TV-to-Web Attribution Skill
npx skills add flovv/spotlift/tv-to-web-measurement

# 2. Install DV360 Custom Bidding DSL Skill
npx skills add flovv/dv360-bidkit/dv360-custom-bidding
```

Once installed, your agent automatically knows how to validate custom bidding scripts, simulate performance against historical report CSVs, run diurnal baseline TV airings attribution, and prevent platform rejections.

---

<div class="merchant-footer">
  <h3>Spotlift Commercial Licensing & Support</h3>
  <p>
    <strong>Organization:</strong> Spotlift (Operated by Florian Teschner)<br>
    <strong>Commercial Licensing:</strong> Pro packages are distributed as pre-compiled native binary wheels (Linux x86_64, macOS arm64/x86_64, Windows win_amd64) via <a href="https://polar.sh/spotlift">Polar.sh</a>.<br>
    <strong>Instant Delivery:</strong> License keys and platform wheels are provisioned instantly upon digital checkout.<br>
    <strong>Refund Guarantee:</strong> We offer a 14-day refund guarantee for commercial licenses if our software does not meet your technical expectations.<br>
    <strong>Support & Custom Enterprise Deployments:</strong> For technical support, custom algorithm development, or agency licensing inquiries, contact <a href="mailto:teschner@gmail.com">teschner@gmail.com</a>.
  </p>
</div>
