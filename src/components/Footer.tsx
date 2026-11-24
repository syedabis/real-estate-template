"use client";

import React, { useState } from "react";
import { BrixLogo } from "./Icons";
import { ArrowRight, Check } from "lucide-react";

interface FooterProps {
  onOpenInquiry: () => void;
}

export default function Footer({ onOpenInquiry }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer id="contact" className="bg-[#0c0c0c] text-white border-t border-neutral-900 pt-16 sm:pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-800">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <BrixLogo className="w-6 h-6 text-white" />
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed mb-6">
                BRIX is an elite real estate advisory firm delivering high-calibre architectural residences, prime developments, and commercial leasing across premier global markets.
              </p>
            </div>

            <div className="pt-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2.5 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-radar absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Active Advisory Hubs</span>
              </div>
              <div className="flex flex-col gap-1.5 text-xs text-neutral-400 font-mono">
                <div className="flex items-center justify-between max-w-xs group cursor-pointer hover:text-white transition-colors">
                  <span>WARSAW</span>
                  <span className="text-[10px] text-neutral-600 group-hover:text-neutral-400 transition-colors">52.23° N, 21.01° E</span>
                </div>
                <div className="flex items-center justify-between max-w-xs group cursor-pointer hover:text-white transition-colors">
                  <span>LONDON</span>
                  <span className="text-[10px] text-neutral-600 group-hover:text-neutral-400 transition-colors">51.50° N, 0.14° W</span>
                </div>
                <div className="flex items-center justify-between max-w-xs group cursor-pointer hover:text-white transition-colors">
                  <span>ZÜRICH</span>
                  <span className="text-[10px] text-neutral-600 group-hover:text-neutral-400 transition-colors">47.37° N, 8.54° E</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-4 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-neutral-400">
              <li>
                <a href="#properties" className="hover:text-white transition-colors">
                  Properties
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#commercial" className="hover:text-white transition-colors">
                  Office Leasing
                </a>
              </li>
              <li>
                <a href="#commercial" className="hover:text-white transition-colors">
                  Retail Spaces
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Advisory & Portfolios */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-4 font-mono">
              Portfolios
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-neutral-400">
              <li>
                <button onClick={onOpenInquiry} className="hover:text-white transition-colors text-left">
                  Warsaw Penthouse Collection
                </button>
              </li>
              <li>
                <button onClick={onOpenInquiry} className="hover:text-white transition-colors text-left">
                  Suburban Architectural Villas
                </button>
              </li>
              <li>
                <button onClick={onOpenInquiry} className="hover:text-white transition-colors text-left">
                  Prime Commercial Districts
                </button>
              </li>
              <li>
                <button onClick={onOpenInquiry} className="hover:text-white transition-colors text-left">
                  Off-Market Acquisitions
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Advisory Desk */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2 font-mono">
              Private Market Intelligence
            </h4>
            <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
              Subscribe to receive our confidential quarterly Warsaw and European luxury property report.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-neutral-900 border border-emerald-900/60 text-emerald-400 text-xs">
                <Check className="w-4 h-4" />
                <span>You are subscribed to the BRIX Private Dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-neutral-900 border border-neutral-800 text-white placeholder:text-neutral-500 text-xs sm:text-[13px] px-4 py-2.5 rounded-full flex-1 focus:outline-none focus:border-neutral-500 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-white hover:bg-neutral-200 text-neutral-950 px-4 py-2.5 rounded-full text-xs font-semibold transition-all flex items-center justify-center shrink-0"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            <div className="mt-6 pt-6 border-t border-neutral-900 flex flex-col gap-1 text-[11px] text-neutral-500">
              <div>Advisory Desk: +48 22 890 1200</div>
              <div>Inquiries: advisory@brix-estate.com</div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © 2026 BRIX Real Estate Advisory. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6">
            <a href="#" className="hover:text-neutral-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-neutral-300 transition-colors">
              Terms of Engagement
            </a>
            <a href="#" className="hover:text-neutral-300 transition-colors">
              Regulatory Disclosures
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
