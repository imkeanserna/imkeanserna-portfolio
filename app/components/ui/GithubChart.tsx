"use client";

import GitHubCalendar from "react-github-calendar";

type ContributionTypeDate = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export function GithubChart() {
  const selectLastSixMonths = (contributions: ContributionTypeDate[]): ContributionTypeDate[] => {
    const today = new Date('2025-04-07');
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(today.getMonth() - 9);

    return contributions.filter(activity => {
      const activityDate = new Date(activity.date);
      return activityDate >= sixMonthsAgo && activityDate <= today;
    });
  };

  return (
    <div className="border border-border relative flex flex-col justify-center overflow-hidden bg-background items-center border-foreground/5 w-full rounded p-2 mt-6">
      <GitHubCalendar
        username="imkeanserna"
        blockRadius={3}
        fontSize={10}
        blockMargin={4}
        blockSize={10}
        colorScheme="dark"
        hideMonthLabels={true}
        transformData={selectLastSixMonths}
        labels={{
          totalCount: '{{count}} contributions in the last six months',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-bl mix-blend-overlay from-neutral-400 to-neutral-700 "></div>
    </div>
  );
}
