export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  imageSrc: string;
  imageAlt: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "docker-in-depth",
    title: "Redis and Queues: A Quick Dive into Fast Data Handling",
    date: "APR 11, 2025",
    readTime: "8 MIN READ",
    excerpt: "Modern backend development, speed and scalability are everything and that’s where Redis and message queues like RabbitMQ come in.",
    imageSrc: "/blogs/Redis.svg",
    imageAlt: "Docker Logo",
    slug: "https://keanserna.hashnode.dev/redis-and-queues"
  },
  {
    id: "gcsp-fse-150",
    title: "Docker In-Depth: A Developer’s Guide for Local Dev",
    date: "APR 13, 2025",
    readTime: "6 MIN READ",
    excerpt: "If you're a developer looking to streamline your environment, ensure consistency across teams, or just want to run your app in isolated",
    imageSrc: "/blogs/Docker.svg",
    imageAlt: "ASU Logo",
    slug: "https://keanserna.hashnode.dev/docker-in-depth"
  },
  {
    id: "nextjs-react-server-components",
    title: "Getting Started with Kubernetes: A Beginner’s Guide to Container Orchestration",
    date: "MAR 27, 2025",
    readTime: "10 MIN READ",
    excerpt: "When your app scales across multiple containers, nodes, & environments, managing them manually becomes a nightmare.",
    imageSrc: "/blogs/Kubernetes.svg",
    imageAlt: "Next.js Logo",
    slug: "https://keanserna.hashnode.dev/k8s-getting-started"
  },
  {
    id: "tailwind-css-tips",
    title: "How I Made My Prisma Queries 10x Faster with Accelerate",
    date: "APR 7, 2025",
    readTime: "7 MIN READ",
    excerpt: "I tried optimizing indexes and tweaking my queries, but the improvements were minimal. I needed something smarter and more scalable.",
    imageSrc: "/blogs/Prisma-accelerate.png",
    imageAlt: "Tailwind CSS Logo",
    slug: "https://keanserna.hashnode.dev/queries-prisma-accelerator"
  }
];
