"use client";

import React, { useRef, useState } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";

export default function ShowcaseVilla() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50, active: false });
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y, active: true });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, active: false }));
  };

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlayback = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section className="pb-16 sm:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div 
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-full h-[320px] sm:h-[460px] md:h-[540px] lg:h-[620px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm group select-none cursor-pointer bg-neutral-950"
        >
          {/* Autoplaying High-Resolution Architectural Video */}
          <video
            ref={videoRef}
            src="/images/video.mp4"
            poster="/images/video-poster.jpg"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.01]"
          />

          {/* Interactive Atmospheric Amber/White Ambient Flare on Hover */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500 ease-out"
            style={{
              opacity: mousePos.active ? 0.25 : 0,
              background: `radial-gradient(circle 350px at ${mousePos.x}% ${mousePos.y}%, rgba(254, 240, 138, 0.35), transparent 70%)`,
            }}
          />

          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          
          {/* Floating badge in bottom left */}
          <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-medium text-neutral-900 shadow-sm flex items-center gap-2 transition-all duration-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Featured Architectural Residence • Cinematic Tour</span>
          </div>

          {/* Video Playback & Audio Controls in bottom right */}
          <div className="absolute bottom-5 right-5 sm:bottom-8 sm:right-8 flex items-center gap-2 z-20">
            <button
              onClick={togglePlayback}
              className="bg-black/60 hover:bg-black/85 backdrop-blur-md text-white p-2 sm:px-3 sm:py-2 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 shadow-md hover:scale-105"
              aria-label={isPlaying ? "Pause video" : "Play video"}
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline text-[11px] font-mono">{isPlaying ? "Pause" : "Play"}</span>
            </button>

            <button
              onClick={toggleSound}
              className="bg-black/60 hover:bg-black/85 backdrop-blur-md text-white p-2 sm:px-3 sm:py-2 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 shadow-md hover:scale-105"
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline text-[11px] font-mono">{isMuted ? "Muted" : "Sound On"}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

