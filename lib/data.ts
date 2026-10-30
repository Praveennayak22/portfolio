// ============================================================
// lib/data.ts – single source of truth for all portfolio content
// ============================================================

export const siteConfig = {
  name: "Praveen Kumar",
  title: "AI & Python Developer",
  tagline: "I build AI-powered tools and dependable Python systems that solve real problems.",
  description:
    "From LLM pipelines to FastAPI backends — I turn complex requirements into working software.",
  email: "praveenthepredator@gmail.com",
  github: "https://github.com/Praveennayak22",
  linkedin: "https://www.linkedin.com/in/praveen-kumar-52b41828b/",
  education: "B.Tech. Artificial Intelligence · IIT Gandhinagar · 2023–2027",
  cpi: "7.21 / 10",
};

export const services = [
  {
    icon: "Bot",
    title: "AI Agents & LLM Applications",
    short: "Custom GPT/Claude-powered workflows that work reliably in production.",
    description:
      "I design and build LLM-driven applications — from intelligent document processors to multi-step reasoning pipelines. Whether you need a RAG system, an AI agent, or a domain-specific chatbot, I architect it with reliable validation, structured outputs, and real compiler or rule-based verification.",
    benefits: [
      "Automate complex knowledge-work tasks",
      "Structured JSON outputs from unstructured inputs",
      "Compiler-backed or rule-based answer validation",
    ],
    tech: ["OpenAI / Claude / Qwen APIs", "LangChain", "Prompt Engineering", "Python"],
  },
  {
    icon: "Zap",
    title: "Python Automation & Custom Scripts",
    short: "Eliminate repetitive tasks with robust, well-tested automation.",
    description:
      "Need a script that processes thousands of files reliably overnight? I build batch-processing systems with checkpointing, retries, and error recovery so your workflows don't silently fail. Tested with pytest, documented, and maintainable.",
    benefits: [
      "Save dozens of hours per week",
      "Zero-loss processing with checkpointing",
      "Reliable error handling and logging",
    ],
    tech: ["Python", "pytest", "Pandas / NumPy", "SLURM / HPC", "Docker"],
  },
  {
    icon: "Brain",
    title: "Machine Learning Solutions",
    short: "Practical ML models — trained, validated, and ready to ship.",
    description:
      "From multimodal classification systems to fine-tuned transformer models, I build ML solutions grounded in proper experimental methodology — ablation studies, metric tracking, and clear evaluation on held-out data.",
    benefits: [
      "Measurable accuracy improvements",
      "Ablation studies to validate design choices",
      "Hugging Face ecosystem integration",
    ],
    tech: ["PyTorch", "Hugging Face", "CLIP / IndicBERT / VGG-19", "Computer Vision", "NLP"],
  },
  {
    icon: "Server",
    title: "Backend APIs & FastAPI Development",
    short: "Production-grade REST APIs with testing, docs, and clean architecture.",
    description:
      "I build FastAPI backends with 40+ endpoints, full test suites, and proper SQL integration. Whether you need a standalone microservice or a data-ingestion API, I deliver well-documented, type-safe code your team can extend.",
    benefits: [
      "Fully documented OpenAPI specs",
      "50+ automated tests per project",
      "Clean architecture, easy to maintain",
    ],
    tech: ["FastAPI", "Python", "MySQL / PostgreSQL", "REST APIs", "pytest"],
  },
  {
    icon: "GitBranch",
    title: "Data Pipelines & ETL Automation",
    short: "Multi-stage data workflows that scale to millions of records.",
    description:
      "I design end-to-end data pipelines covering ingestion, transformation, validation, and export — using SLURM for HPC or Kubernetes for cloud-native deployments. Built for reproducibility and fault tolerance.",
    benefits: [
      "Process 100K+ records reliably",
      "Schema normalization across heterogeneous sources",
      "Failure-resume and timestamp checkpointing",
    ],
    tech: ["Python", "Parquet / JSONL", "Hugging Face Datasets", "SLURM", "Kubernetes"],
  },
  {
    icon: "FileSearch",
    title: "Intelligent Document Processing",
    short: "Extract, analyze, and act on information locked inside PDFs.",
    description:
      "I build document-intelligence systems that extract text and images from complex PDFs, apply LLM reasoning, and produce structured, auditable outputs. Built-in missing-data flagging means you always know what the AI found — and what it didn't.",
    benefits: [
      "Structured JSON from complex PDFs",
      "Explicit flagging of missing / uncertain data",
      "Significant reduction in manual review time",
    ],
    tech: ["pdfplumber", "Claude API", "Python", "JSON schema validation"],
  },
];

