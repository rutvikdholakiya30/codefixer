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
    color: 'bg-blue-600',
    benefits: ['Custom Software', 'Enterprise Solutions', 'Cloud Integration', 'Legacy Migration'],
    image: 'https://picsum.photos/seed/software/800/600'
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Creating modern, responsive, and SEO-friendly websites that deliver exceptional user experiences. From corporate sites to complex web portals, we cover it all.',
    icon: Globe,
    color: 'bg-cyan-600',
    benefits: ['Responsive Design', 'E-commerce Solutions', 'CMS Integration', 'Web Portals'],
    image: 'https://picsum.photos/seed/webdev/800/600'
  },
  {
    id: 'app-dev',
    title: 'App Development',
    description: 'Custom mobile applications for iOS and Android with seamless functionality and intuitive design. We turn your app ideas into reality with cutting-edge mobile tech.',
    icon: Smartphone,
    color: 'bg-indigo-600',
    benefits: ['iOS & Android Apps', 'Cross-Platform Solutions', 'UI/UX Design', 'App Maintenance'],
    image: 'https://picsum.photos/seed/appdev/800/600'
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting',
    description: 'Expert guidance and strategic planning to help you leverage technology for business success. We help you navigate the digital landscape with confidence.',
    icon: ShieldCheck,
    color: 'bg-orange-600',
    benefits: ['Digital Strategy', 'Tech Audit', 'Infrastructure Planning', 'Security Consulting'],
    image: 'https://picsum.photos/seed/consulting/800/600'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Strategic online marketing campaigns to enhance your brand visibility and drive conversions. We help you reach your audience where they are.',
    icon: Megaphone,
    color: 'bg-purple-600',
    benefits: ['Social Media Marketing', 'PPC Campaigns', 'Content Marketing', 'Email Campaigns'],
    image: 'https://picsum.photos/seed/marketing/800/600'
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    description: 'Optimizing your digital presence to rank higher on search engines and attract organic traffic. Our data-driven approach ensures long-term visibility.',
    icon: Search,
    color: 'bg-pink-600',
    benefits: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Backlink Building'],
    image: 'https://picsum.photos/seed/seo/800/600'
  }
];

export default function Services() {
  return (
    <div className="pb-24">
      {/* Page Header */}
      <section className="py-32 px-6 relative overflow-hidden text-center">
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
            className="text-5xl md:text-8xl font-black font-heading tracking-tight"
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
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-[0_25px_70px_rgba(0,0,0,0.22)] transition duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_35px_90px_rgba(79,70,229,0.24)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-inner">
                  <div className={`${service.color} flex h-12 w-12 items-center justify-center rounded-3xl text-white shadow-lg`}>
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
                  <Button asChild size="lg" className="w-full rounded-full bg-primary text-black hover:bg-primary/90">
                    <Link to="/contact">Inquiry Now</Link>
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
