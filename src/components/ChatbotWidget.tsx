"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { 
  X, 
  Send, 
  ArrowUpRight, 
  Building,
  KeyRound,
  ChevronRight
} from "lucide-react";
import { BrixSparkle } from "./Icons";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  options?: string[];
  action?: {
    label: string;
    type: "inquiry" | "call" | "viewing";
  };
}

interface ChatbotWidgetProps {
  onOpenInquiry: () => void;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "welcome-1",
    sender: "bot",
    text: "Welcome to BRIX Private Real Estate Advisory. How may we assist your property inquiry or private viewing today?",
    timestamp: "Just now",
    options: [
      "Explore Residences",
      "Commercial & Office",
      "Schedule a Viewing",
    ],
  },
];

export default function ChatbotWidget({ onOpenInquiry }: ChatbotWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll on new message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const generateBotResponse = (userInput: string): { text: string; options?: string[]; action?: Message["action"] } => {
    const lower = userInput.toLowerCase();

    // 1. Properties / Residences
    if (lower.includes("villa") || lower.includes("prop") || lower.includes("house") || lower.includes("apart") || lower.includes("home") || lower.includes("explore")) {
      return {
        text: "Our current residential collection includes 6 exclusive architectural properties across Warsaw, London, and Zürich:\n\n• Villa 1: Cantilevered honey-oak canopy pavilion with lush palms.\n• Villa 2: Dark charcoal two-story cube residence with illuminated slats.\n• Villa 3: Modernist white cubic home surrounded by tropical foliage.\n• Villa 4: Cubic architecture with vertical wooden louvers.\n• Villa 5: Two-story luxury villa glowing at twilight with wooden soffits.\n• Villa 6: Sculptural villa with an integrated vertical living garden wall.\n\nAll properties feature 2 Bed, 2 Bath layouts starting at $4,100/mo or $4.5M purchase.",
        options: ["Schedule Private Viewing", "Start Acquisition Inquiry", "Commercial Spaces"],
        action: {
          label: "Inquire About Residential Portfolio",
          type: "inquiry",
        },
      };
    }

    // 2. Commercial / Office / Retail
    if (lower.includes("office") || lower.includes("retail") || lower.includes("commercial") || lower.includes("lease")) {
      return {
        text: "BRIX Corporate Division advises on institutional-grade commercial assets:\n\n• Office Leasing: High-spec tech and corporate headquarters (320,000+ sq m advised).\n• Retail Spaces: High-street flagship locations in primary European capitals (99.4% occupancy).\n• Strategic Advisory: Asset repositioning and cross-jurisdictional tax & legal structuring.",
        options: ["Explore Residences", "Schedule Consultation", "Contact Advisory Desk"],
        action: {
          label: "Consult Commercial Advisory Desk",
          type: "inquiry",
        },
      };
    }

    // 3. Pricing / Cost / Investment
    if (lower.includes("price") || lower.includes("cost") || lower.includes("rate") || lower.includes("val") || lower.includes("buy") || lower.includes("rent")) {
      return {
        text: "BRIX operates under a transparent dual-structure valuation model:\n\n• Luxury Residential Leases: $3,800/mo – $5,200/mo (fully serviced)\n• Freehold Acquisitions: $3.9M – $6.2M (€3.6M – €5.7M / £3.1M – £4.9M)\n• Institutional Commercial: Bespoke yield projections upon qualification.\n\nWe provide certified comparable transaction data prior to any negotiation.",
        options: ["Schedule Valuation Call", "Explore Residences"],
        action: {
          label: "Request Institutional Valuation Report",
          type: "inquiry",
        },
      };
    }

    // 4. Viewings / Schedule / Appointment
    if (lower.includes("view") || lower.includes("visit") || lower.includes("sched") || lower.includes("tour") || lower.includes("meet") || lower.includes("book")) {
      return {
        text: "Private on-site and remote cinematic viewings are available 7 days a week with a dedicated BRIX portfolio partner. Discretion and NDA protection are guaranteed upon request.",
        options: ["Schedule a Viewing", "Call Concierge", "View 6 Residences"],
        action: {
          label: "Schedule Private Viewing",
          type: "viewing",
        },
      };
    }

    // 5. Locations / Cities
    if (lower.includes("locat") || lower.includes("city") || lower.includes("warsaw") || lower.includes("zurich") || lower.includes("london") || lower.includes("where")) {
      return {
        text: "BRIX maintains active advisory desks in three key European architectural hubs:\n\n• Warsaw Desk: Mokotowska 49 (Mokotów & Śródmieście residential)\n• London Desk: Mayfair, W1K 3QT (High-net-worth acquisitions)\n• Zürich Desk: Bahnhofstrasse 28 (Alpine & private banking assets)",
        options: ["Explore Residences", "Schedule Viewing", "Contact Desk"],
      };
    }

    // Default Fallback
    return {
      text: "Thank you for inquiring. I can provide detailed guidance on our 6 signature residential residences, commercial leasing, private property viewings, or institutional market valuations.",
      options: ["Explore Residences", "Commercial & Office", "Schedule a Viewing"],
      action: {
        label: "Direct Advisory Inquiry",
        type: "inquiry",
      },
    };
  };

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputValue;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue("");
    setIsTyping(true);

    // Realistic brief typing delay
    setTimeout(() => {
      const botResponseData = generateBotResponse(query);
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: botResponseData.text,
        timestamp: "Just now",
        options: botResponseData.options,
        action: botResponseData.action,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  const handleActionClick = (action?: Message["action"]) => {
    if (!action) return;
    onOpenInquiry();
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => {
            if (isOpen) {
              handleClose();
            } else {
              handleOpen();
            }
          }}
          className={`relative flex items-center gap-2.5 px-4 sm:px-5 py-3.5 rounded-full shadow-2xl transition-all duration-300 transform active:scale-95 cursor-pointer ${
            isOpen
              ? "bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-700"
              : "bg-neutral-900 text-white hover:bg-black border border-neutral-800 ring-4 ring-neutral-900/10"
          }`}
          aria-label={isOpen ? "Close BRIX Concierge" : "Open BRIX Concierge"}
        >
          {isOpen ? (
            <>
              <X className="w-5 h-5 text-white" />
              <span className="text-sm font-medium hidden sm:inline">Close</span>
            </>
          ) : (
            <>
              <BrixSparkle className="w-4 h-4 text-white" />
              <span className="text-sm font-medium">BRIX Concierge</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse hidden sm:inline-block" />
            </>
          )}
        </button>
      </div>

      {/* Simplified, Clean Interactive Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-22 right-4 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[390px] h-[520px] max-h-[80vh] bg-white rounded-3xl shadow-2xl border border-neutral-200/80 overflow-hidden flex flex-col transition-all duration-300 ease-out animate-fade-in"
        >
          {/* Streamlined Minimalist Header */}
          <div className="bg-neutral-950 text-white px-5 py-3.5 flex items-center justify-between border-b border-neutral-800/80 shrink-0">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <h3 className="text-sm font-medium tracking-tight text-white">BRIX Concierge</h3>
            </div>

            {/* Single Close Button */}
            <button
              onClick={handleClose}
              title="Close"
              className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800/80 rounded-full transition-colors cursor-pointer"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Clean Message Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#fcfbf9] text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl px-4 py-3 leading-relaxed whitespace-pre-wrap ${
                    msg.sender === "user"
                      ? "bg-neutral-950 text-white rounded-tr-xs shadow-xs"
                      : "bg-white text-neutral-900 border border-neutral-200/80 rounded-tl-xs shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
                  }`}
                >
                  {msg.text}
                </div>

                {/* Interactive Action Button inside message */}
                {msg.action && (
                  <button
                    onClick={() => handleActionClick(msg.action)}
                    className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold bg-neutral-950 text-white hover:bg-neutral-800 px-4 py-2 rounded-full transition-all shadow-xs group cursor-pointer active:scale-95"
                  >
                    <span>{msg.action.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                )}

                {/* Streamlined Quick Suggestion Pills */}
                {msg.options && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {msg.options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(opt)}
                        className="text-xs bg-white hover:bg-neutral-950 hover:text-white text-neutral-800 px-3.5 py-1.5 rounded-full border border-neutral-200 transition-all shadow-2xs font-medium cursor-pointer active:scale-95"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-neutral-400 bg-white border border-neutral-200/80 rounded-2xl rounded-tl-xs px-3.5 py-2 w-fit shadow-2xs">
                <span className="text-xs text-neutral-500 font-medium">BRIX Advisor is typing</span>
                <div className="flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Clean Input Area without fine-print clutter */}
          <div className="p-3.5 bg-white border-t border-neutral-200/60 shrink-0">
            <div className="relative flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about properties, pricing, viewings..."
                className="w-full bg-neutral-100/80 text-neutral-900 placeholder-neutral-400 text-xs sm:text-sm pl-4 pr-11 py-3 rounded-full border border-neutral-200 focus:outline-none focus:border-neutral-400 focus:bg-white transition-all"
              />
              <button
                onClick={() => handleSend()}
                disabled={!inputValue.trim()}
                className={`absolute right-1.5 p-2 rounded-full transition-all ${
                  inputValue.trim()
                    ? "bg-neutral-950 text-white hover:bg-neutral-800 shadow-xs cursor-pointer"
                    : "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                }`}
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
