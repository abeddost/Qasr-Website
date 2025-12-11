import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Produkt nicht gefunden</h1>
        <p className="text-gray-600 mb-8">
          Das angeforderte Produkt konnte nicht gefunden werden.
        </p>
        <Link
          href="/kollektionen"
          className="inline-block px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
        >
          Zurück zu Kollektionen
        </Link>
      </div>
    </div>
  );
}

