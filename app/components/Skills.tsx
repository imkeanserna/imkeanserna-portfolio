"use client";

import { useThemeStyles } from "@/hooks/useThemeStyles";
import { skillsData } from "@/utils/skills";

export default function Skills() {
  return (
    <div className="flex flex-col">
      <section className="mx-auto w-full sm:px-8 max-w-screen-md grid sm:grid-cols-[75px_1fr] gap-x-6 gap-y-4 py-0 items-start">
        <h2 className="sm:text-left font-mono font-normal mt-2 text-muted-foreground/60 text-xs lowercase tracking-tight before:content-[&quot;/&quot;] my-0 leading-[1.5] inline align-middle">
          Skills
        </h2>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {skillsData.map((skill) =>
            <SkillIcon
              key={skill.name}
              label={skill.name}
            />
          )}
        </div>
      </section>
    </div>
  );
}

type SkillIconProps = {
  label: string;
};

export function SkillIcon({ label }: SkillIconProps) {
  const styles = useThemeStyles();
  return (
    <div
      className={`group flex items-center ${styles.textColors.muted} ${styles.textColors.hover}`}
    >
      <div
        className={`flex text-xs items-center py-2 px-3 justify-center rounded border border-border bg-background from-white/5 to-white/0 transition-shadow duration-300`}
      >
        {label}
      </div>
    </div>
  );
}
