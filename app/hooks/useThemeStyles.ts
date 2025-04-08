"use client";

import { useTheme } from "@/context/ThemeProvider";

export function useThemeStyles() {
  const { theme } = useTheme();

  return {
    // Text colors based on theme
    textColors: {
      muted: theme === "dark" ? "text-white/50" : "text-black/60",
      primary: theme === "dark" ? "text-white" : "text-black",
      hover: theme === "dark" ? "hover:text-white focus:text-white" : "hover:text-black focus:text-black",
    },

    // Interactive elements styles
    interactive: {
      ring: theme === "dark"
        ? "group-hover:ring-white/20 group-focus:ring-white/20 ring-offset-gray-900 group-focus:ring-offset-1"
        : "group-hover:ring-gray-500/20 group-focus:ring-black/20 ring-offset-white group-focus:ring-offset-1",
      background: theme === "dark" ? "dark:bg-gradient-to-bl" : ""
    }
  };
}
