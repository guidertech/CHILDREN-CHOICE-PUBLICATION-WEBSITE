'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SiteHeader } from '@/components/navigation/SiteHeader';
import { ImpactStats } from '@/components/sections/ImpactStats';
import { SiteFooter } from '@/components/ui/SiteFooter';

const leaders = [
  {
    name: 'Arun Kumar Agarwal',
    role: 'Founder, Children Choice Publication Pvt. Ltd. and Guider Group',
    initials: 'AA',
    bio: [
      <>In 1997, <strong className="font-semibold text-[#102653]">Mr Arun</strong> founded <strong className="font-semibold text-[#102653]">Children Choice Publication Pvt. Ltd.</strong> with a vision to create high-quality educational resources and inspire young learners through knowledge and creativity. What began as a modest venture with a small team and a strong commitment to excellence has grown into a respected publishing house serving students, teachers, and educational institutions across India.</>,
      <>Under his leadership, the company has built a reputation for producing innovative, curriculum-aligned, learner-friendly books that support academic growth and holistic development. Guided by quality, integrity, and continuous improvement, Children Choice Publication Pvt. Ltd. develops educational content that empowers learners and contributes to the advancement of education.</>,
      <>Today, the company remains dedicated to nurturing young minds and shaping the future of learning while carrying forward the vision and passion with which it was established.</>,
    ],
  },
  {
    name: 'Akshay Agarwal',
    role: 'Founder & Managing Partner, Children Choice Publication Pvt. Ltd.',
    initials: 'AAG',
    bio: [
      <>A management graduate from <strong className="font-semibold text-[#102653]">Manchester Business School</strong>, <strong className="font-semibold text-[#102653]">Mr Akshay Agarwal</strong> brings a fresh vision and global perspective to the publishing industry. Since joining Children Choice Publication Pvt. Ltd., he has introduced innovative ideas in book creation, including modern formats, attractive design approaches, and digital learning opportunities.</>,
      <>Under his leadership, the company has grown, expanded its reach, and strengthened its reputation for quality educational publishing. He continues to encourage creativity, innovation, and growth while guiding the company towards new possibilities in learning and publishing.</>,
    ],
  },
];

const team = [
  { name: 'Arun Sharma', role: 'Sales Lead', initials: 'AS', tone: 'from-sky-100 to-blue-50' },
  { name: 'Pradeep Kaushik', role: 'Sales Lead', initials: 'PK', tone: 'from-blue-100 to-sky-50' },
  { name: 'Manish Agarwal', role: 'Educational Consultant', initials: 'MA', tone: 'from-sky-100 to-blue-50' },
  { name: 'Amit Bansal', role: 'Creative Head', initials: 'AB', tone: 'from-blue-100 to-sky-50' },
];

function PortraitPlaceholder({ initials, variant = 0, name }: { initials: string; variant?: number; name: string }) {
  return (
    <div className="relative mx-auto grid aspect-square w-full max-w-[16rem] place-items-center rounded-[48%] border border-[#b9d9ed] bg-[#eff9ff] shadow-lg shadow-blue-900/[0.08] transition duration-500 group-hover:-translate-y-1 group-hover:rotate-1 group-hover:shadow-xl group-hover:shadow-blue-900/15" role="img" aria-label={`${name} portrait placeholder`}>
      <span className="absolute inset-[8%] rounded-[46%] border-[1.1rem] border-[#c6e4f6] [clip-path:polygon(0_0,100%_0,100%_34%,0_34%,0_66%,100%_66%,100%_100%,0_100%)] transition-transform duration-700 group-hover:rotate-[-5deg]" aria-hidden="true" />
      <span className={`absolute left-[2%] top-[44%] size-10 rounded-full ${variant % 2 ? 'bg-sky-200' : 'bg-[#2e6ad3]'}`} aria-hidden="true" />
      <span className="relative grid size-[62%] place-items-center overflow-hidden rounded-full border-[6px] border-white bg-[radial-gradient(circle_at_35%_25%,#fff_0%,#edf8ff_28%,#d8effe_72%,#b7ddf3_100%)] text-4xl font-semibold tracking-tight text-[#102653] shadow-inner shadow-blue-950/10">
        <span className="absolute inset-x-[27%] top-[16%] aspect-square rounded-full bg-blue-950/10" aria-hidden="true" />
        <span className="absolute inset-x-[17%] bottom-[-14%] h-[48%] rounded-t-[50%] bg-gradient-to-br from-[#91c9ed] to-[#4f9bd1]" aria-hidden="true" />
        <span className="relative z-10 -mt-4">{initials}</span>
      </span>
      <span className="absolute -bottom-2 right-[12%] rounded-full border border-[#b9d9ed] bg-white px-3 py-1 text-[8px] font-bold uppercase tracking-[0.18em] text-[#263b62]">Children Choice Publication Pvt. Ltd.</span>
    </div>
  );
}

