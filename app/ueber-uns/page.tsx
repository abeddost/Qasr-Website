import { translations } from "@/lib/translations";
import Image from "next/image";

import { Metadata } from "next";
import { BASE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Über Uns - Qasr Möbelhaus",
  description: "Erfahren Sie mehr über Qasr Möbelhaus.",
  openGraph: {
    title: "Über Uns - Qasr Möbelhaus",
    description: "Erfahren Sie mehr über Qasr Möbelhaus.",
    type: "website",
    locale: "de_DE",
    url: `${BASE_URL}/ueber-uns`,
    siteName: "Qasr Möbelhaus",
    images: [
      {
        url: `${BASE_URL}/logo.png`,
        width: 800,
        height: 600,
        alt: "Qasr Möbelhaus Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Über Uns - Qasr Möbelhaus",
    description: "Erfahren Sie mehr über Qasr Möbelhaus.",
    images: [`${BASE_URL}/logo.png`],
  },
  alternates: {
    canonical: `${BASE_URL}/ueber-uns`,
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-gray-400 mb-4">
              {translations.about.experience}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {translations.about.experienceSubtitle}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Signature Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {translations.about.signature}
              </h2>
              <p className="text-gray-600 text-lg">
                {translations.about.signatureDesc}
              </p>
            </div>

            {/* Tradition Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {translations.about.tradition}
              </h2>
              <p className="text-gray-600 text-lg">
                {translations.about.traditionDesc}
              </p>
            </div>

            {/* Company Description */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-sm text-gray-500 mb-2">
                {translations.about.mastery}
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {translations.about.companyName}
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>{translations.about.companyDesc1}</p>
                <p>{translations.about.companyDesc2}</p>
                <p>{translations.about.companyDesc3}</p>
                <p>{translations.about.companyDesc4}</p>
              </div>
            </div>

            {/* Facilities Section */}
            <div>
              <p className="text-sm text-gray-500 mb-2">
                {translations.about.facilities}
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {translations.about.facilitiesTitle}
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>{translations.about.facilitiesDesc1}</p>
                <p>{translations.about.facilitiesDesc2}</p>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="https://cassalini.com/wp-content/uploads/2021/09/CASALLINI08-1-scaled.webp"
                alt="Qasr Möbelhaus Produktionsstätte"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
