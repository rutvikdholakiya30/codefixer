import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Mylana',
    role: 'Pomeranian Scanty Poland • POLAND',
    content:
      'Highly recommend CodeFixer IT Solutions! They are extremely detail-oriented and super skillful. They delivered everything exactly as promised and even ensured everything was done with precision and professionalism. Thank you for your excellent work!',
    avatar: 'https://picsum.photos/seed/person1/100/100',
    rating: 5,
  },
  {
    name: 'SK Smisra',
    role: 'Supervity.ai • INDIA',
    content:
      'I engaged CodeFixer IT Solutions for both frontend development and technical support (React JS / JavaScript). Their team delivered exceptional results, combining strong technical expertise, clean and scalable code, and clear communication throughout the process. They also handled the external technical interview professionally, providing detailed insights and recommendations. Overall, CodeFixer proved to be reliable, skilled, and highly professional in every aspect of the engagement.',
    avatar: 'https://picsum.photos/seed/person2/100/100',
    rating: 5,
  },
  {
    name: 'Shanthan',
    role: 'Senior Developer • USA',
    content:
      'I recently hired to help with project. From the start, they were incredibly efficient and professional. They delivered high-quality work ahead of schedule and were very responsive to my questions and feedback. I was particularly impressed with their efficiency, turnaround time, and ability to understand the project requirements quickly. I would definitely recommend for anyone looking for a skilled and reliable developer or team.',
    avatar: 'https://picsum.photos/seed/person3/100/100',
    rating: 5,
  },
  {
    name: 'Anush',
    role: 'All Cables • INDIA',
    content:
      'They are wonderful team to work with - especially being available almost most of the time and offering support beyond what I was been requested. Way to go!',
    avatar: 'https://picsum.photos/seed/person4/100/100',
    rating: 5,
  },
  {
    name: 'Krunal J.',
    role: 'Kodiness IT • INDIA',
    content:
      'Exceptional Team Effort! I\'m truly impressed by the dedication, expertise, and professionalism of the team. Their timely delivery, innovative solutions, and clear communication made the project a great success. Grateful to have worked with such a talented and collaborative team. Rating: 5/5',
    avatar: 'https://picsum.photos/seed/person5/100/100',
    rating: 5,
  },
  {
    name: 'Syed Jazib',
    role: 'Microsoft LLC • UAE',
    content:
      'I had the pleasure of working with CodeFixer IT Solutions, an outstanding team. They consistently demonstrated exceptional skill, dedication, and professionalism. Their expertise in both front-end and back-end development, along with their innovative problem-solving abilities, greatly contributed to our project\'s success. I highly recommend CodeFixer IT Solutions for any development.',
    avatar: 'https://picsum.photos/seed/person6/100/100',
    rating: 5,
  },
];

const durations = [20, 26, 22];

export default function VerticalTestimonialMarquee() {
  const [pausedColumns, setPausedColumns] = useState([false, false, false]);

  const columns = useMemo(() => {
    const bucket: Testimonial[][] = [[], [], []];
    testimonials.forEach((item, index) => {
      bucket[index % 3].push(item);
    });
    return bucket;
  }, []);

  const duplicatedColumns = columns.map((column) => [...column, ...column]);

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.3em] text-xs text-primary font-bold"
          >
            Client Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-4 text-4xl md:text-5xl font-black tracking-tight"
          >
            Vertical Marquee Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground"
          >
            Smooth, infinite, and responsive vertical scrolling testimonials with a masonry-style layout.
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {duplicatedColumns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl shadow-black/30"
            >
              <div
                className="relative h-[700px] md:h-[780px] xl:h-[820px]"
                onMouseEnter={() => {
                  setPausedColumns((prev) => prev.map((value, idx) => (idx === columnIndex ? true : value)));
                }}
                onMouseLeave={() => {
                  setPausedColumns((prev) => prev.map((value, idx) => (idx === columnIndex ? false : value)));
                }}
              >
                <div
                  className="absolute inset-0 will-change-transform"
                  style={{
                    animation: pausedColumns[columnIndex]
                      ? 'none'
                      : `marqueeVertical ${durations[columnIndex]}s linear infinite`,
                  }}
                >
                  {column.map((item, index) => (
                    <motion.article
                      key={`${columnIndex}-${index}`}
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: 'spring', stiffness: 240, damping: 24 }}
                      className="group flex flex-col gap-4 rounded-[28px] border border-white/10 bg-slate-950/90 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.32)] transition-transform duration-300 hover:border-primary/40"
                    >
                      <div className="flex items-start gap-4">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="h-14 w-14 rounded-full border border-white/10 object-cover"
                        />
                        <div>
                          <p className="text-base font-semibold text-white">{item.name}</p>
                          <p className="text-sm uppercase tracking-[0.3em] text-white/40">{item.role}</p>
                        </div>
                      </div>
                      <p className="text-sm leading-7 text-white/80">{item.content}</p>
                      <div className="mt-auto flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.32em] text-primary font-semibold">
                        <span>Rating:</span>
                        <span className="flex items-center gap-1 text-yellow-300">
                          {'★'.repeat(item.rating)}
                        </span>
                      </div>
                    </motion.article>
                  ))}
                  {column.map((item, index) => (
                    <motion.article
                      key={`${columnIndex}-${index}-clone`}
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: 'spring', stiffness: 240, damping: 24 }}
                      className="group flex flex-col gap-4 rounded-[28px] border border-white/10 bg-slate-950/90 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.32)] transition-transform duration-300 hover:border-primary/40"
                    >
                      <div className="flex items-start gap-4">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="h-14 w-14 rounded-full border border-white/10 object-cover"
                        />
                        <div>
                          <p className="text-base font-semibold text-white">{item.name}</p>
                          <p className="text-sm uppercase tracking-[0.3em] text-white/40">{item.role}</p>
                        </div>
                      </div>
                      <p className="text-sm leading-7 text-white/80">{item.content}</p>
                      <div className="mt-auto flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.32em] text-primary font-semibold">
                        <span>Rating:</span>
                        <span className="flex items-center gap-1 text-yellow-300">
                          {'★'.repeat(item.rating)}
                        </span>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
