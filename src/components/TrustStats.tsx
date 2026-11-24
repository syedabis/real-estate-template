"use client";

import React, { useState, useEffect, useRef } from "react";
import { BrixSparkle } from "./Icons";

function AnimatedCounter({
  end,
  suffix = "",
  duration = 1800,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const update = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Smooth ease out quart curve
            const easeOut = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOut * end));
            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              setCount(end);
            }
          };
          requestAnimationFrame(update);
        }
      },
      { threshold: 0.15 }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function TrustStats() {
  const stats = [
    {
      numeric: 98,
      suffix: "%",
      label: "Client Satisfaction Rate",
    },
    {
      numeric: 50,
      suffix: "+",
      label: "Prestigious Apartment Sold Monthly",
    },
    {
      numeric: 170,
      suffix: "+",
      label: "Exclusive Properties in Our Warsaw Portfolio",
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Mission & Trust statement */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="mb-6 cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <BrixSparkle className="w-5 h-5 text-neutral-950" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-[2.2rem] font-medium leading-[1.3] tracking-tight text-neutral-950 mb-8 max-w-xl">
              Built on trust and long-term relationships, we guide our clients through every stage of their real estate journey.{" "}
              <span className="text-neutral-400 font-normal">
                From first-time buyers to seasoned investors, we deliver results that matter.
              </span>
            </h2>

            <button
              onClick={() => {
                const el = document.getElementById("why-choose-us");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto bg-neutral-950 hover:bg-neutral-800 text-white text-[13px] font-medium px-6 py-2.5 rounded-full transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-95 text-center cursor-pointer"
            >
              More about us
            </button>
          </div>

          {/* Right Column: Animated Numerical Counters */}
          <div className="lg:col-span-5 flex flex-col divide-y divide-neutral-200">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="py-5 sm:py-7 first:pt-0 last:pb-0 flex items-center justify-between sm:justify-start sm:gap-10 group"
              >
                <div className="text-3xl sm:text-5xl lg:text-[3.5rem] font-light tracking-tight text-neutral-950 shrink-0 font-sans group-hover:text-neutral-700 transition-colors duration-300">
                  <AnimatedCounter end={stat.numeric} suffix={stat.suffix} />
                </div>
                <div className="text-xs sm:text-[13px] font-medium text-neutral-600 leading-snug max-w-[170px] text-right sm:text-left">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
