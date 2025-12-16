import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { QuoteModalProvider } from "@/components/providers/quote-modal-provider";
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

export const metadata: Metadata = {
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
  ],
  authors: [{ name: "SIZED.CC" }],
  openGraph: {
    title: "SIZED.CC | Precision Metal Cutting & Custom Fabrication",
    description:
      "Custom signage, furniture, branding, and décor — built to exact size. Industrial craftsmanship for high-performance needs.",
    url: "https://sized.cc",
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
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "SIZED.CC",
              image: "https://sized.cc/og-image.png",
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
              url: "https://sized.cc",
              priceRange: "$$$",
            }),
          }}
        />
      </head>
      <body className="min-h-screen overflow-x-hidden">
        <QuoteModalProvider>
          {children}
          <QuoteModal />
        </QuoteModalProvider>
      </body>
    </html>
  );
}

