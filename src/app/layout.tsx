import type { Metadata } from "next";
import { Oswald, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.malonedigs.com"),
  title: "Malone Excavation | Dirt Work & Excavation in Benton, Arkansas",
  description:
    "Malone Excavation — owner-operated excavation and dirt work based in Benton, AR. French drains, septic digging, land clearing, grading, trenching, pool digging, and site prep. Serving all of Arkansas. Call for a free estimate.",
  keywords: [
    "excavation Benton Arkansas",
    "dirt work Benton AR",
    "excavation contractor Arkansas",
    "land clearing Arkansas",
    "septic tank installation Arkansas",
    "French drain Arkansas",
    "grading site prep Benton AR",
    "trenching excavation Arkansas",
    "pool excavation Arkansas",
    "land development Arkansas",
    "owner operated excavation Arkansas",
    "excavation Saline County Arkansas",
  ],
  alternates: {
    canonical: "https://www.malonedigs.com",
  },
  openGraph: {
    title: "Malone Excavation | Benton, Arkansas",
    description:
      "Owner-operated excavation and dirt work across Arkansas. French drains, septic, land clearing, grading, and more. Based in Benton, AR.",
    url: "https://www.malonedigs.com",
    siteName: "Malone Excavation",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1536,
        alt: "Malone Excavation",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Malone Excavation | Benton, Arkansas",
    description:
      "Owner-operated excavation and dirt work across Arkansas. Based in Benton, AR. Call for a free estimate.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${sourceSans.variable}`}
    >
      <body className="min-h-screen">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              name: "Malone Excavation",
              url: "https://www.malonedigs.com",
              telephone: "+18708830599",
              description:
                "Owner-operated excavation and dirt work based in Benton, Arkansas. Services include French drains, septic digging, land clearing, grading, trenching, pool digging, and site prep.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Benton",
                addressRegion: "AR",
                postalCode: "72015",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 34.5648,
                longitude: -92.5868,
              },
              areaServed: {
                "@type": "State",
                name: "Arkansas",
              },
              priceRange: "$$",
              image: "https://www.malonedigs.com/logo.png",
              sameAs: [],
            }),
          }}
        />
      </body>
    </html>
  );
}
