import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from '../ui/WhatsAppButton';
import ScrollToTop from '../ui/ScrollToTop';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#030303] text-white selection:bg-primary/30">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}
