import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { QuoteModalProvider } from "@/components/providers/quote-modal-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { QuoteModal } from "@/components/ui/quote-modal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const baseUrl = "https://sized.cc";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "SIZED.CC | Precision Metal Cutting & Custom Fabrication",
  description:
    "Custom signage, furniture, branding, and décor — built to exact size. Industrial craftsmanship for high-performance needs.",
  keywords: [
    "metal cutting",
    "custom fabrication",
    "signage",
    "furniture",
    "branding",
    "décor",
    "industrial",
    "precision",
    "laser cutting",
    "CNC machining",
  ],
  authors: [{ name: "SIZED.CC" }],
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "SIZED.CC | Precision Metal Cutting & Custom Fabrication",
    description:
      "Custom signage, furniture, branding, and décor — built to exact size. Industrial craftsmanship for high-performance needs.",
    url: baseUrl,
    siteName: "SIZED.CC",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SIZED.CC - Precision Metal Cutting",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SIZED.CC | Precision Metal Cutting & Custom Fabrication",
    description:
      "Custom signage, furniture, branding, and décor — built to exact size.",
    site: "@sizedcc",
    images: ["/og-image.png"],
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
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "SIZED.CC",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
      },
      sameAs: [
        "https://twitter.com/sizedcc",
        "https://instagram.com/sizedcc",
        "https://linkedin.com/company/sizedcc",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-555-000-0000",
        contactType: "customer service",
        availableLanguage: ["English"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "SIZED.CC",
      description:
        "Precision Metal Cutting & Custom Fabrication for signage, furniture, branding, and décor.",
      publisher: {
        "@id": `${baseUrl}/#organization`,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${baseUrl}/?s={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${baseUrl}/#localbusiness`,
      name: "SIZED.CC",
      image: `${baseUrl}/og-image.png`,
      description:
        "Precision Metal Cutting & Custom Fabrication for signage, furniture, branding, and décor.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Industrial District, Sector 7",
        addressLocality: "City",
        addressRegion: "State",
        postalCode: "00000",
        addressCountry: "US",
      },
      telephone: "+1-555-000-0000",
      url: baseUrl,
      priceRange: "$$$",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${baseUrl}/#service-signage`,
      name: "Custom Signage",
      description:
        "Precision-cut metal signage for businesses, including storefront signs, wayfinding systems, and branded displays.",
      provider: {
        "@id": `${baseUrl}/#organization`,
      },
      serviceType: "Metal Fabrication",
    },
    {
      "@type": "Service",
      "@id": `${baseUrl}/#service-furniture`,
      name: "Custom Furniture",
      description:
        "Bespoke metal furniture pieces including tables, shelving units, and architectural elements.",
      provider: {
        "@id": `${baseUrl}/#organization`,
      },
      serviceType: "Metal Fabrication",
    },
    {
      "@type": "Service",
      "@id": `${baseUrl}/#service-branding`,
      name: "Branding & Identity",
      description:
        "Metal branding elements including logo cutouts, dimensional letters, and branded installations.",
      provider: {
        "@id": `${baseUrl}/#organization`,
      },
      serviceType: "Metal Fabrication",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />

        {/* Preconnect for faster resource loading */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://images.unsplash.com"
          crossOrigin="anonymous"
        />

        {/* Viewport optimization for mobile */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />

        {/* Theme color for browser chrome */}
        <meta name="theme-color" content="#000000" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#ffffff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000000"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className="min-h-screen overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <QuoteModalProvider>
            {children}
            <QuoteModal />
          </QuoteModalProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
