"use client";

import React from "react";
import { BrixSparkle } from "./Icons";

export default function AccoladesTicker() {
  const tickerItems = [
    "ARCHITECTURAL EXCELLENCE",
    "WARSAW • LONDON • ZÜRICH",
    "€1.8B+ ASSETS ADVISED",
    "99.4% COMMERCIAL OCCUPANCY",
    "DISCREET PRIVATE CLIENT DESK",
    "50+ PRESTIGIOUS TRANSACTIONS MONTHLY",
    "98% CLIENT SATISFACTION RATE",
    "FREEHOLD & LONG-TERM LEASES",
  ];

  return (
    <div className="w-full bg-[#0d0d0d] text-white py-3.5 overflow-hidden border-y border-neutral-800/80 select-none relative">
      {/* Edge gradient mask for smooth fade in/out */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-xs font-mono tracking-widest uppercase text-neutral-400">
        {/* Repeating twice for continuous seamless loop */}
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <div key={index} className="flex items-center gap-8 shrink-0 hover:text-white transition-colors duration-200">
            <span>{item}</span>
            <BrixSparkle className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}

