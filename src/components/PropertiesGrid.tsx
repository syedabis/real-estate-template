"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Bed, Bath, Sparkles, X } from "lucide-react";

interface Property {
  id: number;
  image: string;
  address: string;
  beds: string;
  baths: string;
  price: string;
  purchasePriceUSD: string;
  purchasePriceEUR: string;
  purchasePriceGBP: string;
  leasePriceUSD: string;
  leasePriceEUR: string;
  leasePriceGBP: string;
  status: "For Sale" | "For Rent";
  sqft?: string;
  description?: string;
}

const propertiesData: Property[] = [
  {
    id: 1,
    image: "/images/v2/prop-1.png",
    address: "123 Main St, Anytown, USA",
    beds: "2 bed",
    baths: "2 bath",
    price: "$4,100",
    leasePriceUSD: "$4,100 / mo",
    leasePriceEUR: "€3,850 / mo",
    leasePriceGBP: "£3,250 / mo",
    purchasePriceUSD: "$4,850,000",
    purchasePriceEUR: "€4,500,000",
    purchasePriceGBP: "£3,800,000",
    status: "For Sale",
    sqft: "1,850 sq ft",
    description: "Modern luxury villa with cantilevered honey-oak wooden canopy entrance pergola, floor-to-ceiling glass, and tropical palm landscaping.",
  },
  {
    id: 2,
    image: "/images/v2/prop-2.png",
    address: "123 Main St, Anytown, USA",
    beds: "2 bed",
    baths: "2 bath",
    price: "$4,100",
    leasePriceUSD: "$4,100 / mo",
    leasePriceEUR: "€3,850 / mo",
    leasePriceGBP: "£3,250 / mo",
    purchasePriceUSD: "$5,200,000",
    purchasePriceEUR: "€4,850,000",
    purchasePriceGBP: "£4,100,000",
    status: "For Sale",
    sqft: "2,400 sq ft",
    description: "Contemporary two-story cube residence at dusk with dark charcoal cladding, vertical architectural slats, and warm ambient interior glow.",
  },
  {
    id: 3,
    image: "/images/v2/prop-3.png",
    address: "123 Main St, Anytown, USA",
    beds: "2 bed",
    baths: "2 bath",
    price: "$4,100",
    leasePriceUSD: "$4,100 / mo",
    leasePriceEUR: "€3,850 / mo",
    leasePriceGBP: "£3,250 / mo",
    purchasePriceUSD: "$4,500,000",
    purchasePriceEUR: "€4,200,000",
    purchasePriceGBP: "£3,550,000",
    status: "For Sale",
    sqft: "2,100 sq ft",
    description: "Modernist white angular villa with panoramic sliding glass panels, enveloped by lush tropical palm trees and manicured garden paths.",
  },
  {
    id: 4,
    image: "/images/v2/prop-4.png",
    address: "123 Main St, Anytown, USA",
    beds: "2 bed",
    baths: "2 bath",
    price: "$4,100",
    leasePriceUSD: "$4,100 / mo",
    leasePriceEUR: "€3,850 / mo",
    leasePriceGBP: "£3,250 / mo",
    purchasePriceUSD: "$4,950,000",
    purchasePriceEUR: "€4,600,000",
    purchasePriceGBP: "£3,900,000",
    status: "For Sale",
    sqft: "1,950 sq ft",
    description: "Striking cubic architecture featuring pure white volumes, warm vertical wooden louvers, and a modern paved driveway.",
  },
  {
    id: 5,
    image: "/images/v2/prop-5.png",
    address: "123 Main St, Anytown, USA",
    beds: "2 bed",
    baths: "2 bath",
    price: "$4,100",
    leasePriceUSD: "$4,100 / mo",
    leasePriceEUR: "€3,850 / mo",
    leasePriceGBP: "£3,250 / mo",
    purchasePriceUSD: "$6,100,000",
    purchasePriceEUR: "€5,700,000",
    purchasePriceGBP: "£4,800,000",
    status: "For Sale",
    sqft: "3,100 sq ft",
    description: "Luxury two-story villa glowing at twilight with warm golden lights, wooden ceiling soffits, and lush tropical palm gardens.",
  },
  {
    id: 6,
    image: "/images/v2/prop-6.png",
    address: "123 Main St, Anytown, USA",
    beds: "2 bed",
    baths: "2 bath",
    price: "$4,100",
    leasePriceUSD: "$4,100 / mo",
    leasePriceEUR: "€3,850 / mo",
    leasePriceGBP: "£3,250 / mo",
    purchasePriceUSD: "$5,450,000",
    purchasePriceEUR: "€5,100,000",
    purchasePriceGBP: "£4,300,000",
    status: "For Sale",
    sqft: "2,750 sq ft",
    description: "Sculptural architectural residence featuring crisp white concrete, natural warm timber facade, and an integrated vertical living garden wall.",
  },
];

