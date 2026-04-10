export const en = {
  lang: "en",
  dir: "ltr",
  nav: {
    github: "GitHub",
    langSwitch: "JA",
    langSwitchHref: "/ja/",
  },
  hero: {
    label: "Open-source Agent Builder",
    line1: "Words become",
    line2: "agents.",
    description:
      "Write the problem. OpenWheel generates production AI agents.",
    cta: "Get started on GitHub",
  },
  demo: {
    label: "How it works",
    placeholder: "Demo video coming soon",
    caption:
      "Write your problem → OpenWheel analyzes → auto-generates agent definitions → deploy to CMA. No code.",
  },
  problem: {
    lead: "Anyone can prototype an AI agent now.",
    but: "But keeping one running in production is an entirely different problem.",
    items:
      "Sandbox isolation. Session persistence. Permission management. Automatic error recovery. Context bloat mitigation. Horizontal scaling. Real-time monitoring. Security.",
    punchPre: "Prototype takes",
    punchHighlight: "one night.",
    punchPost: "Production takes",
    punchNumber: "3 months.",
  },
  platform: {
    label: "The Platform",
    title: "Claude Managed Agents",
    relation: "If CMA is the engine, OpenWheel is the steering wheel.",
    description:
      "Managed infrastructure for AI agents, built by Anthropic. Sandboxing, sessions, scaling, monitoring — all handled.",
    stat1value: "10x",
    stat1label: "faster to production",
    stat2value: "$0.08",
    stat2label: "/session-hour",
    stat3value: "2 days",
    stat3label: "idea → launch",
    adopters: "Notion / Rakuten / Asana / Sentry / Atlassian",
    quote:
      "Managed Agents allowed us to deploy in weeks instead of months",
    quoteAuthor: "— Sentry, Senior Director of Engineering",
  },
  proof: {
    label: "Example Scenario",
    lead: "A dental clinic.",
    disclaimer: "* A hypothetical use case illustrating what OpenWheel can do.",
    situation:
      "The same six problems every month. Missed appointments. Unanswered night calls. Piling invoices. Ignored reviews. Churning patients. Slow onboarding.",
    action: "The director wrote three lines.",
    quote1: "Automate these six problems.",
    quote2: "Never give medical advice. Guard patient data.",
    result:
      "Three specialist agents were born. Reception, billing, review management. All from those three lines.",
  },
  principles: {
    label: "Principles",
    p1title: "Intent-First",
    p1body:
      "Start from intent, not code. Let AI infer the stack. Humans focus on what to solve.",
    p2title: "Reasoning, not Matching",
    p2body:
      "Not keyword matching — contextual reasoning. Reading between the lines of your intent.",
    p3title: "Quality Gate",
    p3body:
      "Not \"can we build it\" but \"should we build it.\" A filter, not a spray.",
  },
  cta: {
    line: "Get started.",
    github: "GitHub",
    docs: "CMA Docs",
  },
  footer: {
    copy: "OpenWheel",
    docs: "CMA Docs",
    github: "GitHub",
  },
} as const;
