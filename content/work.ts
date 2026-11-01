// ── Work page content ─────────────────────────────────────────
// Sourced from the real record. Keep it factual — no invented metrics.

export const hero = {
  kicker: 'Curriculum Vitae — 2026',
  runningHead: 'Selected Work & Record',
  role: 'AI Engineer · Retrieval-Augmented Generation',
  summary:
    'I build RAG systems for tax at YYC taxPOD, so AskPod and ZenAI can answer with context you can actually check. Before that I spent six months on 5G network data at Huawei — different domain, same job: turning scattered information into something someone else can use.',
  meta: [
    { k: 'Based in', v: 'Kuala Lumpur, Malaysia' },
    { k: 'Currently', v: 'YYC · taxPOD — AI Engineer' },
    { k: 'Focus', v: 'RAG · LLM · Data analysis' },
  ],
}

export const track = {
  no: '01',
  label: 'Track',
  items: [
    {
      yr: 'Nov 2025 — Present',
      role: 'AI Engineer',
      co: 'YYC · taxPOD · Kuala Lumpur · On-site',
      out: 'Architect and improve tax RAG for AskPod and ZenAI, so tax knowledge retrieval and question answering stay accurate and context-aware.',
    },
    {
      yr: 'Jul 2025 — Aug 2025',
      role: 'Research Assistant',
      co: 'UNIMAS · Remote',
      out: 'Systematic literature review on AI-driven energy optimisation of cooling systems in data centres.',
    },
    {
      yr: 'Mar 2024 — Aug 2024',
      role: 'Internship',
      co: 'Huawei · Kuala Lumpur · On-site',
      out: 'Analysed large-scale 5G KPI datasets with Python, SQL and Excel to uncover performance patterns, anomalies and optimisation opportunities across Asia Pacific networks.',
    },
    {
      yr: 'Oct 2023 — Jul 2024',
      role: 'Web Developer — Impact Tourism 2023',
      co: 'UNIMAS · Remote · Part-time',
      out: 'Developed and maintained a tourism promotion site for rural community destinations, aimed at boosting the local economy through sustainable tourism.',
    },
    {
      yr: 'Oct 2023 — Jan 2024',
      role: 'Lab Demo — Database Concept and Design',
      co: 'UNIMAS · Remote · Contract',
      out: 'Guided students through database troubleshooting, encouraging critical thinking and independent problem solving.',
    },
  ],
}

export const cases = {
  no: '02',
  label: 'Selected Work',
  items: [
    {
      idx: 'P.01',
      title: 'Tax RAG — AskPod / ZenAI',
      problem:
        'Tax answers are scattered across legislation and a large document set. People do not want to find the document — they want an answer that fits their situation and can be used as-is.',
      approach:
        'Built the retrieval-augmented generation pipeline: retrieval results carry their context into generation, with retrieval strategy and prompt design tuned for tax terminology and edge cases.',
      result:
        'AskPod and ZenAI answer tax questions in context, and every answer can be traced back to a source that can be checked.',
      stack: ['RAG', 'LLM', 'Python'],
    },
    {
      idx: 'P.02',
      title: 'AI Dentist — Edge Dental Diagnostics',
      problem:
        'In rural Sarawak, dentists are scarce and connectivity is unreliable, so tooth decay gets caught late. Any tool for that setting has to work with no internet, on hardware a clinic can actually afford.',
      approach:
        'Extended my Final Year Project into an offline, low-latency diagnostics system: deep learning inference compiled with TensorRT on an NVIDIA Jetson Nano, with an external camera feeding real-time detection. End-to-end system design and implementation done independently, co-supervised by Dr. Chiew Kang Leng.',
      result:
        'Real-time cavity detection at 85% precision on minimal compute. Took Gold at Borneo InTEX 2025, plus the Community Impact (Silver) and SAINS Special awards at Digital Nexus 2025.',
      stack: ['TensorRT', 'NVIDIA Jetson Nano', 'Deep Learning', 'Computer Vision', 'Edge AI', 'Python'],
    },
    {
      idx: 'P.03',
      title: '5G Network Performance — Huawei',
      problem:
        '5G KPI data across Asia Pacific is enormous. Real anomalies get buried in noise.',
      approach:
        'Cleaned and analysed large-scale KPI datasets in Python, SQL and Excel, and built a repeatable comparison method so different regions and time windows could sit on the same baseline.',
      result:
        'Performance patterns and anomalies surfaced across regions, translated into concrete optimisation directions.',
      stack: ['Python', 'SQL', 'Excel', 'Machine Learning'],
    },
    {
      idx: 'P.04',
      title: 'Impact Tourism 2023 — Rural Tourism Site',
      problem:
        'Rural communities have tourism assets but no way to put them in front of anyone.',
      approach:
        'Designed and shipped the tourism promotion site end to end, then kept maintaining it so non-technical community partners could update it themselves.',
      result: 'The communities got a front door, and sustainable tourism got seen.',
      stack: ['Web Design', 'Web Development'],
    },
  ],
}

