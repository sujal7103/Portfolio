import { IExperience } from "../models";

export default [
  {
    from: "Jan 2026",
    to: "Present",
    company: "Maximem AI",
    description: "Built Maximem's Echo product end-to-end across backend, frontend, and proxy layers, owning the full lifecycle from persona creation and expertise setup to ingestion, publishing, and chat. Created a retrieval and memory-graph engine with parallel query decomposition, batched vector search, Redis L2 graph caching, and request-scoped traversal, improving recall quality while keeping latency production-viable. Shipped personalization systems combining live query relevance, long-term profile affinity, memories, and voice/context signals to rank snippets and enhance prompts with user-specific context at runtime. Productized agent memory recall with token-budget enforcement, LLM compression fallback, and phase-level observability so external agents could inject context reliably within prompt limits.",
    role: "Founding Engineer"
  },
  {
    from: "Jul 2025",
    to: "Nov 2025",
    company: "Safeeds Auto Transport Inc",
    description: "Architected an SEO-first Next.js web platform using middleware, canonical routing, and structured JSON-LD, improving crawlability and search visibility. Built secure, high-performance user flows with JWT authentication, password resets, form validation, SSR caching, and real-time API integrations.",
    role: "Full-Stack Developer (Contract)"
  },
  {
    from: "May 2025",
    to: "Jul 2025",
    company: "Techori.in",
    description: "Refactored the admin dashboard into a TypeScript SPA backed by scalable AWS Lambda APIs, async workflows, and JWT-protected endpoints, improving performance and reducing duplicate-data conflicts by 90%.",
    role: "Fullstack Developer Intern"
  },
  {
    from: "Jan 2025",
    to: "Apr 2025",
    company: "NoBroker.com",
    description: "Modernized CMS build and validation workflows with Vite and Python automation, cutting build times by 85–90% and improving release efficiency.",
    role: "Software Developer Intern"
  },
  {
    from: "Sept 2021",
    to: "May 2025",
    company: "Madhav Institute of Technology & Science",
    description: "B.Tech in Information Technology — CGPA: 7.38/10",
    role: "Undergraduate"
  },
] as IExperience[]
