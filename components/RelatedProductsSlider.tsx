"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

interface RelatedProductsSliderProps {
  products: Product[];
}

export default function RelatedProductsSlider({ products }: RelatedProductsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Calculate items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1); // Mobile: 1 item
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2); // Tablet: 2 items
      } else {
        setItemsPerView(3); // Desktop: 3 items
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  // Calculate total pages and max index
  const totalPages = Math.ceil(products.length / itemsPerView);
  const maxIndex = Math.max(0, totalPages - 1);
  const pageWidth = products.length ? itemsPerView * (100 / products.length) : 100;

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrevious();
    }
  };

  // Keep index in range when items per view changes (e.g. on resize)
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  if (products.length === 0) return null;

  // Move by one page (itemsPerView items) on each step
  const translateX = -(currentIndex * pageWidth);

  return (
    <div className="relative px-8 md:px-12">
      {/* Navigation Arrows */}
      {totalPages > 1 && (
        <>
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center transition-all ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-50 opacity-100 cursor-pointer"
            }`}
            aria-label="Vorherige Produkte"
          >
            <svg
              className="w-5 h-5 text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center transition-all ${
              currentIndex >= maxIndex
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-50 opacity-100 cursor-pointer"
            }`}
            aria-label="Nächste Produkte"
          >
            <svg
              className="w-5 h-5 text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Products Container */}
      <div
        ref={scrollContainerRef}
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-in-out gap-4 md:gap-6"
          style={{
            transform: `translateX(${translateX}%)`,
            width: `${(100 / itemsPerView) * products.length}%`,
          }}
        >
          {products.map((product) => {
            const hoverImage = product.images.length > 1 ? product.images[1] : product.image;
            
            return (
              <div
                key={product.id}
                className="flex-shrink-0"
                style={{ width: `${100 / products.length}%` }}
              >
                <Link
                  href={product.href}
                  className="group block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative h-64 md:h-72 w-full overflow-hidden bg-gray-50">
                    {/* Default Image */}
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain group-hover:opacity-0 transition-opacity duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Hover Image */}
                    {product.images.length > 1 && (
                      <Image
                        src={hoverImage}
                        alt={`${product.name} - Ansicht 2`}
                        fill
                        className="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    )}
                  </div>
                  <div className="p-4 md:p-5">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
                    <span className="text-sm text-gray-500">{product.category}</span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination Dots */}
      {products.length > itemsPerView && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index
                  ? "bg-gray-900"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Gehe zu Slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
