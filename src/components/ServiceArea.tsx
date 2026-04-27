const regions = [
  {
    region: "Central Arkansas",
    cities: ["Benton", "Bryant", "Little Rock", "North Little Rock", "Conway", "Cabot", "Maumelle", "Sherwood"],
    note: "Home base — this is where we do most of our work.",
  },
  {
    region: "Southwest Arkansas",
    cities: ["Hot Springs", "Arkadelphia", "Malvern", "Saline County", "Garland County"],
    note: "Regular coverage throughout the southwest corridor.",
  },
  {
    region: "Statewide",
    cities: ["Fort Smith", "Jonesboro", "Fayetteville / NWA", "Pine Bluff", "Russellville", "Harrison"],
    note: "For larger projects, we'll travel. Call us to discuss.",
  },
];

export default function ServiceArea() {
  return (
    <section
      id="service-area"
      className="relative py-24 lg:py-32"
      style={{ background: "#0D1B2A" }}
    >
      {/* Top border accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, #2F6F95, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Map placeholder / visual */}
          <div className="relative flex items-center justify-center order-2 lg:order-1">
            <div
              className="relative w-full max-w-md aspect-square flex items-center justify-center"
              style={{
                background: "rgba(22,37,57,0.7)",
                border: "1px solid rgba(47,111,149,0.2)",
                borderRadius: "2px",
              }}
            >
              {/* Arkansas outline SVG (simplified) */}
              <svg
                viewBox="0 0 220 240"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4/5 h-4/5"
                aria-label="Arkansas service area map"
              >
                {/* Simplified Arkansas border */}
                <path
                  d="M40 20 L180 20 L185 30 L190 40 L188 55 L192 70 L190 90 L195 110 L192 130 L188 150 L180 165 L170 175 L155 180 L140 185 L125 190 L110 192 L95 190 L80 188 L65 182 L50 175 L38 165 L30 150 L28 135 L30 118 L32 100 L28 80 L30 60 L35 40 Z"
                  fill="rgba(47,111,149,0.08)"
                  stroke="rgba(47,111,149,0.4)"
                  strokeWidth="1.5"
                />
                {/* Benton / Central AR star */}
                <circle cx="110" cy="108" r="6" fill="#2F6F95" opacity="0.9" />
                <circle cx="110" cy="108" r="12" fill="rgba(47,111,149,0.2)" />
                <circle cx="110" cy="108" r="20" fill="rgba(47,111,149,0.07)" />
                {/* Dot: Hot Springs */}
                <circle cx="90" cy="128" r="3" fill="rgba(47,111,149,0.5)" />
                {/* Dot: Little Rock */}
                <circle cx="120" cy="100" r="3" fill="rgba(47,111,149,0.5)" />
                {/* Dot: Conway */}
                <circle cx="112" cy="88" r="3" fill="rgba(47,111,149,0.5)" />
                {/* Dot: Fort Smith */}
                <circle cx="55" cy="100" r="3" fill="rgba(47,111,149,0.3)" />
                {/* Dot: Fayetteville */}
                <circle cx="62" cy="48" r="3" fill="rgba(47,111,149,0.3)" />
                {/* Dot: Jonesboro */}
                <circle cx="160" cy="50" r="3" fill="rgba(47,111,149,0.3)" />
                {/* Benton label */}
                <text x="118" y="112" fill="#2F6F95" fontSize="9" fontFamily="sans-serif" fontWeight="bold">Benton</text>
              </svg>

              {/* Corner brackets */}
              <div className="absolute top-3 left-3" style={{ width: 16, height: 16, borderTop: "1.5px solid rgba(47,111,149,0.5)", borderLeft: "1.5px solid rgba(47,111,149,0.5)" }} />
              <div className="absolute top-3 right-3" style={{ width: 16, height: 16, borderTop: "1.5px solid rgba(47,111,149,0.5)", borderRight: "1.5px solid rgba(47,111,149,0.5)" }} />
              <div className="absolute bottom-3 left-3" style={{ width: 16, height: 16, borderBottom: "1.5px solid rgba(47,111,149,0.5)", borderLeft: "1.5px solid rgba(47,111,149,0.5)" }} />
              <div className="absolute bottom-3 right-3" style={{ width: 16, height: 16, borderBottom: "1.5px solid rgba(47,111,149,0.5)", borderRight: "1.5px solid rgba(47,111,149,0.5)" }} />

              {/* Watermark label */}
              <span
                className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs tracking-widest uppercase"
                style={{
                  fontFamily: "var(--font-oswald)",
                  color: "rgba(47,111,149,0.4)",
                  letterSpacing: "0.25em",
                  fontSize: "0.6rem",
                }}
              >
                Arkansas
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span
              className="inline-block mb-4 text-xs tracking-widest uppercase"
              style={{
                fontFamily: "var(--font-oswald)",
                color: "#2F6F95",
                letterSpacing: "0.3em",
              }}
            >
              Coverage Area
            </span>
            <h2
              className="mb-4 leading-none"
              style={{
                fontFamily: "var(--font-oswald)",
                fontWeight: 700,
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                color: "#FFFFFF",
                letterSpacing: "0.03em",
              }}
            >
              SERVING ALL
              <br />
              <span style={{ color: "#2F6F95" }}>OF ARKANSAS</span>
            </h2>
            <div
              className="mb-6"
              style={{ width: 48, height: 2, background: "#2F6F95" }}
            />
            <p
              className="mb-10"
              style={{
                fontFamily: "var(--font-source-sans)",
                fontSize: "1.05rem",
                color: "#8FA0AD",
                lineHeight: 1.7,
              }}
            >
              Based in Benton, we work throughout Central Arkansas on a daily
              basis. Larger or more involved projects can take us anywhere in
              the state — give us a call and we&apos;ll talk through what makes
              sense.
            </p>

            {/* Region cards */}
            <div className="flex flex-col gap-4">
              {regions.map((r) => (
                <div
                  key={r.region}
                  className="p-5"
                  style={{
                    border: "1px solid rgba(47,111,149,0.15)",
                    borderRadius: "2px",
                    background: "rgba(22,37,57,0.4)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "#2F6F95",
                        flexShrink: 0,
                      }}
                    />
                    <h3
                      style={{
                        fontFamily: "var(--font-oswald)",
                        fontWeight: 600,
                        fontSize: "0.95rem",
                        letterSpacing: "0.1em",
                        color: "#FFFFFF",
                      }}
                    >
                      {r.region}
                    </h3>
                  </div>
                  <p
                    className="mb-1 ml-5"
                    style={{
                      fontFamily: "var(--font-source-sans)",
                      fontSize: "0.88rem",
                      color: "#6B8090",
                      lineHeight: 1.6,
                    }}
                  >
                    {r.cities.join(" · ")}
                  </p>
                  <p
                    className="ml-5 text-xs italic"
                    style={{
                      fontFamily: "var(--font-source-sans)",
                      color: "rgba(47,111,149,0.6)",
                    }}
                  >
                    {r.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
