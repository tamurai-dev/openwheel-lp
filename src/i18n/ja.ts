export const ja = {
  lang: "ja",
  dir: "ltr",
  nav: {
    github: "GitHub",
    langSwitch: "EN",
    langSwitchHref: "/en/",
  },
  hero: {
    label: "Open-source Agent Builder",
    line1: "言葉が、",
    line2: "エージェントになる。",
    description:
      "解決したい課題を書く。あとはOpenWheelが、本番で動くAIエージェントを生成する。",
    cta: "GitHub で始める",
  },
  problem: {
    lead: "AIエージェントのプロトタイプは、もう誰でも作れる。",
    but: "だが、本番環境で動かし続けることは、まったく別の問題だ。",
    items:
      "サンドボックスの隔離。セッションの永続化。権限管理。エラーからの自動復旧。コンテキストの肥大化対策。水平スケーリング。リアルタイム監視。セキュリティ。",
    punchPre: "プロトタイプは",
    punchHighlight: "一晩。",
    punchPost: "本番環境は",
    punchNumber: "3ヶ月。",
  },
  platform: {
    label: "The Platform",
    title: "Claude Managed Agents",
    description:
      "Anthropicが構築した、AIエージェントのためのマネージドインフラストラクチャ。サンドボックス、セッション、スケーリング、監視——すべてを引き受ける。",
    stat1value: "10x",
    stat1label: "本番投入速度",
    stat2value: "$0.08",
    stat2label: "/session-hour",
    stat3value: "2 days",
    stat3label: "idea → launch",
    adopters: "Notion / Rakuten / Asana / Sentry / Atlassian",
    quote:
      "数ヶ月ではなく、数週間で本番環境にデプロイできた",
    quoteAuthor: "— Sentry, Senior Director of Engineering",
  },
  bridge: {
    label: "The Bridge",
    title: "OpenWheelが、その間を埋める。",
    description:
      "あなたの意図宣言を解析し、Claude Managed Agentsが理解できるAPI定義を自動生成する。コードを書く必要はない。",
    step1num: "01",
    step1: "宣言",
    step1detail: "INTENT.md に、解決したい課題を自然言語で書く。",
    step2num: "02",
    step2: "分解",
    step2detail: "意図を個別のエージェント仕様に分解する。",
    step3num: "03",
    step3: "設計",
    step3detail: "各エージェントのツール、権限、制約を推論する。",
    step4num: "04",
    step4: "生成",
    step4detail: "CMA対応のAPI定義を出力し、即座にデプロイ可能にする。",
  },
  proof: {
    label: "Case",
    lead: "ある歯科医院の話。",
    situation:
      "毎月、同じ6つの問題が繰り返されていた。予約の未取得。夜間の無応答。未払いの累積。放置されるレビュー。離脱する既存患者。遅いオンボーディング。",
    action: "院長が書いたのは、3行だった。",
    quote1: "この6つを自動化したい。",
    quote2: "医療アドバイスはしない。患者情報は守る。",
    result:
      "3つの専門エージェントが生まれた。受付、請求、レビュー管理。すべて、あの3行から。",
  },
  principles: {
    label: "Principles",
    p1title: "Intent-First",
    p1body:
      "コードではなく、意図から始める。技術選定はAIが推論する。人間は「何を解くか」に集中する。",
    p2title: "Reasoning, not Matching",
    p2body:
      "キーワード一致ではなく、文脈推論。意図の行間まで読む。",
    p3title: "Quality Gate",
    p3body:
      "「作れるか」ではなく「作るべきか」を評価する。フィルターであり、スプレーではない。",
  },
  cta: {
    line: "始めよう。",
    github: "GitHub",
    docs: "CMA Docs",
  },
  footer: {
    copy: "OpenWheel",
    docs: "CMA Docs",
    github: "GitHub",
  },
} as const;
