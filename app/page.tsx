"use client";

import HeroSlider from "@/components/HeroSlider";
import ProductGrid from "@/components/ProductGrid";
import ScrollAnimation from "@/components/ScrollAnimation";
import { translations } from "@/lib/translations";
import { getAllProducts, getProductBySlug } from "@/lib/products";
import Image from "next/image";

// Get featured products from centralized data
const allProducts = getAllProducts();
const featuredProducts = [
  allProducts.find((p) => p.slug === "angel"),
  allProducts.find((p) => p.slug === "efes"),
  allProducts.find((p) => p.slug === "lucas"),
  allProducts.find((p) => p.slug === "luna"),
].filter((p) => p !== undefined) as typeof allProducts;

// Get Avanos product for featured section
const avanosProduct = getProductBySlug("avanos");

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation animationType="fadeInUp" delay={0}>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-400 mb-2">01.</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {translations.features.title1}
                </h3>
                <p className="text-gray-600">{translations.features.description1}</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animationType="fadeInUp" delay={100}>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-400 mb-2">02.</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {translations.features.title2}
                </h3>
                <p className="text-gray-600">{translations.features.description2}</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animationType="fadeInUp" delay={200}>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-400 mb-2">03.</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {translations.features.title3}
                </h3>
                <p className="text-gray-600">{translations.features.description3}</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimation animationType="fadeInUp">
            <div className="text-center mb-12">
              <p className="text-sm text-gray-500 mb-2">Neue Saison</p>
              <p className="text-sm font-semibold text-gray-700 mb-4">
                {translations.categories.title}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {translations.categories.heading}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {translations.categories.description}
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">{translations.about.title}</h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-400 mb-2">
                  {translations.about.subtitle}
                </p>
                <h4 className="text-xl font-semibold mb-4">
                  {translations.about.heading}
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {translations.about.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimation animationType="fadeInUp">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-gray-700 mb-2">
                {translations.collections.title}
              </p>
              <p className="text-gray-600 mb-8">{translations.collections.subtitle}</p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <a
                  href="/kollektionen?category=modern"
                  className="px-6 py-2 border-2 border-gray-300 rounded-md hover:border-gray-900 transition-colors"
                >
                  {translations.collections.modernGroups}
                </a>
                <a
                  href="/kollektionen?category=luxury"
                  className="px-6 py-2 border-2 border-gray-300 rounded-md hover:border-gray-900 transition-colors"
                >
                  {translations.collections.luxuryGroups}
                </a>
                <a
                  href="/kollektionen?category=corner"
                  className="px-6 py-2 border-2 border-gray-300 rounded-md hover:border-gray-900 transition-colors"
                >
                  {translations.collections.cornerSofas}
                </a>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animationType="zoomIn" delay={200}>
            <ProductGrid products={featuredProducts} />
          </ScrollAnimation>
        </div>
      </section>

      {/* Featured Product Section */}
      {avanosProduct && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <ScrollAnimation animationType="fadeInLeft">
                <div className="relative h-96 w-full">
                  <Image
                    src={avanosProduct.images[0]}
                    alt="Avanos Sofa Set"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </ScrollAnimation>
              <ScrollAnimation animationType="fadeInRight" delay={200}>
                <div>
                  <p className="text-sm text-gray-500 mb-2">AVANOS SOFA SET</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Luxuriöser Komfort, opulentes Design
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {avanosProduct.description}
                  </p>
                  <a
                    href={avanosProduct.href}
                    className="inline-block bg-gray-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
                  >
                    DETAILS
                  </a>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

