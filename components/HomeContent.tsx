"use client";

import HeroSlider from "@/components/HeroSlider";
import RelatedProductsSlider from "@/components/RelatedProductsSlider";
import ScrollAnimation from "@/components/ScrollAnimation";
import { translations } from "@/lib/translations";
import { getAllProducts, getProductBySlug } from "@/lib/products";
import Image from "next/image";

// Get all products for the slider
const allProducts = getAllProducts();

// Get Avanos product for featured section
const avanosProduct = getProductBySlug("avanos");

export default function HomeContent() {
  return (
    <div className="min-h-screen">
      {/* SEO H1 - Visually hidden but present for SEO */}
      <h1 className="sr-only">Qasr Möbelhaus - Elegante Möbel & Luxus Sofagarnituren in Bischofsheim</h1>
      
      {/* Hero Slider */}
      <HeroSlider />

      {/* Features Section */}
      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation animationType="fadeInUp" delay={0}>
              <div className="text-center group bg-white/70 border border-[rgba(205,163,73,0.25)] rounded-xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="text-4xl font-bold text-brand-gold mb-2 text-animate">01.</div>
                <h3 className="text-xl font-semibold text-brand-charcoal mb-4 underline-gold">
                  {translations.features.title1}
                </h3>
                <p className="text-brand-charcoal/80 text-animate">{translations.features.description1}</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animationType="fadeInUp" delay={100}>
              <div className="text-center group bg-white/70 border border-[rgba(205,163,73,0.25)] rounded-xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="text-4xl font-bold text-brand-gold mb-2 text-animate">02.</div>
                <h3 className="text-xl font-semibold text-brand-charcoal mb-4 underline-gold">
                  {translations.features.title2}
                </h3>
                <p className="text-brand-charcoal/80 text-animate">{translations.features.description2}</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animationType="fadeInUp" delay={200}>
              <div className="text-center group bg-white/70 border border-[rgba(205,163,73,0.25)] rounded-xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="text-4xl font-bold text-brand-gold mb-2 text-animate">03.</div>
                <h3 className="text-xl font-semibold text-brand-charcoal mb-4 underline-gold">
                  {translations.features.title3}
                </h3>
                <p className="text-brand-charcoal/80 text-animate">{translations.features.description3}</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimation animationType="fadeInUp">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-brand-gold mb-2 tracking-[0.08em] uppercase text-animate">
                {translations.collections.title}
              </p>
              <p className="text-brand-charcoal/80 mb-8 text-animate underline-gold">
                {translations.collections.subtitle}
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <a
                  href="/kollektionen?category=modern"
                  className="pill-gold text-animate"
                >
                  {translations.collections.modernGroups}
                </a>
                <a
                  href="/kollektionen?category=luxury"
                  className="pill-gold text-animate"
                >
                  {translations.collections.luxuryGroups}
                </a>
                <a
                  href="/kollektionen?category=corner"
                  className="pill-gold text-animate"
                >
                  {translations.collections.cornerSofas}
                </a>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animationType="zoomIn" delay={200}>
            <RelatedProductsSlider products={allProducts} />
          </ScrollAnimation>
        </div>
      </section>

      {/* Featured Product Section */}
      {avanosProduct && (
        <section className="py-16 bg-brand-cream">
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
                <div className="bg-white/80 p-8 rounded-xl border border-[rgba(205,163,73,0.25)] shadow-sm">
                  <p className="text-sm text-brand-gold mb-2 tracking-[0.15em] text-animate">AVANOS SOFA SET</p>
                  <h3 className="text-2xl font-bold text-brand-charcoal mb-4 underline-gold">
                    Luxuriöser Komfort, opulentes Design
                  </h3>
                  <p className="text-brand-charcoal/80 mb-6 leading-relaxed text-animate">
                    {avanosProduct.description}
                  </p>
                  <a
                    href={avanosProduct.href}
                    className="btn-gold px-8 py-3 text-animate"
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

