/**
 * LawGIQ wordmark — a slate-rounded square containing an "L"
 * mark with an ember corner-tab, paired with the wordmark
 * "LawGIQ" (italic IQ) in display serif.
 */
export function Logo({ size = 32, inverse = false }: { size?: number; inverse?: boolean }) {
  const slate = inverse ? "var(--bone)" : "var(--slate-700)";
  const bone = inverse ? "var(--slate-700)" : "var(--bone)";
  const ember = "var(--ember-500)";
  const text = inverse ? "var(--bone)" : "var(--slate-700)";

  return (
    <div className="flex items-center gap-2.5">
      <svg
        width={size}
        height={size}
        viewBox="0 0 56 56"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect x="4" y="4" width="48" height="48" rx="8" fill={slate} />
        <path d="M19 17h5.6v20.4h10v4.4H19V17z" fill={bone} />
        <rect x="16.8" y="17" width="10" height="2" fill={bone} />
        <rect x="31.6" y="39.8" width="4.6" height="2" fill={bone} />
        <path d="M52 4v9h-9c0-4.971 4.029-9 9-9z" fill={ember} />
      </svg>
      <span
        className="text-[24px] tracking-[-0.01em]"
        style={{ fontFamily: "var(--font-display)", color: text }}
      >
        LawG
        <em style={{ fontStyle: "italic" }}>IQ</em>
      </span>
    </div>
  );
}

/** Just the rounded mark — used as favicon-style accent. */
export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" aria-hidden="true">
      <rect x="4" y="4" width="48" height="48" rx="8" fill="var(--slate-700)" />
      <path d="M19 17h5.6v20.4h10v4.4H19V17z" fill="var(--bone)" />
      <rect x="16.8" y="17" width="10" height="2" fill="var(--bone)" />
      <rect x="31.6" y="39.8" width="4.6" height="2" fill="var(--bone)" />
      <path d="M52 4v9h-9c0-4.971 4.029-9 9-9z" fill="var(--ember-500)" />
    </svg>
  );
}
