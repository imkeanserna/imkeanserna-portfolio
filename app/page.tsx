import About from "@/components/About";
import Socials from "@/components/Socials";
import Projects from "@/components/Projects";
import WorkExperience from "./components/WorkExperience";

export default function Home() {
  return (
    <main className="flex grow flex-col justify-center gap-12">
      <About />
      <Socials />
      <WorkExperience />
      <Projects />
    </main>
  );
}
