import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Nitten Sharma — Websites, AI Systems & Automation",
  description:
    "Websites, AI systems and automation — built to ship. Independent creative-technology studio by Nitten Sharma. US, UK, Gulf & Global.",
  keywords: [
    "Nitten Sharma",
    "Creative Technology",
    "AI Systems",
    "Workflow Automation",
    "High-Performance Web",
    "Next.js Developer",
    "LLM Integration",
    "Full Stack Engineer",
  ],
  authors: [{ name: "Nitten Sharma", url: "https://nittensharma.com" }],
  creator: "Nitten Sharma",
  metadataBase: new URL("https://nittensharma.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nittensharma.com",
    title: "Nitten Sharma — Websites, AI Systems & Automation",
    description:
      "Websites, AI systems and automation — built to ship. High-end creative technology studio.",
    siteName: "Nitten Sharma Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nitten Sharma — Websites, AI Systems & Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitten Sharma — Websites, AI Systems & Automation",
    description: "Websites, AI systems and automation — built to ship.",
    creator: "@nittensharma",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://nittensharma.com/#person",
        name: "Nitten Sharma",
        jobTitle: "Creative Technologist & Systems Engineer",
        description:
          "Specializing in bespoke websites, AI system integrations, and enterprise automation.",
        url: "https://nittensharma.com",
        sameAs: [
          "https://github.com/nitten-sharma",
          "https://linkedin.com/in/nittensharma",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://nittensharma.com/#service",
        name: "Nitten Sharma Studio",
        url: "https://nittensharma.com",
        priceRange: "$$$",
        areaServed: ["United States", "United Kingdom", "United Arab Emirates", "India"],
        knowsAbout: [
          "Web Development",
          "AI Product Engineering",
          "Workflow Automation",
          "LLM Systems",
          "Conversion Engineering",
        ],
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} dark scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0A0A0B] text-[#F2F2F0] font-sans antialiased selection:bg-[#FF4D1F] selection:text-white min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
