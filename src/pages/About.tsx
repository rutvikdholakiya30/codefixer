import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Target, Eye, Award, Sparkles, Bolt, ShieldCheck, Users2, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const achievements = [
  { label: 'Global Clients', value: '50+' },
  { label: 'Projects Delivered', value: '100+' },
  { label: 'Client Satisfaction', value: '99%' },
  { label: 'Years Excellence', value: '4+' },
];

const principles = [
  {
    title: 'Innovation',
    description: 'Constantly pushing boundaries with cutting-edge solutions.',
    icon: Sparkles,
  },
  {
    title: 'Excellence',
    description: 'Delivering exceptional quality in every project.',
    icon: ShieldCheck,
  },
  {
    title: 'Integrity',
    description: 'Building trust through transparent practices.',
    icon: Users2,
  },
  {
    title: 'Client Focus',
    description: 'Prioritizing client success in everything we do.',
    icon: Bolt,
  },
];

export default function About() {
  return (
    <div className="pb-24">
      <section className="relative overflow-hidden bg-slate-950/80 py-24 px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_35%)] opacity-80" />
        <div className="absolute right-0 top-10 w-72 h-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-5xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/80"
          >
            <Users2 className="h-4 w-4 text-primary" />
            About CodeFixer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-black tracking-tight text-white sm:text-6xl md:text-[5.5rem]"
          >
            Transforming Ideas <br />
            Into Digital Reality
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-3xl text-base leading-8 text-white/70 md:text-lg"
          >
            Based in Surat, Gujarat, CodeFixer IT Solutions is a forward-thinking technology company dedicated to transforming businesses through innovative digital solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mx-auto flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-black shadow-[0_25px_50px_rgba(79,70,229,0.25)] transition hover:bg-primary/90"
            >
              Schedule a Meeting
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Our Work
            </Link>
          </motion.div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              'Expert Team',
              'Fast Delivery',
              'Quality First',
              'Innovation',
            ].map((label) => (
              <div
                key={label}
                className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-white/80"
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.35em] text-primary"
          >
            Our Impact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl"
          >
            Achievements That Define Excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70"
          >
            Every number tells a story of innovation, dedication, and the trust our clients place in us to deliver extraordinary results.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {achievements.map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center shadow-[0_30px_70px_rgba(0,0,0,0.25)]"
            >
              <p className="text-5xl font-black text-white">{item.value}</p>
              <p className="mt-4 text-base font-semibold text-white/80">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-950/70">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/70"
          >
            <Star className="h-3.5 w-3.5 text-primary" />
            Core Principles
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl"
          >
            Values That Define Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70"
          >
            The foundational principles that shape our work and relationships.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_25px_55px_rgba(0,0,0,0.22)]"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-2">
          <Card className="glass border-none shadow-2xl">
            <CardContent className="p-10">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-white">Our Mission</h3>
              <p className="mt-4 text-base leading-8 text-white/70">
                To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation. We bridge the gap between complex technical requirements and user-friendly applications that deliver real business value.
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-none shadow-2xl">
            <CardContent className="p-10">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-400">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-white">Our Vision</h3>
              <p className="mt-4 text-base leading-8 text-white/70">
                To become the leading IT solutions provider in Gujarat and beyond, known for our technical excellence, innovative approach, and commitment to client success. We aim to be the trusted technology partner for businesses of all sizes.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