export default function AboutPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen overflow-clip bg-white text-[#102653] selection:bg-blue-100 selection:text-[#102653]">
      <SiteHeader />

      <section className="relative flex min-h-[70svh] items-end overflow-hidden bg-[linear-gradient(120deg,#fff_8%,#f5fbff_58%,#eaf6ff)] px-6 pb-16 pt-36 sm:px-10 sm:pb-20 lg:px-20">
        <div className="pointer-events-none absolute -right-16 top-20 size-[28rem] rounded-full border-[3rem] border-sky-100/70" aria-hidden="true" />
        <div className="pointer-events-none absolute right-[12%] top-[34%] size-16 rounded-full bg-sky-200/70 blur-sm" aria-hidden="true" />
        <motion.div initial={reduceMotion ? false : { y: 25, scale: 0.98 }} animate={{ y: 0, scale: 1 }} transition={{ type: 'spring', stiffness: 95, damping: 18 }} className="relative z-10 mx-auto w-full max-w-7xl">
          <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#163d83]"><Sparkles size={14} aria-hidden="true" className="text-[#2e6ad3]" /> Our people, purpose and publishing journey</p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] text-[#102653] sm:text-7xl lg:text-8xl">Learning grows when <span className="text-[#2e6ad3]">we grow together.</span></h1>
          <p className="mt-7 max-w-2xl text-sm leading-7 text-[#30466c] sm:text-base sm:leading-8">Meet the people and purpose behind Children Choice Publication Pvt. Ltd.: a publishing team committed to thoughtful learning resources and the curiosity of every young learner.</p>
          <a href="#leadership" className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#286bd1] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-lg shadow-blue-900/20 transition duration-300 hover:-translate-y-1 hover:bg-[#174da6] hover:shadow-xl">Meet our leadership <ArrowRight size={15} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" /></a>
        </motion.div>
      </section>

      <section id="leadership" className="scroll-mt-24 px-6 py-20 sm:px-10 sm:py-28 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#163d83]">The people behind the pages</p>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#102653] sm:text-6xl">A shared belief in the power of learning.</h2>
          </div>
          <div className="space-y-14 sm:space-y-20">
            {leaders.map((leader, index) => (
              <motion.article key={leader.name} initial={reduceMotion ? false : { y: 30, rotateX: 4 }} whileInView={reduceMotion ? undefined : { y: 0, rotateX: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ type: 'spring', stiffness: 100, damping: 18 }} className={`group grid items-center gap-9 rounded-[2rem] border border-[#5aa8dc]/80 bg-[linear-gradient(145deg,rgba(208,237,253,0.92),rgba(180,222,247,0.88))] p-5 shadow-lg shadow-blue-900/[0.12] backdrop-blur-2xl sm:p-8 lg:gap-14 lg:p-10 ${index % 2 ? 'lg:grid-cols-[1fr_0.48fr]' : 'lg:grid-cols-[0.48fr_1fr]'}`}>
                <div className={`${index % 2 ? 'lg:order-2' : ''}`}><PortraitPlaceholder initials={leader.initials} variant={index} name={leader.name} /></div>
                <div className={`${index % 2 ? 'lg:order-1' : ''}`}>
                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#163d83]">Leadership · 0{index + 1}</p>
                  <h3 className="mt-3 text-3xl font-medium leading-tight tracking-[-0.035em] text-[#102653] sm:text-5xl">{leader.name}</h3>
                  <p className="mt-3 text-lg font-medium leading-snug text-[#173c70] sm:text-2xl">{leader.role}</p>
                  <div className="mt-6 space-y-4 text-sm leading-7 text-[#30466c] sm:text-base sm:leading-8">{leader.bio.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}</div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4faff] px-6 py-20 sm:px-10 sm:py-28 lg:px-20" aria-labelledby="team-title">
        <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center"><p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#163d83]">The people who make it happen</p><h2 id="team-title" className="text-4xl font-semibold tracking-[-0.04em] text-[#102653] sm:text-6xl">Our Team</h2><p className="mt-4 text-sm leading-7 text-[#30466c] sm:text-base">Meet the team bringing ideas, expertise, and care to every learning resource.</p></div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {team.map((person, index) => <motion.article key={person.name} initial={reduceMotion ? false : { y: 28, scale: 0.97 }} whileInView={reduceMotion ? undefined : { y: 0, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ type: 'spring', stiffness: 115, damping: 18, delay: reduceMotion ? 0 : index * 0.08 }} className="group rounded-[1.75rem] border border-[#5aa8dc]/75 bg-[linear-gradient(145deg,rgba(208,237,253,0.88),rgba(180,222,247,0.82))] p-5 text-center shadow-md shadow-blue-900/[0.12] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-[#287fba] hover:bg-[#c8eaff]/95 hover:shadow-xl hover:shadow-blue-900/15 sm:p-6">
              <div className={`mx-auto grid aspect-[0.9] max-w-[15rem] place-items-center overflow-hidden rounded-[46%_46%_42%_42%] bg-gradient-to-br ${person.tone} text-5xl font-semibold tracking-tight text-[#173c70] transition duration-500 group-hover:scale-[1.02] group-hover:rotate-1`} role="img" aria-label={`${person.name} portrait placeholder`}><span className="grid size-28 place-items-center rounded-full border border-white/70 bg-white/50 shadow-inner shadow-white/80">{person.initials}</span></div>
              <h3 className="mt-6 text-xl font-bold text-[#102653]">{person.name}</h3><p className="mt-2 text-sm text-[#30466c]">{person.role}</p>
            </motion.article>)}
          </div>
        </div>
      </section>

      <ImpactStats id="about-numbers" />

      <section className="px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] border border-[#8cc4e6] bg-[linear-gradient(120deg,rgba(226,244,255,0.96),rgba(190,226,248,0.9))] px-7 py-10 text-[#102653] shadow-[0_24px_64px_-44px_rgba(40,128,184,0.4)] backdrop-blur-2xl sm:px-12 sm:py-14 md:flex-row md:items-center md:justify-between">
          <div><p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#163d83]">A world of learning</p><h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Discover the books that help young minds take their next step.</h2></div>
          <a href="/#collections" className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#286bd1] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-900/20 transition duration-300 hover:-translate-y-1 hover:bg-[#174da6] hover:shadow-lg hover:shadow-blue-900/25">Explore our books <ArrowRight size={15} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" /></a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
