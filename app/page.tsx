import { Metadata } from 'next'
import HomeContent from "@/components/HomeContent";
import { Background } from '@/components/Background';
import { FigmaCursor } from '@/components/ui/FigmaCursor';

export const metadata: Metadata = {
  title: 'Kean Serna • Fullstack Developer',
  description: 'Welcome to my portfolio website showcasing my skills, projects, and professional experience as a web developer.',
}

export default function Home() {
  return (
    <main className="flex grow flex-col justify-center gap-12">
      <Background />
      <FigmaCursor name="Yuta" color="#22A6B3" position="left-1/4 top-[20%]" />
      <FigmaCursor
        name="James"
        color="#686de0"
        position="right-1/4 top-[42%]"
        animationClass="animate-custom-sequence"
      />
      <HomeContent />
    </main>
  );
}
