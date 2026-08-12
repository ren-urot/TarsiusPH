import type { Metadata, Viewport } from "next";
import { Big_Shoulders, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const bigShoulders = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// It's what OG/Twitter image URLs and canonical links resolve against.
const SITE_URL = "https://tarsiusph.com";
const SITE_NAME = "Tarsius";
const SITE_DESCRIPTION =
  "Tarsius is a premium pickleball brand. Every paddle carries an NFC seal. Tap it to verify authenticity and see the full story behind your gear.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tarsius | Tap. Verify. Play.",
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tarsius | Tap. Verify. Play.",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Tarsius" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarsius | Tap. Verify. Play.",
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#121212",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bigShoulders.variable} ${inter.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-carbon text-light">{children}</body>
    </html>
  );
}
