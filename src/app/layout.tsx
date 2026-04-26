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
  metadataBase: new URL("https://malonedigs.com"),
  title: "Malone Excavation | Heavy Equipment & Site Work in Benton, Arkansas",
  description:
    "Malone Excavation provides professional excavation, land clearing, grading, French drains, septic installation, pool digging, and site prep across Arkansas. Based in Benton, AR. Call for a free estimate.",
  keywords: [
    "excavation Benton Arkansas",
    "land clearing Arkansas",
    "septic tank installation Arkansas",
    "French drain Arkansas",
    "grading site prep Benton AR",
    "heavy equipment operator Arkansas",
    "trenching excavation Arkansas",
    "pool excavation Arkansas",
  ],
  openGraph: {
    title: "Malone Excavation | Benton, Arkansas",
    description:
      "Professional excavation and site work across Arkansas. French drains, septic, land clearing, grading, and more.",
    url: "https://malonedigs.com",
    siteName: "Malone Excavation",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 400,
        height: 400,
        alt: "Malone Excavation logo",
      },
    ],
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
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
