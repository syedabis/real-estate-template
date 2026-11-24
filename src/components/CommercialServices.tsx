"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronRight, Check } from "lucide-react";

interface CommercialServicesProps {
  onOpenInquiry: () => void;
}

export default function CommercialServices({ onOpenInquiry }: CommercialServicesProps) {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  const toggleItem = (id: number) => {
    setActiveItem((prev) => (prev === id ? null : id));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const services = [
    {
      id: 1,
      number: "1",
      title: "Office Leasing",
      description:
        "BRIX helps companies secure the right office space—quickly and confidently. From subleases to long-term leases, we handle the search, negotiation, and paperwork so you can stay focused on growing your business.",
      image: "/images/v2/hero-building-desktop-fade.png",
      tagline: "Prime Warsaw & European Tech Hubs",
      stats: "320,000+ sq m Leased",
    },
    {
      id: 2,
      number: "2",
      title: "Retail Spaces",
      description:
        "Location matters in retail. We work with you to find high-traffic, strategically positioned properties that captivate your clientele, elevate brand presence, and maximize revenue velocity.",
      image: "/images/v2/retail-spaces.png",
      tagline: "High-Street & Flagship Locations",
      stats: "99.4% Commercial Occupancy",
    },
    {
      id: 3,
      number: "3",
      title: "Strategic Advisory",
      description:
        "Comprehensive real estate asset management and discreet acquisitions for private family offices, institutional investors, and developer partnerships.",
      image: "/images/v2/showcase-villa.png",
      tagline: "Private Wealth & Portfolio Structuring",
      stats: "€1.8B+ Assets Advised",
    },
  ];

  return (
    <section
      id="commercial"
      onMouseMove={handleMouseMove}
      className="relative bg-[#111111] text-white py-20 sm:py-28 overflow-hidden"
    >
      {/* Interactive Ambient Mouse Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 opacity-70"
        style={{
          background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.05), transparent 70%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Subtle section label */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-8 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
              Commercial & Advisory Services
            </span>
          </div>
          <span className="text-xs text-neutral-500 font-mono">
            BRIX / CORPORATE DIVISION
          </span>
        </div>

        {/* Services List / Accordion */}
        <div className="flex flex-col divide-y divide-neutral-800/80">
          {services.map((item) => {
            const isActive = activeItem === item.id;
            return (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`py-10 sm:py-14 transition-all duration-300 cursor-pointer group ${
                  isActive ? "bg-white/[0.02]" : "hover:bg-white/[0.01]"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
                  {/* Left: Circled Number & Description */}
                  <div className="lg:col-span-5 flex items-start gap-4 sm:gap-6">
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center shrink-0 text-xs sm:text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "border-white bg-white text-neutral-950 font-bold scale-105"
                          : "border-neutral-600 text-neutral-400 group-hover:border-neutral-400 group-hover:text-white"
                      }`}
                    >
                      {item.number}
                    </div>
                    <div>
                      <p className="text-xs sm:text-[13px] text-neutral-400 leading-relaxed font-normal">
                        {item.description}
                      </p>
                      {isActive && (
                        <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] text-neutral-500 uppercase tracking-wider font-mono animate-fade-in">
                          <span className="flex items-center gap-1 text-emerald-400">
                            <Check className="w-3.5 h-3.5" />
                            {item.stats}
                          </span>
                          <span>• {item.tagline}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Center / Right: Big Title & Arrow */}
                  <div className="lg:col-span-7 flex items-center justify-between gap-4 sm:gap-6">
                    <h3
                      className={`text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-light tracking-tight transition-all duration-300 ${
                        isActive
                          ? "text-white translate-x-1"
                          : "text-neutral-400 group-hover:text-neutral-200"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <div
                      className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive
                          ? "bg-white text-neutral-950 border-white rotate-45 scale-105"
                          : "border-neutral-700 text-neutral-500 group-hover:border-neutral-400 group-hover:text-white group-hover:rotate-45"
                      }`}
                    >
                      <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
                    </div>
                  </div>
                </div>

                {/* Smooth CSS Grid Accordion Transition */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive
                      ? "grid-rows-[1fr] opacity-100 mt-8 pt-6 border-t border-neutral-800/60"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                      <div className="md:col-span-8 relative h-48 sm:h-64 rounded-2xl overflow-hidden border border-neutral-800 group/img">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover filter brightness-95 transition-transform duration-700 group-hover/img:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                          <div>
                            <div className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                              {item.tagline}
                            </div>
                            <div className="text-lg font-medium text-white">
                              Comprehensive Commercial Negotiation & Management
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-4 flex flex-col justify-center gap-4 p-2">
                        <p className="text-xs text-neutral-400 leading-relaxed">
                          Ready to inspect available spaces or explore our private off-market listings?
                        </p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenInquiry();
                          }}
                          className="bg-white hover:bg-neutral-200 text-neutral-950 text-xs sm:text-[13px] font-semibold py-3 px-6 rounded-full transition-all text-center flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                        >
                          <span>Consult Commercial Team</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
