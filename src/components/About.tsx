import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-32"
      style={{ background: "#0F2032" }}
    >
      {/* Top border accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, #2F6F95, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Logo / visual */}
          <div className="flex items-center justify-center">
            <div
              className="relative"
              style={{ width: "clamp(160px, 20vw, 240px)", aspectRatio: "2/3" }}
            >
              <Image
                src="/logo.png"
                alt="Malone Excavation"
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 1024px) 160px, 240px"
              />
            </div>
          </div>

          {/* Content */}
          <div>
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
              MALONE
              <br />
              <span style={{ color: "#2F6F95" }}>EXCAVATION</span>
            </h2>
            <div
              className="mb-8"
              style={{ width: 48, height: 2, background: "#2F6F95" }}
            />

            <div
              className="space-y-5"
              style={{
                fontFamily: "var(--font-source-sans)",
                fontSize: "1.1rem",
                color: "#8FA0AD",
                lineHeight: 1.8,
              }}
            >
              <p>
                We&apos;re based in Benton and have spent years working the ground across Arkansas — learning how it drains, how it holds, and what the work actually takes.
              </p>
              <p>
                Owner-operated, straightforward pricing, and we show up on time.
              </p>
            </div>

            {/* Quick facts */}
            <div
              className="mt-10 grid grid-cols-2 gap-4"
            >
              {[
                { label: "Based In", value: "Benton, AR" },
                { label: "Established", value: "2026" },
                { label: "Coverage", value: "Statewide" },
                { label: "Estimates", value: "Free" },
              ].map((fact) => (
                <div
                  key={fact.label}
                  className="p-4"
                  style={{
                    border: "1px solid rgba(47,111,149,0.15)",
                    borderRadius: "2px",
                    background: "rgba(13,27,42,0.4)",
                  }}
                >
                  <div
                    className="text-xs uppercase tracking-widest mb-1"
                    style={{
                      fontFamily: "var(--font-oswald)",
                      color: "rgba(47,111,149,0.7)",
                      letterSpacing: "0.2em",
                      fontSize: "0.75rem",
                    }}
                  >
                    {fact.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-oswald)",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      color: "#FFFFFF",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {fact.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
