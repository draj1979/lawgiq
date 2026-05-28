import { Logo } from "@/components/Logo";
import { ResearchResult } from "@/components/ResearchResult";
import {
  ArrowRight,
  Book,
  Briefcase,
  Check,
  ChevronDown,
  ChevronRight,
  FileText,
  Filter,
  Play,
  Settings,
  Shield,
  Sparkles,
  X as XIcon,
} from "@/components/Icons";

const NAV = [
  { label: "Product", caret: true },
  { label: "Solutions", caret: true },
  { label: "Pricing", caret: false },
  { label: "Security", caret: false },
  { label: "Resources", caret: true },
];

const TRUSTED = [
  { name: "Cyril Amarchand", sub: "Mangaldas" },
  { name: "Khaitan & Co", sub: "Mumbai" },
  { name: "AZB & Partners", sub: "Delhi" },
  { name: "Trilegal", sub: "Bengaluru" },
  { name: "Luthra & Luthra", sub: "Counsel" },
  { name: "J. Sagar", sub: "Est. 1991" },
];

const FEATURES = [
  {
    n: "01 — Research",
    title: "Memo-grade answers, with the case in your hand.",
    body: "Ask in plain English. LawGIQ pulls binding authority for your jurisdiction, distinguishes adverse holdings, and surfaces the controlling passage — not a synopsis.",
  },
  {
    n: "02 — Drafting",
    title: "Briefs and memos that already cite themselves.",
    body: "Generate sections in your firm's house style. Every assertion carries a citation, every citation carries a Shepard-style currency check. Edit inline, regenerate the surrounding paragraph without losing the rest.",
  },
  {
    n: "03 — Verification",
    title: "Catches what KeyCite and Shepard's miss.",
    body: "Every cite in your draft is checked against the full text of subsequent decisions — not just headnote signals. Distinctions, narrowings, and silent overrulings flagged inline.",
  },
];

const DETAIL_ITEMS = [
  {
    Icon: Book,
    title: "Source-anchored answers",
    body: "Every passage links to the exact paragraph it was drawn from, in the cited decision. No black box.",
  },
  {
    Icon: Filter,
    title: "Jurisdiction-aware",
    body: "Filter by federal circuit, state, or court level. LawGIQ knows the difference between persuasive and binding.",
  },
  {
    Icon: Settings,
    title: "House-style aware",
    body: "Trained on your firm's filings — adopts your citation conventions, voice, and section structure.",
  },
  {
    Icon: Briefcase,
    title: "Matter-isolated",
    body: "Documents, prompts, and outputs are siloed per matter. Confidentiality by architecture, not policy.",
  },
];

