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
      {/* Background texture dots */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(59,174,174,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Diagonal teal accent bar */}
      <div
        className="absolute top-0 right-0 bottom-0 pointer-events-none hidden lg:block"
        style={{
          width: "42%",
          background:
            "linear-gradient(135deg, transparent 45%, rgba(59,174,174,0.06) 45%)",
        }}
      />

      {/* Corner bracket decoration — top left */}
      <div className="absolute top-24 left-6 sm:left-12 pointer-events-none hidden sm:block">
        <div
          style={{
            width: 40,
            height: 40,
            borderTop: "2px solid rgba(59,174,174,0.5)",
            borderLeft: "2px solid rgba(59,174,174,0.5)",
          }}
        />
      </div>
      {/* Corner bracket decoration — bottom right */}
      <div className="absolute bottom-12 right-6 sm:right-12 pointer-events-none hidden sm:block">
        <div
          style={{
            width: 40,
            height: 40,
            borderBottom: "2px solid rgba(59,174,174,0.5)",
            borderRight: "2px solid rgba(59,174,174,0.5)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 pt-20 pb-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Eyebrow */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div style={{ width: 32, height: 1, background: "#3BAEAE" }} />
              <span
                className="text-xs tracking-widest uppercase"
                style={{
                  fontFamily: "var(--font-oswald)",
                  color: "#3BAEAE",
                  letterSpacing: "0.3em",
                }}
              >
                Benton, Arkansas
              </span>
              <div style={{ width: 32, height: 1, background: "#3BAEAE" }} />
            </div>

            {/* Headline */}
            <h1
              className="mb-4 leading-none"
              style={{
                fontFamily: "var(--font-oswald)",
                fontWeight: 700,
                fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
                letterSpacing: "0.02em",
                color: "#FFFFFF",
              }}
            >
              BUILT ON
              <br />
              <span style={{ color: "#3BAEAE" }}>SOLID</span>
              <br />
              GROUND
            </h1>

            {/* Sub-headline */}
            <p
              className="mb-10 max-w-xl mx-auto lg:mx-0"
              style={{
                fontFamily: "var(--font-source-sans)",
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                color: "#B8C4CC",
                lineHeight: 1.7,
              }}
            >
              Professional excavation and heavy equipment work done right,
              the first time. Serving homeowners, contractors, and developers
              across Arkansas from our home base in Benton.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="tel:+15015550100"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold transition-all duration-200"
                style={{
                  fontFamily: "var(--font-oswald)",
                  letterSpacing: "0.12em",
                  fontSize: "0.95rem",
                  background: "#3BAEAE",
                  color: "#0D1B2A",
                  borderRadius: "2px",
                  boxShadow: "0 4px 24px rgba(59,174,174,0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#2A8888";
                  e.currentTarget.style.boxShadow =
                    "0 4px 32px rgba(59,174,174,0.45)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#3BAEAE";
                  e.currentTarget.style.boxShadow =
                    "0 4px 24px rgba(59,174,174,0.3)";
                }}
              >
                <PhoneIcon />
                {/* PLACEHOLDER — replace with real number */}
                CALL (501) 555-0100
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
                  e.currentTarget.style.borderColor = "#3BAEAE";
                  e.currentTarget.style.color = "#3BAEAE";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(244,239,230,0.3)";
                  e.currentTarget.style.color = "#F4EFE6";
                }}
              >
                OUR SERVICES
                <ArrowRightIcon />
              </a>
            </div>

            {/* Trust bar */}
            <div
              className="mt-10 pt-8 flex flex-wrap items-center gap-6 justify-center lg:justify-start"
              style={{ borderTop: "1px solid rgba(59,174,174,0.2)" }}
            >
              {[
                { num: "Est.", sub: "2026" },
                { num: "100%", sub: "Arkansas Based" },
                { num: "Free", sub: "Estimates" },
              ].map((item) => (
                <div key={item.sub} className="text-center">
                  <div
                    className="leading-none"
                    style={{
                      fontFamily: "var(--font-oswald)",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "#3BAEAE",
                    }}
                  >
                    {item.num}
                  </div>
                  <div
                    className="mt-1 text-xs uppercase tracking-widest"
                    style={{
                      fontFamily: "var(--font-oswald)",
                      color: "#7A8F9A",
                      letterSpacing: "0.15em",
                    }}
                  >
                    {item.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Logo badge */}
          <div className="shrink-0 flex items-center justify-center">
            <div className="relative">
              {/* Outer glow ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(59,174,174,0.15) 0%, transparent 70%)",
                  transform: "scale(1.5)",
                }}
              />
              <Image
                src="/logo.png"
                alt="Malone Excavation"
                width={300}
                height={300}
                className="relative z-10 drop-shadow-2xl"
                style={{
                  width: "clamp(200px, 28vw, 300px)",
                  height: "auto",
                  filter: "drop-shadow(0 0 40px rgba(59,174,174,0.2))",
                }}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(13,27,42,0.8))",
        }}
      />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span
          className="text-xs tracking-widest uppercase"
          style={{ fontFamily: "var(--font-oswald)", color: "rgba(59,174,174,0.6)", letterSpacing: "0.2em" }}
        >
          scroll
        </span>
        <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
          <rect x="5" y="1" width="4" height="8" rx="2" stroke="rgba(59,174,174,0.6)" strokeWidth="1.5" />
          <path d="M7 10v7M4 14l3 3 3-3" stroke="rgba(59,174,174,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
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
