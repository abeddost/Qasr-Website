import { Metadata } from "next";
import ContactContent from "@/components/ContactContent";
import { BASE_URL, COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kontakt - Qasr Möbelhaus Bischofsheim | Beratung & Service",
  description: `Kontaktieren Sie Qasr Möbelhaus in Bischofsheim. Wir beraten Sie gerne zu unseren Möbeln und Sofagarnituren. ${COMPANY_INFO.address} | Tel: ${COMPANY_INFO.phone}`,
  keywords: "Kontakt, Möbelhaus Bischofsheim, Beratung, Service, Qasr Möbelhaus",
  openGraph: {
    title: "Kontakt - Qasr Möbelhaus",
    description: "Kontaktieren Sie Qasr Möbelhaus in Bischofsheim. Wir beraten Sie gerne zu unseren Möbeln und Sofagarnituren",
    type: "website",
    locale: "de_DE",
    url: `${BASE_URL}/kontakt`,
    siteName: "Qasr Möbelhaus",
    images: [
      {
        url: `${BASE_URL}/logo.png`,
        width: 800,
        height: 600,
        alt: "Qasr Möbelhaus Kontakt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt - Qasr Möbelhaus",
    description: "Kontaktieren Sie Qasr Möbelhaus in Bischofsheim. Wir beraten Sie gerne zu unseren Möbeln und Sofagarnituren",
    images: [`${BASE_URL}/logo.png`],
  },
  alternates: {
    canonical: `${BASE_URL}/kontakt`,
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
