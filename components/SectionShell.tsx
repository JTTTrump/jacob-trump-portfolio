import type { ReactNode } from "react";

type SectionShellProps = { id: string; children: ReactNode; className?: string; label: string };

export function SectionShell({ id, children, className = "", label }: SectionShellProps) {
  return <section id={id} aria-label={label} className={`page-section ${className}`}>{children}</section>;
}
