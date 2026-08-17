export function LinkedInIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 8.2V18M6.5 5.5v.1M10.5 18v-5.4c0-2.8 4.7-3.1 4.7.2V18M10.5 9v9M3 3h18v18H3z" /></svg>; }
export function MailIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18v14H3zM3 6l9 7 9-7" /></svg>; }
export function InstagramIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></svg>; }
export function LineIcon({ kind }: { kind: "athletics" | "technology" | "strategy" | "community" }) {
  if (kind === "athletics") return <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="17"/><path d="M12 16c7 1 14-2 19-7M9 29c10-1 20 3 27 10M18 8c-2 12 4 25 16 32M40 18C29 20 19 29 17 39"/></svg>;
  if (kind === "technology") return <svg viewBox="0 0 48 48" aria-hidden="true"><rect x="9" y="10" width="30" height="23"/><path d="M17 40h14M24 33v7M14 17h20M14 23h8M27 23h7"/></svg>;
  if (kind === "strategy") return <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="17"/><circle cx="24" cy="24" r="10"/><circle cx="24" cy="24" r="3"/><path d="M27 21l10-10M31 11h6v6"/></svg>;
  return <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="17" cy="18" r="6"/><circle cx="33" cy="20" r="5"/><path d="M6 39c1-9 6-13 11-13s11 4 12 13M27 29c8-3 14 2 15 10"/></svg>;
}
