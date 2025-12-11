import { Metadata } from "next";
import CollectionsContent from "@/components/CollectionsContent";

const baseUrl = "https://qasrmobelhaus.com";

export const metadata: Metadata = {
  title: "Kollektionen - Qasr Möbelhaus | Sofagarnituren & Luxusmöbel",
  description: "Entdecken Sie unsere exklusive Kollektion von Sofagarnituren, Moderne Gruppen, Luxus-Gruppen und Ecksofas. Hochwertige Möbel für anspruchsvolle Wohnräume.",
  keywords: "Sofagarnituren, Moderne Gruppen, Luxus-Gruppen, Ecksofas, Kollektionen, Möbel Bischofsheim",
  openGraph: {
    title: "Kollektionen - Qasr Möbelhaus",
    description: "Entdecken Sie unsere exklusive Kollektion von Sofagarnituren, Moderne Gruppen, Luxus-Gruppen und Ecksofas",
    type: "website",
    locale: "de_DE",
    url: `${baseUrl}/kollektionen`,
    siteName: "Qasr Möbelhaus",
    images: [
      {
        url: `${baseUrl}/logo.png`,
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
    images: [`${baseUrl}/logo.png`],
  },
  alternates: {
    canonical: `${baseUrl}/kollektionen`,
  },
};

export default function CollectionsPage() {
  return <CollectionsContent />;
}
