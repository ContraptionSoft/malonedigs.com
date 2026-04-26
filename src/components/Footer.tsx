"use client";

import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Malone", href: "#why-us" },
  { label: "Service Area", href: "#service-area" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "French Drains",
  "Septic Systems",
  "Land Clearing",
  "Grading & Leveling",
  "Pool Excavation",
  "Site Preparation",
  "Trenching",
  "Land Development",
];

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{
        background: "#060F18",
        borderTop: "1px solid rgba(59,174,174,0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image
                src="/logo.png"
                alt="Malone Excavation"
                width={52}
                height={52}
                className="rounded-full"
              />
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontWeight: 700,
                    fontSize: "1rem",
                    letterSpacing: "0.12em",
                    color: "#FFFFFF",
                    lineHeight: 1,
                  }}
                >
                  MALONE
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontWeight: 400,
                    fontSize: "0.6rem",
                    letterSpacing: "0.3em",
                    color: "#3BAEAE",
                    lineHeight: 1,
                    marginTop: 2,
                  }}
                >
                  EXCAVATION
                </div>
              </div>
            </Link>
            <p
              style={{
                fontFamily: "var(--font-source-sans)",
                fontSize: "0.88rem",
                color: "#556070",
                lineHeight: 1.7,
              }}
            >
              Professional excavation and heavy equipment work.
              Based in Benton, Arkansas. Serving the whole state.
            </p>
            <div className="mt-5 flex gap-3">
              <div
                className="px-3 py-1 text-xs"
                style={{
                  fontFamily: "var(--font-oswald)",
                  letterSpacing: "0.15em",
                  color: "#3BAEAE",
                  border: "1px solid rgba(59,174,174,0.3)",
                  borderRadius: "1px",
                  fontSize: "0.6rem",
                }}
              >
                EST. 2026
              </div>
              <div
                className="px-3 py-1 text-xs"
                style={{
                  fontFamily: "var(--font-oswald)",
                  letterSpacing: "0.15em",
                  color: "#3BAEAE",
                  border: "1px solid rgba(59,174,174,0.3)",
                  borderRadius: "1px",
                  fontSize: "0.6rem",
                }}
              >
                BENTON, AR
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="mb-5"
              style={{
                fontFamily: "var(--font-oswald)",
                fontWeight: 600,
                fontSize: "0.8rem",
                letterSpacing: "0.25em",
                color: "#FFFFFF",
                textTransform: "uppercase",
              }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-150"
                    style={{
                      fontFamily: "var(--font-source-sans)",
                      color: "#556070",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#3BAEAE")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#556070")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="mb-5"
              style={{
                fontFamily: "var(--font-oswald)",
                fontWeight: 600,
                fontSize: "0.8rem",
                letterSpacing: "0.25em",
                color: "#FFFFFF",
                textTransform: "uppercase",
              }}
            >
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="#services"
                    className="text-sm transition-colors duration-150"
                    style={{
                      fontFamily: "var(--font-source-sans)",
                      color: "#556070",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#3BAEAE")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#556070")
                    }
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="mb-5"
              style={{
                fontFamily: "var(--font-oswald)",
                fontWeight: 600,
                fontSize: "0.8rem",
                letterSpacing: "0.25em",
                color: "#FFFFFF",
                textTransform: "uppercase",
              }}
            >
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              {/* Phone — PLACEHOLDER */}
              <div>
                <div
                  className="text-xs mb-0.5"
                  style={{
                    fontFamily: "var(--font-oswald)",
                    color: "rgba(59,174,174,0.6)",
                    letterSpacing: "0.2em",
                    fontSize: "0.6rem",
                    textTransform: "uppercase",
                  }}
                >
                  Phone / Text
                </div>
                <a
                  href="tel:+15015550100"
                  className="text-sm transition-colors duration-150"
                  style={{
                    fontFamily: "var(--font-source-sans)",
                    color: "#8FA0AD",
                    fontWeight: 600,
                  }}
                >
                  {/* PLACEHOLDER — replace with real number */}
                  (501) 555-0100
                </a>
              </div>

              {/* Email — PLACEHOLDER */}
              <div>
                <div
                  className="text-xs mb-0.5"
                  style={{
                    fontFamily: "var(--font-oswald)",
                    color: "rgba(59,174,174,0.6)",
                    letterSpacing: "0.2em",
                    fontSize: "0.6rem",
                    textTransform: "uppercase",
                  }}
                >
                  Email
                </div>
                <a
                  href="mailto:chase@malonedigs.com"
                  className="text-sm transition-colors duration-150"
                  style={{
                    fontFamily: "var(--font-source-sans)",
                    color: "#8FA0AD",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#3BAEAE")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#8FA0AD")
                  }
                >
                  {/* PLACEHOLDER — verify this email */}
                  chase@malonedigs.com
                </a>
              </div>

              {/* Location */}
              <div>
                <div
                  className="text-xs mb-0.5"
                  style={{
                    fontFamily: "var(--font-oswald)",
                    color: "rgba(59,174,174,0.6)",
                    letterSpacing: "0.2em",
                    fontSize: "0.6rem",
                    textTransform: "uppercase",
                  }}
                >
                  Location
                </div>
                <span
                  className="text-sm"
                  style={{
                    fontFamily: "var(--font-source-sans)",
                    color: "#556070",
                  }}
                >
                  Benton, Arkansas
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p
            style={{
              fontFamily: "var(--font-source-sans)",
              fontSize: "0.8rem",
              color: "#374755",
            }}
          >
            © {new Date().getFullYear()} Malone Excavation. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "var(--font-source-sans)",
              fontSize: "0.8rem",
              color: "#374755",
            }}
          >
            Benton, Arkansas · Serving the Natural State
          </p>
        </div>
      </div>
    </footer>
  );
}
