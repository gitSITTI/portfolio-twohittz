export type HeroContent = {
  eyebrow: string;
  headline: string;
  subhead: string;
  paragraphs: string[];
  primaryCta: string;
  secondaryCta: string;
  secondaryHref: string;
  statusLabel: string;
  statusValue: string;
  metrics: Array<{
    label: string;
    value: string;
    live?: boolean;
  }>;
};

export type BuildColumn = {
  eyebrow: string;
  title: string;
  body: string;
  tone: "emerald" | "amber" | "bone";
};

export type Project = {
  name: string;
  description: string;
  stack: string[];
  status: string;
  tone: "active" | "development" | "planning" | "shipped";
  href?: string;
  linkLabel?: string;
};

export type InfrastructureNode = {
  title: string;
  description: string;
};

export type AboutLink = {
  label: string;
  href: string;
};

export type ContentModel = {
  site: {
    title: string;
    domain: string;
  };
  navigation: {
    intro: string;
    projects: string;
    stack: string;
    about: string;
  };
  hero: HeroContent;
  build: {
    eyebrow: string;
    title: string;
    columns: BuildColumn[];
  };
  projects: {
    eyebrow: string;
    title: string;
    emptyLinkLabel: string;
    items: Project[];
  };
  infrastructure: {
    eyebrow: string;
    title: string;
    feederLabel: string;
    arrows: {
      down: string;
      right: string;
    };
    feeder: InfrastructureNode;
    chain: InfrastructureNode[];
  };
  about: {
    eyebrow: string;
    title: string;
    photoAlt: string;
    photoInitials: string;
    photoSrc?: string;
    paragraphs: string[];
    links: AboutLink[];
  };
  footer: {
    left: string;
    right: string;
  };
};

