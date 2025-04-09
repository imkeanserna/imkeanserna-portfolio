"use client";

import { useThemeStyles } from "@/hooks/useThemeStyles";
import { socialLinks } from "@/utils/social";

export default function Socials() {
  return (
    <div className="flex flex-col">
      <section className="mx-auto w-full sm:px-8 max-w-screen-md grid sm:grid-cols-[75px_1fr] gap-x-6 gap-y-4">
        <h2 className="sm:text-left font-mono font-normal mt-2 text-muted-foreground/60 text-xs lowercase tracking-tight before:content-[&quot;/&quot;] my-0 leading-[1.5] inline align-middle">
          Socials
        </h2>
        <div className="flex flex-wrap items-center justify-start gap-5">
          {socialLinks.map(social => (
            <SocialLink
              key={social.name}
              href={social.href}
              iconPath={social.iconPath}
              label={social.name}
              isLucideEmail={social.isLucideEmail}
            />
          ))}
        </div>
      </section >
    </div>
  );
}

type SocialLinkProps = {
  href: string;
  iconPath?: string;
  label: string;
  isLucideEmail?: boolean;
};

export function SocialLink({ href, iconPath, label, isLucideEmail }: SocialLinkProps) {
  const styles = useThemeStyles();
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center gap-2.5 ${styles.textColors.muted} ${styles.textColors.hover}`}
      href={href}
    >
      <div
        className={`flex size-8 items-center justify-center rounded border border-border bg-background from-white/5 to-white/0 transition-shadow duration-300 group-hover:ring-4 group-focus:ring-4 group-hover:ring-offset-1 group-focus:ring-offset-1 ${styles.interactive.ring} ${styles.interactive.background}`}
      >
        {isLucideEmail ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <polyline points="3 5 12 13 21 5" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256">
            <path d={iconPath}></path>
          </svg>
        )}
      </div>
      <span className="text-sm">{label}</span>
    </a>
  );
}
