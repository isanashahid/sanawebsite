import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sana Shahid | AI GTM Strategist & Product Marketing Manager - Premium Portfolio",
  description: "Product Marketing Manager specializing in AI-driven product growth and automation. Building AI workflows that give marketers their time and focus back. B2B SaaS expertise in go-to-market strategy, sales enablement, and value-led positioning. Premium Slider Revolution Pro-inspired design.",
  keywords: [
    "Product Marketing",
    "AI Automation",
    "GTM Strategy",
    "B2B SaaS",
    "Marketing Automation",
    "AI Workflows",
    "Product Growth",
    "Sales Enablement",
    "Go-to-Market",
    "Product Marketing Manager",
    "AI GTM Strategist",
  ],
  authors: [{ name: "Sana Shahid" }],
  creator: "Sana Shahid",
  publisher: "Sana Shahid",
  metadataBase: new URL("https://sanashahid.me"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sanashahid.me",
    title: "Sana Shahid | AI GTM Strategist & Product Marketing Manager",
    description: "Product Marketing Manager specializing in AI-driven product growth and automation. Building AI workflows for B2B SaaS companies.",
    siteName: "Sana Shahid Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sana Shahid - AI GTM Strategist & Product Marketing Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sana Shahid | AI GTM Strategist & Product Marketing Manager",
    description: "Building AI workflows that give marketers their time and focus back. B2B SaaS Product Marketing expert.",
    images: ["/og-image.jpg"],
    creator: "@sanashahid",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sana Shahid",
    url: "https://sanashahid.me",
    email: "isanashahid@gmail.com",
    jobTitle: "Product Marketing Manager & AI GTM Strategist",
    description: "Product Marketing Manager specializing in AI-driven product growth and automation for B2B SaaS companies.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Berlin",
      addressCountry: "Germany",
    },
    sameAs: [
      "https://linkedin.com/in/isanashahid",
      "https://sanashahid.me",
    ],
    knowsAbout: [
      "Product Marketing",
      "AI Automation",
      "Go-to-Market Strategy",
      "B2B SaaS",
      "Marketing Automation",
      "Sales Enablement",
      "Product Growth",
    ],
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
    mainEntity: {
      "@type": "Person",
      name: "Sana Shahid",
      alternateName: "isanashahid",
      description: "AI GTM Strategist & Product Marketing Manager",
    },
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <div className="brutalist-grid fixed inset-0 pointer-events-none" />
        {children}
      </body>
    </html>
  );
}
