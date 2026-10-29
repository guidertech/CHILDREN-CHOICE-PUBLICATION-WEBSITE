'use client';

import { useEffect, useRef } from 'react';
import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from 'framer-motion';
import { Award, Building2, MapPinned, Presentation, School, UsersRound } from 'lucide-react';

const impactStats = [
  { amount: 14000, suffix: '+', label: 'Schools', description: 'Schools that choose Guider Books.', icon: School },
  { amount: 26, suffix: '+', label: 'States', description: 'Our books are delivered across India.', icon: MapPinned },
  { amount: 1354850, suffix: '', label: 'Students', description: 'Learners supported over the years.', icon: UsersRound },
  { amount: 178500, suffix: '', label: 'Happy teachers', description: 'Teachers supported with learning resources.', icon: Presentation },
  { amount: 850, suffix: '+', label: 'Cities', description: 'A presence across cities throughout India.', icon: Building2 },
  { amount: 28, suffix: '+', label: 'Years of excellence', description: 'Years dedicated to educational publishing.', icon: Award },
];

function AnimatedValue({ amount, suffix, label, delay }: { amount: number; suffix: string; label: string; delay: number }) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.65 });
  const value = useMotionValue(reduceMotion ? amount : 0);
  const formattedValue = useTransform(value, (latest) => `${Math.round(latest).toLocaleString('en-IN')}${suffix}`);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const controls = animate(value, amount, { duration: 1.35, delay, ease: [0.16, 1, 0.3, 1] });
    return controls.stop;
  }, [amount, delay, inView, reduceMotion, value]);

  return <motion.span ref={ref} aria-label={`${amount.toLocaleString('en-IN')}${suffix} ${label}`} className="tabular-nums">{formattedValue}</motion.span>;
}

export function ImpactStats({ id = 'numbers' }: { id?: string }) {
  const reduceMotion = useReducedMotion();
  const featuredStat = impactStats[2];
  const FeaturedIcon = featuredStat.icon;
  const supportingStats = impactStats.filter((_, index) => index !== 2);

  return (
    <section id={id} className="relative overflow-hidden bg-white px-5 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24" aria-labelledby={`${id}-title`}>
      <div className="pointer-events-none absolute -right-28 top-4 size-[30rem] rounded-full border-[3rem] border-[#e9f5ff]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-32 bottom-0 size-[25rem] rounded-full bg-[#eaf6ff] blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        <motion.header
          initial={reduceMotion ? false : { y: 24 }}
          whileInView={reduceMotion ? undefined : { y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ type: 'spring', stiffness: 100, damping: 18 }}
          className="mb-9 flex flex-col justify-between gap-5 border-b border-[#c7e2f5] pb-7 sm:mb-12 sm:flex-row sm:items-end sm:pb-9"
        >
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#163d83]">
            <span className="h-px w-8 bg-[#5ba8dc]" /> Our learning footprint
            </p>
            <h2 id={`${id}-title`} className="text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#102653] sm:text-5xl lg:text-6xl">
              A wider reach. <span className="text-[#2e6ad3]">A brighter future.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#30466c] sm:pb-1 sm:text-base">
            For more than 28 years, our books have reached schools, students, teachers, and communities across India.
          </p>
        </motion.header>

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          <motion.article
            initial={reduceMotion ? false : { y: 28, scale: 0.97 }}
            whileInView={reduceMotion ? undefined : { y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 105, damping: 17 }}
            whileHover={reduceMotion ? undefined : { y: -7, rotateX: 1.5, scale: 1.012 }}
            style={{ transformPerspective: 1000 }}
            className="group relative flex min-h-[24rem] flex-col justify-between overflow-hidden rounded-[2rem] border border-[#5aa8dc]/80 bg-[linear-gradient(145deg,rgba(205,235,252,0.94)_0%,rgba(174,220,246,0.9)_62%,rgba(192,230,250,0.92)_100%)] p-6 shadow-[0_24px_60px_-38px_rgba(40,128,184,0.34)] backdrop-blur-2xl transition-shadow duration-300 hover:shadow-[0_30px_64px_-34px_rgba(40,128,184,0.42)] sm:min-h-[27rem] sm:p-8"
          >
            <div className="pointer-events-none absolute -right-14 -top-14 size-64 rounded-full border border-white/60 transition-transform duration-700 group-hover:scale-110" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-7 -top-7 size-48 rounded-full border border-[#7cbbe2]/45" aria-hidden="true" />
            <div className="relative flex items-center justify-between">
              <span className="grid size-12 place-items-center rounded-2xl border border-white/90 bg-white/75 text-[#102653] shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:rotate-[-6deg]">
                <FeaturedIcon size={22} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#163d83]">Our biggest chapter</span>
            </div>
            <div className="relative mt-10">
              <p className="text-[clamp(3rem,8vw,6rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-[#102653]">
                <AnimatedValue amount={featuredStat.amount} suffix={featuredStat.suffix} label={featuredStat.label} delay={0} />
              </p>
              <div className="mt-5 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-[#102653] sm:text-2xl">{featuredStat.label}</h3>
                  <p className="mt-1.5 max-w-xs text-sm leading-6 text-[#30466c]">{featuredStat.description}</p>
                </div>
                <span className="rounded-full border border-white/90 bg-white/65 px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#30466c]">Across generations</span>
              </div>
            </div>
          </motion.article>

          <div className="border-y border-[#d6eaf7]">
            {supportingStats.map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <motion.article
                  key={stat.label}
                  initial={reduceMotion ? false : { x: 26 }}
                  whileInView={reduceMotion ? undefined : { x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ type: 'spring', stiffness: 115, damping: 18, delay: reduceMotion ? 0 : index * 0.06 }}
                  className="group grid min-h-[5.2rem] grid-cols-[2.75rem_minmax(0,1fr)_auto] items-center gap-3 border-b border-[#e3f0f8] px-2 py-4 transition-colors duration-300 last:border-b-0 hover:bg-[#f1f9ff] sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:gap-4 sm:px-4"
                >
                  <span className="grid size-10 place-items-center rounded-xl border border-[#b9d9ed] bg-[#e8f5fd] text-[#102653] transition duration-300 group-hover:scale-105 group-hover:border-[#5aa8dc] group-hover:bg-[#d6efff]">
                    <StatIcon size={18} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-[#102653] transition-colors group-hover:text-[#2e6ad3] sm:text-base">{stat.label}</h3>
                    <p className="mt-1 text-[10px] leading-4 text-[#30466c] sm:text-xs sm:leading-5">{stat.description}</p>
                  </div>
                  <p className="text-right text-base font-semibold tracking-[-0.04em] text-[#102653] tabular-nums sm:text-xl">
                    <AnimatedValue amount={stat.amount} suffix={stat.suffix} label={stat.label} delay={index * 0.06} />
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
