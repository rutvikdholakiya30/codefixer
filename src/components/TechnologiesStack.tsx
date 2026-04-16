import { motion } from 'motion/react';

const techData = [
  {
    category: "Frontend",
    desc: "Modern user interfaces and interactive web applications.",
    borderColor: "border-t-blue-500",
    techs: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
      { name: "Vue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
    ]
  },
  {
    category: "Backend",
    desc: "Robust server-side solutions and API development.",
    borderColor: "border-t-emerald-500",
    techs: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
      { name: "Shopify", icon: "https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    ]
  },
  {
    category: "Database",
    desc: "Data storage and management solutions.",
    borderColor: "border-t-pink-500",
    techs: [
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "Supabase", icon: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg" },
    ]
  },
  {
    category: "Mobile",
    desc: "Cross-platform and native mobile applications.",
    borderColor: "border-t-orange-500",
    techs: [
      { name: "Android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
      { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
      { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
    ]
  },
  {
    category: "Cloud",
    desc: "Scalable cloud infrastructure and services.",
    borderColor: "border-t-cyan-500",
    techs: [
      { name: "AWS", icon: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
      { name: "DigitalOcean", icon: "https://www.vectorlogo.zone/logos/digitalocean/digitalocean-icon.svg" },
      { name: "GCP", icon: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" },
      { name: "Azure", icon: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" },
    ]
  },
  {
    category: "DevOps",
    desc: "Automation and infrastructure management.",
    borderColor: "border-t-indigo-500",
    techs: [
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "GitHub Actions", icon: "https://www.vectorlogo.zone/logos/github/github-icon.svg" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    ]
  },
  {
    category: "UI/UX",
    desc: "Human-centered interface design, prototyping, and usability testing.",
    borderColor: "border-t-rose-400",
    techs: [
      { name: "Figma", icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" },
      { name: "Adobe XD", icon: "/adobe-xd.svg" },
      { name: "Sketch", icon: "https://www.vectorlogo.zone/logos/sketchapp/sketchapp-icon.svg" },
      { name: "Webflow", icon: "https://www.vectorlogo.zone/logos/webflow/webflow-icon.svg" },
    ]
  },
  {
    category: "Digital Marketing & SEO",
    desc: "Analytics, search optimization, and ad campaigns that drive growth.",
    borderColor: "border-t-yellow-400",
    techs: [
      { name: "Google Analytics", icon: "https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg" },
      { name: "SEO", icon: "https://www.techvardha.com/Images/icons/analytics/search-console.svg" },
      { name: "Meta Ads", icon: "https://www.techvardha.com/Images/icons/tech/meta.svg" },
    ]
  }
];

const TechCard = ({ group }: { group: typeof techData[0] }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`bg-[#0c0c0c] border border-white/5 ${group.borderColor} border-t-4 p-8 rounded-[1.5rem] shadow-2xl hover:bg-[#111] transition-all duration-500`}
  >
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-2xl font-black text-white tracking-tight leading-tight">{group.category}</h3>
      {/* Font size changed to 12px */}
      <span className="bg-white/5 border border-white/10 text-white/40 text-[12px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shrink-0 ml-2">
        {group.techs.length} Techs
      </span>
    </div>
    <p className="text-white/40 text-xs mb-8 font-medium leading-relaxed">
      {group.desc}
    </p>

    <div className="grid grid-cols-3 gap-3">
      {group.techs.map((tech, i) => (
        /* Border Radius set to rounded-lg */
        <div key={i} className="bg-[#151515] border border-white/5 rounded-lg p-4 flex flex-col items-center justify-center gap-3 aspect-square hover:border-white/20 transition-all group/item cursor-pointer">
          <img 
            src={tech.icon} 
            alt={tech.name} 
            className="w-7 h-7 filter grayscale group-hover/item:grayscale-0 group-hover/item:scale-110 transition-all duration-300"
          />
          {/* Font size changed to 12px */}
          <span className="text-[12px] font-bold text-white/20 group-hover/item:text-white uppercase tracking-tighter text-center">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  </motion.div>
);

export default function TechnologiesStack() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter"
          >
            Our <span className="text-gradient">Tech Stack</span>
          </motion.h2>
          <p className="text-white/30 max-w-2xl mx-auto text-lg font-medium">
            We use the most advanced tools to build high-quality products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techData.map((group, i) => (
            <TechCard key={i} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}