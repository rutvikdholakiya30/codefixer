import {
  Box,
  Cloud,
  Code2,
  Cpu,
  Database,
  Globe,
  Layers,
  Server,
  Shield,
  Smartphone,
  Sparkles,
  Terminal,
  Zap,
  GitBranch
} from 'lucide-react';

const techCards = [
  {
    category: 'Frontend',
    count: '6 Techs',
    description: 'Modern user interfaces and interactive web applications.',
    border: 'from-cyan-400 to-blue-500',
    icon: Globe,
    techs: [
      { name: 'React', icon: Code2 },
      { name: 'Angular', icon: Shield },
      { name: 'Vue', icon: Layers },
      { name: 'Next.js', icon: Terminal },
      { name: 'WordPress', icon: Box },
      { name: 'Wix', icon: Sparkles }
    ]
  },
  {
    category: 'Backend',
    count: '6 Techs',
    description: 'Robust server-side solutions and API development.',
    border: 'from-violet-500 to-fuchsia-500',
    icon: Server,
    techs: [
      { name: 'Node.js', icon: Cpu },
      { name: '.NET', icon: Terminal },
      { name: 'Laravel', icon: Layers },
      { name: 'Express', icon: Zap },
      { name: 'Django', icon: Database },
      { name: 'Shopify', icon: Box }
    ]
  },
  {
    category: 'Database',
    count: '5 Techs',
    description: 'Data storage and management solutions.',
    border: 'from-emerald-500 to-teal-500',
    icon: Database,
    techs: [
      { name: 'MongoDB', icon: Database },
      { name: 'PostgreSQL', icon: Database },
      { name: 'MS SQL', icon: Database },
      { name: 'Firebase', icon: Zap },
      { name: 'Supabase', icon: Cloud }
    ]
  },
  {
    category: 'Mobile',
    count: '4 Techs',
    description: 'Cross-platform and native mobile applications.',
    border: 'from-orange-500 to-rose-500',
    icon: Smartphone,
    techs: [
      { name: 'Flutter', icon: Smartphone },
      { name: 'React Native', icon: Code2 },
      { name: 'Swift', icon: Sparkles },
      { name: 'Kotlin', icon: Terminal }
    ]
  },
  {
    category: 'Cloud',
    count: '4 Techs',
    description: 'Scalable cloud infrastructure and services.',
    border: 'from-sky-500 to-cyan-500',
    icon: Cloud,
    techs: [
      { name: 'AWS', icon: Cloud },
      { name: 'Azure', icon: Cloud },
      { name: 'GCP', icon: Cloud },
      { name: 'DigitalOcean', icon: Cloud }
    ]
  },
  {
    category: 'DevOps',
    count: '4 Techs',
    description: 'Automation, deployment, and infrastructure management.',
    border: 'from-slate-500 to-slate-400',
    icon: GitBranch,
    techs: [
      { name: 'Docker', icon: Box },
      { name: 'Kubernetes', icon: Layers },
      { name: 'CI/CD', icon: Zap },
      { name: 'GitHub Actions', icon: GitBranch }
    ]
  }
];

export default function TechnologiesStack() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 xl:grid-cols-3 lg:grid-cols-2">
          {techCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.category}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${card.border}`} />
                <div className="relative z-10 flex items-center justify-between gap-4 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-white/10 text-white shadow-lg">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-white/50">{card.category}</p>
                      <p className="mt-2 text-sm leading-6 text-white/90">{card.description}</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/80 backdrop-blur-md">
                    {card.count}
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {card.techs.map((tech) => {
                    const TechIcon = tech.icon;
                    return (
                      <div
                        key={tech.name}
                        className="group flex flex-col items-center justify-center gap-2 rounded-3xl border border-white/10 bg-white/5 px-4 py-5 text-center transition hover:border-white/20 hover:bg-white/10"
                      >
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white/80 transition group-hover:bg-white/15">
                          <TechIcon className="h-5 w-5" />
                        </div>
                        <p className="text-sm font-medium text-white/85">{tech.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