export const projects = [
  {
    id: "bigmath",
    title: "BigMath — Verified AI Training Data Pipeline",
    tagline: "7-stage synthetic math data pipeline for LLM post-training",
    description:
      "Designed and orchestrated an end-to-end pipeline processing 100K+ mathematical problems across 10+ datasets (DeepMath, LIMO, AIME, TheoremQA, etc.). Covers MCQ conversion, Evol-Instruct scaling with 5 mutation strategies, teacher reasoning generation, symbolic verification, and difficulty tagging — producing 53K+ verified reasoning traces.",
    problem:
      "High-quality, verified reasoning data for training math-capable LLMs is expensive to curate at scale.",
    achievement:
      "Fixed teacher-output parsing failures, improving verifiable coverage from 3.5% → 96.5%+. Ran 1000+ SLURM jobs with full failure-resume support.",
    tech: ["Python", "Kimi-K2.5 / DeepSeek-V3.2 APIs", "Hugging Face Datasets", "Parquet", "SLURM"],
    github: "https://github.com/Praveennayak22/Post-Training_Synthetic_Data_Pipeline-Code_and_Mathematics",
    category: "AI / Data Engineering",
    highlight: true,
  },
  {
    id: "meme",
    title: "Multilingual Harmful Meme Detection",
    tagline: "Multimodal classifier across Hindi, Telugu, Tamil & Kannada",
    description:
      "Curated and annotated 13,700+ multilingual memes, creating the first open-source benchmark datasets for Telugu and Kannada harmful meme detection. Implemented a MOMENTA-inspired multimodal pipeline integrating IndicBERT, CLIP, VGG-19, OCR, and ConceptNet knowledge graphs.",
    problem:
      "No open benchmark or automated classifier existed for harmful memes in most Indic languages.",
    achievement:
      "3–4% Macro-F1 gains via ConceptNet enrichment on all four languages. Built a full-stack web app (FastAPI + JavaScript) for live inference.",
    tech: ["PyTorch", "IndicBERT", "CLIP", "VGG-19", "OCR", "FastAPI", "NLP"],
    github: "https://github.com/Praveennayak22/Multilingual-Memes-Classification-Harmful-Non-Harmful-",
    category: "NLP / Computer Vision",
    highlight: true,
  },
  {
    id: "ddr",
    title: "AI Diagnostic Report Generator",
    tagline: "LLM-powered PDF extraction → structured diagnostic reports",
    description:
      "Built a document-intelligence system that extracts text and images from inspection and thermal PDFs, then uses the Claude API to assemble a seven-section diagnostic report in structured JSON — explicitly flagging missing or ambiguous data.",
    problem:
      "Engineers manually reviewing inspection PDFs spend hours extracting and formatting data prone to human error.",
    achievement:
      "Produces fully structured, auditable JSON reports with explicit missing-data flags — automating a previously manual extraction and summarization workflow.",
    tech: ["Python", "pdfplumber", "Claude API", "JSON schema", "PDF processing"],
    github: "https://github.com/Praveennayak22/ddr-report-generator",
    category: "AI Document Processing",
    highlight: true,
  },
  {
    id: "transpiler",
    title: "LLM Code Transpilation Pipeline",
    tagline: "Compiler-validated cross-language translation at scale",
    description:
      "Architected a repository-level transpilation pipeline using a two-queue threaded design integrating AST dependency analysis, real compiler validation (gcc, javac, tsc), and an automated compiler-feedback retry loop. Scaled to process 1.8M+ files and 6.1B tokens across 72 language pairs.",
    problem:
      "Deterministic AST transpilation fails at semantic gaps; LLMs alone hallucinate without compiler feedback.",
    achievement:
      "Hybrid LLM + compiler-feedback approach covering 9 languages (Python, C, C++, Java, JS, Ruby, PHP, TypeScript, C#) via 36 Kubernetes pods processing 180 concurrent requests.",
    tech: ["Python", "GPT-O3 / Qwen3-30B", "AST analysis", "Kubernetes", "SLURM", "gcc / javac / tsc"],
    github: "https://github.com/Praveennayak22/Code_Transpilers",
    category: "AI Engineering",
    highlight: true,
  },
  {
    id: "dbms",
    title: "ACID-Compliant B+ Tree Database Engine",
    tagline: "Custom DBMS with crash recovery and concurrency control",
    description:
      "Designed a B+ Tree storage engine from scratch with O(log n) operations, full ACID transaction support via Write-Ahead Logging, shared/exclusive lock-based concurrency control, ARIES-inspired crash recovery, and a FastAPI layer exposing 40+ REST endpoints.",
    problem:
      "Understanding and implementing production-grade database internals requires building from first principles.",
    achievement:
      "Validated correctness through 50+ unit, integration, concurrency, and failure-recovery tests covering mid-transaction crashes and concurrent read-write race conditions.",
    tech: ["Python", "FastAPI", "MySQL", "WAL", "B+ Tree", "REST APIs", "pytest"],
    github: "https://github.com/Praveennayak22/DBMS-PROJECT",
    category: "Systems / Backend",
    highlight: false,
  },
  {
    id: "autostream",
    title: "AutoStream Social-to-Lead Agent",
    tagline: "AI agent converting social signals into qualified leads",
    description:
      "Built an AI-powered lead-generation agent that monitors social media signals, classifies purchase intent, and converts engagement into structured lead data for sales pipelines.",
    problem:
      "Manually tracking social media for purchase signals and converting them to CRM entries is time-consuming and error-prone.",
    achievement:
      "Automated end-to-end social signal detection, classification, and lead capture pipeline.",
    tech: ["Python", "LLM APIs", "FastAPI", "Automation"],
    github: "https://github.com/Praveennayak22/autostream-chatbot",
    category: "AI Agents",
    highlight: false,
  },
];

