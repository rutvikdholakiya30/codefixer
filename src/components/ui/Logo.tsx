import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={cn("inline-flex items-center gap-2 md:gap-2.5 group select-none", className)}>
      {/* Left Bracket < */}
      <div className="shrink-0">
        <svg
          width="18"
          height="24"
          viewBox="0 0 40 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-5 md:w-5 md:h-6 transition-transform group-hover:-translate-x-0.5"
        >
          <defs>
            <linearGradient id="bracket-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1D4ED8" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
          <path
            d="M35 5L5 25L35 45L40 45L15 25L40 5H35Z"
            fill="url(#bracket-grad)"
          />
        </svg>
      </div>

      {/* Text Component */}
      <div className="flex items-center text-xl md:text-3xl font-black tracking-tighter uppercase font-sans italic">
        <span 
          className="bg-clip-text text-transparent bg-gradient-to-r from-[#1D4ED8] to-[#6366F1]"
          style={{ WebkitBackgroundClip: 'text' }}
        >
          CODEFIX
        </span>
        <span 
          className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]"
          style={{ WebkitBackgroundClip: 'text' }}
        >
          ER
        </span>
      </div>

      {/* Right Bracket > */}
      <div className="shrink-0">
        <svg
          width="18"
          height="24"
          viewBox="0 0 40 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-5 md:w-5 md:h-6 transition-transform group-hover:translate-x-0.5"
        >
          <path
            d="M5 5L35 25L5 45L0 45L25 25L0 5H5Z"
            fill="url(#bracket-grad)"
          />
        </svg>
      </div>
    </div>
  );
}
