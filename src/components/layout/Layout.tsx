import Navbar from './Navbar';
import BottomNav from './BottomNav';
import Footer from './Footer';
import WhatsAppButton from '../ui/WhatsAppButton';
import ScrollToTop from '../ui/ScrollToTop';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#030303] text-white selection:bg-primary/30">
      <Navbar />
      <main className="flex-grow pb-28 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <BottomNav />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}
