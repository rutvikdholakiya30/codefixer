import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Code, 
  Smartphone, 
  Globe, 
  Search, 
  Palette, 
  Megaphone, 
  Gamepad2,
  CheckCircle2,
  Users,
  Zap,
  ShieldCheck,
  Star,
  Sparkles,
  Rocket,
  Calendar,
  Award,
  TrendingUp,
  Brain,
  Bot,
  Cpu,
  LineChart,
  MessageSquare,
  Activity,
  Heart,
  Mail,
  Check,
  Layout,
  MousePointer2,
  Terminal,
  SearchCode,
  Settings,
  Headphones,
  Target,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import VerticalTestimonialMarquee from '../components/ui/VerticalTestimonialMarquee';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    title: 'Software Development',
    description: 'We build robust, scalable, and high-performance software solutions tailored to your business needs.',
    icon: Code,
    color: 'bg-blue-600',
  },
  {
    title: 'Web Development',
    description: 'Creating modern, responsive, and SEO-friendly websites that deliver exceptional user experiences.',
    icon: Globe,
    color: 'bg-cyan-600',
  },
  {
    title: 'App Development',
    description: 'Custom mobile applications for iOS and Android with seamless functionality and intuitive design.',
    icon: Smartphone,
    color: 'bg-indigo-600',
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic online marketing campaigns to enhance your brand visibility and drive conversions.',
    icon: Megaphone,
    color: 'bg-purple-600',
  },
  {
    title: 'SEO Optimization',
    description: 'Optimizing your digital presence to rank higher on search engines and attract organic traffic.',
    icon: Search,
    color: 'bg-pink-600',
  },
  {
    title: 'IT Consulting',
    description: 'Expert guidance and strategic planning to help you leverage technology for business success.',
    icon: ShieldCheck,
    color: 'bg-orange-600',
  },
];

const reasons = [
  {
    title: 'Expert Team',
    description: 'Highly skilled professionals with years of industry experience.',
    icon: Users,
  },
  {
    title: 'Fast Delivery',
    description: 'Efficient workflows ensuring timely completion of your projects.',
    icon: Zap,
  },
  {
    title: 'Secure Solutions',
    description: 'Robust security measures to protect your data and users.',
    icon: ShieldCheck,
  },
  {
    title: '24/7 Support',
    description: 'Dedicated support team ready to assist you whenever needed.',
    icon: CheckCircle2,
  },
];

const aboutFeatures = [
  { icon: Layout, label: 'Modern UI/UX design' },
  { icon: MousePointer2, label: 'Scalable architecture design' },
  { icon: Terminal, label: 'Agile development methodology' },
  { icon: SearchCode, label: 'Quality assurance & testing' },
  { icon: Settings, label: 'End-to-end project management' },
  { icon: Headphones, label: 'Post-deployment support' },
];

