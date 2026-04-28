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
          {/* Map */}
          <div className="relative order-2 lg:order-1 w-full" style={{ aspectRatio: "4/3" }}>
            <iframe
              src="https://maps.google.com/maps?q=Arkansas&ll=34.7465,-92.2896&z=7&output=embed"
              width="100%"
              height="100%"
              style={{ border: "none", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Malone Excavation service area"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
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
              SERVICE
              <br />
              <span style={{ color: "#2F6F95" }}>AREA</span>
            </h2>
            <div
              className="mb-6"
              style={{ width: 48, height: 2, background: "#2F6F95" }}
            />
            <p
              className="mb-10"
              style={{
                fontFamily: "var(--font-source-sans)",
                fontSize: "1.15rem",
                color: "#8FA0AD",
                lineHeight: 1.7,
              }}
            >
              Based in Benton, we work throughout Central Arkansas daily. For larger projects, we&apos;ll travel anywhere in the state.
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
                        fontSize: "1.05rem",
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
                      fontSize: "1rem",
                      color: "#6B8090",
                      lineHeight: 1.6,
                    }}
                  >
                    {r.cities.join(" · ")}
                  </p>
                  <p
                    className="ml-5 italic"
                    style={{
                      fontFamily: "var(--font-source-sans)",
                      fontSize: "0.95rem",
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
