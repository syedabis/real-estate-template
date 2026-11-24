import React from "react";

export function BrixLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <div className="flex items-center gap-2">
      <svg
        className={`${className} transition-transform duration-300 group-hover:rotate-6`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hexagonal facet icon matching the reference */}
        <polygon
          points="12,2 21,7.5 21,16.5 12,22 3,16.5 3,7.5"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinejoin="round"
          fill="none"
        />
        <line x1="12" y1="2" x2="12" y2="22" stroke="currentColor" strokeWidth="1.8" />
        <line x1="12" y1="12" x2="21" y2="7.5" stroke="currentColor" strokeWidth="1.8" />
        <line x1="12" y1="12" x2="3" y2="7.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
      <span className="font-extrabold tracking-tight text-xl uppercase text-neutral-950 font-sans tracking-wider">
        Brix
      </span>
    </div>
  );
}

export function BrixSparkle({ className = "w-5 h-5 text-neutral-950" }: { className?: string }) {
  return (
    <svg
      className={`${className} animate-sparkle-pulse inline-block`}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
    </svg>
  );
}

// Card 1: Diamond wireframe / nested square
export function TechnologySolutionsIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Diamond */}
      <polygon points="32,6 58,32 32,58 6,32" stroke="currentColor" />
      
      {/* Inner Inscribed Square with interactive rotational morph */}
      <g className="transition-transform duration-700 ease-out group-hover:rotate-45 group-hover:scale-105 origin-center">
        <rect x="19" y="19" width="26" height="26" stroke="currentColor" />
        {/* Center nested diamond */}
        <polygon points="32,22 42,32 32,42 22,32" stroke="currentColor" />
      </g>
      
      {/* Connecting corner diagonals */}
      <line x1="32" y1="6" x2="32" y2="58" stroke="currentColor" strokeDasharray="1 3" />
      <line x1="6" y1="32" x2="58" y2="32" stroke="currentColor" strokeDasharray="1 3" />
    </svg>
  );
}

// Card 2: 4 intersecting circles (sacred geometry)
export function LongTermFocusIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="transition-transform duration-500 ease-out group-hover:scale-110 origin-center">
        <circle cx="25" cy="25" r="14" stroke="currentColor" />
        <circle cx="39" cy="25" r="14" stroke="currentColor" />
        <circle cx="25" cy="39" r="14" stroke="currentColor" />
        <circle cx="39" cy="39" r="14" stroke="currentColor" />
        <circle cx="32" cy="32" r="6" stroke="currentColor" strokeWidth="1.2" />
      </g>
    </svg>
  );
}

// Card 3: Quality craftsmanship sunburst compass emblem
export function QualityCraftsmanshipIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="transition-transform duration-1000 ease-out group-hover:rotate-180 origin-center">
        <circle cx="32" cy="32" r="13" stroke="currentColor" />
        {/* Radiating architectural tick rays */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
          <line
            key={deg}
            x1="32"
            y1="10"
            x2="32"
            y2="14"
            stroke="currentColor"
            strokeWidth="1.8"
            transform={`rotate(${deg} 32 32)`}
          />
        ))}
        <circle cx="32" cy="32" r="4" fill="currentColor" />
      </g>
    </svg>
  );
}
