import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  { name: "Anush", role: "Air Cables • INDIA", text: "I recently hired to help with project. From the start, they were incredibly efficient and professional. They delivered high-quality work ahead of schedule." },
  { name: "Mylana", role: "Pomorskie • POLAND", text: "Highly recommend Tech Vardha IT Solution! The team is extremely detail-oriented and super skillful. They delivered outstanding results." },
  { name: "Shanthan", role: "Senior Developer • USA", text: "I was particularly impressed with their efficiency, turnaround time, ability to understand the project requirements quickly." },
  { name: "Krunal J.", role: "Xcellence IT • INDIA", text: "Exceptional Team Effort! I'm truly impressed by the dedication, expertise, and professionalism of the team." },
  { name: "Dharmendra", role: "Kara Jewels • INDIA", text: "They consistently demonstrated exceptional skill, dedication, and professionalism. Their expertise is great." },
  { name: "Syed Jazib", role: "Web Lead • UAE", text: "The team is very talented and hardworking. They always deliver more than expected." }
];

const TestimonialCard = ({ item }: { item: typeof testimonials[0] }) => (
  <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[2.5rem] mb-6 shadow-xl hover:border-primary/50 transition-all duration-300 group cursor-default">
    <Quote className="text-primary w-8 h-8 mb-4 opacity-40 group-hover:opacity-100 transition-opacity" />
    <p className="text-white/70 text-sm leading-relaxed mb-6 font-medium">
      {item.text}
    </p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
        {item.name[0]}
      </div>
      <div>
        <h4 className="text-white font-bold text-sm">{item.name}</h4>
        <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold">{item.role}</p>
      </div>
    </div>
  </div>
);

const MarqueeColumn = ({ items }: { items: typeof testimonials }) => {
  return (
    <div className="relative h-[600px] overflow-hidden group">
      {/* 
         CSS Marquee Logic: 
         - pause-on-hover logic added via Tailwind class
      */}
      <div className="flex flex-col animate-marquee-vertical group-hover:[animation-play-state:paused]">
        {/* Triple the list to ensure no gaps during hover pause */}
        {[...items, ...items, ...items].map((item, idx) => (
          <TestimonialCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default function VerticalTestimonialMarquee() {
  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.3em] text-xs text-primary font-black"
          >
            Client Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-white tracking-tighter"
          >
            What Our <span className="text-gradient">Clients Say</span>
          </motion.h2>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Top & Bottom Fade Overlays */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black via-black/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />

          {/* All columns moving at the same speed */}
          <MarqueeColumn items={testimonials} />
          <MarqueeColumn items={testimonials} />
          <MarqueeColumn items={testimonials} />
        </div>
      </div>

      {/* Adding Custom Animation CSS */}
      <style>{`
        @keyframes marquee-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-marquee-vertical {
          animation: marquee-vertical 30s linear infinite;
        }
      `}</style>
    </section>
  );
}