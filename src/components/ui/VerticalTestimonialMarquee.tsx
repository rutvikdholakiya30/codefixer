import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  { name: "Anush", role: "Air Cables • INDIA", text: "I recently hired to help with project. From the start, they were incredibly efficient and professional. They delivered high-quality work ahead of schedule." },
  { name: "Mylana", role: "Pomorskie • POLAND", text: "Highly recommend Tech Vardha IT Solution! The team is extremely detail-oriented and super skillful. They delivered outstanding results." },
  { name: "Shanthan", role: "Senior Developer • USA", text: "I was particularly impressed with their efficiency, turnaround time, ability to understand the project requirements quickly." },
  { name: "SK Smaira", role: "Dubai City Vision • INDIA", text: "They delivered on time according to our requirement. We have new projects too; we will approach them if they can do on our budget." },
  { name: "Vimal Bansee", role: "Global Healing • MAURITIUS", text: "I am very happy with the work done by Tech Vardha IT Solution. They are very professional and efficient." },
  { name: "Dharmendra Kevadiya", role: "Kiara Fine Jewels • INDIA", text: "Working with Tech Vardha IT Solution has been a fantastic experience. They are highly detail-oriented and proactive." }
];

const TestimonialCard = ({ item }: { item: typeof testimonials[0] }) => (
  <div className="bg-[#121212]/50 backdrop-blur-xl border border-white/5 p-8 rounded-[2.5rem] mb-6 shadow-2xl hover:border-primary/50 transition-all duration-500 group cursor-default">
    <Quote className="text-primary w-10 h-10 mb-6 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
    <p className="text-white/80 text-base leading-relaxed mb-8 font-medium">
      {item.text}
    </p>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-black text-sm">
        {item.name[0]}
      </div>
      <div>
        <h4 className="text-white font-bold text-base">{item.name}</h4>
        <p className="text-white/20 text-[10px] uppercase tracking-[0.2em] font-black">{item.role}</p>
      </div>
    </div>
  </div>
);

const MarqueeColumn = ({ items, direction = 'up' }: { items: typeof testimonials, direction?: 'up' | 'down' }) => {
  return (
    <div className="relative h-[800px] overflow-hidden group/column">
      <div className={`flex flex-col gap-6 ${direction === 'up' ? 'animate-marquee-up' : 'animate-marquee-down'} group-hover/column:[animation-play-state:paused]`}>
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <TestimonialCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default function VerticalTestimonialMarquee() {
  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-white tracking-tighter"
          >
            What Our <span className="text-gradient">Clients Say</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="text-white/40 text-lg font-medium"
          >
            Real stories from businesses we've helped transform.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black via-black/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />

          <MarqueeColumn items={testimonials} direction="up" />
          <MarqueeColumn items={testimonials} direction="down" />
          <MarqueeColumn items={testimonials} direction="up" />
        </div>
      </div>

      <style>{`
        @keyframes marquee-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes marquee-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-marquee-up {
          animation: marquee-up 40s linear infinite;
        }
        .animate-marquee-down {
          animation: marquee-down 40s linear infinite;
        }
      `}</style>
    </section>
  );
}