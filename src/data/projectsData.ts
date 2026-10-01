export interface CaseStudyData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: "Web" | "AI" | "Automation" | "Research" | "Portfolio";
  year: string;
  summary: string;
  status: string;
  tags: string[];
  problem: {
    heading: string;
    description: string;
    painPoints: string[];
  };
  solution: {
    heading: string;
    description: string;
    architectureDescription: string;
    architectureSteps: {
      step: string;
      title: string;
      desc: string;
      technicalDetail: string;
    }[];
  };
  keyScreens: {
    title: string;
    type: "ui" | "flow" | "code" | "telemetry";
    content: string;
    caption: string;
  }[];
  results: {
    stat: string;
    label: string;
    context: string;
  }[];
  techStack: string[];
  liveOrGithubLink?: string;
}

export const PROJECTS: CaseStudyData[] = [
  {
    id: "phoenix-labs",
    number: "01",
    title: "Phoenix Labs",
    subtitle: "AI-Powered Outbound Infrastructure",
    category: "Automation",
    year: "2026",
    summary:
      "Enterprise outbound automation replacing manual prospecting with deterministic AI qualification, dynamic personalization, and inbox health orchestration.",
    status: "Existing — Sanitized Case Study",
    tags: ["AI Pipeline", "Automation", "FastAPI", "LLM Workflows", "Vector Search"],
    problem: {
      heading: "Manual Outbound is Broken and Operationally Expensive",
      description:
        "B2B service businesses and agencies waste hundreds of hours manually finding prospects, evaluating company fit, scraping websites, drafting personalized copy, and classifying replies. Reps burn through domains with generic templates, leading to 0.4% reply rates and high operational overhead.",
      painPoints: [
        "Human SDRs spend 75% of their time manually researching prospects rather than taking sales calls.",
        "Template spam burns domain reputation and lands critical emails into spam folders.",
        "Positive replies get buried under out-of-office autoreplies and angry unsubscribes without automated triage.",
      ],
    },
    solution: {
      heading: "Autonomous End-to-End Outbound Engine",
      description:
        "Engineered an integrated infrastructure that ingests raw prospect domains, scrapes live site copy, runs a two-tier LLM qualification gate, generates context-grounded email hooks, and automatically classifies incoming replies for immediate human escalation.",
      architectureDescription:
        "Deterministic pipeline with modular state machines, proxy rotation, vector embeddings for industry relevance, and automated webhook dispatching.",
      architectureSteps: [
        {
          step: "01",
          title: "Lead Discovery & Ingestion",
          desc: "Multi-source scraping and deduplication across verified registries and B2B directories.",
          technicalDetail: "Headless browser clusters with rate-limiting, IP rotation, and DNS MX record validation.",
        },
        {
          step: "02",
          title: "Two-Tier AI Qualification",
          desc: "Extracts homepage text and value props, evaluating ICP criteria via fast structured JSON extraction.",
          technicalDetail: "Strict schema evaluation rejecting out-of-market prospects before generating expensive tokens.",
        },
        {
          step: "03",
          title: "Context-Grounded Personalization",
          desc: "Synthesizes company recent news and specific pain points to write a tailored 2-sentence opening hook.",
          technicalDetail: "Few-shot prompted LLM pipeline with anti-hallucination constraints and style guardrails.",
        },
        {
          step: "04",
          title: "Multi-Inbox Outbound Routing",
          desc: "Distributes sending volumes across 15+ warmed domains to maintain 99%+ deliverability.",
          technicalDetail: "Ramping schedule algorithms, SPF/DKIM/DMARC monitoring, and ESP-friendly throttling.",
        },
        {
          step: "05",
          title: "Semantic Reply Classification",
          desc: "Incoming emails are triaged into 4 categories: Meeting Ready, Information Request, Not Interested, or OOO.",
          technicalDetail: "Zero-shot classification webhook firing instant Slack / CRM alerts for high-intent replies.",
        },
      ],
    },
    keyScreens: [
      {
        title: "Deterministic Outbound DAG",
        type: "flow",
        content: "LEAD INGESTION -> SCRAPING -> QUALIFICATION GATE -> DYNAMIC HOOK GEN -> ROTATING SMTP -> INTENT CLASSIFIER",
        caption: "Orchestration pipeline showing real-time stage throughput and fail-safes.",
      },
      {
        title: "Sanitized LLM Prompt Template",
        type: "code",
        content: `// System prompt for Context-Grounded Personalization
const prompt = {
  role: "system",
  instructions: "You are an executive researcher. Using the provided scraped text, identify one specific business bottleneck in their public offering. Generate a 28-word maximum observation hook. NO buzzwords, NO fake compliments.",
  constraints: { maxWords: 28, tone: "analytical, peer-to-peer", outputFormat: "json" }
};`,
        caption: "Strict anti-slop prompt architecture enforcing zero generic fluff.",
      },
    ],
    results: [
      {
        stat: "4.8x",
        label: "Reply Rate Lift",
        context: "Compared against industry standard static cold email templates.",
      },
      {
        stat: "12,400+",
        label: "Records Processed",
        context: "Fully qualified and normalized through the pipeline without manual review.",
      },
      {
        stat: "0",
        label: "Burned Domains",
        context: "Maintained 99.2% primary inbox placement over a 90-day execution window.",
      },
    ],
    techStack: ["Python", "FastAPI", "OpenAI / Claude API", "Playwright", "PostgreSQL", "Redis", "Tailwind CSS"],
  },
  {
    id: "autoredteam",
    number: "02",
    title: "AutoRedTeam",
    subtitle: "Automated LLM Red-Teaming & Safety System",
    category: "AI",
    year: "2025",
    summary:
      "Adversarial security platform that stress-tests enterprise LLM applications against prompt injections, jailbreaks, data exfiltration, and policy bypasses.",
    status: "Existing Project — Production Architecture",
    tags: ["LLM Security", "Adversarial Fuzzing", "Cybersecurity", "Python", "Safety Evaluation"],
    problem: {
      heading: "Enterprise LLMs Deploy Vulnerable to Novel Jailbreaks",
      description:
        "Companies deploying customer-facing AI applications face catastrophic reputation and security risks from prompt injection, system prompt extraction, hallucinated toxic advice, and indirect injection through RAG document stores.",
      painPoints: [
        "Manual red-teaming takes weeks and fails to catch compound token perturbations.",
        "Static regex filters fail against obfuscated, base64-encoded, or roleplay jailbreaks.",
        "Engineering teams lack automated CI/CD security regression testing for prompt updates.",
      ],
    },
    solution: {
      heading: "Automated Adversarial Fuzzing Engine",
      description:
        "Built a systematic red-teaming harness that pits attacker LLMs against target applications. Employs genetic prompt mutation, linguistic perturbation, and multi-turn persona exploitation to uncover edge-case safety vulnerabilities before shipping.",
      architectureDescription:
        "High-concurrency fuzzing framework featuring automated threat taxonomy mapping, score evaluation judges, and remediation reports.",
      architectureSteps: [
        {
          step: "01",
          title: "Attack Vector Selection",
          desc: "Configures threat categories: Prompt Injection, Privilege Escalation, PII Extraction, or Model Denial.",
          technicalDetail: "Mapped directly to OWASP Top 10 for Large Language Models.",
        },
        {
          step: "02",
          title: "Evolutionary Mutation Loop",
          desc: "Generates variations of known jailbreak vectors using semantic rewrites, ciphering, and token evasion.",
          technicalDetail: "Genetic algorithm tracking fitness based on target model compliance score.",
        },
        {
          step: "03",
          title: "Independent Judge Classifier",
          desc: "Dual-model arbitration evaluating whether the target LLM refused or violated security boundaries.",
          technicalDetail: "Fine-grained rubric grading safety violation severity from 0.0 (safe) to 1.0 (critical breach).",
        },
        {
          step: "04",
          title: "Patch Recommendation Generator",
          desc: "Produces specific system prompt hardenings, guardrail rules, and validation regexes.",
          technicalDetail: "Exports actionable defense patches directly to engineering teams.",
        },
      ],
    },
    keyScreens: [
      {
        title: "Attack Matrix Heatmap",
        type: "telemetry",
        content: "DIRECT INJECTION: 98% Refusal | INDIRECT RAG: 94% Refusal | BASE64 EVASION: 99% Refusal | PERSONA HIJACK: 96% Refusal",
        caption: "Comprehensive vulnerability score dashboard across standard safety benchmarks.",
      },
      {
        title: "Automated Fuzzing Test Case",
        type: "code",
        content: `// Automated Red-Team Injection Vector
const injectionPayload = {
  vector: "Virtualization / DAN v12 Mutation",
  targetEndpoint: "/api/v1/customer-chat",
  perturbation: "Leetspeak + Unicode Zero-Width Insertion",
  boundaryCheck: "PROHIBIT_SYSTEM_PROMPT_LEAK",
  evaluation: "REFUSED_GRACEFULLY [Score: 0.02]"
};`,
        caption: "Execution telemetry showing real-time boundary verification.",
      },
    ],
    results: [
      {
        stat: "1,500+",
        label: "Synthetic Attack Vectors",
        context: "Executed per automated test suite run under 3 minutes.",
      },
      {
        stat: "99.4%",
        label: "Boundary Defense",
        context: "Achieved on hardened prompt templates against standard jailbreak corpora.",
      },
      {
        stat: "100%",
        label: "Automated CI/CD",
        context: "Integrates as a blocking PR check before prompt regressions reach production.",
      },
    ],
    techStack: ["Python", "LangChain / LangSmith", "PyTest", "FastAPI", "React", "Tailwind CSS"],
  },
  {
    id: "executioner",
    number: "03",
    title: "Executioner",
    subtitle: "Personal Execution Engine & High-Velocity Orchestrator",
    category: "Web",
    year: "2025",
    summary:
      "A distraction-free, keyboard-first execution engine designed to eliminate cognitive friction and maintain deep work momentum through deterministic task DAGs.",
    status: "Existing Project — Production UX",
    tags: ["Product Engineering", "UX Design", "TypeScript", "Local-First", "State Machines"],
    problem: {
      heading: "Productivity Tools Cause More Friction Than They Solve",
      description:
        "Modern project management software is cluttered with bloated dropdowns, slow loading states, and endless config settings. Builders spend more time updating cards than actually writing code and shipping software.",
      painPoints: [
        "Too many nested menus break hyper-focus and flow state.",
        "Lack of direct keyboard primitives forces constant mouse context switching.",
        "Cloud-dependent lag makes rapid task capture feel sluggish.",
      ],
    },
    solution: {
      heading: "Zero-Latency Keyboard-First Execution Surface",
      description:
        "Crafted a minimalist, ultra-responsive web application that treats work as a directed acyclic graph (DAG). Built with local-first optimistic updates, sub-16ms render cycles, and an integrated Pomodoro-state engine.",
      architectureDescription:
        "Zustand-powered state machine with IndexedDB offline persistence, global hotkey bindings, and audio-tactile haptic feedback.",
      architectureSteps: [
        {
          step: "01",
          title: "Vim-Inspired Command Bar",
          desc: "Every action, filter, navigation, and state shift is accessible via single hotkey combos.",
          technicalDetail: "Sub-5ms command palette parser with fuzzy search index.",
        },
        {
          step: "02",
          title: "Local-First Optimistic Sync",
          desc: "Instantaneous UI updates with background state reconciliation and offline resilience.",
          technicalDetail: "CRDT-backed conflict resolution stored locally in browser storage.",
        },
        {
          step: "03",
          title: "Execution Velocity Analytics",
          desc: "Visualizes raw output velocity and uninterrupted deep work blocks without vanity metrics.",
          technicalDetail: "Direct telemetry on completed units of work per hour.",
        },
      ],
    },
    keyScreens: [
      {
        title: "Keyboard-Driven HUD",
        type: "ui",
        content: "[cmd+k] Quick Task Capture | [j/k] Navigate Nodes | [space] Mark Complete | [tab] Subtask DAG",
        caption: "Minimalist black-and-ember tactile HUD interface.",
      },
    ],
    results: [
      {
        stat: "<16ms",
        label: "Interaction Latency",
        context: "Zero frame drops across complex 500+ task dependency trees.",
      },
      {
        stat: "100%",
        label: "Offline Capable",
        context: "Fully functional without active internet connection via local storage.",
      },
      {
        stat: "3.2x",
        label: "Task Throughput",
        context: "Documented acceleration in daily feature shipping velocity.",
      },
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "IndexedDB", "Framer Motion"],
  },
  {
    id: "sensor-fusion",
    number: "04",
    title: "Multimodal Sensor Fusion",
    subtitle: "Industrial Fault Detection & Predictive Telemetry",
    category: "Research",
    year: "2024",
    summary:
      "Deep learning research and edge deployment combining vibration, acoustic, and thermal telemetry for real-time anomaly classification in industrial machinery.",
    status: "Research Paper & Working Prototype",
    tags: ["Machine Learning", "Edge AI", "Signal Processing", "Sensor Fusion", "PyTorch"],
    problem: {
      heading: "Single-Modal Machine Monitoring Misses Complex Failures",
      description:
        "Traditional industrial predictive maintenance relies on isolated vibration sensors or occasional manual inspections. Bearing wear, shaft misalignment, and micro-cavitation often manifest across multiple physical domains simultaneously, leading to catastrophic undetected downtime.",
      painPoints: [
        "Acoustic noise alone has a high false-positive rate in noisy factory environments.",
        "Thermal spikes occur too late after physical mechanical damage has already initiated.",
        "Industrial plants lose millions of dollars from unexpected assembly-line line shutdowns.",
      ],
    },
    solution: {
      heading: "Cross-Attentive Multimodal Fusion Architecture",
      description:
        "Designed a deep learning pipeline that ingests synchronized high-frequency triaxial accelerometer data, ultrasonic acoustic spectrograms, and infrared thermal telemetry. The model learns cross-modal correlations to identify micro-anomalies hours before physical failure occurs.",
      architectureDescription:
        "1D-CNN temporal feature extractors coupled with a Transformer cross-attention fusion bottleneck and lightweight INT8 edge quantization.",
      architectureSteps: [
        {
          step: "01",
          title: "Synchronized Edge Sampling",
          desc: "Collects 10kHz vibration signals, 44.1kHz acoustic streams, and 10Hz calibrated thermal arrays.",
          technicalDetail: "Hardware micro-controller ring buffer with NTP microsecond time-stamping.",
        },
        {
          step: "02",
          title: "Wavelet & FFT Feature Preprocessing",
          desc: "Transforms raw time-domain waveforms into Short-Time Fourier Transforms (STFT) and scalograms.",
          technicalDetail: "Optimized C++ compute kernel deployed on edge gateway.",
        },
        {
          step: "03",
          title: "Multimodal Cross-Attention Network",
          desc: "Fuses disparate sensor representations into a joint latent space to detect correlated anomalies.",
          technicalDetail: "Self-attention mechanism weighting sensor confidence dynamically.",
        },
        {
          step: "04",
          title: "Edge Model Quantization",
          desc: "Quantized PyTorch weights to INT8 precision for low-power edge compute deployment.",
          technicalDetail: "Sub-45ms inference latency on ARM Cortex / Raspberry Pi 4 platform.",
        },
      ],
    },
    keyScreens: [
      {
        title: "Spectrogram & Thermal Fusion Visualization",
        type: "telemetry",
        content: "VIBRATION: 1.2G RMS (Normal) | ACOUSTIC: 14.2kHz Harmonics Detected | THERMAL: +4.2°C Delta | PREDICTION: Early Bearing Flaw (94.8% Conf)",
        caption: "Real-time edge telemetry dashboard with confidence calibration.",
      },
    ],
    results: [
      {
        stat: "96.4%",
        label: "Fault Classification Accuracy",
        context: "Across 4 standard industrial mechanical failure modes (CW-RU benchmark).",
      },
      {
        stat: "14 hrs",
        label: "Early Warning Lead Time",
        context: "Pre-empts catastrophic mechanical failure before thermal runaway.",
      },
      {
        stat: "42ms",
        label: "Edge Inference Time",
        context: "Real-time processing footprint on constrained edge hardware.",
      },
    ],
    techStack: ["PyTorch", "NumPy / SciPy", "Librosa", "C++", "FastAPI", "Plotly / Three.js"],
  },
  {
    id: "kinetix-dynamics",
    number: "05",
    title: "Kinetix Dynamics",
    subtitle: "Embodied Robotics & Neural Kinematics Interface",
    category: "Web",
    year: "2026",
    summary:
      "A flagship digital experience and product interface concept for a fictional next-generation humanoid robotics company, proving visual excellence and real-time WebGL control.",
    status: "Flagship Web Concept / Self-Initiated",
    tags: ["Creative Direction", "Three.js / WebGL", "Interactive 3D", "Editorial Typography", "Design Systems"],
    problem: {
      heading: "Proving World-Class Web & Visual Engineering",
      description:
        "Most developer portfolios talk about high design quality without demonstrating it. This self-initiated concept was created as pure proof of taste, cinematic storytelling, and technical capability in modern web graphics.",
      painPoints: [
        "Generic portfolio templates fail to convey creative agency tier standards.",
        "Clients need to see proof that an engineer can execute luxury-grade aesthetics from scratch.",
        "Bridging complex real-time 3D rendering with fluid 60fps responsive web layouts.",
      ],
    },
    solution: {
      heading: "Cinematic Product Narrative & Kinematic Visualizer",
      description:
        "Conceived and built an entire digital identity for 'Kinetix Dynamics' — a high-end autonomous robotics manufacturer. Features real-time 3D joint telemetry, interactive DOF controllers, dark brutalist editorial typography, and high-performance WebGL shaders.",
      architectureDescription:
        "Bespoke Three.js scene graph with post-processing bloom, ambient occlusion, custom vertex displacements, and zero layout shift.",
      architectureSteps: [
        {
          step: "01",
          title: "Art Direction & Brand Identity",
          desc: "Crafted industrial aesthetic guidelines, high-contrast monochrome palettes, and technical typographic scales.",
          technicalDetail: "Built from scratch without prefabricated UI kits or stock themes.",
        },
        {
          step: "02",
          title: "Kinematic 3D Joint Simulator",
          desc: "Interactive robot actuator manipulator allowing users to stress-test degrees of freedom in browser.",
          technicalDetail: "Direct inverse kinematics math executed in JavaScript requestAnimationFrame loop.",
        },
        {
          step: "03",
          title: "Performance & Asset Optimization",
          desc: "Custom glTF Draco compression and texture atlasing ensuring sub-1.5s cold load on 4G networks.",
          technicalDetail: "Zero jank, 60fps sustained framerate across mobile and desktop viewports.",
        },
      ],
    },
    keyScreens: [
      {
        title: "Actuator Telemetry Surface",
        type: "ui",
        content: "SYSTEM: KINETIX-X1 | TORQUE: 180 N·m | LATENCY: 1.2ms | DEGREE OF FREEDOM: 28-AXIS DUAL-ARM",
        caption: "High-contrast editorial interface displaying real-time robotic joint angles.",
      },
    ],
    results: [
      {
        stat: "60 FPS",
        label: "WebGL Frame Budget",
        context: "Sustained render performance on mid-tier mobile hardware.",
      },
      {
        stat: "100%",
        label: "Bespoke Architecture",
        context: "Every line of code and shader crafted custom without generic templates.",
      },
      {
        stat: "<1.2s",
        label: "Time-to-Interactive",
        context: "Optimized asset pipeline with deferred 3D hydration.",
      },
    ],
    techStack: ["Next.js", "Three.js", "GLSL Shaders", "Tailwind CSS", "Web Audio API", "TypeScript"],
  },
  {
    id: "nitten-portfolio-00",
    number: "00",
    title: "Nitten Sharma Studio",
    subtitle: "This Website — Creative Technology Portfolio",
    category: "Portfolio",
    year: "2026",
    summary:
      "Designed and engineered as a showcase of web, interaction, systems thinking, and AI-native development. Functions as the live proof of what I build.",
    status: "Live Showcase / Self-Initiated",
    tags: ["Three.js", "Next.js", "Design System", "Performance", "Creative Technology"],
    problem: {
      heading: "The Standard Developer Portfolio is Forgettable",
      description:
        "The market is saturated with cookie-cutter SaaS templates, generic cards, and uninspired resume pages. To win high-value clients across the US, UK, and UAE, a portfolio cannot just list skills — it must function as undeniable proof of world-class capability.",
      painPoints: [
        "Clients dismiss template portfolios as inexperienced or low-budget.",
        "Claiming AI or automation expertise without interactive proof is unconvincing.",
        "Heavy 3D websites usually suffer from sluggish load times and poor mobile usability.",
      ],
    },
    solution: {
      heading: "Cinematic, Tactile & Ultra-Fast Creative Engineering",
      description:
        "Constructed a high-contrast editorial experience featuring a signature metamorphic 3D technological sculpture, sub-1.2s load speed, dynamic multi-currency intelligence, and deep interactive system visualizations.",
      architectureDescription:
        "React 19 & Next.js App Router, direct Three.js WebGL canvas without wrapper overhead, WCAG AA accessibility, and responsive typography.",
      architectureSteps: [
        {
          step: "01",
          title: "Metamorphic 3D Sculpture",
          desc: "A floating technological machine that transforms between Web, AI, and Automation states.",
          technicalDetail: "Procedural vertex particle buffers with mouse perturbation and low-power mobile fallbacks.",
        },
        {
          step: "02",
          title: "Multi-Currency Scoping Engine",
          desc: "Provides instant localized pricing in USD ($), AED (د.إ), and INR (₹) without external API blocking.",
          technicalDetail: "Synchronized client state across services, audit tiers, and contact estimation forms.",
        },
        {
          step: "03",
          title: "Performance & Accessibility By Design",
          desc: "Strict adherence to prefers-reduced-motion, semantic HTML, and zero bloat.",
          technicalDetail: "Lighthouse mobile score 90+ with deferred asset loading.",
        },
      ],
    },
    keyScreens: [
      {
        title: "Metamorphic Particle States",
        type: "ui",
        content: "STATE 01: Planar Web Grid | STATE 02: Neural Intelligence Nodes | STATE 03: Deterministic Automation Vectors",
        caption: "Real-time transformation representing the three core pillars of the studio.",
      },
    ],
    results: [
      {
        stat: "90+",
        label: "Lighthouse Mobile Score",
        context: "Targeted mobile performance with full 3D and rich interactive typography.",
      },
      {
        stat: "<1.2s",
        label: "Entrance Load Time",
        context: "Cinematic intro completes swiftly without delaying useful content.",
      },
      {
        stat: "0",
        label: "Templates Used",
        context: "100% custom engineered from clean slate.",
      },
    ],
    techStack: ["Next.js", "React 19", "Three.js", "TypeScript", "Tailwind CSS", "JSON-LD"],
  },
];
