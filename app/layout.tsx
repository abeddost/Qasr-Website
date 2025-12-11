import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMPANY_INFO } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${COMPANY_INFO.name} - Möbelhaus Bischofsheim`,
  description: "Qasr Möbelhaus - Elegante Möbel, moderne Sofagarnituren und Luxus-Garnituren. Hochwertige Möbel aus Bischofsheim für Ihr Zuhause.",
  keywords: "Möbel, Sofas, Sessel, Möbelhaus, Bischofsheim, Einrichtung, Wohnzimmer, Luxus Möbel",
  authors: [{ name: COMPANY_INFO.name }],
  openGraph: {
    title: `${COMPANY_INFO.name} - Möbelhaus Bischofsheim`,
    description: "Elegante Möbel, moderne Sofagarnituren und Luxus-Garnituren",
    type: "website",
    locale: "de_DE",
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
              name: COMPANY_INFO.name,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Industriestraße 17",
                addressLocality: COMPANY_INFO.city,
                postalCode: COMPANY_INFO.postalCode,
                addressCountry: "DE",
              },
              telephone: COMPANY_INFO.phone,
              email: COMPANY_INFO.email,
              url: "https://qasrmobelhaus.com",
            }),
          }}
        />
      </body>
    </html>
  );
}
