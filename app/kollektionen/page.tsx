import ProductGrid from "@/components/ProductGrid";
import { translations } from "@/lib/translations";

const allProducts = [
  {
    id: "1",
    name: "Almira Sofa Set",
    category: "Luxus-Gruppen",
    image: "https://cassalini.com/wp-content/uploads/2025/07/WhatsApp-Image-2021-11-04-at-15.25.14-2_17_11zon-430x323.webp",
    href: "/kollektionen/almira",
  },
  {
    id: "2",
    name: "Almira Ecksofa",
    category: "Eckgruppen",
    image: "https://cassalini.com/wp-content/uploads/2025/07/casallini_143321_15_11zon-430x323.webp",
    href: "/kollektionen/almira-corner",
  },
  {
    id: "3",
    name: "Angel Sofa Set",
    category: "Moderne Gruppen",
    image: "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_137372_15-430x323.webp",
    href: "/kollektionen/angel",
  },
  {
    id: "4",
    name: "Avanos Sofa Set",
    category: "Luxus-Gruppen",
    image: "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_143818-Large_13-430x323.webp",
    href: "/kollektionen/avanos",
  },
  {
    id: "5",
    name: "Belinda Sofa Set",
    category: "Luxus-Gruppen",
    image: "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI-_143865-Large_12-430x323.webp",
    href: "/kollektionen/belinda",
  },
  {
    id: "6",
    name: "Dream Sofa Set",
    category: "Luxus-Gruppen",
    image: "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_123984-Large_9-430x323.webp",
    href: "/kollektionen/dream",
  },
  {
    id: "7",
    name: "Efes Sofa Set",
    category: "Moderne Gruppen",
    image: "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_123280-Large_10.webp",
    href: "/kollektionen/efes",
  },
  {
    id: "8",
    name: "Lucas Sofa Set",
    category: "Moderne Gruppen",
    image: "https://cassalini.com/wp-content/uploads/2025/07/IMG_7683-Large_11_11zon.webp",
    href: "/kollektionen/lucas",
  },
  {
    id: "9",
    name: "Luna Sofa Set",
    category: "Moderne Gruppen",
    image: "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_133223-Large_8.webp",
    href: "/kollektionen/luna",
  },
  {
    id: "10",
    name: "Pablo Sofa Set",
    category: "Moderne Gruppen",
    image: "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_137400-Large_9.webp",
    href: "/kollektionen/pablo",
  },
  {
    id: "11",
    name: "Pablo Ecksofa Set",
    category: "Eckgruppen",
    image: "https://cassalini.com/wp-content/uploads/2025/07/casallini_143291-Large_7_11zon.webp",
    href: "/kollektionen/pablo-corner",
  },
  {
    id: "12",
    name: "Puma Sofa Set",
    category: "Moderne Gruppen",
    image: "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_144091-Large_6.webp",
    href: "/kollektionen/puma",
  },
];

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kollektionen - Qasr Möbelhaus",
  description: "Entdecken Sie unsere umfangreiche Kollektion von Sofas, Sesseln und Möbeln.",
};

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {translations.nav.collections}
          </h1>
          <p className="text-gray-600">{translations.collections.subtitle}</p>
        </div>

        {/* Filter/Sort Section */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            <select className="px-4 py-2 border border-gray-300 rounded-md bg-white">
              <option>Alle Kategorien</option>
              <option>Moderne Gruppen</option>
              <option>Luxus-Gruppen</option>
              <option>Eckgruppen</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-md bg-white">
              <option>Sortieren</option>
              <option>Name A-Z</option>
              <option>Name Z-A</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <ProductGrid products={allProducts} />

        {/* Pagination */}
        <div className="mt-12 flex justify-center gap-2">
          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
            ←
          </button>
          <button className="px-4 py-2 bg-gray-900 text-white rounded-md">1</button>
          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
            2
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
            →
          </button>
        </div>
      </div>
    </div>
  );
}

