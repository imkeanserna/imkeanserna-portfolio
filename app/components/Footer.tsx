"use client";

import { socialLinks } from "@/utils/social";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip";
import { useTheme } from "@/context/ThemeProvider";
import { useFormattedDateTime } from "@/hooks/useDateTime";

export default function Footer() {
  const { theme } = useTheme();
  const dateTime = useFormattedDateTime('Manila, Philippines', {
    timeZone: 'Asia/Manila',
    updateInterval: 1000,
    format: 'full'
  });

  return (
    <div id="footer-section" className="flex flex-col gap-8 mt-16">
      <section className="mx-auto w-full p-5 sm:px-8 max-w-screen-md grid sm:grid-cols-[75px_1fr] gap-x-6 gap-y-4 py-0 -mt-4">
        <div></div>
        <div className="border-t border-border flex justify-between items-center py-6">
          <p className="text-xs md:text-sm tracking-wide text-muted-foreground/75">{dateTime}</p>
          <div className="flex items-center space-x-2 md:space-x-4">
            <TooltipProvider>
              {socialLinks
                .filter(link => link.name !== 'Gmail')
                .map((link) => (
                  <Tooltip key={link.name}>
                    <TooltipTrigger asChild>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground relative hover:text-foreground transition-colors p-2 opacity-60 hover:opacity-100 rounded-lg"
                        aria-label={link.name}
                      >
                        <div
                          className={`absolute inset-0 bg-gradient-to-bl mix-blend-overlay rounded-lg transition-opacity ${theme === "dark"
                            ? "from-neutral-400 to-neutral-700 opacity-0 hover:opacity-30"
                            : "from-white/5 to-neutral-900/50 opacity-0 hover:opacity-30"
                            }`}
                        ></div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 256 256"
                          fill="currentColor"
                        >
                          <path d={link.iconPath} />
                        </svg>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{link.name}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
            </TooltipProvider>
          </div>
        </div>
      </section>
    </div>
  );
}