interface PropertiesGridProps {
  onOpenInquiry: () => void;
}

// 3D Perspective Tilt Property Card
function PropertyCardItem({
  prop,
  onClick,
  displayPrice,
}: {
  prop: Property;
  onClick: () => void;
  displayPrice: string;
}) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});
  const [glare, setGlare] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6; // max 6deg tilt
    const rotateY = ((x - centerX) / centerX) * 6;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(6px)`,
      transition: "transform 0.1s ease-out",
    });

    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.25,
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
      transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
    });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
      className="group cursor-pointer flex flex-col will-change-transform select-none"
    >
      {/* Image Frame with Specular Sheen */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-100 mb-3.5 shadow-xs">
        <Image
          src={prop.image}
          alt={`Real Estate Property at ${prop.address}`}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Dynamic Specular Light Glare following cursor */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: glare.opacity,
            background: `radial-gradient(circle 240px at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.45), transparent 70%)`,
          }}
        />

        {/* Floating View Badge Reveal on Hover */}
        <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="bg-white/95 text-neutral-950 text-xs font-medium px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 ease-out">
            <span>View Property</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Address */}
      <h3 className="text-xs sm:text-[13px] font-semibold text-neutral-900 tracking-tight mb-2 group-hover:text-black transition-colors">
        {prop.address}
      </h3>

      {/* Badges Row matching the exact reference: [2 bed, 2 bath] [$4,100] [For Sale] */}
      <div className="flex items-center gap-1.5 flex-wrap">
        <span className="inline-flex items-center text-[10px] sm:text-[11px] font-medium text-neutral-600 border border-neutral-300 rounded-full px-2.5 py-0.5 bg-neutral-50/50 group-hover:border-neutral-400 transition-colors">
          {prop.beds}, {prop.baths}
        </span>
        <span className="inline-flex items-center text-[10px] sm:text-[11px] font-semibold text-neutral-900 border border-neutral-300 rounded-full px-2.5 py-0.5 bg-neutral-50/50 group-hover:border-neutral-950 transition-all">
          {displayPrice}
        </span>
        <span className="inline-flex items-center text-[10px] sm:text-[11px] font-medium text-neutral-600 border border-neutral-300 rounded-full px-2.5 py-0.5 bg-neutral-50/50 group-hover:border-neutral-400 transition-colors">
          {prop.status}
        </span>
      </div>
    </div>
  );
}

export default function PropertiesGrid({ onOpenInquiry }: PropertiesGridProps) {
  const [filter, setFilter] = useState<"All" | "For Sale" | "For Rent">("All");
  const [currency, setCurrency] = useState<"USD" | "EUR" | "GBP">("USD");
  const [valuationMode, setValuationMode] = useState<"lease" | "purchase">("lease");
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const filteredProperties = propertiesData.filter((p) => {
    if (filter === "All") return true;
    return p.status === filter;
  });

  const getFormattedPrice = (prop: Property): string => {
    if (valuationMode === "lease") {
      if (currency === "EUR") return prop.leasePriceEUR;
      if (currency === "GBP") return prop.leasePriceGBP;
      return prop.leasePriceUSD;
    } else {
      if (currency === "EUR") return prop.purchasePriceEUR;
      if (currency === "GBP") return prop.purchasePriceGBP;
      return prop.purchasePriceUSD;
    }
  };

  return (
    <section id="properties" className="py-20 sm:py-28 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div>
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-neutral-400 mb-2">
              Our Properties
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-neutral-950 font-sans leading-tight">
              Innovative Real <br />
              Estate Developments
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3.5">
            <p className="text-neutral-500 text-xs sm:text-sm max-w-sm font-normal leading-relaxed text-left md:text-right">
              We take pride in creating exceptional properties that blend modern design, functionality, and comfort.
            </p>

            {/* Controls Bar: Filter Pills + Currency & Mode Switchers */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Valuation Mode Toggle */}
              <div className="flex items-center bg-neutral-100 p-0.5 rounded-full text-[11px] font-medium border border-neutral-200/60">
                <button
                  onClick={() => setValuationMode("lease")}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                    valuationMode === "lease"
                      ? "bg-white text-neutral-950 font-semibold shadow-2xs"
                      : "text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  Lease
                </button>
                <button
                  onClick={() => setValuationMode("purchase")}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                    valuationMode === "purchase"
                      ? "bg-white text-neutral-950 font-semibold shadow-2xs"
                      : "text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  Purchase
                </button>
              </div>

              {/* Currency Selector */}
              <div className="flex items-center bg-neutral-100 p-0.5 rounded-full text-[11px] font-medium border border-neutral-200/60">
                {(["USD", "EUR", "GBP"] as const).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr)}
                    className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                      currency === curr
                        ? "bg-neutral-900 text-white font-semibold shadow-2xs"
                        : "text-neutral-500 hover:text-neutral-900"
                    }`}
                  >
                    {curr === "USD" ? "$" : curr === "EUR" ? "€" : "£"}
                  </button>
                ))}
              </div>

              {/* Filter Pills with animated layout pill */}
              <div className="flex items-center gap-1 bg-neutral-100 p-1 rounded-full text-xs font-medium">
                {(["All", "For Sale", "For Rent"] as const).map((tab) => {
                  const isActive = filter === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setFilter(tab)}
                      className={`relative px-3.5 py-1 rounded-full transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "text-neutral-950 font-semibold shadow-xs bg-white"
                          : "text-neutral-500 hover:text-neutral-900"
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 6 Property Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-12">
          {filteredProperties.map((prop) => (
            <PropertyCardItem
              key={prop.id}
              prop={prop}
              displayPrice={getFormattedPrice(prop)}
              onClick={() => setSelectedProperty(prop)}
            />
          ))}
        </div>

        {/* Action Button: See all Properties */}
        <div className="flex justify-center mt-14 sm:mt-18">
          <button
            onClick={onOpenInquiry}
            className="bg-neutral-950 hover:bg-neutral-800 text-white text-xs sm:text-[13px] font-medium px-8 py-3.5 rounded-full transition-all duration-300 shadow-xs hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer"
          >
            See all Properties
          </button>
        </div>
      </div>

      {/* Property Details Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-100 transform transition-all animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProperty(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm text-neutral-700 hover:text-black hover:bg-white shadow-sm transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/9] w-full bg-neutral-100">
              <Image
                src={selectedProperty.image}
                alt={selectedProperty.address}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <span className="inline-block text-[11px] font-bold tracking-wider uppercase text-neutral-400 mb-1">
                    Featured Residence
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-neutral-950">
                    {selectedProperty.address}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-light text-neutral-950">
                    {selectedProperty.price}
                  </div>
                  <span className="text-xs text-neutral-500 font-medium">
                    {selectedProperty.status}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 py-3 border-y border-neutral-100 text-xs sm:text-sm text-neutral-600 mb-4">
                <span className="flex items-center gap-1.5">
                  <Bed className="w-4 h-4 text-neutral-400" />
                  {selectedProperty.beds}
                </span>
                <span className="flex items-center gap-1.5">
                  <Bath className="w-4 h-4 text-neutral-400" />
                  {selectedProperty.baths}
                </span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-neutral-400" />
                  {selectedProperty.sqft}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                {selectedProperty.description}
              </p>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setSelectedProperty(null);
                    onOpenInquiry();
                  }}
                  className="flex-1 bg-neutral-950 hover:bg-neutral-800 text-white text-xs sm:text-sm font-medium py-3 rounded-full transition-all text-center cursor-pointer shadow-sm hover:shadow-md"
                >
                  Schedule Private Viewing
                </button>
                <button
                  onClick={() => setSelectedProperty(null)}
                  className="px-5 py-3 rounded-full border border-neutral-200 text-neutral-700 hover:bg-neutral-50 text-xs sm:text-sm font-medium transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
