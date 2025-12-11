import { Metadata } from "next";
import CollectionsContent from "@/components/CollectionsContent";
import { BASE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kollektionen - Qasr Möbelhaus | Sofagarnituren & Luxusmöbel",
  description: "Entdecken Sie unsere exklusive Kollektion von Sofagarnituren, Moderne Gruppen, Luxus-Gruppen und Ecksofas. Hochwertige Möbel für anspruchsvolle Wohnräume.",
  keywords: "Sofagarnituren, Moderne Gruppen, Luxus-Gruppen, Ecksofas, Kollektionen, Möbel Bischofsheim",
  openGraph: {
    title: "Kollektionen - Qasr Möbelhaus",
    description: "Entdecken Sie unsere exklusive Kollektion von Sofagarnituren, Moderne Gruppen, Luxus-Gruppen und Ecksofas",
    type: "website",
    locale: "de_DE",
    url: `${BASE_URL}/kollektionen`,
    siteName: "Qasr Möbelhaus",
    images: [
      {
        url: `${BASE_URL}/logo.png`,
        width: 800,
        height: 600,
        alt: "Qasr Möbelhaus Kollektionen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kollektionen - Qasr Möbelhaus",
    description: "Entdecken Sie unsere exklusive Kollektion von Sofagarnituren, Moderne Gruppen, Luxus-Gruppen und Ecksofas",
    images: [`${BASE_URL}/logo.png`],
  },
  alternates: {
    canonical: `${BASE_URL}/kollektionen`,
  },
};

export default function CollectionsPage() {
  return <CollectionsContent />;
}
