import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Zap, Star, Lightbulb, Target, Eye, 
  ShieldCheck, HeartHandshake, Rocket, Code2, 
  Globe2, Smartphone, Cloud, Send, CheckCircle2,
  Clock, Award, BarChart
} from 'lucide-react';

// --- DATA ---
const features = [
  { title: "Expert Team", icon: Code2 },
  { title: "Fast Delivery", icon: Zap },
  { title: "Quality First", icon: Star },
  { title: "Innovation", icon: Lightbulb },
];

const stats = [
  { label: "Global Clients", value: "50+", sub: "Worldwide partnerships" },
  { label: "Projects Delivered", value: "100+", sub: "Successful implementations" },
  { label: "Client Satisfaction", value: "99%", sub: "Excellence guaranteed" },
  { label: "Years Excellence", value: "4+", sub: "Industry expertise" },
];

const timeline = [
  { year: "2021", title: "CodeFixer Founded", text: "Started with a vision to provide innovative digital solutions." },
  { year: "2022", title: "Global Expansion", text: "Expanded services to international clients in USA and Europe." },
  { year: "2024", title: "Leading IT Partner", text: "Now a leading team of 30+ experts serving global brands." },
];

const values = [
  { title: "Innovation", text: "Constantly pushing boundaries with cutting-edge solutions.", icon: Lightbulb },
  { title: "Excellence", text: "Delivering exceptional quality in every project we handle.", icon: Zap },
  { title: "Integrity", text: "Building trust through transparent and honest practices.", icon: ShieldCheck },
  { title: "Client Focus", text: "Prioritizing client success in everything we do.", icon: Target },
];

const teamRoles = [
  { title: "Expert Frontend Developers", skills: "React JS, Angular, TypeScript, Tailwind", icon: Smartphone },
  { title: "Backend Specialists", skills: ".NET, Node.js, Laravel, APIs", icon: Code2 },
  { title: "Mobile App Developers", skills: "Flutter, React Native, iOS, Android", icon: Smartphone },
  { title: "Cloud & DevOps Engineers", skills: "AWS, Azure, Docker, CI/CD", icon: Cloud },
];

const advantages = [
  { title: "End-to-End Solutions", text: "From consultation to final deployment and ongoing support.", icon: Code2 },
  { title: "Latest Technologies", text: "We stay at the forefront of technology using modern stacks.", icon: Zap },
  { title: "Scalable Architecture", text: "Solutions built to grow with your business smoothly.", icon: BarChart },
];

