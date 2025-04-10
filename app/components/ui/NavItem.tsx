"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip";

interface NavItemProps {
  onClick?: () => void;
  href?: string;
  icon: React.ReactNode;
  name: string;
  isButton?: boolean;
}

export default function NavItem({
  onClick,
  href,
  icon,
  name,
  isButton = false
}: NavItemProps) {
  const IconComponent = () => icon;

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className="flex aspect-square cursor-pointer items-center justify-center rounded-full w-[40px] transition-all duration-300 ease-in-out hover:w-[60px] group-hover:scale-95"
            onClick={onClick}
          >
            {isButton ? (
              <button
                className="inline-flex cursor-pointer items-center justify-center whitespace-nowrap font-medium text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground size-12 rounded-full"
                type="button"
              >
                <span className="sr-only">{name}</span>
                <IconComponent />
              </button>
            ) : (
              <a
                className="inline-flex items-center justify-center whitespace-nowrap font-medium text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground size-12 rounded-full"
                data-state="closed"
                href={href}
              >
                <span className="sr-only">{name}</span>
                <IconComponent />
              </a>
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent side="top" align="center" sideOffset={6} data-state="instant-open" className="animate-fadeIn">
          {name}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};


