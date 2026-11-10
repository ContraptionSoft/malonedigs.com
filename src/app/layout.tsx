import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Oswald, Source_Sans_3 } from "next/font/google";
import { AREA, PHONE, SITE, TEL, services } from "@/lib/site";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  // Unchanged from the version that ranks on page one -- don't touch without a reason.
  title: "Malone Excavation | Dirt Work & Excavation in Benton, Arkansas",
  description:
    "Malone Excavation — owner-operated excavation and dirt work based in Benton, AR. French drains, septic digging, land clearing, grading, trenching, and site prep. Serving all of Arkansas. Call for a free estimate.",
  alternates: { canonical: SITE },
  openGraph: {
    title: "Malone Excavation | Benton, Arkansas",
    description:
      "Owner-operated excavation and dirt work across Arkansas. French drains, septic, land clearing, grading, and more. Based in Benton, AR.",
    url: SITE,
    siteName: "Malone Excavation",
    locale: "en_US",
    type: "website",
    images: [{ url: "/logo-social.png", width: 1024, height: 1024, alt: "Malone Excavation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Malone Excavation | Benton, Arkansas",
    description:
      "Owner-operated excavation and dirt work across Arkansas. Based in Benton, AR. Call for a free estimate.",
    images: ["/logo-social.png"],
  },
};

const business = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${SITE}/#business`,
  name: "Malone Excavation",
  url: SITE,
  telephone: "+18708830599",
  founder: { "@type": "Person", name: "Chase Malone" },
  description:
    "Owner-operated excavation and dirt work based in Benton, Arkansas. Services include French drains, septic digging, land clearing, grading, trenching, and site prep.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Benton",
    addressRegion: "AR",
    postalCode: "72015",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 34.5648, longitude: -92.5868 },
  areaServed: { "@type": "State", name: "Arkansas" },
  priceRange: "$$",
  image: `${SITE}/logo-social.png`,
  makesOffer: services.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.name, url: `${SITE}/services/${s.slug}` },
  })),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${oswald.variable} ${sourceSans.variable}`}>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <header className="bar">
          <div className="wrap">
            <Link className="brand" href="/" aria-label="Malone Excavation home">
              <Image src="/logo-white.svg" alt="" width={737} height={154} priority unoptimized />
            </Link>
            <nav aria-label="Primary">
              <Link className="nav-link" href="/#services">
                Services
              </Link>
              <a className="nav-call" href={TEL}>
                {PHONE}
              </a>
            </nav>
          </div>
        </header>

        <main id="main">{children}</main>

        <footer className="foot">
          <div className="wrap foot-grid">
            <div>
              <Image src="/logo-white.svg" alt="Malone Excavation" width={737} height={154} unoptimized />
              <p>Owner-operated excavation and dirt work. Based in Benton, Arkansas.</p>
              <p>
                <a href={TEL}>{PHONE}</a>
              </p>
            </div>
            <nav aria-label="Services">
              <p className="foot-head">Services</p>
              <ul>
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`}>{s.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="foot-head">Service area</p>
              <p>{AREA}</p>
            </div>
          </div>
        </footer>

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-Q3BG02EDWW" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-Q3BG02EDWW');`}
        </Script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }} />
      </body>
    </html>
  );
}
