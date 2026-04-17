import { Link, useLocation } from 'react-router-dom';
import { Home, Info, Briefcase, Cpu, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: Info },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Tech', href: '/technologies', icon: Cpu },
  { name: 'Contact', href: '/contact', icon: MessageSquare },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-6 left-6 right-6 z-50 md:hidden">
      <div className="glass rounded-[2rem] border-white/10 px-4 py-3 flex items-center justify-around shadow-2xl">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex flex-col items-center gap-1.5 transition-all duration-300 relative px-3 py-1",
                isActive ? "text-primary" : "text-white/40 hover:text-white"
              )}
            >
              <item.icon className={cn("w-5 h-5", isActive && "shadow-glow-primary")} />
              <span className="text-[10px] font-bold uppercase tracking-tighter">
                {item.name}
              </span>
              {isActive && (
                <div className="absolute -bottom-1 w-1 h-1 rounded-full bg-primary" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
