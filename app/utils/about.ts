import About from "@/components/About";
import { InstagramIcon, BasketballIcon } from "@/components/Icons";

export const aboutContent = {
  component: About,
  intro: "Hey, I'm a fullstack developer based in Philippines.",
  me: {
    name: "Kean Serna",
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQGbZDgzSCOz4A/profile-displayphoto-shrink_800_800/B56ZQqUDG3GQAk-/0/1735876686919?e=1749686400&v=beta&t=NLKAYSafJmg06xs3m-R6c9hEAcjlmI4-MLtekWYhBs4",
    github: "https://github.com/imkeanserna",
    linkedin: "https://www.linkedin.com/in/kean-de-la-serna-b7a182260/"
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
    today: "2025-04-07",
    username: "imkeanserna"
  }
};
