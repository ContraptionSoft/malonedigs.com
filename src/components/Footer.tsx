"use client";

import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Service Area", href: "#service-area" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{
        background: "#060F18",
        borderTop: "1px solid rgba(47,111,149,0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr_1fr] gap-10 mb-10">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
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
                    fontSize: "0.75rem",
                    letterSpacing: "0.3em",
                    color: "#2F6F95",
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
                fontSize: "1rem",
                color: "#556070",
                lineHeight: 1.7,
              }}
            >
              Benton, Arkansas excavation and dirt work.
            </p>
          </div>

          <div>
            <h4
              className="mb-4"
              style={{
                fontFamily: "var(--font-oswald)",
                fontWeight: 600,
                fontSize: "0.9rem",
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
                    className="transition-colors duration-150"
                    style={{
                      fontFamily: "var(--font-source-sans)",
                      fontSize: "1rem",
                      color: "#556070",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#2F6F95")
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

          <div>
            <h4
              className="mb-4"
              style={{
                fontFamily: "var(--font-oswald)",
                fontWeight: 600,
                fontSize: "0.9rem",
                letterSpacing: "0.25em",
                color: "#FFFFFF",
                textTransform: "uppercase",
              }}
            >
              Call
            </h4>
            <a
              href="tel:+18708830599"
              className="text-base transition-colors duration-150"
              style={{
                fontFamily: "var(--font-source-sans)",
                color: "#8FA0AD",
                fontWeight: 600,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#2F6F95")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#8FA0AD")
              }
            >
              (870) 883-0599
            </a>
            <p
              className="mt-3"
              style={{
                fontFamily: "var(--font-source-sans)",
                fontSize: "1rem",
                color: "#556070",
                lineHeight: 1.6,
              }}
            >
              Benton, Arkansas · Works anywhere in Arkansas
            </p>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p
            style={{
              fontFamily: "var(--font-source-sans)",
              fontSize: "0.9rem",
              color: "#374755",
            }}
          >
            © {new Date().getFullYear()} Malone Excavation
          </p>
          <p
            style={{
              fontFamily: "var(--font-source-sans)",
              fontSize: "0.9rem",
              color: "#374755",
            }}
          >
            Benton, Arkansas
          </p>
        </div>
      </div>
    </footer>
  );
}
