"use client";

import { useTheme } from "@/context/ThemeProvider";
import { socialLinks } from "@/utils/social";
import ThemeToggle from "@/components/ui/ThemeToggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import NavItem from "@/components/ui/NavItem";
import { HomeIcon } from "@/components/Icons";

export default function NavigationBar() {
  const { theme } = useTheme();
  // const { resume } = aboutContent;

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed right-4 bottom-9 hsm:bottom-8 left-4">
      <div className="relative w-max mx-auto">
        {/*Resume Button* - current hidden/}
        {/* <a */}
        {/*   target="_blank" */}
        {/*   rel="noopener noreferrer" */}
        {/*   className={`absolute -top-5 right-5 px-2 py-[0.2rem] text-xs rounded-t-md font-medium cursor-pointer  */}
        {/*      resume-background-color brightness-95 */}
        {/*      text-white shadow-md hover:shadow-lg */}
        {/*      border border-orange-300 */}
        {/*      transition-all duration-300 ease-in-out */}
        {/*      hover:from-orange-500 hover:to-amber-600 */}
        {/*      hover:-translate-y-0.5 active:scale-[0.98]`} */}
        {/*   href={resume.url} */}
        {/* > */}
        {/*   Resume */}
        {/* </a> */}
        <div
          className={`mt-8 flex h-[58px] gap-2 rounded-2xl border border-border p-2 backdrop-blur-md 
            ${
              theme === "dark"
                ? "supports-backdrop-blur:bg-black/10"
                : "supports-backdrop-blur:bg-white/10"
            } items-center transition-transform duration-300 ease-in-out hover:scale-105 group`}
        >
          {/* Home Button */}
          <NavItem
            onClick={scrollToTop}
            icon={<HomeIcon />}
            name="Home"
            isButton={true}
          />

          <Divider />

          {socialLinks.map((social) => (
            <TooltipProvider key={social.name} delayDuration={100}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full w-[40px] transition-all duration-300 ease-in-out hover:w-[60px] group-hover:scale-95">
                    <a
                      className="inline-flex items-center justify-center whitespace-nowrap font-medium text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground size-12 rounded-full"
                      data-state="closed"
                      href={social.href}
                    >
                      <span className="sr-only">{social.name}</span>
                      {social.isLucideEmail ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="transition-transform duration-300 ease-in-out"
                        >
                          <rect x="3" y="5" width="18" height="14" rx="2" />
                          <polyline points="3 5 12 13 21 5" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                          className="transition-transform duration-300 ease-in-out"
                        >
                          <path d={social.iconPath}></path>
                        </svg>
                      )}
                    </a>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  align="center"
                  sideOffset={6}
                  data-state="instant-open"
                  className="animate-fadeIn"
                >
                  {social.name}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
          <Divider />
          {/* Theme Toggle */}
          <ThemeToggleItem />
        </div>
      </div>
    </div>
  );
}

const Divider = () => (
  <div className="shrink-0 bg-border w-[1px] h-full transition-all duration-300"></div>
);

const ThemeToggleItem: React.FC = () => {
  const { theme } = useTheme();

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full w-[40px] transition-all duration-300 ease-in-out hover:w-[60px] group-hover:scale-95">
            <ThemeToggle />
          </div>
        </TooltipTrigger>
        <TooltipContent
          side="top"
          align="center"
          sideOffset={6}
          data-state="instant-open"
          className="animate-fadeIn"
        >
          {theme === "dark" ? "Light" : "Dark"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
