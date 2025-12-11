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
      <div className="flex border-b border-[rgba(205,163,73,0.35)] mb-6">
        <button
          onClick={() => setActiveTab("explanation")}
          className={`px-6 py-3 font-semibold transition-all text-animate ${
            activeTab === "explanation"
              ? "text-brand-charcoal border-b-2 border-brand-gold"
              : "text-brand-charcoal/70 hover:text-brand-gold"
          }`}
        >
          ERKLÄRUNG
        </button>
        {additionalInfo && (
          <button
            onClick={() => setActiveTab("additional")}
            className={`px-6 py-3 font-semibold transition-all text-animate ${
              activeTab === "additional"
                ? "text-brand-charcoal border-b-2 border-brand-gold"
                : "text-brand-charcoal/70 hover:text-brand-gold"
            }`}
          >
            ZUSÄTZLICHE INFORMATIONEN
          </button>
        )}
      </div>

      {/* Tab Content */}
      <div className="min-h-[200px]">
        {activeTab === "explanation" && (
          <div className="text-brand-charcoal/80 leading-relaxed text-animate">
            {fullDescription}
          </div>
        )}
        {activeTab === "additional" && additionalInfo && (
          <div className="text-brand-charcoal/80 leading-relaxed text-animate">
            {additionalInfo}
          </div>
        )}
      </div>
    </div>
  );
}