const TIERS = [
  {
    name: "Solo",
    price: "$149",
    per: "/ attorney / mo",
    desc: "For solo practitioners and 2–3 person firms.",
    features: [
      "Unlimited matters",
      "Federal + 1 state library",
      "Standard citators",
      "Email support",
    ],
    cta: "Start 14-day trial",
    variant: "secondary" as const,
  },
  {
    name: "Practice",
    price: "$349",
    per: "/ attorney / mo",
    desc: "For litigation, transactional, and regulatory teams up to 50.",
    features: [
      "All 50 states + federal libraries",
      "House-style training on your filings",
      "Verification across full opinions",
      "Matter isolation & audit log",
      "Priority support, 2hr SLA",
    ],
    cta: "Request a demo",
    variant: "primary" as const,
    featured: true,
    pill: "Most chosen",
  },
  {
    name: "Firm",
    price: "Custom",
    per: "",
    desc: "For India's largest firms and in-house legal teams.",
    features: [
      "Single-tenant deployment",
      "SSO, SCIM, conflict-check integration",
      "Custom retention & data residency",
      "Dedicated solutions engineer",
    ],
    cta: "Talk to sales",
    variant: "dark" as const,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-bone text-fg2">
      {/* ═══ NAV ═══════════════════════════════════════════════ */}
      <nav className="sticky top-0 z-50 border-b border-transparent bg-bone/85 backdrop-blur-md" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-6 md:px-10">
          <Logo size={32} />
          <div className="hidden items-center gap-6 md:flex">
            {NAV.map((l) => (
              <span
                key={l.label}
                className="flex cursor-pointer items-center gap-1 text-[14px] text-fg2 transition-colors hover:text-fg1"
              >
                {l.label}
                {l.caret && <ChevronDown size={13} />}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button className="focus-ring rounded-[6px] px-3 py-2 text-[14px] text-fg2 transition-colors hover:bg-slate-50 hover:text-fg1">
              Sign in
            </button>
            <button
              className="focus-ring rounded-[6px] px-4 py-2 text-[14px] font-medium text-bone transition-colors"
              style={{ background: "var(--slate-700)" }}
            >
              Request a demo
            </button>
          </div>
        </div>
      </nav>

      {/* ═══ HERO ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-columns" />
        <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 px-6 py-20 md:grid-cols-[1.05fr_1fr] md:gap-16 md:px-10 md:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.12em]" style={{ color: "var(--teal-700)" }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--ember-500)" }} />
              For attorneys, by design
            </div>
            <h1
              className="t-display text-[44px] md:text-[60px] lg:text-[72px]"
              style={{ textWrap: "balance" }}
            >
              The <em>research</em>,
              <br />
              <span className="t-mark">drafting</span>, and citation
              <br />
              assistant your matters deserve.
            </h1>
            <p className="mt-7 max-w-[540px] text-[17px] leading-[1.55] text-fg2 md:text-[18px]">
              LawGIQ reads the record, retrieves binding authority, and drafts the memo —
              leaving the judgment, where it belongs, with you.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <button
                className="focus-ring inline-flex items-center gap-2 rounded-[8px] px-6 py-3.5 text-[15px] font-medium text-white transition-colors"
                style={{ background: "var(--ember-500)" }}
              >
                Request a demo
                <ArrowRight size={16} />
              </button>
              <button
                className="focus-ring inline-flex items-center gap-2 rounded-[8px] border bg-white px-5 py-3.5 text-[15px] font-medium text-fg1 transition-colors hover:bg-slate-50"
                style={{ borderColor: "var(--border-strong)" }}
              >
                <Play size={12} />
                Watch the product tour
                <ChevronRight size={14} />
              </button>
              <span className="text-[13px] text-fg3">14-day trial · No card required</span>
            </div>
          </div>

          <div className="relative">
            <ResearchResult />
          </div>
        </div>
      </section>

      {/* ═══ TRUSTED BY ═══════════════════════════════════════ */}
      <section className="border-y bg-bone-50" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto max-w-[1240px] px-6 py-10 md:px-10">
          <div className="text-center text-[12px] tracking-[-0.005em] text-fg3">
            Trusted by lawyers at <span className="text-fg1 font-medium">9 of India&apos;s top 20 law firms</span>
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {TRUSTED.map((f) => (
              <div key={f.name} className="flex items-baseline gap-2 opacity-70">
                <span
                  className="text-[18px] tracking-[-0.01em] text-fg1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {f.name}
                </span>
                <span className="text-[10px] uppercase tracking-[0.14em] text-fg3">
                  {f.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
        <div className="mb-14 max-w-[760px]">
          <span className="t-eyebrow">What LawGIQ does</span>
          <h2
            className="mt-4 text-[36px] md:text-[48px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--fg1)", lineHeight: 1.08, letterSpacing: "-0.015em", textWrap: "balance" }}
          >
            Three categories of work, returned to you as{" "}
            <span style={{ fontStyle: "italic", color: "var(--fg1)" }}>finished thought.</span>
          </h2>
          <p className="mt-5 text-[17px] leading-[1.6] text-fg2">
            Research that reads the whole record. Drafting that cites itself. Verification
            that catches what citators miss. Each surface is an opinion, not a feature list.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {FEATURES.map((f, i) => (
            <article
              key={f.n}
              className="card-lift flex flex-col rounded-[14px] border bg-white p-7"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="mb-5 text-[11px] font-medium uppercase tracking-[0.12em]"
                style={{ color: "var(--teal-700)" }}
              >
                {f.n}
              </div>
              <h3
                className="mb-3 text-[20px] leading-[1.2] tracking-[-0.01em]"
                style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--fg1)" }}
              >
                {f.title}
              </h3>
              <p className="mb-5 text-[14px] leading-[1.6] text-fg2">{f.body}</p>

              {/* Inline mini-visual per feature */}
              {i === 0 && (
                <div
                  className="mt-auto rounded-[10px] border p-4"
                  style={{ borderColor: "var(--border)", background: "var(--bone-50)" }}
                >
                  <div
                    className="mb-2 text-[10px] font-semibold uppercase tracking-[0.1em]"
                    style={{ color: "var(--teal-700)" }}
                  >
                    § LawGIQ · 4.2s
                  </div>
                  <div className="text-[13px] leading-[1.45] text-fg1">
                    &ldquo;Under Cal. Civ. Code{" "}
                    <span className="cite-chip">§ 1714(a)</span> every person owes a duty of
                    ordinary care…&rdquo;
                  </div>
                </div>
              )}
              {i === 1 && (
                <div
                  className="mt-auto rounded-[10px] border bg-white p-4"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div
                    className="text-[14px] leading-[1.55] text-fg1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    The court held that a duty arises where{" "}
                    <span className="hl-yellow">foreseeability of harm</span> and the
                    relationship between the parties support it.
                    <sup
                      className="ml-0.5 inline-block rounded-[3px] px-1.5 align-super text-[9px] font-semibold text-white"
                      style={{ background: "var(--ember-500)", fontFamily: "var(--font-sans)" }}
                    >
                      14
                    </sup>
                  </div>
                </div>
              )}
              {i === 2 && (
                <div
                  className="mt-auto flex items-start gap-2.5 rounded-[10px] border p-4"
                  style={{
                    borderColor: "var(--ember-100)",
                    background: "var(--ember-50)",
                  }}
                >
                  <span
                    className="shrink-0"
                    style={{ color: "var(--ember-600)" }}
                  >
                    <XIcon size={16} />
                  </span>
                  <div>
                    <div
                      className="mb-1 text-[12px] font-semibold leading-tight"
                      style={{ color: "var(--ember-700)" }}
                    >
                      3 cites in this draft are stale
                    </div>
                    <div
                      className="text-[11px] leading-[1.5]"
                      style={{ color: "var(--ember-600)" }}
                    >
                      Wilson v. Marek (2021) narrows the rule you cited.
                    </div>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* ═══ PRODUCT DETAIL — DARK ════════════════════════════ */}
      <section
        className="relative"
        style={{ background: "var(--slate-900)", color: "var(--fg-on-dark)" }}
      >
        <div className="mx-auto grid max-w-[1240px] items-start gap-12 px-6 py-24 md:grid-cols-[1fr_1.05fr] md:gap-16 md:px-10 md:py-32">
          <div>
            <span
              className="text-[12px] font-medium uppercase tracking-[0.12em]"
              style={{ color: "var(--teal-300)" }}
            >
              Inside the workspace
            </span>
            <h2
              className="mt-4 text-[34px] md:text-[44px]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--fg-on-dark)", lineHeight: 1.08, letterSpacing: "-0.015em", textWrap: "balance" }}
            >
              One matter, every{" "}
              <span style={{ fontStyle: "italic", color: "var(--teal-300)" }}>authority,</span>{" "}
              in context.
            </h2>
            <p className="mt-5 max-w-[480px] text-[17px] leading-[1.65]" style={{ color: "rgba(236,238,241,0.75)" }}>
              The workspace doesn&apos;t separate research from drafting from citation. They&apos;re the
              same surface — because that&apos;s how the work actually flows.
            </p>

            <div className="mt-9 grid gap-5">
              {DETAIL_ITEMS.map((d) => (
                <div key={d.title} className="flex gap-4">
                  <div
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-[8px]"
                    style={{ background: "rgba(118,171,174,0.18)", color: "var(--teal-300)" }}
                  >
                    <d.Icon size={18} />
                  </div>
                  <div>
                    <h4 className="mb-1 text-[15px] font-semibold" style={{ color: "var(--fg-on-dark)" }}>
                      {d.title}
                    </h4>
                    <p className="text-[14px] leading-[1.55]" style={{ color: "rgba(236,238,241,0.7)" }}>
                      {d.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product shot */}
          <div
            className="overflow-hidden rounded-[14px] border bg-white text-fg2"
            style={{
              borderColor: "rgba(255,255,255,0.08)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
            }}
          >
            <div
              className="flex items-center gap-1.5 border-b px-4 py-2.5"
              style={{ borderColor: "var(--border)" }}
            >
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
            </div>
            <div className="p-6 md:p-7">
              <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: "var(--teal-700)" }}>
                <span
                  className="text-[14px]"
                  style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--ember-500)", letterSpacing: 0, textTransform: "none" }}
                >
                  §
                </span>
                Supreme Court of California
              </div>
              <h4
                className="mb-3 text-[18px] leading-[1.3] tracking-[-0.01em]"
                style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--fg1)" }}
              >
                Elsner v. Uveges, 34 Cal. 4th 915 (2004)
              </h4>
              <p className="mb-4 text-[14px] leading-[1.6] text-fg2">
                We hold that{" "}
                <span className="hl-yellow">
                  Cal-OSHA provisions may be admitted to establish a standard or duty of care
                </span>{" "}
                in all negligence actions, not merely those brought by employees against their
                employers.
              </p>
              <div className="mb-5 flex flex-wrap gap-1.5">
                {["9th Cir.", "2004", "Cited 14×"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border bg-bone px-2 py-0.5 text-[10px] text-fg3"
                    style={{ borderColor: "var(--border)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="space-y-2 border-t pt-3" style={{ borderColor: "var(--border)" }}>
                {[
                  { n: "01", title: "Cal. Civ. Code § 1714(a)" },
                  { n: "02", title: "Evid. Code § 669" },
                ].map((r) => (
                  <div key={r.n} className="flex items-center gap-3 py-1.5">
                    <span
                      className="text-[10px] tracking-[0.05em] text-fg4"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {r.n}
                    </span>
                    <span
                      className="text-[14px] text-fg1"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {r.title}
                    </span>
                    <span
                      className="ml-auto rounded-full border px-2 py-0.5 text-[10px] font-medium"
                      style={{
                        color: "#2F8F6F",
                        background: "#E6F2EC",
                        borderColor: "rgba(47,143,111,0.25)",
                      }}
                    >
                      Good law
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ QUOTE ═════════════════════════════════════════════ */}
      <section className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid items-start gap-12 md:grid-cols-[260px_1fr] md:gap-16">
          <div>
            <div
              className="mb-4 grid h-12 w-12 place-items-center rounded-full text-[14px] font-semibold text-white"
              style={{ background: "var(--slate-700)" }}
            >
              AD
            </div>
            <div className="text-[15px] font-semibold text-fg1">Ananya Desai</div>
            <div className="text-[13px] text-fg3">Senior Litigation Associate</div>
            <div className="text-[13px]" style={{ color: "var(--teal-700)" }}>
              Cyril Amarchand Mangaldas, Mumbai
            </div>
          </div>
          <p
            className="text-[24px] leading-[1.45] md:text-[28px]"
            style={{ fontFamily: "var(--font-display)", color: "var(--fg1)", letterSpacing: "-0.005em", textWrap: "pretty" }}
          >
            I used to spend Sunday afternoons running citations through SCC Online on every
            authority in a brief. LawGIQ surfaces silent overrulings before I&apos;m even done
            drafting — and tells me which paragraph in <em>Vishaka</em> changed the rule.
            That&apos;s the part Manupatra never did.
          </p>
        </div>
      </section>

      {/* ═══ PRICING ═══════════════════════════════════════════ */}
      <section
        className="mx-auto max-w-[1240px] border-t px-6 py-24 md:px-10 md:py-32"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="mb-14 max-w-[760px]">
          <span className="t-eyebrow">Pricing</span>
          <h2
            className="mt-4 text-[36px] md:text-[48px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--fg1)", lineHeight: 1.08, letterSpacing: "-0.015em", textWrap: "balance" }}
          >
            Plans built around{" "}
            <span style={{ fontStyle: "italic" }}>how lawyers bill,</span>{" "}
            not seats.
          </h2>
          <p className="mt-5 text-[17px] leading-[1.6] text-fg2">
            All tiers include unlimited matters, BYOK for Westlaw/Lexis, and SOC&nbsp;2 Type&nbsp;II controls.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {TIERS.map((t) => {
            const featured = t.featured;
            return (
              <div
                key={t.name}
                className="card-lift relative flex flex-col rounded-[14px] border bg-white p-7 md:p-8"
                style={{
                  borderColor: featured ? "var(--slate-700)" : "var(--border)",
                  boxShadow: featured
                    ? "0 12px 32px rgba(20,24,29,0.10), 0 2px 6px rgba(20,24,29,0.04)"
                    : undefined,
                }}
              >
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-[14px] font-semibold tracking-[-0.005em] text-fg1">
                    {t.name}
                  </span>
                  {t.pill && (
                    <span
                      className="rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em] text-white"
                      style={{ background: "var(--ember-500)" }}
                    >
                      {t.pill}
                    </span>
                  )}
                </div>
                <div className="mb-3 flex items-baseline gap-2">
                  <span
                    className="text-[44px] tracking-[-0.02em]"
                    style={{ fontFamily: "var(--font-display)", color: "var(--fg1)", lineHeight: 1 }}
                  >
                    {t.price}
                  </span>
                  {t.per && (
                    <span className="text-[13px] text-fg3">{t.per}</span>
                  )}
                </div>
                <p className="mb-6 text-[14px] leading-[1.55] text-fg2">{t.desc}</p>
                <ul className="mb-7 space-y-2.5 text-[14px] text-fg2">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span style={{ color: "var(--teal-700)" }} className="mt-1 shrink-0">
                        <Check size={14} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`focus-ring mt-auto rounded-[8px] px-5 py-3 text-[14px] font-medium transition-colors`}
                  style={
                    t.variant === "primary"
                      ? { background: "var(--ember-500)", color: "white" }
                      : t.variant === "dark"
                        ? { background: "var(--slate-700)", color: "var(--bone)" }
                        : {
                            background: "white",
                            color: "var(--fg1)",
                            border: "1px solid var(--border-strong)",
                          }
                  }
                >
                  {t.cta}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══ CLOSING CTA ═══════════════════════════════════════ */}
      <section
        className="relative"
        style={{ background: "var(--slate-900)", color: "var(--fg-on-dark)" }}
      >
        <div className="mx-auto max-w-[1240px] px-6 py-24 text-center md:px-10 md:py-32">
          <h2
            className="mx-auto max-w-[760px] text-[44px] md:text-[64px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--fg-on-dark)", lineHeight: 1.05, letterSpacing: "-0.015em", textWrap: "balance" }}
          >
            Spend your{" "}
            <span style={{ fontStyle: "italic", color: "var(--ember-500)" }}>judgment</span>{" "}
            where it matters.
          </h2>
          <p
            className="mx-auto mt-5 max-w-[520px] text-[17px] leading-[1.55]"
            style={{ color: "rgba(236,238,241,0.7)" }}
          >
            14-day trial. No card required. Bring your own Westlaw or Lexis credentials.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <button
              className="focus-ring inline-flex items-center gap-2 rounded-[8px] px-7 py-4 text-[15px] font-medium text-white"
              style={{ background: "var(--ember-500)" }}
            >
              Request a demo
              <ArrowRight size={16} />
            </button>
            <button
              className="focus-ring inline-flex items-center gap-2 rounded-[8px] border px-6 py-4 text-[15px] font-medium"
              style={{
                borderColor: "rgba(236,238,241,0.25)",
                color: "var(--fg-on-dark)",
              }}
            >
              Start a trial
            </button>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ════════════════════════════════════════════ */}
      <footer
        className="border-t"
        style={{ background: "var(--slate-950)", color: "var(--fg-on-dark)", borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-14 md:grid-cols-[1.6fr_1fr_1fr_1fr_1fr] md:px-10">
          <div>
            <Logo size={28} inverse />
            <p className="mt-4 max-w-[300px] text-[13px] leading-[1.6]" style={{ color: "rgba(236,238,241,0.55)" }}>
              An AI-powered legal assistant built for the way attorneys actually research,
              draft, and verify.
            </p>
          </div>
          {[
            { h: "Product", items: ["Research", "Drafting", "Verification", "Integrations", "Changelog"] },
            { h: "Solutions", items: ["Litigation", "Transactional", "Regulatory", "In-house counsel", "Solo & small firm"] },
            { h: "Company", items: ["About", "Customers", "Careers", "Press", "Contact"] },
            { h: "Resources", items: ["Documentation", "Security", "Trust center", "Bar-approved CLE", "API"] },
          ].map((col) => (
            <div key={col.h}>
              <div
                className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em]"
                style={{ color: "rgba(236,238,241,0.5)" }}
              >
                {col.h}
              </div>
              <ul className="space-y-2 text-[13px]">
                {col.items.map((i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="transition-colors"
                      style={{ color: "rgba(236,238,241,0.78)" }}
                    >
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          className="border-t"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-3 px-6 py-5 text-[12px] md:flex-row md:items-center md:px-10" style={{ color: "rgba(236,238,241,0.5)" }}>
            <span>© {new Date().getFullYear()} LawGIQ, Inc. · LawGIQ is not a law firm and does not provide legal advice.</span>
            <div className="flex gap-5">
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
              <a href="#">DPA</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
