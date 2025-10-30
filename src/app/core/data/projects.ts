import { IProject } from "../models"

export default {
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
      "Implemented secure, scalable infrastructure featuring Clerk authentication with role-based billing, rate-limited API access using Prisma-backed credit system (5-100 requests/user), Docker containerization, and CI/CD pipeline with Vercel for zero-downtime deployments.",
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
    tools: ["js",],
    year: 2023,
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
    
     "Engineered a sophisticated real-time data pipeline integrating Binance REST APIs with HMAC SHA256 authentication, implementing automatic retry logic, graceful degradation with mock data fallbacks, and 60-second auto-refresh intervals for live market tracking across daily, weekly, and monthly timeframes.",
    
     "Implemented advanced technical analysis features including volatility heatmaps with color-coded indicators (0-2% low, 2-5% medium, 5%+ high), comprehensive dashboard with OHLCV data visualization, liquidity metrics, technical indicators (SMA, EMA, RSI, MACD, Bollinger Bands), and performance comparison tools.",
    
     "Built accessible and responsive interface with WCAG 2.1 AA compliance featuring keyboard navigation (arrow keys, Escape), three theme modes (default, high-contrast, colorblind-friendly), localStorage persistence for user preferences, and comprehensive Jest/React Testing Library test suite achieving 70%+ code coverage."
    ],
    short_desc: "Cryptocurrency market analysis platform with interactive calendar visualization, real-time Binance API integration, and advanced technical indicators.",
    platform: "Web",
    role: "Full-Stack Development",
    category: "Project",
    isFeatured: false,
    links: {
      git: { link: "https://github.com/sujal7103/Market-Seasonality-Explorer.git" },
       web: { link: "https://market-seasonality-explorer-beryl.vercel.app/" },
    },
    tools: ["typescript",
    "react", 
    "nextjs",
    "tailwind",
    "jest",
    "axios"],
    year: 2025,
    isVisible: true
  },
  "CreatiFlow": {
    id: "CreatiFlow",
    cover_image: "projects/mygrade/cover.png",
    images: [
      "projects/mygrade/image-1.png",
      "projects/mygrade/image-2.png",
      "projects/mygrade/image-3.png",
    ],
    name: "CreatiFlow",
    about: [
      "Creative Digital Agency Landing Page",
      "Modern landing page with smooth animations and interactive UI",
    ],
    short_desc: "A creative digital agency landing page featuring smooth scroll animations, animated text effects, and modern design.",
    platform: "Web",
    role: "Frontend",
    category: "Project",
    isFeatured: true,
    links: {
      git: { link: "https://github.com/sujal7103/CreatiFlow-Landing-Page.git" },
      web: { link: "https://creati-flow-landing-page.vercel.app" },
    },
    tools: ["ionic", "ts", "fbase"],
    year: 2018,
    isVisible: true
  },
  "portfolio-site": {
    id: "portfolio-site",
    cover_image: "projects/Sujal/cover.png",
    images: [
      "projects/Sujal/image-1.png",
      "projects/Sujal/image-2.png",
      "projects/Sujal/image-3.png",
    ],
    name: "sujalpatil.dev",
    about: [
      "This is literally the site you're on. Built with simplicity in mind to achieve a minimalistic design that matches my personality.",
    ],
    short_desc: "My portfolio website",
    platform: "Web",
    role: "Frontend | Design",
    category: "Project",
    isFeatured: false,
    links: {
      git: { link: "https://github.com/sujal7103/portfolio-site" },
      web: { link: "https://sujalpatil.me" },
    },
    tools: ["angular", "typescript", "scss"],
    year: 2021,
    isVisible: true
  },
  "table-tennis-recorder": {
    id: "table-tennis-recorder",
    cover_image: "projects/generic/cover.png",
    images: [
      "projects/ping-pong/image-1.png",
      "projects/ping-pong/image-2.png",
      "projects/ping-pong/image-3.png",
    ],
    name: "PingPong",
    about: [
      "A web application for recording points of multiple players in a table tennis tournament. It doesn't just record scores, it automatically matches players that should play at each round of the tournament. It also has provision for player elimination after each round",
      "A little background story: I built this after I was cheated at a table tennis tournament because of a miscount, so I decided to do something about it."
    ],
    short_desc: "A web app for recording table tenis mutiplayer tournament",
    platform: "Web",
    role: "Frontend | Design",
    category: "Playground",
    isFeatured: false,
    links: {
      web: { link: "https://saucecodee.github.io/table-tennis-tournament" },
      git: { link: "https://github.com/saucecodee/table-tennis-tournament" },
    },
    tools: ["js", "html", "css"],
    year: 2019,
    isVisible: true
  },
  "unit-converter": {
    id: "unit-converter",
    cover_image: "projects/generic/cover.png",
    images: [
      "projects/unit-converter/image-1.png",
    ],
    name: "Unit converter",
    about: [
      "A web app for converting basic measuring units. It's a actually a school assignment but I decided to make it a little more fancy",
    ],
    short_desc: "A web app for converting basic measuring units",
    platform: "Web",
    role: "Frontend",
    category: "Playground",
    isFeatured: false,
    links: {
      git: { link: "https://github.com/saucecodee/Unit-converter" },
      web: { link: "https://saucecodee.github.io/Unit-converter" },
    },
    tools: ["js", "html", "css"],
    year: 2019,
    isVisible: true
  },
  "test": {
    id: "test",
    cover_image: "projects/generic/cover.png",
    images: [],
    name: "BàngáJS",
    about: [
      "",
    ],
    short_desc: "",
    platform: "NPM",
    role: "Maintainer",
    category: "Project",
    isFeatured: false,
    links: {
      git: { link: "link" },
      npm: { link: "link" },
      ios: { link: "link" },
      and: { link: "link" },
      web: { link: "link" },
    },
    tools: ["js"],
    year: 2020,
    isVisible: false
  },
} as { [id: string]: IProject }