import { Metadata } from 'next'
import HomeContent from "@/components/HomeContent";
import { Background } from '@/components/Background';

export const metadata: Metadata = {
  title: 'Kean Serna • Fullstack Developer',
  description: 'Welcome to my portfolio website showcasing my skills, projects, and professional experience as a web developer.',
}

export default function Home() {
  return (
    <main className="flex grow flex-col justify-center gap-12">
      <Background />
      <HomeContent />
    </main>
  );
}
