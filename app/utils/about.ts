import About from "@/components/About";
import { InstagramIcon, BasketballIcon } from "@/components/Icons";

export const aboutContent = {
  component: About,
  intro: "Hey, I'm a fullstack developer based in Philippines.",
  me: {
    name: "Kean Serna",
    avatar: "/me/linkedIn-image.webp",
    github: "https://github.com/imkeanserna",
    githubAvatar: "https://avatars.githubusercontent.com/u/156565248?v=4",
    linkedin: "https://www.linkedin.com/in/kean-serna-b7a182260/"
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
    today: "2025-04-16",
    username: "imkeanserna"
  },
  resume: {
    url: "https://media.licdn.com/dms/document/media/v2/D562DAQGVmWddz7CBoA/profile-treasury-document-pdf-analyzed/B56ZZOIEAwGUAc-/0/1745067460442?e=1746057600&v=beta&t=oxnMoStw3qfxy9pHt9xP-GVZ59nBOR6b_rKwfE6a600"
  }
};
