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
      "Edgar Sosa is building a connected operating system for AI infrastructure, trading execution, and long-horizon wealth formation.",
      "The portfolio spans owned inference, automation control planes, financial tooling, and disciplined systems engineering across both enterprise work and founder-led ventures.",
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
        body: "SosaClaw gateway, a named agent fleet including APEX, LEDGER, and FRANKIE, plus a four-node home lab cluster running Ollama and Qdrant. The inference stack is owned end to end with no per-token dependency.",
        tone: "emerald",
      },
      {
        eyebrow: "Financial products",
        title: "Trading & Wealth",
        body: "Options trade management through TwoHittz Trade, automated BTC execution through BTC-BOT on BloFin, and Karpathy-loop desktop trading research organized under the Sosa Family Enterprise Trust.",
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
    title: "Public-safe work across infrastructure, finance, and systems.",
    emptyLinkLabel: "Private or internal",
    items: [
      {
        name: "SosaClaw",
        description: "AI agent gateway and orchestration platform",
        stack: ["TypeScript", "Node", "Cloudflare", "MCP"],
        status: "Active",
        tone: "active",
        href: "https://github.com/gitSITTI/SosaClaw",
        linkLabel: "GitHub repo ↗",
      },
      {
        name: "TwoHittz Trade",
        description: "Options trade management desktop app",
        stack: ["React", "Vite", "Tauri", "Cloudflare Workers"],
        status: "In Development",
        tone: "development",
      },
      {
        name: "BTC-BOT",
        description: "Automated BTC trading bot on BloFin",
        stack: ["React", "FastAPI", "CCXT"],
        status: "Active",
        tone: "active",
      },
      {
        name: "Karpathy-Loop Desktop Trade",
        description: "Desktop trading on the training-loop methodology",
        stack: ["Desktop"],
        status: "Active",
        tone: "active",
        href: "https://github.com/gitSITTI/Karpathy-Loop-Desktop-Trade",
        linkLabel: "GitHub repo ↗",
      },
      {
        name: "Hamza",
        description: "Playwright-based site audit and deep-interaction tool",
        stack: ["JavaScript", "Playwright", "TypeScript"],
        status: "Active",
        tone: "active",
        href: "https://github.com/gitSITTI/Hamza",
        linkLabel: "GitHub repo ↗",
      },
      {
        name: "TwoHittz",
        description: "Brand site with Cloudflare Pages, Email Workers, D1, and R2",
        stack: ["Cloudflare Pages", "D1", "R2"],
        status: "Shipped",
        tone: "shipped",
        href: "https://twohittz.com",
        linkLabel: "Open project ↗",
      },
      {
        name: "LegalAid",
        description: "Self-represented litigant assistance tooling",
        stack: ["MCP", "Cloudflare"],
        status: "Planning",
        tone: "planning",
      },
      {
        name: "Math Teaching",
        description: "Math instruction content and curriculum",
        stack: ["Video", "Notion"],
        status: "Active",
        tone: "active",
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
        description: "Systems Engineering & Integration Technology on a major defense aerospace program",
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
      "He builds AI agent infrastructure, trading tools, and automation systems across ClawLabs, ClawOps, and TwoHittz, running on a self-owned home lab cluster and a Cloudflare-native control plane.",
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
