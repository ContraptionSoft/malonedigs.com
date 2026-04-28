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
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, #2F6F95, transparent)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
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
            GET IN TOUCH
          </h2>
          <div
            className="mx-auto mb-6"
            style={{ width: 48, height: 2, background: "#2F6F95" }}
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
            Call or text for a free estimate.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <a
            href="tel:+18708830599"
            className="group flex flex-col items-center justify-center gap-4 p-10 text-center transition-all duration-200"
            style={{
              border: "1px solid rgba(47,111,149,0.25)",
              borderRadius: "2px",
              background: "rgba(22,37,57,0.6)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(47,111,149,0.6)";
              e.currentTarget.style.background = "rgba(22,37,57,0.9)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(47,111,149,0.25)";
              e.currentTarget.style.background = "rgba(22,37,57,0.6)";
            }}
          >
            <div
              className="flex items-center justify-center w-14 h-14"
              style={{
                background: "rgba(47,111,149,0.12)",
                color: "#2F6F95",
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
                  color: "rgba(47,111,149,0.7)",
                  letterSpacing: "0.2em",
                  fontSize: "0.8rem",
                }}
              >
                Phone
              </div>
              <div
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontWeight: 700,
                  fontSize: "2rem",
                  color: "#FFFFFF",
                  letterSpacing: "0.06em",
                }}
              >
                (870) 883-0599
              </div>
            </div>
          </a>

          <div
            className="mt-6 flex items-start gap-4 p-6"
            style={{
              border: "1px solid rgba(47,111,149,0.12)",
              borderRadius: "2px",
              background: "rgba(13,27,42,0.5)",
            }}
          >
            <div
              className="shrink-0 flex items-center justify-center w-10 h-10 mt-0.5"
              style={{
                background: "rgba(47,111,149,0.1)",
                color: "#2F6F95",
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
                  fontSize: "1rem",
                  letterSpacing: "0.08em",
                  color: "#FFFFFF",
                }}
              >
                Benton, Arkansas
              </div>
              <p
                style={{
                  fontFamily: "var(--font-source-sans)",
                  fontSize: "1rem",
                  color: "#6B8090",
                  lineHeight: 1.6,
                }}
              >
                Works anywhere in Arkansas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
