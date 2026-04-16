import { motion } from 'motion/react';
import { 
  Code2, 
  Database, 
  Cloud, 
  Shield, 
  Cpu, 
  Layers,
  Globe,
  Smartphone
} from 'lucide-react';

const techStack = [
  {
    category: 'Frontend',
    icon: Globe,
    techs: ['React.js', 'Next.js', 'Vue.js', 'Angular', 'Tailwind CSS', 'TypeScript']
  },
  {
    category: 'Backend',
    icon: Layers,
    techs: ['Node.js', 'Python', 'Go', 'Java', 'PHP (Laravel)', 'Ruby on Rails']
  },
  {
    category: 'Mobile',
    icon: Smartphone,
    techs: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic']
  },
  {
    category: 'Database',
    icon: Database,
    techs: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase']
  },
  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    techs: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Terraform']
  },
  {
    category: 'Security',
    icon: Shield,
    techs: ['OAuth 2.0', 'JWT', 'SSL/TLS', 'Penetration Testing', 'Firewall Management']
  }
];

export default function Technologies() {
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
            <Cpu className="w-3.5 h-3.5 text-primary" />
            <span>Technologies</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black font-heading tracking-tight"
          >
            Modern <br />
            <span className="text-gradient">Tech Stack</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/40 max-w-2xl mx-auto font-medium"
          >
            We use the latest and most reliable technologies to build high-performance digital products.
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((item, i) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 glass rounded-[2.5rem] border-white/10 hover:border-primary/30 transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-heading">{item.category}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {item.techs.map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
