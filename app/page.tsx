import { Metadata } from 'next'
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: 'Kean Serna • Fullstack Developer',
  description: 'Welcome to my portfolio website showcasing my skills, projects, and professional experience as a web developer.',
}

export default function Home() {
  return (
    <main className="flex grow flex-col justify-center gap-12">
      <HomeContent />
    </main>
  );
}
