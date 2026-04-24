import { ITool } from "../models"

export default {
  // Languages
  js: {
    id: "js",
    image: "./../../../../assets/skills/javascript.png",
    name: "JavaScript",
    categories: ["Languages"]
  },
  ts: {
    id: "ts",
    image: "./../../../../assets/skills/TypeScript.png",
    name: "TypeScript",
    categories: ["Languages"]
  },
  py: {
    id: "py",
    image: "./../../../../assets/skills/solidity.png",
    name: "Python",
    categories: ["Languages"]
  },

  // Frontend
  react: {
    id: "react",
    image: "./../../../../assets/skills/react.png",
    name: "React",
    categories: ["Frontend"]
  },
  nextjs: {
    id: "nextjs",
    image: "./../../../../assets/skills/nj.png",
    name: "Next.js",
    categories: ["Frontend"]
  },
  ang: {
    id: "ang",
    image: "./../../../../assets/skills/angular.png",
    name: "Angular",
    categories: ["Frontend"]
  },
  tailwind: {
    id: "tailwind",
    image: "./../../../../assets/skills/bootstrap.jpeg",
    name: "Tailwind CSS",
    categories: ["Frontend"]
  },
  vite: {
    id: "vite",
    image: "./../../../../assets/skills/fi.png",
    name: "Vite",
    categories: ["Frontend"]
  },
  zustand: {
    id: "zustand",
    image: "./../../../../assets/skills/re.png",
    name: "Zustand",
    categories: ["Frontend"]
  },

  // Backend
  node: {
    id: "node",
    image: "./../../../../assets/skills/nodejs.png",
    name: "Node.js",
    categories: ["Backend"]
  },
  express: {
    id: "express",
    image: "./../../../../assets/skills/express.png",
    name: "Express.js",
    categories: ["Backend"]
  },
  fastapi: {
    id: "fastapi",
    image: "./../../../../assets/skills/fs.png",
    name: "FastAPI",
    categories: ["Backend"]
  },
  django: {
    id: "django",
    image: "./../../../../assets/skills/php.png",
    name: "Django",
    categories: ["Backend"]
  },

  // GenAI / LLM
  langchain: {
    id: "langchain",
    image: "./../../../../assets/skills/nlp.png",
    name: "LangChain",
    categories: ["GenAI"]
  },
  rag: {
    id: "rag",
    image: "./../../../../assets/skills/a.png",
    name: "RAG",
    categories: ["GenAI"]
  },
  chromadb: {
    id: "chromadb",
    image: "./../../../../assets/skills/scikit-learn.png",
    name: "ChromaDB",
    categories: ["GenAI"]
  },
  neo4j: {
    id: "neo4j",
    image: "./../../../../assets/skills/rabbitmq.png",
    name: "Neo4j",
    categories: ["GenAI"]
  },
  aiagents: {
    id: "aiagents",
    image: "./../../../../assets/skills/bangajs.png",
    name: "AI Agents",
    categories: ["GenAI"]
  },

  // Cloud / DevOps
  aws: {
    id: "aws",
    image: "./../../../../assets/skills/aws.png",
    name: "AWS",
    categories: ["Cloud"]
  },
  docker: {
    id: "docker",
    image: "./../../../../assets/skills/docker.png",
    name: "Docker",
    categories: ["Cloud"]
  },
  githubactions: {
    id: "githubactions",
    image: "./../../../../assets/skills/github.png",
    name: "GitHub Actions",
    categories: ["Cloud"]
  },
  vercel: {
    id: "vercel",
    image: "./../../../../assets/skills/heroku.png",
    name: "Vercel",
    categories: ["Cloud"]
  },

  // Databases
  postgresql: {
    id: "postgresql",
    image: "./../../../../assets/skills/postgre.png",
    name: "PostgreSQL",
    categories: ["Databases"]
  },
  redis: {
    id: "redis",
    image: "./../../../../assets/skills/redis.png",
    name: "Redis",
    categories: ["Databases"]
  },
  mongodb: {
    id: "mongodb",
    image: "./../../../../assets/skills/mongodb.png",
    name: "MongoDB",
    categories: ["Databases"]
  },
} as { [id: string]: ITool }
