"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ProductGrid from "@/components/ProductGrid";
import { translations } from "@/lib/translations";
import { getAllProducts, getProductsByCategory, categoryMap, type Product } from "@/lib/products";

export default function CollectionsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<"modern" | "luxury" | "corner" | "all">("all");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(getAllProducts());

  // Read category from URL query params on mount and when params change
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam === "modern" || categoryParam === "luxury" || categoryParam === "corner") {
      setSelectedCategory(categoryParam);
      setFilteredProducts(getProductsByCategory(categoryParam));
    } else {
      setSelectedCategory("all");
      setFilteredProducts(getAllProducts());
    }
  }, [searchParams]);

  const handleCategoryClick = (categorySlug: "modern" | "luxury" | "corner" | "all") => {
    setSelectedCategory(categorySlug);
    if (categorySlug === "all") {
      router.push("/kollektionen");
      setFilteredProducts(getAllProducts());
    } else {
      router.push(`/kollektionen?category=${categorySlug}`);
      setFilteredProducts(getProductsByCategory(categorySlug));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {translations.nav.collections}
          </h1>
          <p className="text-gray-600">{translations.collections.subtitle}</p>
        </div>

        {/* Category Filter Buttons */}
        <div className="mb-8 flex flex-wrap gap-4">
          <button
            onClick={() => handleCategoryClick("all")}
            className={`px-6 py-3 rounded-md font-medium transition-colors ${
              selectedCategory === "all"
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
            }`}
          >
            Alle Kategorien
          </button>
          <button
            onClick={() => handleCategoryClick("modern")}
            className={`px-6 py-3 rounded-md font-medium transition-colors ${
              selectedCategory === "modern"
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
            }`}
          >
            Moderne Gruppen
          </button>
          <button
            onClick={() => handleCategoryClick("luxury")}
            className={`px-6 py-3 rounded-md font-medium transition-colors ${
              selectedCategory === "luxury"
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
            }`}
          >
            Luxus-Gruppen
          </button>
          <button
            onClick={() => handleCategoryClick("corner")}
            className={`px-6 py-3 rounded-md font-medium transition-colors ${
              selectedCategory === "corner"
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
            }`}
          >
            ECKSOFAS
          </button>
        </div>

        {/* Products Grid */}
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}

