import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className, showText = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        viewBox="0 0 650 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-8 md:h-10"
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

        {showText && (
          <>
            {/* CODEFIX Text */}
            <text
              x="110"
              y="85"
              fill="url(#logo-gradient)"
              style={{
                fontSize: "78px",
                fontWeight: "900",
                fontFamily: "Geist, sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              CODEFIX
            </text>
            
            {/* ER Text (Purple) */}
            <text
              x="445"
              y="85"
              fill="url(#text-purple)"
              style={{
                fontSize: "78px",
                fontWeight: "900",
                fontFamily: "Geist, sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              ER
            </text>
          </>
        )}

        {/* Right Icon > */}
        <path
          d="M550 20L605 60L550 100L530 100L585 60L530 20H550Z"
          fill="url(#logo-gradient)"
          style={{ transform: !showText ? 'translateX(-440px)' : 'none' }}
        />
      </svg>
    </div>
  );
}
