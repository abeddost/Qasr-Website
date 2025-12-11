"use client";

import { useState } from "react";

interface ProductTabsProps {
  fullDescription: string;
  additionalInfo?: string;
}

export default function ProductTabs({ fullDescription, additionalInfo }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<"explanation" | "additional">("explanation");

  return (
    <div className="mb-8">
      {/* Tabs Navigation */}
      <div className="flex border-b border-gray-300 mb-6">
        <button
          onClick={() => setActiveTab("explanation")}
          className={`px-6 py-3 font-medium transition-colors ${
            activeTab === "explanation"
              ? "text-gray-900 border-b-2 border-amber-700"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          ERKLÄRUNG
        </button>
        {additionalInfo && (
          <button
            onClick={() => setActiveTab("additional")}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === "additional"
                ? "text-gray-900 border-b-2 border-amber-700"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            ZUSÄTZLICHE INFORMATIONEN
          </button>
        )}
      </div>

      {/* Tab Content */}
      <div className="min-h-[200px]">
        {activeTab === "explanation" && (
          <div className="text-gray-700 leading-relaxed">
            {fullDescription}
          </div>
        )}
        {activeTab === "additional" && additionalInfo && (
          <div className="text-gray-700 leading-relaxed">
            {additionalInfo}
          </div>
        )}
      </div>
    </div>
  );
}

