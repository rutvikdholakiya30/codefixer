import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={cn("inline-flex items-center gap-3 md:gap-4 group select-none", className)}>
      <div className="relative shrink-0">
        {/* Animated Glow Background */}
        <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <svg
          width="40"
          height="40"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 md:w-10 md:h-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[30deg]"
        >
          <defs>
            <linearGradient id="premium-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" /> {/* Cyan 500 */}
              <stop offset="100%" stopColor="#4f46e5" /> {/* Indigo 600 */}
            </linearGradient>
            <filter id="icon-glow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Hexagon Outer Frame */}
          <path
            d="M50 5L89 27.5V72.5L50 95L11 72.5V27.5L50 5Z"
            stroke="url(#premium-grad)"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          
          {/* Inner Circuit Fixer Symbol (Styled X / Screwdriver hint) */}
          <path
            d="M35 35L65 65M65 35L35 65"
            stroke="url(#premium-grad)"
            strokeWidth="8"
            strokeLinecap="round"
          />
          
          {/* Connection Points */}
          <circle cx="35" cy="35" r="4" fill="white" />
          <circle cx="65" cy="65" r="4" fill="white" />
          <circle cx="65" cy="35" r="4" fill="white" />
          <circle cx="35" cy="65" r="4" fill="white" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-row items-center gap-1.5 md:items-baseline md:gap-2 leading-none">
        <span className="text-xl md:text-2xl font-medium tracking-tight text-white/90">
          CODE
        </span>
        <span 
          className="text-xl md:text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#06b6d4] to-[#4f46e5]"
          style={{ WebkitBackgroundClip: 'text' }}
        >
          FIXER
        </span>
      </div>
    </div>
  );
}
