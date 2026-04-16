import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white/40 pt-24 pb-12 px-6 relative overflow-hidden border-t border-white/5">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-glow-blue opacity-10 -z-10" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        {/* Company Info */}
        <div className="space-y-8">
          <Link to="/" className="flex items-center gap-2 group">
            <svg width="32" height="26" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary group-hover:scale-110 transition-transform">
              <path d="M4 4H16M10 4V28" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              <path d="M24 4L32 28L40 4" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-2xl font-black tracking-tighter text-white uppercase">
              Tech <span className="text-primary">Vardha</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed font-medium">
            Innovative IT solutions for your business growth. We specialize in creating high-performance digital products that drive results.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-8 font-heading uppercase tracking-widest text-xs">Company</h4>
          <ul className="space-y-4 text-sm font-medium">
            {['About', 'Services', 'Technologies', 'Contact'].map((item) => (
              <li key={item}>
                <Link to={`/${item.toLowerCase()}`} className="hover:text-primary transition-colors flex items-center gap-2 group">
                  <div className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold mb-8 font-heading uppercase tracking-widest text-xs">Services</h4>
          <ul className="space-y-4 text-sm font-medium">
            {[
              'Artificial Intelligence',
              'Web Development',
              'Mobile Development',
              'Cloud Solutions',
              'DevOps & Automation',
              'Digital Marketing'
            ].map((item) => (
              <li key={item}>
                <Link to="/services" className="hover:text-primary transition-colors flex items-center gap-2 group">
                  <div className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-8 font-heading uppercase tracking-widest text-xs">Contact</h4>
          <ul className="space-y-6 text-sm font-medium">
            <li className="flex gap-4 group items-start">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-white/20 mb-1">Call Us</span>
                <a href="tel:+917600196034" className="text-white group-hover:text-primary transition-colors mb-1">+91 7600196034</a>
                <a href="tel:+918140428671" className="text-white group-hover:text-primary transition-colors">+91 8140428671</a>
              </div>
            </li>
            <li className="flex gap-4 group items-start">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                <Mail className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-white/20 mb-1">Email Us</span>
                <span className="text-white group-hover:text-primary transition-colors">codefixer@gmail.com</span>
              </div>
            </li>
            <li className="flex gap-4 group items-start">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-white/20 mb-1">Visit Us</span>
                <span className="text-white group-hover:text-primary transition-colors leading-relaxed">
                  211 Silver Empire, Uttran, Surat, (Guj) - 394105
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="max-w-7xl mx-auto pt-12 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-medium">&copy; {new Date().getFullYear()} CodeFixer. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="text-xs font-medium hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs font-medium hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}