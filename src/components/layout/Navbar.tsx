import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Logo from '../ui/Logo';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Technologies', href: '/technologies' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'glass py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Logo className="h-7 sm:h-10" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                'text-xs font-bold px-5 py-2 rounded-full transition-all duration-300',
                location.pathname === link.href 
                  ? 'bg-white/10 text-white shadow-sm' 
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button asChild className="rounded-full px-6 h-10 bg-primary hover:bg-primary/90 text-white font-bold text-xs shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95">
            <Link to="/contact">
              <Sparkles className="w-3.5 h-3.5 mr-2" />
              Get Quote
            </Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-1 sm:p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 glass border-t border-white/10 overflow-hidden md:hidden"
          >
            <div className="p-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    'text-base font-bold py-4 px-4 rounded-2xl transition-all duration-300 flex items-center justify-between group',
                    location.pathname === link.href 
                      ? 'bg-white/5 text-primary' 
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  )}
                >
                  <span>{link.name}</span>
                  {location.pathname === link.href && (
                    <motion.div layoutId="activeNavMobile" className="w-1.5 h-1.5 rounded-full bg-primary shadow-glow-primary" />
                  )}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-white/5">
                <Button asChild className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold text-sm shadow-xl shadow-primary/20">
                  <Link to="/contact">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Get Free Quote
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
