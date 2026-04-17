import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <svg
        viewBox="0 0 850 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-8 md:h-11"
        preserveAspectRatio="xMinYMid meet"
      >
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
          <linearGradient id="text-purple" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#D946EF" />
          </linearGradient>
        </defs>

        {/* Left Icon < */}
        <path
          d="M70 20L15 60L70 100L90 100L35 60L90 20H70Z"
          fill="url(#logo-gradient)"
        />

        {/* Combined Text */}
        <text
          x="110"
          y="88"
          style={{
            fontSize: "82px",
            fontWeight: "900",
            fontFamily: "Inter, Poppins, sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          <tspan fill="url(#logo-gradient)">CODEFIX</tspan>
          <tspan fill="url(#text-purple)">ER</tspan>
        </text>

        {/* Right Icon > (Explicitly positioned further right) */}
        <path
          d="M740 20L795 60L740 100L720 100L775 60L720 20H740Z"
          fill="url(#logo-gradient)"
        />
      </svg>
    </div>
  );
}
