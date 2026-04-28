"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        minHeight: "100svh",
        background: "linear-gradient(160deg, #0D1B2A 0%, #0D2035 40%, #0A2940 100%)",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 pt-20 pb-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div style={{ width: 32, height: 1, background: "#2F6F95" }} />
              <span
                className="text-xs tracking-widest uppercase"
                style={{
                  fontFamily: "var(--font-oswald)",
                  color: "#2F6F95",
                  letterSpacing: "0.3em",
                }}
              >
                Benton, Arkansas
              </span>
              <div style={{ width: 32, height: 1, background: "#2F6F95" }} />
            </div>

            <h1
              className="mb-6 leading-none"
              style={{
                fontFamily: "var(--font-oswald)",
                fontWeight: 700,
                fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
                letterSpacing: "0.02em",
                color: "#FFFFFF",
              }}
            >
              DIRT WORK
              <br />
              <span style={{ color: "#2F6F95" }}>FOR ARKANSAS</span>
            </h1>

            <p
              className="mb-10 max-w-xl mx-auto lg:mx-0"
              style={{
                fontFamily: "var(--font-source-sans)",
                fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
                color: "#8FA0AD",
                lineHeight: 1.7,
              }}
            >
              French drains, septic, land clearing, grading, trenching, pool digging, and site work — based in Benton, working anywhere in Arkansas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="tel:+18708830599"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold transition-all duration-200"
                style={{
                  fontFamily: "var(--font-oswald)",
                  letterSpacing: "0.12em",
                  fontSize: "0.95rem",
                  background: "#2F6F95",
                  color: "#0D1B2A",
                  borderRadius: "2px",
                  boxShadow: "0 4px 24px rgba(47,111,149,0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#245978";
                  e.currentTarget.style.boxShadow =
                    "0 4px 32px rgba(47,111,149,0.45)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#2F6F95";
                  e.currentTarget.style.boxShadow =
                    "0 4px 24px rgba(47,111,149,0.3)";
                }}
              >
                <PhoneIcon />
                CALL (870) 883-0599
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold transition-all duration-200"
                style={{
                  fontFamily: "var(--font-oswald)",
                  letterSpacing: "0.12em",
                  fontSize: "0.95rem",
                  background: "transparent",
                  color: "#F4EFE6",
                  border: "1px solid rgba(244,239,230,0.3)",
                  borderRadius: "2px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#2F6F95";
                  e.currentTarget.style.color = "#2F6F95";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(244,239,230,0.3)";
                  e.currentTarget.style.color = "#F4EFE6";
                }}
              >
                SEE SERVICES
                <ArrowRightIcon />
              </a>
            </div>
          </div>

          <div
            className="shrink-0 relative"
            style={{ width: "clamp(200px, 28vw, 300px)", aspectRatio: "2/3" }}
          >
            <Image
              src="/logo.png"
              alt="Malone Excavation"
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 1024px) 200px, 300px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.12 1.18 2 2 0 012.1 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}
