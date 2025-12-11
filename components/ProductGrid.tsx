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
            className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48 w-full overflow-hidden bg-gray-50">
              {/* Default Image */}
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:opacity-0 transition-opacity duration-300"
              />
              {/* Hover Image */}
              {product.images.length > 1 && (
                <Image
                  src={hoverImage}
                  alt={`${product.name} - Ansicht 2`}
                  fill
                  className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0"
                />
              )}
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
              <span className="text-sm text-gray-600">{product.category}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

