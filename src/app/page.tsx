"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStats from "@/components/TrustStats";
import ShowcaseVilla from "@/components/ShowcaseVilla";
import AccoladesTicker from "@/components/AccoladesTicker";
import WhyChooseUs from "@/components/WhyChooseUs";
import PropertiesGrid from "@/components/PropertiesGrid";
import CommercialServices from "@/components/CommercialServices";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";
import ChatbotWidget from "@/components/ChatbotWidget";

export default function Home() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      {/* Navigation Bar */}
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} />

      <main>
        {/* Hero Section: Buy. Sell. Rent */}
        <Hero onOpenInquiry={() => setInquiryOpen(true)} />

        {/* Trust & Results Section + Numerical Proof */}
        <TrustStats />

        {/* Featured Showcase Mid-Century Modern Residence */}
        <ShowcaseVilla />

        {/* Infinite Luxury Editorial Accolades Ribbon */}
        <AccoladesTicker />

        {/* Why Choose Us / Your trusted partner in Real Estate */}
        <WhyChooseUs />

        {/* Innovative Real Estate Developments (6 Property Cards) */}
        <PropertiesGrid onOpenInquiry={() => setInquiryOpen(true)} />

        {/* Commercial Services & Accordion: Office Leasing, Retail Spaces */}
        <CommercialServices onOpenInquiry={() => setInquiryOpen(true)} />
      </main>

      {/* Global Footer */}
      <Footer onOpenInquiry={() => setInquiryOpen(true)} />

      {/* Interactive Inquiry Modal */}
      <InquiryModal isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} />

      {/* Interactive Luxury Chatbot Concierge Widget */}
      <ChatbotWidget onOpenInquiry={() => setInquiryOpen(true)} />
    </div>
  );
}
