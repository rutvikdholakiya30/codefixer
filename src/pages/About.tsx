import { motion } from 'motion/react';
import { Target, Eye, Award, Users2, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const team = [
  {
    name: 'Paras Bhatt',
    role: 'CEO & Founder',
    image: 'https://picsum.photos/seed/ceo/400/500',
  },
  {
    name: 'Sarah Johnson',
    role: 'Lead Developer',
    image: 'https://picsum.photos/seed/dev/400/500',
  },
  {
    name: 'Michael Chen',
    role: 'Creative Director',
    image: 'https://picsum.photos/seed/design/400/500',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Marketing Head',
    image: 'https://picsum.photos/seed/marketing/400/500',
  },
];

const achievements = [
  { label: 'Projects Completed', value: '500+' },
  { label: 'Happy Clients', value: '250+' },
  { label: 'Team Members', value: '50+' },
  { label: 'Years Experience', value: '10+' },
];

export default function About() {
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
            <Users2 className="w-3.5 h-3.5 text-primary" />
            <span>About CodeFixer</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black font-heading tracking-tight"
          >
            Empowering <br />
            <span className="text-gradient">Digital Journey</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/40 max-w-2xl mx-auto font-medium"
          >
            We are a team of passionate technologists dedicated to transforming businesses through innovative IT solutions.
          </motion.p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold font-heading">Our Journey of Innovation</h2>
              Founded in 2014, CodeFixer started with a simple mission: to help businesses navigate the complex digital landscape with ease. Over the years, we have grown into a full-service IT agency, serving clients across the globe.
            <p className="text-muted-foreground leading-relaxed">
              We believe in the power of technology to transform industries and improve lives. Our approach combines technical excellence with creative thinking to deliver results that exceed expectations.
            </p>
            <div className="space-y-4">
              {['Customer Centric Approach', 'Innovation at Core', 'Quality Guaranteed', 'Transparent Communication'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://picsum.photos/seed/about/800/600" 
              alt="Team working" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl shadow-2xl hidden md:block border-primary/20">
              <Award className="w-12 h-12 text-primary mb-4" />
              <p className="text-xl font-bold">Award Winning Agency</p>
              <p className="text-sm text-muted-foreground">Recognized for excellence in IT</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-glow-purple opacity-20 -z-10" />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <Card className="glass border-none shadow-xl overflow-hidden group">
            <CardContent className="p-12 space-y-6 relative">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Target className="w-32 h-32" />
              </div>
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold font-heading">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses through innovative technology solutions that drive growth, efficiency, and competitive advantage in an ever-evolving digital world.
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-none shadow-xl overflow-hidden group">
            <CardContent className="p-12 space-y-6 relative">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Eye className="w-32 h-32" />
              </div>
              <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold font-heading">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the global leader in digital transformation, recognized for our creativity, technical prowess, and unwavering commitment to our clients' success.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  );
}