export const experience = [
  {
    role: "Technical Staff Intern",
    company: "Soket AI Labs",
    period: "Jul 2026 – Sep 2026",
    type: "Internship",
    bullets: [
      "Evaluated deterministic transpilation across 9 programming languages, benchmarking AST mappers and identifying semantic-gap limitations that motivated a hybrid LLM approach (GPT-O3/Qwen3-30B).",
      "Architected a repository-level transpilation pipeline using a two-queue threaded design, integrating AST dependency analysis, real compiler validation (gcc, javac, tsc), and an automated compiler-feedback retry loop.",
      "Scaled distributed execution across SLURM and Kubernetes for all 72 language pairs — engineered a sliding-window batch controller (36 pods, 180 concurrent requests) to process 1.8M+ files and 6.1B tokens.",
      "Diagnosed and resolved critical production bottlenecks including multi-threaded queue race conditions, Kubernetes naming collisions, and LLM request timeouts; implemented file-level checkpointing to ensure zero data loss on pod evictions.",
    ],
    tech: ["Python", "LLM APIs", "Kubernetes", "SLURM", "AST Analysis", "Compiler Validation"],
  },
];

export const skills: Record<string, string[]> = {
  "Programming": ["Python", "C", "TypeScript"],
  "AI & LLMs": ["PyTorch", "LLM APIs (OpenAI / Claude / Qwen)", "Prompt Engineering", "Multimodal ML", "RAG", "Hugging Face"],
  "NLP & Vision": ["IndicBERT", "CLIP", "VGG-19", "OCR", "ConceptNet", "NLP Pipelines"],
  "Backend & APIs": ["FastAPI", "REST APIs", "MySQL", "PostgreSQL", "pytest"],
  "Data Engineering": ["Pandas", "NumPy", "Parquet", "JSONL", "SQL", "pdfplumber"],
  "Infrastructure": ["Docker", "Kubernetes", "SLURM", "Linux", "Git", "HPC"],
};

export const achievements = [
  {
    title: "IIT Gandhinagar Explorer Fellowship",
    description: "Competitive experiential learning programme for real-world AI research, selected from across IIT Gandhinagar.",
  },
  {
    title: "Dakshana Foundation Scholar (2023–24)",
    description: "National entrance exam — ranked in the top 1% of candidates across India.",
  },
];

export const workflowSteps = [
  {
    step: "01",
    title: "Understand Your Requirements",
    description:
      "I start by listening carefully. I ask detailed questions to understand the problem you're solving, the constraints you're working with, and what success looks like for your project.",
  },
  {
    step: "02",
    title: "Plan the Technical Solution",
    description:
      "Before writing a line of code, I map out the architecture, select appropriate tools, and share a clear plan. No surprises mid-project.",
  },
  {
    step: "03",
    title: "Build Iteratively",
    description:
      "I develop in stages with regular updates. You see progress early and can give feedback throughout — not just at the end.",
  },
  {
    step: "04",
    title: "Test & Validate",
    description:
      "Every deliverable is tested against real inputs. For AI systems, I validate on edge cases and document known limitations honestly.",
  },
  {
    step: "05",
    title: "Deliver & Document",
    description:
      "Clean, commented code with a README and setup instructions. You'll know how to run, maintain, and extend what I build.",
  },
];