// --- COMPONENTS ---
export default function About() {
  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 blur-[120px] rounded-full -z-10" />
        <div className="max-w-7xl mx-auto space-y-8">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
            <Users className="w-3 h-3" /> About CodeFixer
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
            Transforming Ideas <br /> <span className="text-gradient">Into Digital Reality</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-white/40 text-lg font-medium">
            Based in Surat, Gujarat, CodeFixer IT Solutions is a forward-thinking technology company dedicated to transforming businesses.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button className="px-8 py-4 bg-primary rounded-2xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all">Schedule a Meeting</button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all">View Our Work</button>
          </div>
        </div>

        {/* 2. SMALL FEATURES ROW */}
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-24">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
              <div className="p-2 bg-primary/10 rounded-lg text-primary"><f.icon className="w-4 h-4" /></div>
              <span className="text-xs font-bold text-white/60">{f.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ACHIEVEMENTS SECTION */}
      <section className="py-16 md:py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-4">Our Impact</div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter mb-4">Achievements That <br/> Define Excellence</h2>
            <p className="text-white/40 font-medium text-sm sm:text-base">Every number tells a story of innovation and trust.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-white/5 border border-white/5 hover:border-primary/50 transition-all group">
                <h3 className="text-5xl font-black mb-2 group-hover:text-primary transition-colors">{s.value}</h3>
                <h4 className="text-sm font-bold text-white mb-1">{s.label}</h4>
                <p className="text-[10px] text-white/30 uppercase tracking-widest">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TIMELINE SECTION */}
      <section className="py-16 md:py-24 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary"><Clock className="w-5 h-5" /></div>
            <h2 className="text-3xl font-black tracking-tighter text-gradient">Our Journey Since 2021</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="absolute top-5 left-0 w-full h-px bg-white/10 hidden md:block" />
            {timeline.map((t, i) => (
              <div key={i} className="relative space-y-4">
                <div className="w-10 h-10 rounded-full bg-[#050505] border-4 border-primary flex items-center justify-center font-bold text-xs relative z-10">{i+1}</div>
                <h3 className="text-2xl font-black text-primary">{t.year}</h3>
                <h4 className="text-lg font-bold">{t.title}</h4>
                <p className="text-sm text-white/40 leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VALUES SECTION */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-16 justify-center">
            <Award className="text-primary w-6 h-6" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase">Values That Define Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/5 text-center group hover:bg-white/10 transition-all">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary group-hover:scale-110 transition-transform"><v.icon /></div>
                <h3 className="font-bold text-lg mb-3">{v.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MISSION & VISION */}
      <section className="py-16 md:py-24 px-6 focus:outline-none">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] bg-white/5 border border-white/5 relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-[50px] rounded-full group-hover:bg-primary/20 transition-all" />
            <Target className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl md:text-3xl font-black mb-4">Our Mission</h3>
            <p className="text-white/50 leading-relaxed text-sm md:text-base">To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation.</p>
          </div>
          <div className="p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] bg-white/5 border border-white/5 relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 blur-[50px] rounded-full group-hover:bg-blue-500/20 transition-all" />
            <Eye className="w-12 h-12 text-blue-500 mb-6" />
            <h3 className="text-2xl md:text-3xl font-black mb-4">Our Vision</h3>
            <p className="text-white/50 leading-relaxed text-sm md:text-base">To become the leading IT solutions provider globally, known for technical excellence and commitment to client success.</p>
          </div>
        </div>
      </section>

      {/* 7. EXPERટ TEAM SECTION */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-4"><Users className="w-3 h-3"/> Meet Our Team</div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter">Expert Team <br/> <span className="text-gradient">Exceptional Results</span></h2>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamRoles.map((role, i) => (
            <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/5 hover:bg-primary/5 transition-all text-left">
              <role.icon className="text-primary w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold mb-3">{role.title}</h3>
              <p className="text-[10px] text-white/40 uppercase tracking-widest mb-4">Core Skills</p>
              <div className="flex flex-wrap gap-2">
                {role.skills.split(', ').map(s => <span key={s} className="px-2 py-1 rounded-md bg-white/5 text-[9px] font-bold text-white/60">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. ADVANTAGE SECTION */}
      <section className="py-16 md:py-24 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-white/60 text-[10px] font-bold uppercase tracking-widest mb-4"><Zap className="w-3 h-3"/> Why Choose Us</div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter">The CodeFixer <br/> <span className="text-gradient">Advantage</span></h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          {advantages.map((adv, i) => (
            <div key={i} className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary"><adv.icon className="w-6 h-6" /></div>
              <h3 className="text-xl font-bold">{adv.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{adv.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. READY TO TRANSFORM (CTA) */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] bg-gradient-to-br from-primary to-blue-600 text-center space-y-8 relative overflow-hidden shadow-2xl shadow-primary/20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter relative z-10 leading-tight">Ready To Transform <br className="hidden sm:block"/> Your Vision?</h2>
          <p className="text-white/80 max-w-xl mx-auto font-medium relative z-10 text-sm md:text-lg">Let's collaborate to bring your ideas to life with innovative technology solutions that drive real business results.</p>
          <div className="flex justify-center gap-4 relative z-10">
            <button className="px-8 md:px-10 py-4 md:py-5 bg-white text-black rounded-2xl font-black hover:scale-105 transition-all shadow-xl text-sm md:text-base">Start Your Project</button>
          </div>
        </div>
      </section>

      {/* 10. NEWSLETTER / FOOTER TOP */}
      <section className="py-16 md:py-24 px-6 border-t border-white/5">
        <div className="max-w-xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-white/40 text-[10px] font-bold uppercase tracking-widest"><Send className="w-3 h-3"/> Newsletter</div>
          <h2 className="text-3xl sm:text-4xl font-black">Stay Updated with <span className="text-primary">CodeFixer</span></h2>
          <div className="flex flex-col sm:flex-row gap-2 p-2 bg-white/5 border border-white/5 rounded-2xl">
            <input type="email" placeholder="Enter your email address" className="bg-transparent border-none outline-none flex-1 px-4 py-3 text-sm font-medium" />
            <button className="px-6 py-4 sm:py-3 bg-primary rounded-xl font-bold text-sm">Subscribe</button>
          </div>
          <div className="flex justify-center gap-8 text-[10px] font-bold text-white/20 uppercase tracking-widest">
            <span>Weekly Tech Insights</span>
            <span>Exclusive Offers</span>
            <span>No Spam, Unsubscribe anytime</span>
          </div>
        </div>
      </section>

    </div>
  );
}