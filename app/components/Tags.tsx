"use client";

type ExpertiseTagProps = {
  children: React.ReactNode
  className?: string
}

export function ExpertiseTag({ children, className }: ExpertiseTagProps) {
  return (
    <span className={`rounded border border-foreground/5 px-1.5 py-[3px] align-baseline text-muted-foreground text-sm ${className}`}>
      {children}
    </span>
  );
}
