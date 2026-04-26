"use client";

const services = [
  {
    title: "French Drains",
    description:
      "Persistent standing water and soggy yards are a solvable problem. We design and install French drain systems that move water where it belongs — away from your foundation, yard, and driveway.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v6M12 22v-6M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M2 12h6M22 12h-6M4.93 19.07l4.24-4.24M14.83 9.17l4.24-4.24"/>
      </svg>
    ),
  },
  {
    title: "Septic Systems",
    description:
      "New construction or replacement — we handle the excavation and site prep for septic tank installation. We work with system installers or can coordinate the full job.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2"/>
        <path d="M7 11V7a5 5 0 0110 0v4"/>
        <circle cx="12" cy="16" r="1"/>
      </svg>
    ),
  },
  {
    title: "Land Clearing",
    description:
      "Got timber, brush, stumps, or overgrowth standing between you and a usable piece of property? We clear it out efficiently and leave you a clean slate to build on.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8C17 11.866 14.761 15 12 15C9.239 15 7 11.866 7 8C7 4.134 9.239 1 12 1C14.761 1 17 4.134 17 8Z"/>
        <path d="M12 15v8M9 19h6M4 19c1-3 4-4 8-4s7 1 8 4"/>
      </svg>
    ),
  },
  {
    title: "Grading & Leveling",
    description:
      "Proper grading is the foundation of everything that comes after. We establish correct slopes and drainage patterns for pads, lots, driveways, and entire properties.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12l4-4 4 4 4-4 4 4M3 20h18M3 4h18"/>
      </svg>
    ),
  },
  {
    title: "Pool Excavation",
    description:
      "Digging for an in-ground pool is no place to cut corners. We excavate to the specified depth and shape so your pool contractor can get straight to work.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h4l3-9 4 18 3-9h6"/>
        <path d="M2 20c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/>
      </svg>
    ),
  },
  {
    title: "Drainage Work",
    description:
      "Beyond French drains, we handle channel drains, swales, retention areas, and culverts. If water is your problem, drainage is our specialty.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c0 6-6 8-6 14a6 6 0 0012 0c0-6-6-8-6-14z"/>
        <path d="M9 17.5c.5 1 1.5 2 3 2s2.5-1 3-2"/>
      </svg>
    ),
  },
  {
    title: "Site Preparation",
    description:
      "New home, shop, commercial building, or accessory structure — we prepare the site from raw ground to build-ready, including clearing, grading, and utility trenching.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 3v18"/>
      </svg>
    ),
  },
  {
    title: "Trenching",
    description:
      "Utility lines, irrigation, electrical conduit, drain pipes — we trench clean, straight, and to depth so your trades can do what they do without fighting a messy ditch.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7"/>
        <path d="M3 7l9-4 9 4"/>
        <path d="M12 3v16"/>
      </svg>
    ),
  },
  {
    title: "Land Development",
    description:
      "Turning raw acreage into something buildable takes real planning and the right equipment. We handle the heavy side of development — roads, pads, ponds, and general earthwork.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>
        <line x1="8" y1="2" x2="8" y2="18"/>
        <line x1="16" y1="6" x2="16" y2="22"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 lg:py-32"
      style={{ background: "#0D1B2A" }}
    >
      {/* Top border accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, #3BAEAE, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span
            className="inline-block mb-4 text-xs tracking-widest uppercase"
            style={{
              fontFamily: "var(--font-oswald)",
              color: "#3BAEAE",
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
            style={{ width: 64, height: 2, background: "#3BAEAE" }}
          />
          <p
            className="max-w-2xl mx-auto"
            style={{
              fontFamily: "var(--font-source-sans)",
              fontSize: "1.1rem",
              color: "#8FA0AD",
              lineHeight: 1.7,
            }}
          >
            From a single drainage fix to full land development — we operate the equipment,
            we know the ground, and we get the job done without the runaround.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: "rgba(59,174,174,0.12)", border: "1px solid rgba(59,174,174,0.12)" }}>
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 transition-all duration-300"
              style={{ background: "#0D1B2A" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "#0F2235";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "#0D1B2A";
              }}
            >
              {/* Icon */}
              <div
                className="mb-5 inline-flex items-center justify-center w-12 h-12 transition-all duration-300"
                style={{
                  color: "#3BAEAE",
                  background: "rgba(59,174,174,0.1)",
                  borderRadius: "2px",
                }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="mb-3"
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontWeight: 600,
                  fontSize: "1.15rem",
                  letterSpacing: "0.06em",
                  color: "#FFFFFF",
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-source-sans)",
                  fontSize: "0.95rem",
                  color: "#7A8F9A",
                  lineHeight: 1.7,
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA nudge */}
        <div className="mt-12 text-center">
          <p
            style={{
              fontFamily: "var(--font-source-sans)",
              color: "#7A8F9A",
              fontSize: "1rem",
            }}
          >
            Not seeing exactly what you need?{" "}
            <a
              href="#contact"
              style={{ color: "#3BAEAE", borderBottom: "1px solid rgba(59,174,174,0.4)" }}
            >
              Give us a call — if it involves a machine and dirt, we&apos;ve probably done it.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
