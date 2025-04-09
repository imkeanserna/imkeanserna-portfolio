import About from "@/components/About";
import Socials from "@/components/Socials";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import OpenSource from "@/components/OpenSource";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex grow flex-col justify-center gap-12">
      <About />
      <Socials />
      <WorkExperience />
      <Projects />
      <OpenSource />
      <Skills />
    </main>
  );
}
