"use client";

import Image from "next/image";

const services = [
  { name: "French Drains",     image: "/french_drain.jpg" },
  { name: "Septic Digging",    image: "/septic_digging.jpg" },
  { name: "Land Clearing",     image: "/land_clearing.jpg" },
  { name: "Grading",           image: "/grading.jpg" },
  { name: "Trenching",         image: "/trenching.jpg" },
  { name: "Pool Digging",      image: "/pool_digging.jpg" },
  { name: "Site Prep",         image: "/site_prep.jpg" },
  { name: "General Dirt Work", image: "/general_dirt_work.jpg" },
  { name: "Land Development",  image: "/land_development.jpg" },
];

const CARD_W = 380;
const GAP = 20;

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center">
        <h2
          className="mb-4 leading-none"
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
        <div className="mx-auto" style={{ width: 64, height: 2, background: "#2F6F95" }} />
      </div>

      {/* Carousel */}
      <div
        className="overflow-hidden"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          className="flex"
          style={{
            gap: GAP,
            width: "max-content",
            animation: "carousel-scroll 32s linear infinite",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.animationPlayState = "running";
          }}
        >
          {[...services, ...services].map((service, i) => (
            <div
              key={i}
              className="relative shrink-0 overflow-hidden"
              style={{ width: CARD_W, height: 260, borderRadius: "2px" }}
            >
              <Image
                src={service.image}
                alt={service.name}
                fill
                style={{ objectFit: "cover" }}
                sizes="380px"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(13,27,42,0.92) 0%, rgba(13,27,42,0.35) 55%, transparent 100%)",
                }}
              />
              <h3
                className="absolute bottom-0 left-0 right-0 p-5"
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontWeight: 600,
                  fontSize: "1.2rem",
                  letterSpacing: "0.08em",
                  color: "#FFFFFF",
                }}
              >
                {service.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
