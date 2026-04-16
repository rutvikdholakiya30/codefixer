import { motion } from 'motion/react';
import { 
  Code2, 
  Database, 
  Cloud, 
  Shield, 
  Cpu, 
  Layers,
  Globe,
  Smartphone,
  Sparkles,
  ShieldCheck,
  Rocket,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const techStack = [
  {
    category: 'Frontend',
    subtitle: 'Fast, modern user experiences',
    icon: Globe,
    accent: 'from-sky-500 to-cyan-500',
    color: 'text-sky-300',
    techs: ['React.js', 'Next.js', 'Vue.js', 'Angular', 'Tailwind CSS', 'TypeScript']
  },
  {
    category: 'Backend',
    subtitle: 'Robust server-side architecture',
    icon: Layers,
    accent: 'from-violet-500 to-fuchsia-500',
    color: 'text-violet-300',
    techs: ['Node.js', 'Python', 'Go', 'Java', 'Laravel', 'Ruby on Rails']
  },
  {
    category: 'Mobile',
    subtitle: 'Native & cross-platform apps',
    icon: Smartphone,
    accent: 'from-fuchsia-500 to-pink-500',
    color: 'text-fuchsia-300',
    techs: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic']
  },
  {
    category: 'Database',
    subtitle: 'High-speed data storage',
    icon: Database,
    accent: 'from-emerald-500 to-teal-500',
    color: 'text-emerald-300',
    techs: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase']
  },
  {
    category: 'Cloud & DevOps',
    subtitle: 'Scalable deployment pipelines',
    icon: Cloud,
    accent: 'from-cyan-500 to-sky-500',
    color: 'text-cyan-300',
    techs: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Terraform']
  },
  {
    category: 'Security',
    subtitle: 'Trusted protection layers',
    icon: Shield,
    accent: 'from-amber-500 to-orange-500',
    color: 'text-amber-300',
    techs: ['OAuth 2.0', 'JWT', 'SSL/TLS', 'Penetration Testing', 'Firewall Management']
  }
];

const features = [
  {
    title: 'Future-facing Architecture',
    description: 'We design systems built for growth, resilience, and long-term performance.',
    icon: Rocket,
    accent: 'from-violet-500 to-fuchsia-500'
  },
  {
    title: 'Security First',
    description: 'Every solution includes secure-by-design best practices and ongoing protection.',
    icon: ShieldCheck,
    accent: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Performance Optimized',
    description: 'Fast load times, reliable APIs, and scalable infrastructure for every product.',
    icon: Zap,
    accent: 'from-sky-500 to-cyan-500'
  }
];

export default function Technologies() {
  return (
    <div className="pb-20">
      <section className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_30%)]" />
        <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-[#9333ea]/10 blur-3xl" />
        <div className="absolute left-0 bottom-10 h-72 w-72 rounded-full bg-[#14b8a6]/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70"
          >
            <Cpu className="h-4 w-4 text-primary" />
            Technologies
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-8 text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            The Stack Behind <br />
            <span className="text-gradient">High-growth Products</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/70 md:text-lg"
          >
            From frontend experiences to cloud-native infrastructure, we combine the most trusted tools with modern engineering practices to deliver scalable digital platforms.
          </motion.p>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { label: '100+ Tools', value: 'Modern stack coverage' },
              { label: '99% Uptime', value: 'Reliable production systems' },
              { label: '10+ Years', value: 'Engineering excellence' }
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-left"
              >
                <p className="text-sm uppercase tracking-[0.35em] text-primary/90">{stat.label}</p>
                <p className="mt-3 text-2xl font-bold text-white">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-3">
          {techStack.map((item, i) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-[2.5rem] border border-white/10 bg-slate-950/90 p-8 shadow-[0_35px_80px_rgba(0,0,0,0.25)] transition hover:-translate-y-2 hover:border-white/20"
            >
              <div className={`inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br ${item.accent} text-white shadow-lg`}>
                <item.icon className="h-7 w-7" />
              </div>
              <div className="mt-8">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/50">{item.category}</p>
                <h3 className={`mt-4 text-2xl font-bold ${item.color}`}>{item.subtitle}</h3>
              </div>
              <div className="mt-8 grid gap-3">
                {item.techs.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-950/90">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/70"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              Engineered for results
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl"
            >
              Crafted for speed, security, and scale.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 max-w-2xl text-base leading-8 text-white/70"
            >
              Our technology page now reflects the full capability of CodeFixer, with powerful tools, smart services, and modern engineering standards that keep your product ahead of the curve.
            </motion.p>
          </div>

          <div className="grid gap-5">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 + index * 0.05 }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_25px_65px_rgba(0,0,0,0.2)]"
              >
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br ${feature.accent} text-white shadow-lg`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="mx-auto max-w-7xl rounded-[3rem] border border-white/10 bg-white/5 p-10 shadow-[0_30px_90px_rgba(0,0,0,0.28)]">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-primary/90">Ready to build</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
                Build smarter products with the right stack.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">
                Let’s select the perfect technologies for your next digital product — whether it’s a web platform, mobile app, or cloud-native solution.
              </p>
            </div>
            <div className="flex items-center justify-start">
              <Button asChild size="lg" className="rounded-full bg-primary text-black px-10 py-5 font-semibold shadow-[0_30px_80px_rgba(79,70,229,0.28)] hover:bg-primary/90">
                <Link to="/contact">Start a Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
