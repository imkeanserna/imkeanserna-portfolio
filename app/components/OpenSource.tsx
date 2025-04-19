"use client";

import { useTheme } from "@/context/ThemeProvider";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/Dialog";
import { useState } from "react";
import Image from "next/image";
import {
  CachingIcon,
  DjangoIcon,
  DockerIcon,
  NestJSIcon,
  NextjsIcon,
  PostgresqlIcon,
  PrismaIcon,
  RabbitMQIcon,
  SQLiteIcon,
  TurborepoIcon,
  TypeScriptIcon
} from "@/components/Icons";
import { Contribution, contributionsData } from "@/utils/contribution";
import { useBlogTitleHover } from "@/hooks/useBlogTitleHover";

export default function OpenSource() {
  const { theme } = useTheme();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedContribution, setSelectedContribution] = useState<Contribution | null>(null);
  const { titleRefs, hoverBgStyles } = useBlogTitleHover([contributionsData.length]);

  const handleShowContributions = (contribution: Contribution) => {
    setSelectedContribution(contribution);
    setDialogOpen(true);
  };

  return (
    <div className="flex flex-col">
      <section className="mx-auto w-full px-5 sm:px-8 max-w-screen-md grid sm:grid-cols-[75px_1fr] gap-x-6 gap-y-4 py-0 items-start">
        <h2 className="sm:text-left font-mono font-normal mt-2 text-muted-foreground/60 text-xs lowercase tracking-tight before:content-[&quot;/&quot;] my-0 leading-[1.5] inline align-middle">
          Open Source Contribution
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {contributionsData.map((contribution) => (
            <ContributionCard
              key={contribution.name}
              name={contribution.name}
              url={contribution.url}
              description={contribution.description}
              techs={contribution.techs}
              theme={theme}
              onShowAllClick={() => handleShowContributions(contribution)}
              titleRef={(el) => { titleRefs.current[contribution.name] = el; }}
              hoverStyle={hoverBgStyles[contribution.name]}
            />
          ))}
        </div>
      </section>
      {selectedContribution && (
        <ContributionsDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          theme={theme}
          contribution={selectedContribution}
        />
      )}
    </div>
  );
}

type ContributionCardProps = {
  name: string;
  url: string;
  description: string;
  techs: string[];
  theme: string | undefined;
  onShowAllClick: () => void;
  titleRef: (el: HTMLSpanElement | null) => void;
  hoverStyle: { width: string } | undefined;
};

