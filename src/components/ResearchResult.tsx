/**
 * Hero visual — a window-chromed mock of a LawGIQ research result
 * for a fictional matter, showing the kind of output a lawyer
 * sees: cited code section, paragraph-anchored answer, list of
 * supporting authorities with currency-check badges.
 */
export function ResearchResult() {
  return (
    <div
      className="relative overflow-hidden rounded-[14px] border bg-white"
      style={{
        borderColor: "var(--border)",
        boxShadow:
          "0 12px 32px rgba(20,24,29,0.10), 0 2px 6px rgba(20,24,29,0.04)",
      }}
    >
      {/* Window chrome */}
      <div
        className="flex items-center gap-1.5 border-b px-4 py-2.5"
        style={{ borderColor: "var(--border)" }}
      >
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
        <span
          className="ml-3 text-[11px] tracking-[-0.01em] text-fg3"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          app.lawgiq.com/m/jacob-mathew
        </span>
      </div>

      {/* Body */}
      <div className="p-6 md:p-7">
        <div className="mb-3 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.12em]" style={{ color: "var(--teal-700)" }}>
          <span
            className="text-[16px]"
            style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--ember-500)", letterSpacing: 0, textTransform: "none" }}
          >
            §
          </span>
          <span>LawGIQ</span>
          <span style={{ color: "var(--slate-200)" }}>·</span>
          <span>4.2s</span>
          <span style={{ color: "var(--slate-200)" }}>·</span>
          <span>12 sources</span>
        </div>

        <h3
          className="mb-3 text-[19px] leading-[1.3] tracking-[-0.01em]"
          style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--fg1)" }}
        >
          Criminal liability for medical negligence requires gross negligence — not mere error.
        </h3>

        <p className="mb-5 text-[14px] leading-[1.55] text-fg2">
          Under <span className="cite-chip">S. 304A IPC</span> a doctor is criminally liable only
          where the negligence is gross or reckless. A simple lack of care or an error of judgment
          is not enough — the Bolam standard applies.
        </p>

        {/* Authority rows */}
        <div
          className="space-y-2 border-t pt-4"
          style={{ borderColor: "var(--border)" }}
        >
          <AuthorityRow
            n="01"
            title="Jacob Mathew v. State of Punjab"
            cite="(2005) 6 SCC 1"
            status="good"
          />
          <AuthorityRow
            n="02"
            title="Poonam Verma v. Ashwin Patel"
            cite="(1996) 4 SCC 332"
            status="distinguished"
          />
          <AuthorityRow
            n="03"
            title="Kusum Sharma v. Batra Hospital"
            cite="(2010) 3 SCC 480"
            status="narrowed"
          />
        </div>
      </div>
    </div>
  );
}

function AuthorityRow({
  n,
  title,
  cite,
  status,
}: {
  n: string;
  title: string;
  cite: string;
  status: "good" | "distinguished" | "narrowed";
}) {
  const badge = {
    good: {
      label: "Good law",
      color: "#2F8F6F",
      bg: "#E6F2EC",
      border: "rgba(47,143,111,0.25)",
    },
    distinguished: {
      label: "Distinguished",
      color: "#B07A1A",
      bg: "#FAF1DC",
      border: "rgba(176,122,26,0.25)",
    },
    narrowed: {
      label: "Narrowed",
      color: "var(--ember-700)",
      bg: "var(--ember-50)",
      border: "rgba(197,61,20,0.25)",
    },
  }[status];
  return (
    <div className="flex items-center gap-3 py-1.5">
      <span
        className="text-[10px] tracking-[0.05em] text-fg4"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {n}
      </span>
      <span
        className="text-[14px] tracking-[-0.005em] text-fg1"
        style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
      >
        {title}
      </span>
      <span
        className="text-[11px] text-fg3"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {cite}
      </span>
      <span
        className="ml-auto rounded-full border px-2 py-0.5 text-[10px] font-medium"
        style={{
          color: badge.color,
          background: badge.bg,
          borderColor: badge.border,
        }}
      >
        {badge.label}
      </span>
    </div>
  );
}
