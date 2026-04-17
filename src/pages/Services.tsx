import { motion } from 'motion/react';
import { 
  Smartphone, 
  Globe, 
  Search, 
  Palette, 
  Megaphone, 
  Gamepad2,
  CheckCircle2,
  ArrowRight,
  Code,
  ShieldCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'software-dev',
    title: 'Software Development',
    description: 'We build robust, scalable, and high-performance software solutions tailored to your business needs. Our team specializes in custom software that drives efficiency and growth.',
    icon: Code,
    accent: 'border-sky-500/20',
    cardGlow: 'hover:shadow-[0_35px_90px_rgba(56,189,248,0.24)]',
    iconBg: 'from-sky-500 to-cyan-500',
    benefits: ['Custom Software', 'Enterprise Solutions', 'Cloud Integration', 'Legacy Migration'],
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Creating modern, responsive, and SEO-friendly websites that deliver exceptional user experiences. From corporate sites to complex web portals, we cover it all.',
    icon: Globe,
    accent: 'border-cyan-500/20',
    cardGlow: 'hover:shadow-[0_35px_90px_rgba(6,182,212,0.24)]',
    iconBg: 'from-cyan-500 to-sky-500',
    benefits: ['Responsive Design', 'E-commerce Solutions', 'CMS Integration', 'Web Portals'],
  },
  {
    id: 'app-dev',
    title: 'App Development',
    description: 'Custom mobile applications for iOS and Android with seamless functionality and intuitive design. We turn your app ideas into reality with cutting-edge mobile tech.',
    icon: Smartphone,
    accent: 'border-violet-500/20',
    cardGlow: 'hover:shadow-[0_35px_90px_rgba(139,92,246,0.24)]',
    iconBg: 'from-violet-500 to-fuchsia-500',
    benefits: ['iOS & Android Apps', 'Cross-Platform Solutions', 'UI/UX Design', 'App Maintenance'],
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting',
    description: 'Expert guidance and strategic planning to help you leverage technology for business success. We help you navigate the digital landscape with confidence.',
    icon: ShieldCheck,
    accent: 'border-amber-500/20',
    cardGlow: 'hover:shadow-[0_35px_90px_rgba(245,158,11,0.24)]',
    iconBg: 'from-amber-500 to-orange-500',
    benefits: ['Digital Strategy', 'Tech Audit', 'Infrastructure Planning', 'Security Consulting'],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Strategic online marketing campaigns to enhance your brand visibility and drive conversions. We help you reach your audience where they are.',
    icon: Megaphone,
    accent: 'border-fuchsia-500/20',
    cardGlow: 'hover:shadow-[0_35px_90px_rgba(236,72,153,0.24)]',
    iconBg: 'from-fuchsia-500 to-pink-500',
    benefits: ['Social Media Marketing', 'PPC Campaigns', 'Content Marketing', 'Email Campaigns'],
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    description: 'Optimizing your digital presence to rank higher on search engines and attract organic traffic. Our data-driven approach ensures long-term visibility.',
    icon: Search,
    accent: 'border-emerald-500/20',
    cardGlow: 'hover:shadow-[0_35px_90px_rgba(16,185,129,0.24)]',
    iconBg: 'from-emerald-500 to-teal-500',
    benefits: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Backlink Building'],
  }
];

export default function Services() {
  return (
    <div className="pb-16">
      {/* Page Header */}
      <section className="py-20 px-6 relative overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-glow-blue opacity-30 -z-10" />
        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white/80 text-xs font-bold uppercase tracking-widest"
          >
            <Code className="w-3.5 h-3.5 text-primary" />
            <span>Our Expertise</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-8xl font-black font-heading tracking-tight"
          >
            Innovative <br />
            <span className="text-gradient">IT Solutions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/40 max-w-2xl mx-auto font-medium"
          >
            Comprehensive IT solutions tailored to meet your business needs and drive digital success.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 px-6 focus:outline-none">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`group rounded-[2.5rem] border ${service.accent} bg-slate-950/80 p-8 shadow-[0_25px_70px_rgba(0,0,0,0.22)] transition duration-500 hover:-translate-y-2 ${service.cardGlow}`}
              >
                <div className={`flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br ${service.iconBg} shadow-inner`}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-950 text-white shadow-lg">
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="mt-8 space-y-6">
                  <div>
                    <p className="text-sm uppercase tracking-[0.4em] text-primary/90">Service</p>
                    <h3 className="mt-4 text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-sm leading-7 text-white/70">{service.description}</p>
                  <div className="grid gap-3">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition group-hover:bg-white/10">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8">
                  <Button
                    asChild
                    size="lg"
                    className="w-full rounded-full bg-primary text-black shadow-[0_20px_60px_rgba(79,70,229,0.24)] transition hover:bg-primary/90"
                  >
                    <Link to="/contact" className="inline-flex items-center justify-center gap-3 text-white">
                      Inquiry Now
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
