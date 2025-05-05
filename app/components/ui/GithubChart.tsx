"use client";

import { useTheme } from "@/context/ThemeProvider";
import { aboutContent } from "@/utils/about";
import GitHubCalendar from "react-github-calendar";

type ContributionTypeDate = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export function GithubChart() {
  const { theme } = useTheme();
  const { github } = aboutContent;
  const endDate = new Date(github.today);
  const startDate = new Date(endDate);
  startDate.setMonth(endDate.getMonth() - 9);

  const selectFixedDateRange = (contributions: ContributionTypeDate[]): ContributionTypeDate[] => {
    return contributions.filter(activity => {
      const activityDate = new Date(activity.date);
      return activityDate >= startDate && activityDate <= endDate;
    });
  };

  return (
    <div className="border border-border relative flex flex-col justify-center overflow-hidden bg-background items-center border-foreground/5 w-[350px] sm:w-full rounded p-2 mt-5">
      <GitHubCalendar
        username={github.username}
        blockRadius={3}
        fontSize={10}
        blockMargin={4}
        blockSize={10}
        colorScheme={theme}
        hideMonthLabels={true}
        transformData={selectFixedDateRange}
        labels={{
          totalCount: '{{count}} contributions in the last six months',
        }}
      />
      <div className={`absolute inset-0 bg-gradient-to-bl mix-blend-overlay ${theme === "dark" ? "from-neutral-400 to-neutral-700" : "from-white/5 to-neutral-900/50"}`}></div>
    </div>
  );
}
