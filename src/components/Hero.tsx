"use client";

import React from "react";
import Image from "next/image";

interface HeroProps {
  onOpenInquiry: () => void;
}

export default function Hero({ onOpenInquiry }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-white min-h-[780px] sm:min-h-[880px] md:min-h-[980px] lg:min-h-[1100px] xl:min-h-[1250px] flex flex-col justify-between">
      {/* Full-width background image with penthouse villa & clouds */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/images/homepage-v4.png"
          alt="BRIX Luxury Penthouse Villa and Sky - Buy. Sell. Rent"
          fill
          priority
          className="object-cover object-top filter contrast-[1.02]"
          sizes="100vw"
        />

        {/* Architectural Golden Hour Sunbeam Glint */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="w-[180%] h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent blur-md -rotate-35 translate-y-[-200%] animate-facade-glint" />
        </div>

        {/* Top Fade to White behind sticky navbar */}
        <div className="absolute top-0 inset-x-0 h-24 sm:h-28 bg-gradient-to-b from-white/90 via-white/40 to-transparent pointer-events-none" />

        {/* Bottom Cloud Mist Fade to page white */}
        <div className="absolute bottom-0 inset-x-0 h-40 sm:h-56 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
      </div>

      {/* Text Overlay directly on top of the image sky */}
      <div className="relative z-10 pt-20 sm:pt-24 md:pt-28 text-center px-4 max-w-3xl mx-auto">
        {/* Headline: BUY. SELL. RENT */}
        <div className="overflow-hidden mb-2 sm:mb-3">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.8rem] font-bold sm:font-extrabold tracking-tight text-neutral-950 font-sans leading-[1.05] animate-text-reveal">
            BUY. SELL. RENT
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm md:text-base font-bold tracking-wider text-neutral-900 uppercase max-w-xl mx-auto mb-4 sm:mb-5 leading-relaxed">
          DISCOVER YOUR DREAM HOME WITH A TRUSTED ADVISORY PARTNER.
        </p>

        {/* Pill CTA Button */}
        <div className="flex justify-center">
          <button
            onClick={onOpenInquiry}
            className="bg-black hover:bg-neutral-800 text-white text-xs sm:text-[13px] font-bold tracking-wider uppercase px-8 sm:px-10 py-3.5 sm:py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer"
          >
            START YOUR INQUIRY
          </button>
        </div>
      </div>

      {/* Dual Layer Animated Drifting Cloud Mist at base of villa */}
      <div className="relative z-10 w-full h-32 sm:h-44 pointer-events-none overflow-hidden flex items-center justify-center">
        {/* Layer 1: Leftward drifting mist */}
        <div className="absolute w-[120%] h-32 bg-radial from-white via-white/85 to-transparent blur-2xl animate-cloud-left" />
        {/* Layer 2: Rightward drifting mist for depth */}
        <div className="absolute w-[130%] h-28 bg-radial from-white/90 via-sky-50/20 to-transparent blur-xl animate-cloud-right" />
      </div>
    </section>
  );
}
