"use client";

import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { GOOGLE_MAPS_CONFIG } from "@/lib/constants";

const libraries: ("places")[] = ["places"];

export default function GoogleMapComponent() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey || "",
    libraries,
  });

  const center = useMemo(
    () => ({ lat: GOOGLE_MAPS_CONFIG.lat, lng: GOOGLE_MAPS_CONFIG.lng }),
    []
  );

  if (!apiKey) {
    return (
      <div className="w-full h-96 bg-gray-200 flex items-center justify-center rounded-lg">
        <div className="text-center p-4">
          <p className="text-gray-600 mb-2">Google Maps API-Schlüssel nicht konfiguriert</p>
          <p className="text-sm text-gray-500">
            Bitte fügen Sie NEXT_PUBLIC_GOOGLE_MAPS_API_KEY zu Ihrer .env.local-Datei hinzu
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Adresse: {GOOGLE_MAPS_CONFIG.address}
          </p>
        </div>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="w-full h-96 bg-gray-200 flex items-center justify-center rounded-lg">
        <p className="text-gray-600">Fehler beim Laden der Karte</p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="w-full h-96 bg-gray-200 flex items-center justify-center rounded-lg">
        <p className="text-gray-600">Karte wird geladen...</p>
      </div>
    );
  }

  return (
    <GoogleMap
      zoom={15}
      center={center}
      mapContainerClassName="w-full h-96 rounded-lg"
      options={{
        disableDefaultUI: false,
        zoomControl: true,
        streetViewControl: false,
        mapTypeControl: false,
      }}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}

