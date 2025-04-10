"use client";

import { useTheme } from "@/context/ThemeProvider";
import { MoonIcon, SunIcon } from "@/components/Icons";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex cursor-pointer items-center justify-center whitespace-nowrap font-medium text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground size-12 rounded-full"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <SunIcon />
      ) : (
        <MoonIcon />
      )}
    </button>
  );
}
