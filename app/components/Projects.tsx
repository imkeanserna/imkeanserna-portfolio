"use client";

import { useTheme } from "@/context/ThemeProvider";
import { projectsData } from "@/utils/projects";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip"

export default function Projects() {
  return (
    <div className="flex flex-col">
      <section className="mx-auto w-full sm:px-8 max-w-screen-md grid sm:grid-cols-[75px_1fr] gap-x-6 gap-y-4 py-0 items-start">
        <h2 className="sm:text-right font-mono font-normal mt-2 text-muted-foreground/60 text-xs lowercase tracking-tight before:content-[&quot;/&quot;] my-0 leading-[1.5] inline align-middle">
          Projects
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              description={project.description}
              githubUrl={project.githubUrl}
              websiteUrl={project.websiteUrl}
              isFirst={index === 0}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

type ProjectCardProps = {
  name: string;
  description: string;
  githubUrl: string;
  websiteUrl: string;
  isFirst?: boolean;
};

export function ProjectCard({ name, description, githubUrl, websiteUrl, isFirst }: ProjectCardProps) {
  const { theme } = useTheme();

  return (
    <div
      className={`group relative flex flex-col gap-2 overflow-hidden rounded-xl border 
        ${isFirst ? "border-amber-500/40" : "border-border"} bg-background px-4 py-3 focus:ring-4 hover:ring-4 
        ${theme === "dark" ? "hover:ring-white/20 focus:ring-white/20 ring-offset-gray-900 hover:ring-offset-1" : "hover:ring-gray-500/30 ring-offset-white hover:ring-offset-1"} 
        transition-shadows duration-300`}
    >
      <div className="flex w-full flex-row items-baseline justify-between">
        <span className="text-muted-foreground/75 text-xs">{description}</span>
        <div className="flex gap-2">
          {githubUrl && <ProjectLink href={githubUrl} type="github" theme={theme} />}
          {websiteUrl && <ProjectLink href={websiteUrl} type="external" theme={theme} />}
        </div>
      </div>
      <h2 className="mb-1 font-medium tracking-tight">
        <span data-br=":rf:" data-brr="1">{name}</span>
      </h2>
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-bl mix-blend-overlay ${isFirst
          ? "from-amber-400/60 to-amber-700/60 dark:from-amber-200/60 dark:to-amber-500/30"
          : theme === "dark"
            ? "from-neutral-200 to-neutral-500"
            : "from-white/5 to-neutral-900/50"
          }`}
      ></div>
    </div >
  );
}

type ProjectLinkProps = {
  href: string;
  type: "github" | "external";
  theme: string | undefined;
};

function ProjectLink({ href, type, theme }: ProjectLinkProps) {
  const iconPath = type === "github"
    ? "M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"
    : "M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z";

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`flex size-5 items-center justify-center rounded-sm cursor-pointer border border-border 
              ${theme === "dark" ? "text-white/40 hover:text-white" : "text-black/60 hover:text-gray-950"} text-xs`}
            href={href}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d={iconPath} />
            </svg>
          </a >
        </TooltipTrigger>
        <TooltipContent side="top" align="center" sideOffset={10} data-state="instant-open">
          {type === "github" ? (
            "GitHub"
          ) : (
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-400 animate-ping opacity-75" />
              </div>
              <span className="text-sm">Live</span>
            </div>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
