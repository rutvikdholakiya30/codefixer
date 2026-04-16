import { motion } from 'motion/react';
import { Cpu, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import TechnologiesStack from '../components/TechnologiesStack';

const features = [
  {
    title: 'Future-facing Architecture',
    description: 'We design systems built for growth, resilience, and long-term performance.',
    icon: Sparkles,
    accent: 'from-violet-500 to-fuchsia-500'
  },
  {
    title: 'Security First',
    description: 'Every solution includes secure-by-design best practices and ongoing protection.',
    icon: Sparkles,
    accent: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Performance Optimized',
    description: 'Fast load times, reliable APIs, and scalable infrastructure for every product.',
    icon: Sparkles,
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
            Technology Value
            <br />
            <span className="text-gradient">Delivered in Every Stack</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/70 md:text-lg"
          >
            Explore the exact technology categories we specialize in, with each stack built for performance, reliability, and business growth.
          </motion.p>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { label: '8 Categories', value: 'Comprehensive coverage' },
              { label: '33 Technologies', value: 'Proven tools we use' },
              { label: 'Full support', value: 'From design to deployment' }
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

      <TechnologiesStack />

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
              This page now shows the exact technology lineup used by CodeFixer in every modern digital product we deliver.
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