export const content: ContentModel = {
  site: {
    title: "Edgar Sosa",
    domain: "portfolio.twohittz.com",
  },
  navigation: {
    intro: "Overview",
    projects: "Projects",
    stack: "Infrastructure",
    about: "About",
  },
  hero: {
    eyebrow: "Public portfolio",
    headline: "Building generational wealth infrastructure.",
    subhead: "Systems engineer. Founder. AI architect.",
    paragraphs: [
      "Edgar Sosa is building a connected operating system for AI infrastructure, automation, and long-horizon wealth formation.",
      "The portfolio spans owned inference, public software, education work, and disciplined systems engineering across both enterprise work and founder-led ventures.",
    ],
    primaryCta: "View Projects",
    secondaryCta: "hub.twohittz.com ↗",
    secondaryHref: "https://hub.twohittz.com",
    statusLabel: "Current focus",
    statusValue: "Public ecosystem overview",
    metrics: [
      {
        label: "Control plane",
        value: "SosaClaw",
        live: true,
      },
      {
        label: "Owned inference",
        value: "Home lab cluster",
      },
      {
        label: "Operating vehicle",
        value: "Sosa Family Enterprise Trust",
      },
    ],
  },
  build: {
    eyebrow: "What I build",
    title: "Three operating domains, one control philosophy.",
    columns: [
      {
        eyebrow: "AI infrastructure",
        title: "Agent Platforms",
        body: "SosaClaw gateway, a named agent fleet, and a four-node home lab cluster running Ollama and Qdrant. The inference stack is owned end to end with no per-token dependency.",
        tone: "emerald",
      },
      {
        eyebrow: "Financial products",
        title: "Planning & Operations",
        body: "Financial tooling spans dividend and income planning dashboards, portfolio modeling, and private trade-management systems organized under the Sosa Family Enterprise Trust.",
        tone: "amber",
      },
      {
        eyebrow: "Systems engineering",
        title: "Systems Engineering",
        body: "Boeing SEIT work across requirements management, test and verification, cross-functional coordination, and build and release tracking on a major defense aerospace program using Digital.ai Agility.",
        tone: "bone",
      },
    ],
  },
  projects: {
    eyebrow: "Selected projects",
    title: "Public-safe work across infrastructure, tools, education, and systems.",
    emptyLinkLabel: "Private or internal",
    items: [
      {
        name: "SosaClaw",
        description: "AI agent gateway and orchestration platform",
        stack: ["TypeScript", "Node", "Cloudflare Tunnel", "MCP"],
        status: "Active",
        tone: "active",
        href: "https://claw.twohittz.com",
        linkLabel: "Live gateway ↗",
      },
      {
        name: "Hamza",
        description: "Playwright-based site audit, capture, and deep-interaction tool",
        stack: ["JavaScript", "Playwright", "TypeScript"],
        status: "Active",
        tone: "active",
        href: "https://github.com/gitSITTI/Hamza",
        linkLabel: "GitHub repo ↗",
      },
      {
        name: "paperclip",
        description: "Open-source orchestration for zero-human companies",
        stack: ["TypeScript", "Node", "CLI", "Playwright"],
        status: "Active",
        tone: "active",
        href: "https://github.com/gitSITTI/paperclip",
        linkLabel: "GitHub repo ↗",
      },
      {
        name: "hub-twohittz",
        description: "Cloudflare-native ops dashboard with D1-backed project inventory and status checks",
        stack: ["React", "Vite", "D1", "Cloudflare Pages"],
        status: "Active",
        tone: "active",
        href: "https://hub.twohittz.com",
        linkLabel: "Open dashboard ↗",
      },
      {
        name: "portfolio-twohittz",
        description: "Public portfolio and ecosystem overview deployed on Cloudflare Pages",
        stack: ["React", "Vite", "Tailwind", "Cloudflare Pages"],
        status: "Active",
        tone: "active",
        href: "https://portfolio.twohittz.com",
        linkLabel: "Open site ↗",
      },
      {
        name: "Video Transcriber",
        description: "Video transcription and AI-generated summary workflow for uploaded media",
        stack: ["React", "TypeScript", "Vite", "Gemini"],
        status: "Shipped",
        tone: "shipped",
      },
      {
        name: "ImmiGuide",
        description: "Bilingual immigration paperwork assistant with process tracking and form guidance",
        stack: ["React", "TypeScript", "Express", "Gemini"],
        status: "Shipped",
        tone: "shipped",
      },
      {
        name: "DocStyles",
        description: "APA formatting engine for turning rough drafts into styled academic documents",
        stack: ["React", "TypeScript", "docx", "jspdf"],
        status: "Shipped",
        tone: "shipped",
      },
      {
        name: "legalAID-Docs",
        description: "AI-assisted legal document workspace with Express-backed services for document handling, analysis, and self-help legal workflows",
        stack: ["React", "TypeScript", "Express", "Gemini"],
        status: "Active",
        tone: "active",
      },
      {
        name: "TESTy",
        description: "Study and memorization companion built around multi-mode practice and mastery workflows",
        stack: ["React", "TypeScript", "Vite", "Gemini"],
        status: "Shipped",
        tone: "shipped",
      },
      {
        name: "Eyes",
        description: "AI-powered study browser (Lumina) for browsing content, highlighting passages, and generating recall tests from web material",
        stack: ["React", "TypeScript", "Vite", "Gemini"],
        status: "Shipped",
        tone: "shipped",
      },
      {
        name: "Division Inventory Tracker",
        description: "OCR-assisted inventory parser and build-planning scaffold for The Division",
        stack: ["Next.js", "TypeScript", "Tesseract.js"],
        status: "In Development",
        tone: "development",
      },
      {
        name: "kicomav",
        description: "Open-source antivirus and malware detection engine — Python package with scanning, disinfection, and tooling for defensive security research",
        stack: ["Python"],
        status: "Shipped",
        tone: "shipped",
        href: "https://github.com/gitSITTI/kicomav",
        linkLabel: "GitHub repo ↗",
      },
      {
        name: "Financial Planning Tools",
        description: "Dividend, DCA, and income planning dashboards built around public portfolio modeling workflows",
        stack: ["React", "Next.js", "Google Sheets", "Recharts"],
        status: "Shipped",
        tone: "shipped",
        href: "https://github.com/gitSITTI/Google-Dividend-sheet",
        linkLabel: "GitHub repo ↗",
      },
      {
        name: "CSC-232 / C++ Coursework",
        description: "Grouped university work across C++ classes, recursion, data structures, sorting, and formal languages",
        stack: ["C++", "CMake", "GoogleTest", "React"],
        status: "Shipped",
        tone: "shipped",
      },
      {
        name: "Home Lab Cluster",
        description: "Four-node GMKtec NucBox cluster running Ollama, Qdrant, and Cloudflare Tunnel",
        stack: ["GMKtec", "Ollama", "Qdrant"],
        status: "Active",
        tone: "active",
      },
      {
        name: "Boeing SEIT",
        description: "Systems engineering work on a major defense aerospace program",
        stack: ["Digital.ai Agility", "Systems Engineering"],
        status: "Active",
        tone: "active",
      },
    ],
  },
  infrastructure: {
    eyebrow: "Infrastructure stack",
    title: "A public view of the operating stack behind the portfolio.",
    feederLabel: "Feeds owned inference into the gateway layer",
    arrows: {
      down: "↓",
      right: "→",
    },
    feeder: {
      title: "Home Lab Cluster",
      description: "Four-node cluster running Ollama, Qdrant, and Cloudflare Tunnel for owned inference, retrieval, and secure access.",
    },
    chain: [
      {
        title: "Supabase Open Brain",
        description: "Public-facing memory and workspace layer for the broader operating system.",
      },
      {
        title: "SosaClaw Gateway",
        description: "Agent routing, orchestration, and control plane for named tools and execution paths.",
      },
      {
        title: "n8n Scheduler",
        description: "Scheduled automation, follow-up logic, and durable workflow coordination.",
      },
    ],
  },
  about: {
    eyebrow: "About",
    title: "Builder. Engineer. Founder.",
    photoAlt: "Edgar Sosa placeholder portrait",
    photoInitials: "ES",
    paragraphs: [
      "Edgar Sosa is a Systems Engineering and Integration Technology analyst at Boeing working on a major defense aerospace program, and the founder of the Sosa Family Enterprise Trust, a generational wealth structure targeting long-term compound growth.",
      "He builds AI agent infrastructure, financial tooling, and automation systems across ClawLabs, ClawOps, and TwoHittz, running on a self-owned home lab cluster and a Cloudflare-native control plane.",
      "Based in Berkeley, Missouri.",
    ],
    links: [
      {
        label: "GitHub ↗",
        href: "https://github.com/gitSITTI",
      },
      {
        label: "hub.twohittz.com ↗",
        href: "https://hub.twohittz.com",
      },
      {
        label: "twohittz.com ↗",
        href: "https://twohittz.com",
      },
    ],
  },
  footer: {
    left: "© 2026 Edgar Sosa · Sosa Family Enterprise Trust",
    right: "portfolio.twohittz.com · Built on Cloudflare",
  },
};
