"use client";

import { motion } from "framer-motion";
import About from "@/components/About";
import Socials from "@/components/Socials";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import Skills from "@/components/Skills";
import { useSequentialAnimation } from "@/hooks/useSequentialAnimation";
import Blogs from "./Blogs";

export default function HomeContent() {
  const [isLoaded, { containerVariants, sectionVariants }] = useSequentialAnimation(
    50,
    0.15,
    0.4,
    8
  );

  return (
    <motion.main
      className="flex grow flex-col justify-center gap-12"
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div variants={sectionVariants}>
        <About />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <Socials />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <WorkExperience />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <Projects />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <OpenSource />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <Skills />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <Blogs />
      </motion.div>
    </motion.main>
  );
}
