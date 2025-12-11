import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug, getRelatedProducts } from "@/lib/products";
import ProductImageGallery from "@/components/ProductImageGallery";
import RelatedProductsSlider from "@/components/RelatedProductsSlider";
import ProductShareButtons from "@/components/ProductShareButtons";
import ProductTabs from "@/components/ProductTabs";
import { COMPANY_INFO } from "@/lib/constants";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);
  const baseUrl = "https://qasrmobelhaus.com";
  
  if (!product) {
    return {
      title: "Produkt nicht gefunden - Qasr Möbelhaus",
    };
  }

  const productUrl = `${baseUrl}/kollektionen/${params.slug}`;
  const productImage = product.images[0] || product.image;

  return {
    title: `${product.name} - ${product.category} | Qasr Möbelhaus`,
    description: product.fullDescription || product.description,
    keywords: `${product.name}, ${product.category}, Sofagarnitur, Möbel Bischofsheim, Luxusmöbel`,
    openGraph: {
      title: `${product.name} - Qasr Möbelhaus`,
      description: product.description,
      type: "website",
      locale: "de_DE",
      url: productUrl,
      siteName: "Qasr Möbelhaus",
      images: [
        {
          url: productImage,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} - Qasr Möbelhaus`,
      description: product.description,
      images: [productImage],
    },
    alternates: {
      canonical: productUrl,
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(params.slug, 4);

  // Product structured data (JSON-LD)
  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.fullDescription || product.description,
    image: product.images,
    brand: {
      "@type": "Brand",
      name: "Qasr Möbelhaus",
    },
    category: product.category,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "EUR",
      seller: {
        "@type": "Organization",
        name: "Qasr Möbelhaus",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Industriestraße 17",
          addressLocality: "Bischofsheim",
          postalCode: "65474",
          addressCountry: "DE",
        },
        telephone: COMPANY_INFO.phone,
        email: COMPANY_INFO.email,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Product Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productStructuredData),
        }}
      />
      
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-gray-900">
            Startseite
          </Link>
          {" / "}
          <Link href="/kollektionen" className="hover:text-gray-900">
            Kollektionen
          </Link>
          {" / "}
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div>
            <ProductImageGallery images={product.images} productName={product.name} />
          </div>

          {/* Product Information */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gray-200 text-gray-700 rounded-md text-sm font-medium">
                {product.category}
              </span>
            </div>

            {/* Product Description with Tabs */}
            <div className="mb-8">
              <ProductTabs
                fullDescription={product.fullDescription}
                additionalInfo={product.additionalInfo}
              />
            </div>

            {/* Key Features */}
            {product.keyFeatures && product.keyFeatures.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Hauptmerkmale:
                </h2>
                <ul className="space-y-2 text-gray-700">
                  {product.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-gray-900 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Contact Information */}
            <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Kontaktieren Sie uns</h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="font-medium">Telefon:</span>{" "}
                  <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-gray-900">
                    {COMPANY_INFO.phone}
                  </a>
                </p>
                <p>
                  <span className="font-medium">E-Mail:</span>{" "}
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-gray-900">
                    {COMPANY_INFO.email}
                  </a>
                </p>
                <p>
                  <span className="font-medium">Adresse:</span> {COMPANY_INFO.address},{" "}
                  {COMPANY_INFO.postalCode} {COMPANY_INFO.city}
                </p>
              </div>
            </div>

            {/* Social Sharing */}
            <ProductShareButtons productName={product.name} />
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Ähnliche Produkte</h2>
            <RelatedProductsSlider products={relatedProducts} />
          </div>
        )}
      </div>
    </div>
  );
}

