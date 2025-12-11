import { Metadata } from "next";
import ContactContent from "@/components/ContactContent";
import { COMPANY_INFO } from "@/lib/constants";

const baseUrl = "https://qasrmobelhaus.com";

export const metadata: Metadata = {
  title: "Kontakt - Qasr Möbelhaus Bischofsheim | Beratung & Service",
  description: `Kontaktieren Sie Qasr Möbelhaus in Bischofsheim. Wir beraten Sie gerne zu unseren Möbeln und Sofagarnituren. ${COMPANY_INFO.address} | Tel: ${COMPANY_INFO.phone}`,
  keywords: "Kontakt, Möbelhaus Bischofsheim, Beratung, Service, Qasr Möbelhaus",
  openGraph: {
    title: "Kontakt - Qasr Möbelhaus",
    description: "Kontaktieren Sie Qasr Möbelhaus in Bischofsheim. Wir beraten Sie gerne zu unseren Möbeln und Sofagarnituren",
    type: "website",
    locale: "de_DE",
    url: `${baseUrl}/kontakt`,
    siteName: "Qasr Möbelhaus",
    images: [
      {
        url: `${baseUrl}/logo.png`,
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
    images: [`${baseUrl}/logo.png`],
  },
  alternates: {
    canonical: `${baseUrl}/kontakt`,
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
