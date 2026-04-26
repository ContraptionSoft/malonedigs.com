"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32"
      style={{
        background: "linear-gradient(160deg, #0D1B2A 0%, #0A2234 50%, #0D1B2A 100%)",
      }}
    >
      {/* Top border accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, #3BAEAE, transparent)" }}
      />

      {/* Background dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(59,174,174,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block mb-4 text-xs tracking-widest uppercase"
            style={{
              fontFamily: "var(--font-oswald)",
              color: "#3BAEAE",
              letterSpacing: "0.3em",
            }}
          >
            Let&apos;s Talk
          </span>
          <h2
            className="mb-4 leading-none"
            style={{
              fontFamily: "var(--font-oswald)",
              fontWeight: 700,
              fontSize: "clamp(2rem, 6vw, 4rem)",
              color: "#FFFFFF",
              letterSpacing: "0.03em",
            }}
          >
            GET AN ESTIMATE
          </h2>
          <div
            className="mx-auto mb-6"
            style={{ width: 48, height: 2, background: "#3BAEAE" }}
          />
          <p
            className="max-w-xl mx-auto"
            style={{
              fontFamily: "var(--font-source-sans)",
              fontSize: "1.05rem",
              color: "#8FA0AD",
              lineHeight: 1.7,
            }}
          >
            The fastest way to get a quote is a phone call or a text. Tell us
            where the job is, what you&apos;re trying to do, and we&apos;ll give
            you a straight answer.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {/* Phone card */}
          <a
            href="tel:+18708830599"
            className="group flex flex-col items-center justify-center gap-4 p-10 text-center transition-all duration-200"
            style={{
              border: "1px solid rgba(59,174,174,0.25)",
              borderRadius: "2px",
              background: "rgba(22,37,57,0.6)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(59,174,174,0.6)";
              e.currentTarget.style.background = "rgba(22,37,57,0.9)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(59,174,174,0.25)";
              e.currentTarget.style.background = "rgba(22,37,57,0.6)";
            }}
          >
            <div
              className="flex items-center justify-center w-14 h-14"
              style={{
                background: "rgba(59,174,174,0.12)",
                color: "#3BAEAE",
                borderRadius: "2px",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.12 1.18 2 2 0 012.1 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </div>
            <div>
              <div
                className="mb-1 text-xs uppercase tracking-widest"
                style={{
                  fontFamily: "var(--font-oswald)",
                  color: "rgba(59,174,174,0.7)",
                  letterSpacing: "0.2em",
                  fontSize: "0.65rem",
                }}
              >
                Call or Text
              </div>
              <div
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  color: "#FFFFFF",
                  letterSpacing: "0.06em",
                }}
              >
                (870) 883-0599
              </div>
              <div
                className="mt-1 text-xs"
                style={{
                  fontFamily: "var(--font-source-sans)",
                  color: "rgba(244,239,230,0.4)",
                  fontStyle: "italic",
                }}
              >
                Available Mon–Sat
              </div>
            </div>
          </a>

          {/* Email card */}
          <a
            href="mailto:chase@malonedigs.com"
            className="group flex flex-col items-center justify-center gap-4 p-10 text-center transition-all duration-200"
            style={{
              border: "1px solid rgba(59,174,174,0.25)",
              borderRadius: "2px",
              background: "rgba(22,37,57,0.6)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(59,174,174,0.6)";
              e.currentTarget.style.background = "rgba(22,37,57,0.9)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(59,174,174,0.25)";
              e.currentTarget.style.background = "rgba(22,37,57,0.6)";
            }}
          >
            <div
              className="flex items-center justify-center w-14 h-14"
              style={{
                background: "rgba(59,174,174,0.12)",
                color: "#3BAEAE",
                borderRadius: "2px",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div>
              <div
                className="mb-1 text-xs uppercase tracking-widest"
                style={{
                  fontFamily: "var(--font-oswald)",
                  color: "rgba(59,174,174,0.7)",
                  letterSpacing: "0.2em",
                  fontSize: "0.65rem",
                }}
              >
                Email
              </div>
              {/* PLACEHOLDER — replace with real email if different */}
              <div
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontWeight: 600,
                  fontSize: "1.2rem",
                  color: "#FFFFFF",
                  letterSpacing: "0.04em",
                  wordBreak: "break-all",
                }}
              >
                chase@malonedigs.com
              </div>
              <div
                className="mt-1 text-xs"
                style={{
                  fontFamily: "var(--font-source-sans)",
                  color: "rgba(244,239,230,0.4)",
                  fontStyle: "italic",
                }}
              >
                We&apos;ll reply within 24 hours
              </div>
            </div>
          </a>
        </div>

        {/* Location note */}
        <div
          className="flex items-start gap-4 p-6"
          style={{
            border: "1px solid rgba(59,174,174,0.12)",
            borderRadius: "2px",
            background: "rgba(13,27,42,0.5)",
          }}
        >
          <div
            className="shrink-0 flex items-center justify-center w-10 h-10 mt-0.5"
            style={{
              background: "rgba(59,174,174,0.1)",
              color: "#3BAEAE",
              borderRadius: "2px",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <div>
            <div
              className="mb-1"
              style={{
                fontFamily: "var(--font-oswald)",
                fontWeight: 600,
                fontSize: "0.9rem",
                letterSpacing: "0.08em",
                color: "#FFFFFF",
              }}
            >
              Benton, Arkansas — Serving the Whole State
            </div>
            <p
              style={{
                fontFamily: "var(--font-source-sans)",
                fontSize: "0.9rem",
                color: "#6B8090",
                lineHeight: 1.6,
              }}
            >
              We&apos;re based in Benton and work primarily throughout Central Arkansas, but we travel for the right job.
              If you&apos;re not sure whether we cover your area, just ask — the answer is probably yes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
