"use client";

import React from "react";

export default function WhyChooseUs() {
  const cards = [
    {
      num: "01",
      category: "INTELLIGENCE",
      title: "Market Valuation",
      description:
        "Proprietary comparable data across Warsaw, London, and Zürich equips buyers and sellers with institutional-grade pricing clarity before negotiation.",
      icon: (
        <svg
          className="w-4 h-4 text-emerald-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
          <path d="m14 13 2 2 4-4" />
        </svg>
      ),
    },
    {
      num: "02",
      category: "STEWARDSHIP",
      title: "Deal Structuring",
      description:
        "Dedicated legal, notarial, and tax coordination handles every cross-jurisdictional detail discreetly from initial offer through title transfer.",
      icon: (
        <svg
          className="w-4 h-4 text-emerald-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      num: "03",
      category: "CURATION",
      title: "Architectural Vetting",
      description:
        "Every residence in our portfolio is inspected for natural light, material craft, acoustic privacy, and enduring neighborhood value.",
      icon: (
        <svg
          className="w-4 h-4 text-emerald-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      ),
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 sm:py-28 bg-[#f2efe9] border-t border-b border-[#e5e0d5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-18">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <span className="inline-block text-[11px] font-mono font-semibold tracking-[0.22em] uppercase text-emerald-900/80 mb-4">
              WHY CHOOSE BRIX
            </span>
            {/* Editorial Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-serif font-normal tracking-tight text-neutral-950 leading-[1.14]">
              Your trusted partner in <br className="hidden sm:inline" />
              European Real Estate
            </h2>
          </div>

          {/* Right-aligned Subtitle */}
          <div className="max-w-md lg:pb-1">
            <p className="text-neutral-700 text-sm sm:text-[15px] font-normal leading-relaxed">
              Acquiring or divesting an architectural asset demands precision. We replace fragmented brokerage with a single, accountable advisory desk.
            </p>
          </div>
        </div>

        {/* 3 Prominent Floating Pure White Architectural Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 sm:p-9 border border-neutral-300/80 shadow-[0_12px_36px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:border-neutral-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-default"
            >
              <div>
                {/* Card Header: 01 • CATEGORY + Dark Obsidian Badge with Emerald Icon */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span className="text-[11px] font-mono tracking-widest text-neutral-500 font-semibold">
                    {card.num} · {card.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xs">
                    {card.icon}
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-xl sm:text-2xl font-semibold text-neutral-950 font-sans tracking-tight mb-4 group-hover:text-black transition-colors">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
