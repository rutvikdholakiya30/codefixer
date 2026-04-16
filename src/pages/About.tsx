import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Zap, Star, Lightbulb, Target, Eye, 
  ShieldCheck, HeartHandshake, Rocket, Code2, 
  Globe2, Smartphone, Cloud
} from 'lucide-react';

const stats = [
  { label: "Global Clients", value: "50+", icon: Globe2 },
  { label: "Projects Delivered", value: "100+", icon: Rocket },
  { label: "Client Satisfaction", value: "99%", icon: HeartHandshake },
  { label: "Years Excellence", value: "4+", icon: Star },
];

const timeline = [
  { year: "2021", title: "The Beginning", text: "Tech Vardha was founded with a vision to bridge technology and business success." },
  { year: "2022", title: "Expansion", text: "Expanded our team and services, delivering digital transformation for clients." },
  { year: "2024", title: "Present", text: "Recognized as a leading IT partner, serving 100+ clients globally." },
];

const values = [
  { title: "Innovation", text: "Constantly pushing boundaries with cutting-edge solutions.", icon: Lightbulb },
  { title: "Excellence", text: "Delivering exceptional quality in every project.", icon: Zap },
  { title: "Integrity", text: "Building trust through transparent practices.", icon: ShieldCheck },
  { title: "Client Focus", text: "Prioritizing client success in everything we do.", icon: Target },
];

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-primary selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-glow-blue opacity-20 -z-10" />
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-bold uppercase tracking-widest text-primary"
          >
            About Tech Vardha
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black tracking-tight leading-none"
          >
            Transforming Ideas <br />
            <span className="text-gradient">Into Digital Reality</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-white/50 text-lg md:text-xl font-medium"
          >
            Based in Surat, Gujarat, Tech Vardha IT Solutions is a forward-thinking technology company dedicated to transforming businesses through innovative digital solutions.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <button className="px-8 py-4 bg-primary rounded-2xl font-bold hover:scale-105 transition-all shadow-xl shadow-primary/20">Schedule a Meeting</button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl font-bold hover:bg-white/10 transition-all">View Our Work</button>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Achievements That <br/> Define Excellence</h2>
            <p className="text-white/40">Every number tells a story of innovation and trust.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 text-center hover:border-primary/50 transition-all group">
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="text-4xl font-black mb-2">{stat.value}</h3>
                <p className="text-sm text-white/40 uppercase tracking-widest font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TIMELINE SECTION --- */}
      <section className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-4">Crafting Digital Success <br/> <span className="text-gradient">Since 2021</span></h2>
          </div>
          <div className="relative border-l border-white/10 ml-6 md:ml-0 md:flex md:border-l-0 md:border-t md:justify-between pt-10">
            {timeline.map((item, i) => (
              <div key={i} className="relative pl-8 md:pl-0 md:w-1/4 mb-12 md:mb-0">
                <div className="absolute -left-[9px] md:left-0 md:-top-[9px] w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
                <h3 className="text-2xl font-black text-primary mb-2">{item.year}</h3>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- VALUES SECTION --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">Values That Define Us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                  <val.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">{val.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{val.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MISSION & VISION --- */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="p-12 rounded-[3.5rem] bg-gradient-to-br from-primary/20 to-transparent border border-white/10">
            <Target className="w-12 h-12 text-primary mb-6" />
            <h2 className="text-3xl font-black mb-6">Our Mission</h2>
            <p className="text-white/60 leading-relaxed text-lg">To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation. We bridge the gap between complex technical requirements and user-friendly applications.</p>
          </div>
          <div className="p-12 rounded-[3.5rem] bg-white/5 border border-white/10">
            <Eye className="w-12 h-12 text-primary mb-6" />
            <h2 className="text-3xl font-black mb-6">Our Vision</h2>
            <p className="text-white/60 leading-relaxed text-lg">To become the leading IT solutions provider in Gujarat and beyond, known for our technical excellence, innovative approach, and commitment to client success.</p>
          </div>
        </div>
      </section>

    </div>
  );
}