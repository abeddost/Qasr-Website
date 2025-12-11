"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";
import { translations } from "@/lib/translations";
import { getAllProducts, getProductsByCategory, categoryMap, type Product } from "@/lib/products";

const PRODUCTS_PER_PAGE = 12;

export default function CollectionsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<"modern" | "luxury" | "corner" | "all">("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [allFilteredProducts, setAllFilteredProducts] = useState<Product[]>(getAllProducts());
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);

  // Read category and page from URL query params on mount and when params change
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    const pageParam = searchParams.get("page");
    const page = pageParam ? parseInt(pageParam, 10) : 1;

    let products: Product[];
    if (categoryParam === "modern" || categoryParam === "luxury" || categoryParam === "corner") {
      setSelectedCategory(categoryParam);
      products = getProductsByCategory(categoryParam);
    } else {
      setSelectedCategory("all");
      products = getAllProducts();
    }

    setAllFilteredProducts(products);
    setCurrentPage(page);

    // Calculate pagination
    const startIndex = (page - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    setDisplayedProducts(products.slice(startIndex, endIndex));
  }, [searchParams]);

  const handleCategoryClick = (categorySlug: "modern" | "luxury" | "corner" | "all") => {
    setSelectedCategory(categorySlug);
    if (categorySlug === "all") {
      router.push("/kollektionen");
    } else {
      router.push(`/kollektionen?category=${categorySlug}`);
    }
  };

  const handlePageChange = (page: number) => {
    const category = selectedCategory !== "all" ? `category=${selectedCategory}&` : "";
    router.push(`/kollektionen?${category}page=${page}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const totalPages = Math.ceil(allFilteredProducts.length / PRODUCTS_PER_PAGE);

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
        <ProductGrid products={displayedProducts} />

        {/* Pagination */}
        {totalPages > 1 && (
          <nav className="mt-8 flex justify-center" aria-label="Produktseitennummerierung">
            <ul className="flex items-center gap-2">
              {/* Previous Button */}
              {currentPage > 1 && (
                <li>
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    className="px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
                    aria-label="Vorherige Seite"
                  >
                    ←
                  </button>
                </li>
              )}

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <li key={page}>
                  {page === currentPage ? (
                    <span
                      className="px-4 py-2 rounded-md bg-gray-900 text-white font-medium"
                      aria-current="page"
                    >
                      {page}
                    </span>
                  ) : (
                    <button
                      onClick={() => handlePageChange(page)}
                      className="px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
                      aria-label={`Seite ${page}`}
                    >
                      {page}
                    </button>
                  )}
                </li>
              ))}

              {/* Next Button */}
              {currentPage < totalPages && (
                <li>
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
                    aria-label="Nächste Seite"
                  >
                    →
                  </button>
                </li>
              )}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}

