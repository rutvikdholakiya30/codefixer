import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

// ટેસ્ટિમોનિયલ ડેટા
const testimonials = [
  { name: "Anush", role: "Air Cables • INDIA", text: "I recently hired to help with project. From the start, they were incredibly efficient and professional. They delivered high-quality work ahead of schedule." },
  { name: "Mylana", role: "Pomorskie • POLAND", text: "Highly recommend Tech Vardha IT Solution! The team is extremely detail-oriented and super skillful. They delivered outstanding results." },
  { name: "Shanthan", role: "Senior Developer • USA", text: "I was particularly impressed with their efficiency, turnaround time, ability to understand the project requirements quickly." },
  { name: "Krunal J.", role: "Xcellence IT • INDIA", text: "Exceptional Team Effort! I'm truly impressed by the dedication, expertise, and professionalism of the team." },
  { name: "Dharmendra", role: "Kara Jewels • INDIA", text: "They consistently demonstrated exceptional skill, dedication, and professionalism. Their expertise is great." },
  { name: "Syed Jazib", role: "Web Lead • UAE", text: "The team is very talented and hardworking. They always deliver more than expected." }
];

// કાર્ડ કમ્પોનન્ટ
const TestimonialCard = ({ item }: { item: typeof testimonials[0] }) => (
  <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[2rem] mb-6 break-inside-avoid shadow-xl hover:border-primary/50 transition-colors group">
    <Quote className="text-primary w-8 h-8 mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
    <p className="text-white/70 text-sm leading-relaxed mb-6">
      {item.text}
    </p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
        {item.name[0]}
      </div>
      <div>
        <h4 className="text-white font-bold text-sm">{item.name}</h4>
        <p className="text-white/30 text-[10px] uppercase tracking-widest">{item.role}</p>
      </div>
    </div>
  </div>
);

// માર્કી કોલમ કમ્પોનન્ટ
const MarqueeColumn = ({ items, duration, reverse = false }: { items: typeof testimonials, duration: number, reverse?: boolean }) => {
  return (
    <div className="relative h-[700px] overflow-hidden">
      <motion.div
        animate={{ y: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
        className="flex flex-col"
      >
        {/* ડુપ્લીકેટ લિસ્ટ ફોર ઇન્ફિનાઇટ લૂપ */}
        {[...items, ...items].map((item, idx) => (
          <TestimonialCard key={idx} item={item} />
        ))}
      </motion.div>
    </div>
  );
};

export default function VerticalTestimonialMarquee() {
  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.3em] text-xs text-primary font-bold mb-4"
          >
            Client Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight"
          >
            Vertical Marquee <span className="text-gradient">Testimonials</span>
          </motion.h2>
        </div>

        {/* Masonry Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {/* Top & Bottom Fade Overlay */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black via-black/50 to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/50 to-transparent z-20 pointer-events-none" />

          {/* ૩ કોલમ અલગ અલગ સ્પીડ અને ડાયરેક્શન સાથે */}
          <MarqueeColumn items={testimonials.slice(0, 3)} duration={25} />
          <MarqueeColumn items={testimonials.slice(1, 4)} duration={35} reverse={true} />
          <MarqueeColumn items={testimonials.slice(2, 5)} duration={30} />
        </div>
      </div>
    </section>
  );
}