import About from "@/components/About";
import { InstagramIcon, BasketballIcon } from "@/components/Icons";

export const aboutContent = {
  component: About,
  intro: "Hey, I'm a fullstack developer based in the Philippines.",
  me: {
    name: "Kean Serna",
    avatar: "/me/linkedIn-image.webp",
    github: "https://github.com/imkeanserna",
    githubAvatar: "https://avatars.githubusercontent.com/u/156565248?v=4",
    linkedin: "https://www.linkedin.com/in/kean-serna/"
  },
  experience: "I have been building software in",
  tags: {
    expertise: [
      { name: "Games", bgClass: "bg-lime-500/10 dark:bg-lime-900/15" },
      { name: "Saas", bgClass: "bg-orange-300/20 dark:bg-orange-800/10" },
      { name: "AI", bgClass: "bg-indigo-300/15 dark:bg-indigo-700/5" }
    ]
  },
  passion: "my passion for software development has grown since i started coding in 2021.",
  hobbies: {
    intro: "When I'm not shipping products, I enjoy creating content",
    instagram: InstagramIcon,
    middle: "on instagram and shooting hoops",
    basketball: BasketballIcon,
    closing: "on the court."
  },
  github: {
    today: "2025-05-05",
    username: "imkeanserna"
  },
  resume: {
    url: "https://www.imkeanserna.dev/resume/kean-dela-serna-ph-full-stack-developer.pdf"
  }
};
