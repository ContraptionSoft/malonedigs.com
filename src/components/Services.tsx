"use client";

const services = [
  "French drains",
  "Septic digging",
  "Land clearing",
  "Grading",
  "Trenching",
  "Pool digging",
  "Site prep",
  "General dirt work",
  "Land development",
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 lg:py-32"
      style={{ background: "#0D1B2A" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, #2F6F95, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="inline-block mb-4 text-xs tracking-widest uppercase"
            style={{
              fontFamily: "var(--font-oswald)",
              color: "#2F6F95",
              letterSpacing: "0.3em",
            }}
          >
            What We Do
          </span>
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
            SERVICES
          </h2>
          <div
            className="mx-auto mb-6"
            style={{ width: 64, height: 2, background: "#2F6F95" }}
          />
          <p
            className="max-w-2xl mx-auto"
            style={{
              fontFamily: "var(--font-source-sans)",
              fontSize: "1.05rem",
              color: "#8FA0AD",
              lineHeight: 1.7,
            }}
          >
            If it involves dirt and a machine, there&apos;s a good chance Chase can handle it.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: "rgba(47,111,149,0.12)", border: "1px solid rgba(47,111,149,0.12)" }}
        >
          {services.map((service) => (
            <div
              key={service}
              className="group p-8 transition-all duration-300"
              style={{ background: "#0D1B2A" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "#0F2235";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "#0D1B2A";
              }}
            >
              <div
                className="mb-4 h-1.5 w-12"
                style={{ background: "#2F6F95", borderRadius: "2px" }}
              />
              <h3
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontWeight: 600,
                  fontSize: "1.15rem",
                  letterSpacing: "0.06em",
                  color: "#FFFFFF",
                }}
              >
                {service}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