const processSteps = [
  { number: '01', title: 'Discovery & Strategy', description: 'We analyze your requirements and craft a comprehensive roadmap for success.', icon: Search },
  { number: '02', title: 'Design & Planning', description: 'Creating intuitive designs and robust architecture for your solution.', icon: Palette },
  { number: '03', title: 'Development & Build', description: 'Building your solution using cutting-edge technologies and best practices.', icon: Code },
  { number: '04', title: 'Testing & Quality', description: 'Rigorous testing ensures the highest standards of performance and reliability.', icon: ShieldCheck },
  { number: '05', title: 'Launch & Deploy', description: 'Seamless deployment with monitoring and optimization for peak performance.', icon: Rocket },
  { number: '06', title: 'Support & Growth', description: 'Ongoing support and enhancements to ensure continued success.', icon: Headphones },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 pt-24 pb-12 md:pt-32 md:pb-20 text-center">
        {/* Background Glows */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute top-[20%] right-[10%] w-[35%] h-[35%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-700" />
          <div className="absolute bottom-[10%] left-[20%] w-[30%] h-[30%] bg-pink-600/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>

        <div className="max-w-5xl mx-auto space-y-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white/80 text-xs font-bold uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Next-Generation IT Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-8xl font-black font-heading leading-[1.1] tracking-tight"
          >
            Transform Your <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Digital Future
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            We craft exceptional web, mobile, and cloud solutions that propel your business into the digital age with cutting-edge technologies and innovative approaches.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-5 pt-4"
          >
            <Button asChild size="lg" className="rounded-full px-10 h-14 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base shadow-xl shadow-indigo-500/20">
              <Link to="/contact">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 mr-1" />
                  Schedule a Meeting
                </span>
                <ArrowRight className="ml-2 w-4 h-4 opacity-50" />
              </Link>
            </Button>

          </motion.div>

          {/* Hero Features */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-20"
          >
            {[
              { icon: Code, label: 'Modern Technologies' },
              { icon: Zap, label: 'Lightning Fast' },
              { icon: Star, label: 'Expert Team' },
              { icon: Rocket, label: 'Scalable Solutions' },
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-all duration-500">
                  <feature.icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">
                  {feature.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 md:py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white/80 text-xs font-bold"
              >
                <Users className="w-3.5 h-3.5 text-primary" />
                <span>About Us</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-7xl font-black font-heading tracking-tight"
              >
                Empowering <br />
                <span className="text-white/90">Your Digital Journey</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-white/40 leading-relaxed"
              >
                We are a team of passionate technologists dedicated to transforming businesses through innovative IT solutions.
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aboutFeatures.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-4 glass rounded-[1.25rem] border-white/5 group hover:border-primary/30 transition-all"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0">
                      <feature.icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-bold text-white/70">{feature.label}</span>
                  </motion.div>
                ))}
              </div>

              <Button asChild size="lg" className="rounded-full px-10 h-14 border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold text-base backdrop-blur-sm">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>

            <div className="grid gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 md:p-10 glass rounded-[2.5rem] md:rounded-[3rem] border-white/5 space-y-6 relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-all" />
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Target className="w-7 h-7 md:w-8 md:h-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-heading uppercase tracking-tighter">Our Mission</h3>
                <p className="text-white/40 text-sm md:text-base leading-relaxed">
                  To deliver innovative IT solutions that transform businesses and drive digital success.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-8 glass rounded-[2rem] md:rounded-[2.5rem] border-white/5 space-y-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/60 group-hover:text-primary transition-colors">
                    <Users className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold font-heading uppercase tracking-tight">Expert Team</h4>
                  <p className="text-white/40 text-[11px] leading-relaxed">
                    Skilled professionals with extensive experience in modern technologies and frameworks.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="p-8 glass rounded-[2rem] md:rounded-[2.5rem] border-white/5 space-y-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/60 group-hover:text-primary transition-colors">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold font-heading uppercase tracking-tight">Innovation</h4>
                  <p className="text-white/40 text-[11px] leading-relaxed">
                    We stay ahead of technology trends to provide cutting-edge solutions for our clients.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white/80 text-xs font-bold"
            >
              <Settings className="w-3.5 h-3.5 text-primary" />
              <span>Our Process</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-black font-heading tracking-tight"
            >
              From Concept to <br />
              <span className="text-white/90">Reality</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/40 max-w-2xl mx-auto font-medium"
            >
              Our proven methodology ensures every project is delivered with precision and excellence.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 glass rounded-[2.5rem] border-white/5 hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 text-6xl font-black text-white/5 group-hover:text-primary/10 transition-colors">
                  {step.number}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white/60 mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <step.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <VerticalTestimonialMarquee />

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto p-12 md:p-20 glass rounded-[4rem] border-white/10 text-center space-y-10 relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-7xl font-black font-heading tracking-tight relative z-10"
          >
            Ready to Transform <br />
            <span className="text-gradient">Your Vision?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/60 max-w-2xl mx-auto font-medium relative z-10"
          >
            Let's collaborate to bring your ideas to life with innovative technology solutions that drive real business results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 relative z-10"
          >
            <Button asChild size="lg" className="rounded-full px-12 h-16 bg-white text-black hover:bg-white/90 font-bold text-lg shadow-2xl shadow-white/10">
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row justify-center gap-8 pt-10 relative z-10"
          >
            <div className="flex items-center justify-center gap-4 group/item">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 group-hover/item:text-primary transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Call Us</p>
                <p className="text-lg font-bold text-white">+91 7600196034 / 8140428671</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 group/item">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 group-hover/item:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Email Us</p>
                <p className="text-lg font-bold text-white">codefixertech@gmail.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white/80 text-xs font-bold"
            >
              <Mail className="w-3.5 h-3.5 text-primary" />
              <span>Newsletter</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black font-heading tracking-tight"
            >
              Stay Updated with <span className="text-primary">CodeFixer</span>
            </motion.h2>
            <p className="text-white/40 max-w-xl mx-auto font-medium">
              Get the latest tech insights, project updates, and exclusive offers delivered to your inbox.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto relative group"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow h-16 rounded-full bg-white/5 border border-white/10 px-8 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all"
              />
              <Button size="lg" className="rounded-full px-10 h-16 bg-primary hover:bg-primary/90 text-white font-bold text-lg">
                Subscribe
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 pt-8">
              {[
                'Weekly tech insights',
                'Exclusive offers',
                'No spam, unsubscribe anytime'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
                  <Check className="w-3 h-3 text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
