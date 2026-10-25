---
layout: page
title: Software
permalink: /software/
---

<style>
.pkg-list {
  margin-top: 24px;
}
.pkg-item {
  border-top: 1px solid #e5e7eb;
  padding: 24px 0;
}
.pkg-item:last-of-type {
  border-bottom: 1px solid #e5e7eb;
}
.pkg-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
}
.pkg-header h3 {
  margin: 0;
  font-size: 21px;
  color: #111827;
}
.pkg-subtitle {
  font-size: 15px;
  color: #6b7280;
  font-weight: normal;
}
.pkg-desc {
  margin: 10px 0 14px 0;
  color: #374151;
  line-height: 1.55;
}
.pkg-tiers {
  margin: 12px 0;
  padding-left: 20px;
  color: #374151;
}
.pkg-tiers li {
  margin-bottom: 6px;
  line-height: 1.5;
}
.pkg-cmd {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  padding: 10px 14px;
  margin: 14px 0;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 14px;
  line-height: 1.6;
  color: #1f2937;
  overflow-x: auto;
}
.pkg-links {
  margin-top: 12px;
  font-size: 15px;
}
.pkg-links a {
  margin-right: 14px;
  white-space: nowrap;
}
.licensing-box {
  margin-top: 36px;
  padding-top: 20px;
  font-size: 15px;
  color: #4b5563;
  line-height: 1.55;
}
.licensing-box h3 {
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 18px;
  color: #111827;
}
</style>

Open-core Python packages for advertising measurement and programmatic bidding.

Each package is designed for both analysts and AI coding agents (Claude Code, Cursor, Codex, Antigravity): deterministic CLI interfaces with `--json` output, offline synthetic datasets for testing without credentials, and installable domain skills on [skills.sh](https://skills.sh).

<div class="pkg-list">

  <div class="pkg-item">
    <div class="pkg-header">
      <h3>SpotLift</h3>
      <span class="pkg-subtitle">Linear TV &amp; Omnichannel Attribution</span>
    </div>
    <p class="pkg-desc">
      Measures the immediate web and sales response of linear TV airings against minute-level Google Analytics 4 (GA4) traffic and Amazon Marketing Cloud (AMC) conversions.
    </p>
    <ul class="pkg-tiers">
      <li><strong>Open-Core (<code>spotlift</code>, MIT):</strong> Diurnal baseline estimation, single-spot lift integration, weighted collision attribution, and cost-per-incremental-visit (CPIV).</li>
      <li><strong>Pro (<code>spotlift-pro</code>, Commercial):</strong> Shifted-Gamma EM deconvolution for overlapping spots, creative wear-out modeling, 1–36h lag halos, and automated Excel/HTML reporting.</li>
    </ul>
    <div class="pkg-cmd">
      pip install spotlift<br>
      npx skills add flovv/spotlift --skill tv-to-web-measurement
    </div>
    <div class="pkg-links">
      <a href="https://flovv.github.io/spotlift/">Documentation</a>
      <a href="https://github.com/flovv/spotlift">GitHub</a>
      <a href="https://pypi.org/project/spotlift/">PyPI</a>
      <a href="https://skills.sh/flovv/spotlift/tv-to-web-measurement">Agent Skill (skills.sh)</a>
      <a href="https://polar.sh/checkout/polar_c_hXcFNDtAA9LqZvTCK3ZVj2XWIakGbUyLWzeIx0sHutk">Pro License</a>
    </div>
  </div>

  <div class="pkg-item">
    <div class="pkg-header">
      <h3>DV360 BidKit</h3>
      <span class="pkg-subtitle">Custom Bidding DSL Linter, Simulator &amp; Compiler</span>
    </div>
    <p class="pkg-desc">
      Validates, simulates, and compiles custom bidding scripts for Google Display &amp; Video 360 (DV360) locally before platform deployment.
    </p>
    <ul class="pkg-tiers">
      <li><strong>Open-Core (<code>dv360-bidkit</code>, MIT):</strong> AST validator for the Google 2026 DSL specification, safe local simulator (no <code>eval()</code>), Google S2 readiness checks, and rule compilation.</li>
      <li><strong>Pro (<code>dv360-bidkit-pro</code>, Commercial):</strong> Empirical Bayes Active View shrinkage for low-volume publishers, multi-objective funnel mass-balancing, ternary outlier capping, and campaign bundle export.</li>
    </ul>
    <div class="pkg-cmd">
      pip install dv360-bidkit<br>
      npx skills add flovv/dv360-bidkit --skill dv360-custom-bidding
    </div>
    <div class="pkg-links">
      <a href="https://flovv.github.io/dv360-bidkit/">Documentation</a>
      <a href="https://github.com/flovv/dv360-bidkit">GitHub</a>
      <a href="https://pypi.org/project/dv360-bidkit/">PyPI</a>
      <a href="https://skills.sh/flovv/dv360-bidkit/dv360-custom-bidding">Agent Skill (skills.sh)</a>
      <a href="https://buy.polar.sh/polar_cl_jeD6EDIDtJxQJiCWKF1dfQ9vWHUomQUV7XxQD3Yj7bT">Pro License</a>
    </div>
  </div>

</div>

<div class="licensing-box">
  <h3>Commercial Licensing &amp; Support</h3>
  <p>
    Open-core packages are free under the MIT License on PyPI. Commercial Pro extensions are distributed via <a href="https://polar.sh/spotlift">Polar.sh</a> as pre-compiled native binary wheels (Linux, macOS, Windows) with instant license key delivery and a 14-day refund policy. For support or licensing inquiries: <a href="mailto:teschner@gmail.com">teschner@gmail.com</a>.
  </p>
</div>
