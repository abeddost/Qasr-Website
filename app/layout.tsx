import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMPANY_INFO, SOCIAL_LINKS, GOOGLE_MAPS_CONFIG } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://qasrmobelhaus.com"),
  title: `${COMPANY_INFO.name} - Möbelhaus Bischofsheim`,
  description: "Qasr Möbelhaus - Elegante Möbel, moderne Sofagarnituren und Luxus-Garnituren. Hochwertige Möbel aus Bischofsheim für Ihr Zuhause.",
  keywords: "Möbel, Sofas, Sessel, Möbelhaus, Bischofsheim, Einrichtung, Wohnzimmer, Luxus Möbel",
  authors: [{ name: COMPANY_INFO.name }],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: `${COMPANY_INFO.name} - Möbelhaus Bischofsheim`,
    description: "Elegante Möbel, moderne Sofagarnituren und Luxus-Garnituren",
    type: "website",
    locale: "de_DE",
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: "https://qasrmobelhaus.com/logo.png",
        width: 800,
        height: 600,
        alt: "Qasr Möbelhaus Logo",
      },
    ],
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
  return (
    <html lang="de" className="min-h-full">
      <body className={`${inter.className} min-h-full`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FurnitureStore",
              "@id": "https://qasrmobelhaus.com/#furniture-store",
              name: COMPANY_INFO.name,
              url: "https://qasrmobelhaus.com",
              logo: "https://qasrmobelhaus.com/logo.png",
              image: "https://qasrmobelhaus.com/logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Industriestraße 17",
                addressLocality: COMPANY_INFO.city,
                postalCode: COMPANY_INFO.postalCode,
                addressCountry: "DE",
              },
              telephone: COMPANY_INFO.phone,
              email: COMPANY_INFO.email,
              geo: {
                "@type": "GeoCoordinates",
                latitude: GOOGLE_MAPS_CONFIG.lat,
                longitude: GOOGLE_MAPS_CONFIG.lng,
              },
              sameAs: [SOCIAL_LINKS.instagram, SOCIAL_LINKS.tiktok],
            }),
          }}
        />
      </body>
    </html>
  );
}


