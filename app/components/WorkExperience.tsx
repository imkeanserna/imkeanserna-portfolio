"use client";

import { workExperienceData, workExperienceGradients, WorkExperienceItemData } from "@/utils/work-experience";

export default function WorkExperience() {
  return (
    <div className="flex flex-col">
      <section className="mx-auto w-full px-5 sm:px-8 max-w-screen-md grid sm:grid-cols-[75px_1fr] gap-x-6 gap-y-4 py-0 items-start">
        <h2 className="sm:text-start font-mono font-normal mt-2 text-muted-foreground/60 text-xs lowercase tracking-tight before:content-[&quot;/&quot;] my-0 leading-[1.5] inline align-middle">
          Work Experience
        </h2>
        <div className="grid gap-6 sm:grid-cols-1">
          {workExperienceData.map((job) => (
            <WorkExperienceItem
              key={job.id}
              title={job.title}
              company={job.company}
              period={job.period}
              logoType={job.logoType}
              logoConfig={job.logoConfig}
              gradientClass={job.gradientClass}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

type WorkExperienceItemProps = Omit<WorkExperienceItemData, 'id'>;

export function WorkExperienceItem({
  title,
  company,
  period,
  logoType,
  logoConfig,
  gradientClass,
}: WorkExperienceItemProps) {
  const renderLogo = () => {
    if (logoType === "text") {
      const gradient = logoConfig.gradientId ? workExperienceGradients[logoConfig.gradientId as keyof typeof workExperienceGradients] : null;

      return (
        <svg width="100%" height="160" viewBox="0 0 1000 160" xmlns="http://www.w3.org/2000/svg">
          {gradient && (
            <defs>
              <linearGradient id={gradient.id} x1="0%" y1="0%" x2="100%" y2="0%">
                {gradient.stops.map((stop, index) => (
                  <stop key={index} offset={stop.offset} stopColor={stop.color} />
                ))}
              </linearGradient>
            </defs>
          )}
          <text
            x="50%"
            y={logoConfig.yPosition || 100}
            textAnchor="middle"
            fontFamily="Montserrat, Arial, sans-serif"
            fontSize={logoConfig.fontSize || 100}
            fontStyle={logoConfig.fontStyle || "normal"}
            fontWeight={logoConfig.fontWeight || "normal"}
            fill={logoConfig.gradientId ? `url(#${logoConfig.gradientId})` : logoConfig.color || "currentColor"}
          >
            {logoConfig.text}
          </text>

          {/* Special case for Hacktoberfest with a second text element */}
          {company === "Hacktoberfest.com" && (
            <text
              x="22%"
              y="200"
              textAnchor="middle"
              fontFamily="Montserrat, Arial, sans-serif"
              fontSize="150"
              fontWeight="bold"
              fill="url(#hacktoberfestGradient)"
            >
              FEST
            </text>
          )}
        </svg>
      );
    }

    if (logoType === "path" && logoConfig.path) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d={logoConfig.path}></path>
        </svg>
      );
    }

    return null;
  };

  return (
    <div className="flex justify-between">
      <div className="flex gap-3">
        <div
          className={`flex size-12 items-center justify-center rounded border border-border bg-background 
          ${gradientClass || "from-white/5 to-white/0"} transition-shadow duration-300 text-white/50 bg-gradient-to-bl`}
        >
          {renderLogo()}
        </div>
        <div className="space-y-1">
          <div>
            <h2 className="font-medium tracking-tight">
              <span data-br=":rf:" data-brr="1">
                {title}
              </span>
            </h2>
            <p className="text-sm text-muted-foreground/75">{company}</p>
          </div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground/75">{period}</p>
    </div>
  );
}
