import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <svg
        viewBox="0 0 1000 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
        preserveAspectRatio="xMinYMid meet"
      >
        <defs>
          <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0047AB" />
            <stop offset="100%" stopColor="#A020F0" />
          </linearGradient>
          <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
            <feOffset dx="0" dy="4" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Left Bracket */}
        <path
          d="M120 40L40 100L120 160V140L65 100L120 60V40Z"
          fill="url(#logo-grad)"
          filter="url(#shadow)"
        />

        {/* Text */}
        <text
          x="140"
          y="135"
          filter="url(#shadow)"
          style={{
            fontSize: "120px",
            fontWeight: "900",
            fontFamily: "Inter, Poppins, sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          <tspan fill="#0047AB">CODEFIX</tspan>
          <tspan fill="#A020F0">ER</tspan>
        </text>

        {/* Right Bracket */}
        <path
          d="M860 40L940 100L860 160V140L915 100L860 60V40Z"
          fill="url(#logo-grad)"
          filter="url(#shadow)"
        />
      </svg>
    </div>
  );
}
