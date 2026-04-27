"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Service Area", href: "#service-area" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(13, 27, 42, 0.96)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(59, 174, 174, 0.2)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo.png"
              alt="Malone Excavation"
              width={48}
              height={48}
              className="rounded-full"
              priority
            />
            <div className="hidden sm:block">
              <span
                className="block text-white leading-none tracking-wider"
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                }}
              >
                MALONE
              </span>
              <span
                className="block leading-none"
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontSize: "0.7rem",
                  fontWeight: 400,
                  letterSpacing: "0.25em",
                  color: "#2F6F95",
                }}
              >
                EXCAVATION
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  color: "#D6D0C4",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#2F6F95")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#D6D0C4")
                }
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#contact"
              className="ml-2 px-5 py-2 text-sm font-semibold transition-all duration-200"
              style={{
                fontFamily: "var(--font-oswald)",
                letterSpacing: "0.1em",
                background: "#2F6F95",
                color: "#0D1B2A",
                borderRadius: "2px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#245978";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#2F6F95";
              }}
            >
              GET AN ESTIMATE
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-6 h-0.5 transition-all duration-200"
              style={{
                background: "#2F6F95",
                transform: open ? "rotate(45deg) translate(3px, 3px)" : "none",
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-200"
              style={{
                background: "#2F6F95",
                opacity: open ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-200"
              style={{
                background: "#2F6F95",
                transform: open
                  ? "rotate(-45deg) translate(3px, -3px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="md:hidden px-4 pb-6 pt-2"
          style={{ borderTop: "1px solid rgba(59, 174, 174, 0.15)" }}
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-base"
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  color: "#D6D0C4",
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 py-3 text-center text-sm font-semibold"
              style={{
                fontFamily: "var(--font-oswald)",
                letterSpacing: "0.12em",
                background: "#2F6F95",
                color: "#0D1B2A",
                borderRadius: "2px",
              }}
            >
              GET AN ESTIMATE
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
