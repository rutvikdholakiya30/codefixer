import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={cn("inline-flex items-center gap-3 md:gap-4 group select-none", className)}>
      {/* Left Bracket < */}
      <div className="shrink-0">
        <svg
          width="24"
          height="32"
          viewBox="0 0 40 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-6 md:w-7 md:h-9 transition-transform duration-300 group-hover:-translate-x-1"
        >
          <defs>
            <linearGradient id="bracket-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0047AB" />
              <stop offset="60%" stopColor="#813AD1" />
              <stop offset="100%" stopColor="#A020F0" />
            </linearGradient>
            <filter id="logo-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
              <feOffset dx="0" dy="2" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.3" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M38 4L6 25L38 46V36L18 25L38 14V4Z"
            fill="url(#bracket-grad)"
          />
        </svg>
      </div>

      {/* Text Component */}
      <div className="flex items-center text-2xl md:text-5xl font-black tracking-normal uppercase font-sans drop-shadow-md">
        <span 
          className="bg-clip-text text-transparent"
          style={{ 
            WebkitBackgroundClip: 'text',
            backgroundImage: 'linear-gradient(to right, #0047AB 68%, #A020F0 68%)',
            filter: 'drop-shadow(0px 2px 3px rgba(0,0,0,0.2))'
          }}
        >
          CODEFIXER
        </span>
      </div>

      {/* Right Bracket > */}
      <div className="shrink-0">
        <svg
          width="24"
          height="32"
          viewBox="0 0 40 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-6 md:w-7 md:h-9 transition-transform duration-300 group-hover:translate-x-1"
        >
          <path
            d="M2 4L34 25L2 46V36L22 25L2 14V4Z"
            fill="url(#bracket-grad)"
          />
        </svg>
      </div>
    </div>
  );
}
