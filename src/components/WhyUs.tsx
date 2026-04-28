"use client";

const pillars = [
  {
    number: "01",
    title: "Owner-Operated",
    body: "Malone is on every job. You're working directly with the operator, not a dispatcher.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Straight Talk",
    body: "Honest quotes, no scope creep. If something changes on-site, you hear about it before we do it.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Right Equipment",
    body: "We match the machine to the job — not whatever's available. Cleaner work, fewer surprises.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Shows Up",
    body: "We schedule a job, we're there. No chasing down a contractor to find out where they are.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section
      className="relative py-24 lg:py-32"
      style={{ background: "#0F2032" }}
    >
      {/* Top border accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, #2F6F95, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: header */}
          <div className="lg:sticky lg:top-28">
            <h2
              className="mb-6 leading-none"
              style={{
                fontFamily: "var(--font-oswald)",
                fontWeight: 700,
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#FFFFFF",
                letterSpacing: "0.03em",
              }}
            >
              WHY
              <br />
              <span style={{ color: "#2F6F95" }}>MALONE</span>
            </h2>
            <div
              className="mb-6"
              style={{ width: 48, height: 2, background: "#2F6F95" }}
            />
            <p
              className="mb-8"
              style={{
                fontFamily: "var(--font-source-sans)",
                fontSize: "1.15rem",
                color: "#8FA0AD",
                lineHeight: 1.7,
              }}
            >
              Plenty of contractors in Arkansas. Harder to find one who shows up, does the work right, and gives you a straight answer.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 font-semibold transition-all duration-200"
              style={{
                fontFamily: "var(--font-oswald)",
                fontSize: "1rem",
                letterSpacing: "0.12em",
                background: "#2F6F95",
                color: "#0D1B2A",
                borderRadius: "2px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#245978";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#2F6F95";
              }}
            >
              GET A FREE ESTIMATE
            </a>
          </div>

          {/* Right: pillars */}
          <div className="flex flex-col gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="flex gap-6 p-6 transition-all duration-200"
                style={{
                  border: "1px solid rgba(47,111,149,0.15)",
                  borderRadius: "2px",
                  background: "rgba(13,27,42,0.5)",
                }}
              >
                {/* Number + icon */}
                <div className="shrink-0 flex flex-col items-center gap-2">
                  <div
                    className="flex items-center justify-center w-10 h-10"
                    style={{
                      background: "rgba(47,111,149,0.1)",
                      color: "#2F6F95",
                      borderRadius: "2px",
                    }}
                  >
                    {pillar.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-oswald)",
                      fontSize: "0.7rem",
                      color: "rgba(47,111,149,0.5)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {pillar.number}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: "var(--font-oswald)",
                      fontWeight: 600,
                      fontSize: "1.2rem",
                      letterSpacing: "0.06em",
                      color: "#FFFFFF",
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-source-sans)",
                      fontSize: "1.05rem",
                      color: "#7A8F9A",
                      lineHeight: 1.7,
                    }}
                  >
                    {pillar.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
