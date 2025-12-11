import { Metadata } from "next";
import HomeContent from "@/components/HomeContent";
import { COMPANY_INFO } from "@/lib/constants";

const baseUrl = "https://qasrmobelhaus.com";

export const metadata: Metadata = {
  title: "Qasr Möbelhaus - Elegante Möbel & Luxus Sofagarnituren in Bischofsheim",
  description: "Qasr Möbelhaus in Bischofsheim bietet elegante Möbel, moderne Sofagarnituren und Luxus-Garnituren. Entdecken Sie hochwertige Möbel für Ihr Zuhause - Moderne Gruppen, Luxus-Gruppen und Ecksofas.",
  keywords: "Möbel, Sofas, Sofagarnituren, Sessel, Möbelhaus, Bischofsheim, Einrichtung, Wohnzimmer, Luxus Möbel, Moderne Gruppen, Ecksofas",
  authors: [{ name: COMPANY_INFO.name }],
  openGraph: {
    title: "Qasr Möbelhaus - Elegante Möbel & Luxus Sofagarnituren",
    description: "Entdecken Sie hochwertige Möbel, moderne Sofagarnituren und Luxus-Garnituren in Bischofsheim",
    type: "website",
    locale: "de_DE",
    url: baseUrl,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: `${baseUrl}/logo.png`,
        width: 800,
        height: 600,
        alt: "Qasr Möbelhaus Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qasr Möbelhaus - Elegante Möbel & Luxus Sofagarnituren",
    description: "Entdecken Sie hochwertige Möbel, moderne Sofagarnituren und Luxus-Garnituren in Bischofsheim",
    images: [`${baseUrl}/logo.png`],
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function Home() {
  return <HomeContent />;
}