function ContributionCard({
  name,
  url,
  description,
  techs,
  theme,
  onShowAllClick,
  titleRef,
  hoverStyle
}: ContributionCardProps) {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className={`group relative flex flex-col gap-4 overflow-hidden rounded-xl border 
              border-border bg-background px-4 py-3 focus:ring-4 hover:ring-4 
              ${theme === "dark" ? "hover:ring-white/20 focus:ring-white/20 ring-offset-gray-900 hover:ring-offset-1" : "hover:ring-gray-500/30 ring-offset-white hover:ring-offset-1"} 
              transition-shadows duration-300`}
          >
            <div>
              <h2 className="mb-1 font-medium tracking-tight group-hover:text-sky-500">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block group"
                >
                  <span
                    ref={titleRef}
                    className="relative z-10"
                    data-br=":rf:"
                    data-brr="1"
                  >
                    {name}
                  </span>
                  <span
                    className="absolute inset-0 bg-sky-500 h-4 opacity-0 z-10 transform -rotate-4 translate-y-1/2 group-hover:opacity-30 duration-150 ease-in-out scale-x-0 group-hover:scale-x-100 origin-center"
                    style={hoverStyle || {}}
                  ></span>
                </a>
              </h2>
              <div className="flex w-full flex-row items-baseline justify-between">
                <span className="text-muted-foreground/75 text-xs">{description}</span>
              </div>
            </div>
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-bl mix-blend-overlay 
                ${theme === "dark"
                  ? "from-neutral-200 to-neutral-500"
                  : "from-white/5 to-neutral-900/50"
                }`}
            ></div>
            <div className="flex flex-wrap gap-1 text-xs">
              {techs.map(tech => (
                <TechTag key={tech} tech={tech} theme={theme} />
              ))}
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent
          side="top"
          align="end"
          sideOffset={5}
          className="cursor-pointer p-0"
        >
          <button
            className="cursor-pointer py-1 px-2 flex items-center group active:scale-[0.98]"
            onClick={onShowAllClick}
          >
            <div className="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z" />
              </svg>
              <span>Show all</span>
            </div>
          </button>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

type TechTagProps = {
  tech: string;
  theme?: string;
};

function TechTag({ tech, theme }: TechTagProps) {
  const getIcon = () => {
    switch (tech.toLowerCase()) {
      case 'next.js':
        return <NextjsIcon />;
      case 'postgresql':
        return <PostgresqlIcon />;
      case 'turborepo':
        return <TurborepoIcon />;
      case 'prisma':
        return <PrismaIcon />;
      case 'docker':
        return <DockerIcon />;
      case 'django':
        return <DjangoIcon />;
      case 'websocket':
        return null;
      case 'rabbitmq':
        return <RabbitMQIcon />;
      case 'caching':
        return <CachingIcon />;
      case 'nestjs':
        return <NestJSIcon />;
      case 'typescript':
        return <TypeScriptIcon />;
      case 'sqlite':
        return <SQLiteIcon />;
      default:
        return null;
    }
  };

  return (
    <p className={`flex items-center px-2 py-1 text-muted-foreground/75 rounded-lg border bg-gradient-to-bl 
      ${theme === "dark" ? "from-neutral-400/20 to-neutral-700/10" : "from-white/10 to-neutral-900/10"} 
      border-foreground/5`
    }>
      {getIcon()}
      {tech}
    </p>
  );
}

type ContributionsDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  theme: string | undefined;
  contribution: Contribution;
};

function ContributionsDialog({ open, onOpenChange, theme, contribution }: ContributionsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border border-border max-w-screen-sm min-h-96 px-8 !rounded-xl">
        <DialogHeader className="space-y-6">
          <DialogTitle className="text-xl">Open Source Contributions on {contribution.name}</DialogTitle>
          <div className="space-y-3">
            {contribution.prs.map((pr) => (
              <ContributionItem
                key={pr.prNumber}
                title={pr.title}
                prNumber={pr.prNumber}
                username={pr.username}
                imageUrl={pr.imageUrl}
                url={pr.url}
                theme={theme}
              />
            ))}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

type ContributionItemProps = {
  title: string;
  prNumber: string;
  username: string;
  imageUrl: string;
  url: string;
  theme: string | undefined;
};

function ContributionItem({
  title,
  prNumber,
  username,
  imageUrl,
  url,
  theme
}: ContributionItemProps) {
  return (
    <div
      onClick={() => {
        window.open(url, "_blank", "noopener,noreferrer")
      }}
      className={`group border border-border relative gap-2 overflow-hidden rounded-lg 
        bg-background focus:ring-4 hover:ring-4 p-4
        ${theme === "dark" ? "hover:ring-sky-500 focus:ring-white/20 ring-offset-gray-900 hover:ring-offset-1" : "hover:ring-gray-500/30 ring-offset-white hover:ring-offset-1"} 
        transition-shadows duration-300 cursor-pointer`
      }
    >
      <div className="flex gap-4">
        <div className="relative">
          <div className="w-14 h-full rounded-full overflow-hidden aspect-square border border-border shadow-sm">
            <Image
              alt={username}
              src={imageUrl}
              width={56}
              height={56}
              className="object-cover"
              sizes="56px"
              priority
            />
          </div>
          <div className="absolute bottom-0 right-0 rounded-tl-md p-1 z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="#181717"
              className="text-white"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex w-full flex-row items-baseline justify-between">
            <h2 className={`font-medium tracking-tight ${theme === "dark" ? "text-white/70" : "text-gray-950/70"}`}>
              <span data-br=":rf:" data-brr="1">{title}</span>
            </h2>
            <div className="flex gap-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={`flex size-5 items-center justify-center rounded-sm cursor-pointer border border-border 
                ${theme === "dark" ? "text-white/40 group-hover:text-white" : "text-black/60 group-hover:text-gray-950"} text-xs`}
                href={url}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                </svg>
              </a >
            </div>
          </div>
          <div className="flex gap-2 items-center text-sm text-muted-foreground/75">
            <span>#{prNumber}</span>
            <div className={`h-2 w-2 rounded-full ${theme === "dark" ? "bg-white/60" : "bg-gray-950/60"} `}></div>
            <span>{username}</span>
          </div>
        </div>
        <div className={`absolute inset-0 bg-gradient-to-bl mix-blend-overlay ${theme === "dark" ? "from-neutral-400 to-neutral-700" : "from-white/5 to-neutral-900/50"}`}></div>
      </div>
    </div>
  );
}
