import { IProject } from "../models"

export default {
  "RAG-OPS": {
    id: "RAG-OPS",
    cover_image: "projects/generic/cover.png",
    images: [],
    name: "RAG-OPS",
    about: [
      "Built RAG-OPS, a RAG retrieval benchmarking platform that measures chunking, embedding, and retrieval quality across labeled datasets and visualizes results through a Streamlit-based workflow.",
      "Extended it into a production-style system with FastAPI, async workers, PostgreSQL, Redis, persisted run history, credential-secured API execution, and reporting and monitoring support.",
    ],
    short_desc: "RAG retrieval benchmarking platform measuring chunking, embedding, and retrieval quality with a production-style FastAPI backend.",
    platform: "Web",
    role: "Full-Stack Development",
    category: "Project",
    isFeatured: true,
    links: {
      git: { link: "https://github.com/sujal7103/RAG-OPS" },
    },
    tools: ["py", "fastapi", "postgresql", "redis", "docker"],
    year: 2025,
    isVisible: true
  },
  "Homos.Ai": {
    id: "Homos.Ai",
    cover_image: "projects/bangajs/cover.png",
    images: [
      "projects/bangajs/image-1.png",
      "projects/bangajs/image-2.png",
    ],
    name: "Homos.Ai",
    about: [
      "Architected and deployed a production-grade AI SaaS platform enabling users to generate full-stack web applications from natural language prompts, leveraging Next.js 15, React 19, tRPC for end-to-end type safety, and Prisma ORM with PostgreSQL for data persistence.",
      "Engineered a multi-agent AI orchestration system using Inngest Agent Kit with GPT-4, implementing custom tools for terminal execution, file system operations, and real-time code generation within isolated E2B cloud sandboxes with automatic Next.js environment provisioning.",
      "Implemented secure, scalable infrastructure featuring Clerk authentication with role-based billing, rate-limited API access using Prisma-backed credit system, Docker containerization, and CI/CD pipeline with Vercel for zero-downtime deployments.",
      "Built real-time collaborative features including live preview URLs for generated projects, WebSocket-based message streaming, optimistic UI updates with TanStack Query, and comprehensive error boundaries with graceful fallback states."
    ],
    short_desc: "AI SaaS platform generating production Next.js apps from natural language using GPT-4 and multi-agent orchestration.",
    platform: "Web",
    role: "Full-Stack Development",
    category: "Project",
    isFeatured: true,
    links: {
      git: { link: "https://github.com/sujal7103/HOMOS.AI.git" },
      web: { link: "https://homosai.vercel.app" },
    },
    tools: ["nextjs", "react", "ts", "postgresql", "docker"],
    year: 2025,
    isVisible: true
  },
  "CryptoExplorer": {
    id: "CryptoExplorer",
    cover_image: "projects/bangadocs/cover.png",
    images: [
      "projects/bangadocs/image-1.png",
      "projects/bangadocs/image-2.png",
    ],
    name: "CryptoExplorer",
    about: [
      "Architected and deployed a production-grade cryptocurrency market analysis platform with interactive calendar visualization, leveraging Next.js 14 App Router, React 18, TypeScript for type safety, and Tailwind CSS with glass morphism design for a modern user experience.",
      "Engineered a sophisticated real-time data pipeline integrating Binance REST APIs with HMAC SHA256 authentication, implementing automatic retry logic, graceful degradation with mock data fallbacks, and 60-second auto-refresh intervals for live market tracking.",
      "Implemented advanced technical analysis features including volatility heatmaps, comprehensive dashboard with OHLCV data visualization, liquidity metrics, and technical indicators (SMA, EMA, RSI, MACD, Bollinger Bands).",
    ],
    short_desc: "Cryptocurrency market analysis platform with real-time Binance API integration, volatility heatmaps, and advanced technical indicators.",
    platform: "Web",
    role: "Full-Stack Development",
    category: "Project",
    isFeatured: false,
    links: {
      git: { link: "https://github.com/sujal7103/Market-Seasonality-Explorer.git" },
      web: { link: "https://market-seasonality-explorer-beryl.vercel.app/" },
    },
    tools: ["ts", "react", "nextjs", "tailwind"],
    year: 2025,
    isVisible: true
  },
  "CreatiFlow": {
    id: "CreatiFlow",
    cover_image: "projects/mygrade/cover.png",
    images: [
      "projects/mygrade/image-1.png",
      "projects/mygrade/image-2.png",
    ],
    name: "CreatiFlow",
    about: [
      "Creative digital agency landing page with smooth scroll animations, animated text effects, and modern design.",
      "Built with modern frontend tooling focusing on performance, motion design, and clean UI.",
    ],
    short_desc: "Creative digital agency landing page with smooth scroll animations, animated text effects, and modern design.",
    platform: "Web",
    role: "Frontend",
    category: "Project",
    isFeatured: false,
    links: {
      git: { link: "https://github.com/sujal7103/CreatiFlow-Landing-Page.git" },
      web: { link: "https://creati-flow-landing-page.vercel.app" },
    },
    tools: ["js", "ts"],
    year: 2024,
    isVisible: true
  },
  "portfolio-site": {
    id: "portfolio-site",
    cover_image: "projects/Sujal/cover.png",
    images: [
      "projects/Sujal/image-1.png",
      "projects/Sujal/image-2.png",
    ],
    name: "Portfolio Site",
    about: [
      "This is literally the site you're on. Built with simplicity in mind to achieve a minimalistic design that matches my personality.",
    ],
    short_desc: "My portfolio website",
    platform: "Web",
    role: "Frontend | Design",
    category: "Project",
    isFeatured: false,
    links: {
      git: { link: "https://github.com/sujal7103/Portfolio.git" },
      web: { link: "https://sujalpatil.me" },
    },
    tools: ["ang", "ts"],
    year: 2024,
    isVisible: true
  },
} as { [id: string]: IProject }
