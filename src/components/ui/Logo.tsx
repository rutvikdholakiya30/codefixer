import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className, showText = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        viewBox="0 0 500 120"
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
              x="105"
              y="85"
              fill="url(#logo-gradient)"
              style={{
                fontSize: "78px",
                fontWeight: "900",
                fontFamily: "Geist, sans-serif",
                letterSpacing: "-0.05em",
              }}
            >
              CODEFIX
            </text>
            
            {/* ER Text (Purple) */}
            <text
              x="418"
              y="85"
              fill="url(#text-purple)"
              style={{
                fontSize: "78px",
                fontWeight: "900",
                fontFamily: "Geist, sans-serif",
                letterSpacing: "-0.05em",
              }}
            >
              ER
            </text>
          </>
        )}

        {/* Right Icon > */}
        <path
          d="M430 20L485 60L430 100L410 100L465 60L410 20H430Z"
          fill="url(#logo-gradient)"
          className={!showText ? "translate-x-[-320px]" : ""}
          style={{ transform: !showText ? 'translateX(-320px)' : 'none' }}
        />
      </svg>
    </div>
  );
}
