import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = ['All', 'Web', 'App', 'Design', 'Marketing'];

const projects = [
  {
    title: 'Enterprise ERP System',
    category: 'Web',
    image: 'https://picsum.photos/seed/erp/600/400',
    description: 'A comprehensive ERP solution for managing large-scale business operations.'
  },
  {
    title: 'Healthcare Mobile App',
    category: 'App',
    image: 'https://picsum.photos/seed/health/600/400',
    description: 'Patient management and appointment scheduling app for a leading hospital.'
  },
  {
    title: 'Fintech Dashboard',
    category: 'Design',
    image: 'https://picsum.photos/seed/fintech/600/400',
    description: 'Modern and intuitive dashboard design for a financial services platform.'
  },
  {
    title: 'E-commerce Ecosystem',
    category: 'Web',
    image: 'https://picsum.photos/seed/shop/600/400',
    description: 'Scalable e-commerce platform with advanced product management and analytics.'
  },
  {
    title: 'Logistics Tracking App',
    category: 'App',
    image: 'https://picsum.photos/seed/logistics/600/400',
    description: 'Real-time tracking and management app for a global logistics company.'
  },
  {
    title: 'Digital Transformation Strategy',
    category: 'Marketing',
    image: 'https://picsum.photos/seed/strategy/600/400',
    description: 'Comprehensive digital growth strategy for a traditional manufacturing firm.'
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

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
            <ExternalLink className="w-3.5 h-3.5 text-primary" />
            <span>Our Work</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black font-heading tracking-tight"
          >
            Creative <br />
            <span className="text-gradient">Portfolio</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/40 max-w-2xl mx-auto font-medium"
          >
            A showcase of our best work and the digital experiences we've created for our clients.
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-6 sticky top-20 z-30 glass border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                  : 'bg-white/5 hover:bg-white/10 text-muted-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                    <div className="space-y-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="bg-primary text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white font-heading">{project.title}</h3>
                      <p className="text-white/70 text-sm line-clamp-2">
                        {project.description}
                      </p>
                      <div className="pt-4 flex gap-4">
                        <button className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </button>
                        <button className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-colors">
                          <Search className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
