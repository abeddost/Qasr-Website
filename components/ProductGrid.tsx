"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => {
        const hoverImage = product.images.length > 1 ? product.images[1] : product.image;
        
        return (
          <Link
            key={product.id}
            href={product.href}
            className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all border border-[rgba(205,163,73,0.25)]"
          >
            <div className="relative w-full overflow-hidden bg-brand-cream aspect-[4/3] md:aspect-[3/2]">
              {/* Default Image */}
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain group-hover:opacity-0 transition-opacity duration-300"
              />
              {/* Hover Image */}
              {product.images.length > 1 && (
                <Image
                  src={hoverImage}
                  alt={`${product.name} - Ansicht 2`}
                  fill
                  className="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0"
                />
              )}
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-brand-charcoal mb-2 underline-gold text-animate">
                {product.name}
              </h3>
              <span className="block text-sm text-brand-charcoal/70 text-animate">{product.category}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