export const awards = {
  no: '03',
  label: 'Awards',
  intro:
    'Three awards in 2025, all for the same piece of work: a dental cavity detector that runs offline on cheap hardware. Borneo InTEX came after Digital Nexus, once the Jetson Nano integration and the mobile build were in.',
  items: [
    {
      date: 'Aug 2025',
      title: 'Gold Award',
      event: 'Borneo InTEX 2025 · UNIMAS',
      note: 'For AI Dentist — Deep Learning-Driven Early Detection System for Tooth Decay. Submitted under my supervisor, Dr. Chiew Kang Leng, with my contribution credited on the project poster.',
      tone: 'gold',
    },
    {
      date: 'Jul 2025',
      title: 'Community Impact Award — Silver',
      event: 'Digital Nexus 2025 · UNIMAS',
      note: 'For a real-time, low-cost cavity detection system deployed on the NVIDIA Jetson Nano — built for communities with limited access to dentists.',
      tone: 'silver',
    },
    {
      date: 'Jul 2025',
      title: 'SAINS Special Award',
      event: 'Sarawak Information System Sdn. Bhd. · Digital Nexus 2025',
      note: 'The partner award at Digital Nexus, for the same system: edge AI that runs on affordable, off-the-shelf hardware.',
      tone: 'partner',
    },
  ],
  figures: [
    {
      src: '/photos/award-nexus.jpg',
      alt: 'Andrew on stage at Digital Nexus 2025 holding a certificate and award',
      tone: 'tone-a',
      no: 'Fig. 01',
      caption: 'Digital Nexus 2025 — certificate and trophy, after the ceremony.',
      ratio: '3 / 4',
      span: '1 / 4',
    },
    {
      src: '/photos/award-borneo.jpg',
      alt: 'The Borneo InTEX 2025 Gold Award medal and certificate',
      tone: 'tone-c',
      no: 'Fig. 02',
      caption: 'Borneo InTEX 2025 — Gold Award medal and certificate.',
      ratio: '4 / 3',
      span: '4 / 9',
    },
    {
      src: '/photos/award-sains.jpg',
      alt: 'Andrew receiving the SAINS Special Award on stage at Digital Nexus 2025',
      tone: 'tone-b',
      no: 'Fig. 03',
      caption: 'Digital Nexus 2025 — SAINS Special Award, presented on stage.',
      ratio: '3 / 2',
      span: '9 / 13',
      offset: '64px',
    },
  ],
}

export const caps = {
  no: '04',
  label: 'Capabilities',
  groups: [
    {
      title: 'Engineering',
      items: ['Python / SQL', 'RAG pipelines', 'LLM applications', 'MySQL / XAMPP', 'Web development'],
    },
    {
      title: 'Analysis',
      items: ['Large-scale data cleaning', 'KPI & anomaly analysis', 'Machine learning', 'Systematic literature review'],
    },
    {
      title: 'Collaboration',
      items: ['Technical writing', 'Teaching & mentoring', 'Cross-team communication', 'Research methodology'],
    },
  ],
}

export const footer = {
  mark: 'Let’s talk.',
}
