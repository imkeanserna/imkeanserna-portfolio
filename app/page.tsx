import About from "@/components/About";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <main className="flex grow flex-col justify-center gap-10">
      <About />
      <Socials />
    </main>
  );
}
