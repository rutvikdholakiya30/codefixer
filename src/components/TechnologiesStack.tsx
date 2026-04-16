import React from 'react';
import { motion } from 'framer-motion';

// ટેકનોલોજી ડેટા
const techData = [
  {
    category: "Frontend",
    count: "6 Techs",
    desc: "Modern user interfaces and interactive web applications.",
    borderColor: "border-t-blue-400",
    techs: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
      { name: "Vue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
      { name: "Wix", icon: "https://www.vectorlogo.zone/logos/wix/wix-icon.svg" },
    ]
  },
  {
    category: "Backend",
    count: "6 Techs",
    desc: "Robust server-side solutions and API development.",
    borderColor: "border-t-emerald-400",
    techs: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "Shopify", icon: "https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg" },
    ]
  },
  {
    category: "Database",
    count: "5 Techs",
    desc: "Data storage and management solutions.",
    borderColor: "border-t-pink-400",
    techs: [
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MS SQL", icon: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "Supabase", icon: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg" },
    ]
  }
];

const TechCard = ({ group }: { group: typeof techData[0] }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className={`bg-[#0c0c0c] border border-white/5 ${group.borderColor} border-t-4 p-8 rounded-[2rem] shadow-2xl hover:bg-[#111] transition-all duration-500`}
  >
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-3xl font-black text-white tracking-tight">{group.category}</h3>
      <span className="bg-white/5 border border-white/10 text-white/40 text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">
        {group.count}
      </span>
    </div>
    <p className="text-white/40 text-sm mb-10 font-medium leading-relaxed">
      {group.desc}
    </p>

    <div className="grid grid-cols-3 gap-4">
      {group.techs.map((tech, i) => (
        <div key={i} className="bg-[#151515] border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 aspect-square hover:border-white/20 transition-all group/item cursor-pointer">
          <img 
            src={tech.icon} 
            alt={tech.name} 
            className="w-8 h-8 filter grayscale group-hover/item:grayscale-0 transition-all duration-300"
          />
          <span className="text-[10px] font-bold text-white/30 group-hover/item:text-white uppercase tracking-tighter">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  </motion.div>
);

export default function Technologies() {
  return (
    <section className="bg-black py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter"
          >
            Technologies <span className="text-gradient">We Use</span>
          </motion.h2>
          <p className="text-white/30 max-w-2xl mx-auto text-lg font-medium">
            We leverage the latest technology stacks to build high-performance products.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techData.map((group, i) => (
            <TechCard key={i} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}