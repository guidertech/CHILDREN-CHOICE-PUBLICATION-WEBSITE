'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, BookOpenText, FlaskConical, Languages, Sparkles } from 'lucide-react';
import { subjectCollections } from '@/data/collections';
import { associatedCompanies, primaryCompany } from '@/data/associatedCompanies';
import { SiteHeader } from '@/components/navigation/SiteHeader';
import { ImpactStats } from '@/components/sections/ImpactStats';
import { SchoolLogoCarousel } from '@/components/sections/SchoolLogoCarousel';
import { SiteFooter } from '@/components/ui/SiteFooter';

const subjectIcons = [Languages, BookOpenText, Sparkles, FlaskConical];
const heroBooks = [
  { title: 'Brainzo.ai Kids Learning Kit', src: '/assets/covers/brainzo-ai-kids-learning-kit.png', x: 50, y: 16.5, rotation: 0, tiltX: 2, tiltY: 8, depth: 4 },
  { title: 'Footprints Kit', src: '/assets/covers/footprints-kit-educational-box.png', x: 79, y: 33.25, rotation: 14, tiltX: -3, tiltY: -11, depth: 3 },
  { title: 'Eureka Kit', src: '/assets/covers/eureka-kit-bright-learning-adventures.png', x: 79, y: 66.75, rotation: 14, tiltX: 3, tiltY: 10, depth: 2 },
  { title: 'Clario.ai Kit', src: '/assets/covers/clario-ai-kit-fun-learning-adventures.png', x: 50, y: 83.5, rotation: 0, tiltX: -2, tiltY: -8, depth: 4 },
  { title: 'Aryavart Kit', src: '/assets/covers/aryavart-kit-rangin-bal-shiksha.png', x: 21, y: 66.75, rotation: -14, tiltX: 3, tiltY: 11, depth: 2 },
  { title: 'DeepDive Kit', src: '/assets/covers/deepdive-kit-educational-box.png', x: 21, y: 33.25, rotation: -14, tiltX: -3, tiltY: -10, depth: 3 },
];

export default function Home() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen overflow-x-clip bg-white text-[#102653] selection:bg-blue-100 selection:text-[#102653]">
      <SiteHeader />

      <section id="home" className="relative flex min-h-[92svh] items-center overflow-hidden bg-[linear-gradient(112deg,#ffffff_0%,#f8fbff_48%,#e9f4ff_100%)] px-6 pb-20 pt-32 sm:px-10 sm:pb-24 lg:px-20">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[54%] overflow-hidden rounded-l-[42%] bg-[#d7eaff] lg:block" aria-hidden="true">
          <img src="/assets/hero/children-choice-corporate-facade.png" alt="" className="size-full object-cover object-[52%_center] opacity-45 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f8fbff]/80 via-[#5ca5e8]/30 to-[#0759ad]/75" />
          <div className="absolute inset-y-0 left-0 w-[28%] bg-gradient-to-r from-[#eaf5ff] to-transparent" />
        </div>
        <div className="pointer-events-none absolute -right-[13%] top-[3%] hidden aspect-square w-[60%] rounded-full border-[2rem] border-white/25 lg:block" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-4">
          <div className="relative z-10 max-w-4xl">
            <p className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#163d83]">
              <Sparkles size={15} aria-hidden="true" className="text-[#1769d2]" /> A publisher for curious minds
            </p>
            <h1 className="max-w-3xl text-[clamp(3.2rem,8vw,5.75rem)] font-semibold leading-[0.92] tracking-[-0.075em] text-[#102653]">
              <span className="block">Every great</span>
              <span className="block text-[#1769d2]">story begins</span>
              <span className="block text-[#1769d2]">here.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-sm leading-7 text-[#263b62] sm:mt-8 sm:text-base sm:leading-8">
              Children Choice Publication Pvt. Ltd. creates engaging books and learning resources that inspire curiosity, build strong foundations, and make every step of learning a joyful discovery.
            </p>
            <a href="#collections" className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#286bd1] px-7 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-white shadow-[0_14px_28px_-12px_rgba(37,99,193,0.55)] transition duration-300 hover:-translate-y-1 hover:bg-[#174da6] hover:shadow-[0_18px_34px_-12px_rgba(37,99,193,0.68)]">
              Explore our books <ArrowRight size={15} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
          <div className="relative mx-auto mt-4 aspect-square w-full max-w-[34rem] [perspective:1200px] lg:mt-0" role="group" aria-label="A circular display of six early-learning books">
            <div className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle,rgba(133,192,244,0.5),rgba(72,145,215,0.12)_48%,transparent_70%)] blur-2xl" aria-hidden="true" />
            <div className="absolute left-[13%] top-[13%] size-[74%] rounded-full border-[1.25rem] border-white/75 shadow-[0_0_80px_rgba(28,99,173,0.22)]" aria-hidden="true" />
            <div className="absolute left-[25%] top-[25%] size-[50%] rounded-full border border-[#bfddf8]/90" aria-hidden="true" />
            {heroBooks.map((book, index) => (
              <motion.figure
                key={book.src}
                className="absolute aspect-[0.73] w-[24%] -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${book.x}%`, top: `${book.y}%`, zIndex: book.depth, transformStyle: 'preserve-3d', transformPerspective: 1100 }}
                animate={reduceMotion ? undefined : {
                  y: [0, index % 2 ? 9 : -10, 0],
                  rotateX: [book.tiltX, book.tiltX + 2, book.tiltX],
                  rotateY: [book.tiltY, book.tiltY + (index % 2 ? -3 : 3), book.tiltY],
                  rotateZ: [book.rotation, book.rotation + (index % 2 ? -2 : 2), book.rotation],
                }}
                transition={{ duration: 5 + index * 0.45, repeat: Infinity, ease: 'easeInOut', delay: index * 0.18 }}
                whileHover={reduceMotion ? undefined : { scale: 1.07, z: 18 }}
              >
                <img
                  src={book.src}
                  alt={book.title}
                  className="size-full object-cover drop-shadow-[0_22px_18px_rgba(19,58,105,0.34)]"
                  draggable={false}
                />
              </motion.figure>
            ))}
            <motion.span
              animate={reduceMotion ? undefined : { y: [0, -5, 0], rotate: [2, -2, 2] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-1/2 top-1/2 z-10 max-w-[9rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c7e1fa] bg-white/95 px-3 py-2 text-center text-[8px] font-bold uppercase tracking-[0.12em] text-[#123773] shadow-lg shadow-blue-900/10 backdrop-blur sm:max-w-[11rem] sm:px-4 sm:py-2.5 sm:text-[9px]"
            >Learning starts with wonder
            </motion.span>
          </div>
        </div>
        <div className="absolute bottom-7 right-7 hidden text-right text-[9px] uppercase tracking-[0.2em] text-[#244d86] sm:block lg:right-16">
          A world of learning<br />made for every generation
        </div>
      </section>

      <section id="collections" className="relative isolate overflow-hidden bg-[linear-gradient(125deg,#f8fcff_0%,#ffffff_48%,#f2f9ff_100%)] px-5 py-14 sm:px-10 sm:py-16 lg:px-20 lg:py-20" aria-labelledby="collections-title">
        <div className="pointer-events-none absolute -left-20 -top-24 size-64 rounded-full bg-[#dceeff]/65 blur-2xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-24 top-28 size-96 rounded-full border-[2.5rem] border-[#e6f3ff]/80" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1800px] 2xl:max-w-[1920px]">
          <div className="mb-8 grid items-end gap-6 lg:mb-9 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 id="collections-title" className="max-w-3xl text-[clamp(2.6rem,5.6vw,4.6rem)] font-semibold leading-[0.91] tracking-[-0.065em] text-[#102653]">Books for every<br />kind of <span className="text-[#3476ed]">curiosity.</span></h2>
              <p className="mt-4 max-w-xl text-sm leading-5 text-[#3d5680] sm:text-base">Explore language, stories, and hands-on learning<br className="hidden sm:block" /> through our book collections.</p>
            </div>
            <div className="relative flex min-h-32 items-center justify-center sm:min-h-36 lg:min-h-40 lg:justify-between">
              <div className="relative z-10 hidden rotate-[-9deg] text-center text-base font-medium italic leading-[1.15] text-[#3476ed] lg:block xl:text-lg">
                Learning<br />Builds Brighter<br />Tomorrows
                <svg className="absolute -bottom-6 -left-10 h-10 w-48" viewBox="0 0 192 40" fill="none" aria-hidden="true"><path d="M185 3C145 39 58 41 12 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="m13 20 2-9m-2 9 9-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="absolute right-[8%] top-1/2 size-48 -translate-y-1/2 rounded-full bg-sky-200/45 blur-3xl" aria-hidden="true" />
              <motion.img
                src="/assets/hero/students-studying-together.png"
                alt="Two students studying together with books and pencils"
                className="relative z-10 w-52 object-contain drop-shadow-[0_18px_24px_rgba(30,84,139,0.2)] sm:w-64 lg:ml-auto lg:w-[70%] lg:max-w-[21rem]"
                animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                draggable={false}
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {subjectCollections.map((collection, index) => {
              const SubjectIcon = subjectIcons[index];
              const cardTone = 'border-[#8ba9ff] bg-[linear-gradient(145deg,#f4f6ff_0%,#e6ebff_58%,#d8e2ff_100%)] shadow-[0_20px_42px_-24px_rgba(84,111,203,0.42)]';
              const arrowTone = 'bg-[#4778da]';
              const iconTone = 'bg-[#dfe5ff]';
              return (
                <motion.a
                  key={collection.id}
                  href={`/books/${collection.id}`}
                  aria-label={`Browse ${collection.title} series`}
                  initial={reduceMotion ? false : { y: 24, opacity: 0.75 }}
                  whileInView={reduceMotion ? undefined : { y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ type: 'spring', stiffness: 110, damping: 17, delay: reduceMotion ? 0 : index * 0.07 }}
                  whileHover={reduceMotion ? undefined : { y: -6, scale: 1.012 }}
                  className={`group relative flex min-h-[27rem] flex-col overflow-hidden rounded-[1.25rem] border p-4 pb-14 shadow-lg backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4778da] sm:min-h-[28rem] sm:p-5 sm:pb-14 lg:min-h-[29rem] 2xl:min-h-[30rem] 2xl:rounded-[1.6rem] 2xl:p-6 2xl:pb-16 ${cardTone}`}
                >
                  <div className="pointer-events-none absolute -right-8 -top-10 size-28 rounded-full bg-white/45 transition-transform duration-500 group-hover:scale-125" aria-hidden="true" />
                  <div className="pointer-events-none absolute -bottom-10 -left-8 h-20 w-[115%] rounded-[50%] bg-white/35" aria-hidden="true" />
                  <div className="relative flex items-center justify-between">
                    <span className={`grid size-12 place-items-center rounded-full border border-white/75 ${iconTone} text-[#183764] shadow-[0_5px_12px_-7px_rgba(16,48,86,0.45)] transition duration-300 group-hover:rotate-[-6deg] group-hover:scale-105 2xl:size-14`}>
                      <SubjectIcon size={22} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <span className="font-mono text-[8px] font-medium tracking-[0.2em] text-[#23477f]">0{index + 1} / 04</span>
                  </div>

                  <div
                    className="relative mx-auto mt-3 h-[13.5rem] w-full max-w-[17rem] shrink-0 [perspective:1000px] sm:mt-4 sm:h-[14.5rem] lg:h-[15rem] 2xl:h-[16rem]"
                    aria-hidden="true"
                  >
                    <span className="absolute left-1/2 top-1/2 size-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-400/35 shadow-[0_0_24px_rgba(56,161,227,0.12)] sm:size-60">
                      <span className="absolute left-[12%] top-[12%] size-2 rounded-full bg-sky-400/70 shadow-[0_0_12px_rgba(56,161,227,0.65)]" />
                    </span>
                    <span className="absolute bottom-[2.2rem] left-1/2 z-[2] h-[1.1rem] w-[14rem] -translate-x-1/2 rounded-[50%] border border-white/90 bg-gradient-to-b from-white via-[#f6faff] to-[#dce8fa] shadow-[0_9px_14px_-8px_rgba(37,74,129,0.42)] sm:w-[15rem]" />
                    {collection.coverPreviews.map((book, seriesIndex) => {
                      const rotateY = seriesIndex === 0 ? -5 : seriesIndex === 2 ? 5 : 0;
                      return (
                        <div
                          key={`${collection.id}-${book.title}`}
                          style={{ left: `calc(50% - 6.8rem + ${seriesIndex * 4.1}rem)`, bottom: '2.65rem', zIndex: seriesIndex === 1 ? 4 : 3, transform: `rotateY(${rotateY}deg)`, transformStyle: 'preserve-3d' }}
                          className="absolute h-[6.4rem] w-[4.5rem] drop-shadow-[0_12px_12px_rgba(34,67,112,0.28)] transition-[z-index] hover:z-30 sm:h-[6.8rem] sm:w-[4.8rem] lg:h-[7.2rem] lg:w-[5.1rem] 2xl:h-[7.6rem] 2xl:w-[5.4rem]"
                        >
                          <motion.div
                            className="relative size-full"
                            style={{ transformStyle: 'preserve-3d' }}
                            whileHover={reduceMotion ? undefined : { y: -12, z: 30, scale: 1.1, rotateY: rotateY * 0.55 }}
                            transition={{ type: 'spring', stiffness: 260, damping: 18, mass: 0.7 }}
                          >
                            <img src={book.image} alt="" className="relative size-full rounded-sm object-cover drop-shadow-[0_8px_10px_rgba(29,55,99,0.12)]" draggable={false} />
                          </motion.div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="relative z-10 mt-auto w-full pt-2">
                    <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#193b6c] 2xl:text-[10px]">{collection.descriptor}</p>
                    <h3 className="mt-2 text-[1.45rem] font-semibold leading-[1.05] tracking-[-0.045em] text-[#102653] sm:text-[1.6rem] 2xl:text-[1.9rem]">{collection.title}</h3>
                    <p className="mt-3 text-xs leading-[1.5] text-[#294873] sm:text-[13px] 2xl:mt-4 2xl:text-sm">{collection.description}</p>
                  </div>

                  <span className={`absolute bottom-3 right-3 z-20 grid size-9 place-items-center rounded-full text-white shadow-lg shadow-blue-900/20 transition duration-300 group-hover:translate-x-1 ${arrowTone}`} aria-hidden="true"><ArrowRight size={19} strokeWidth={1.8} /></span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      <SchoolLogoCarousel />

      <section id="about" className="relative isolate overflow-hidden bg-[linear-gradient(145deg,#f8fcff_0%,#edf8ff_52%,#e5f4ff_100%)] px-6 py-20 sm:px-10 sm:py-24 lg:px-20 lg:py-28" aria-labelledby="about-title">
        <div className="pointer-events-none absolute -left-36 top-20 size-[28rem] rounded-full border-[3rem] border-white/80" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-32 bottom-0 size-[26rem] rounded-full bg-[#bfe5fb]/65 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute left-[38%] top-1/2 size-[34rem] -translate-y-1/2 rounded-full bg-white/55 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <header className="mb-8 max-w-3xl sm:mb-12">
            <p className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#163d83]"><span className="h-px w-8 bg-[#75a9e5]" /> About the publisher</p>
            <h2 id="about-title" className="text-4xl font-semibold leading-[1.03] tracking-[-0.05em] text-[#102653] sm:text-5xl lg:text-6xl">Children Choice Publication Pvt. Ltd.<span className="text-[#2e6ad3]"> &amp; associated ventures.</span></h2>
          </header>

          <div className="grid items-stretch gap-5 lg:grid-cols-[0.78fr_1.62fr] lg:gap-6">
            <motion.article
              initial={reduceMotion ? false : { y: 24, rotateY: -4 }}
              whileInView={reduceMotion ? undefined : { y: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: 'spring', stiffness: 100, damping: 18 }}
              whileHover={reduceMotion ? undefined : { y: -6, rotateY: 2 }}
              style={{ transformPerspective: 1100 }}
              className="group relative flex min-h-[30rem] flex-col items-center justify-center gap-5 overflow-hidden rounded-[1.75rem] border border-[#4aa7e4] bg-[linear-gradient(145deg,rgba(188,228,249,0.96),rgba(164,215,243,0.92))] p-5 text-center shadow-[0_24px_60px_-32px_rgba(54,151,210,0.48)] backdrop-blur-2xl transition duration-300 hover:border-[#278ccf] hover:shadow-[0_30px_66px_-30px_rgba(54,151,210,0.6)] sm:min-h-[34rem] sm:p-6"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full border-[1.75rem] border-white/50 transition-transform duration-700 group-hover:scale-110" aria-hidden="true" />
              <div className="pointer-events-none absolute -bottom-24 -left-20 size-72 rounded-full border border-white/40" aria-hidden="true" />
              <img src={primaryCompany.logoPath} alt={primaryCompany.name} className="relative z-10 h-auto w-full max-w-[22rem] object-contain drop-shadow-[0_14px_20px_rgba(30,85,130,0.14)]" loading="lazy" />
            </motion.article>

            <div>
              <div className="mb-4 flex items-center gap-4 px-1">
                <h3 className="text-sm font-semibold text-[#263b62] sm:text-base">Our family of companies</h3>
              </div>
              <div className="grid grid-cols-2 gap-3 xl:grid-cols-3">
                {associatedCompanies.map((companyItem, index) => {
                  const cardClassName = 'group relative flex min-h-36 flex-col items-center justify-center gap-1 overflow-hidden rounded-[1.25rem] border border-[#4aa7e4] bg-[linear-gradient(145deg,rgba(188,228,249,0.96),rgba(164,215,243,0.92))] p-3 shadow-[0_18px_38px_-22px_rgba(54,151,210,0.48)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-[#278ccf] hover:shadow-[0_24px_42px_-20px_rgba(54,151,210,0.62)] last:col-span-2 last:mx-auto last:w-full last:max-w-sm sm:min-h-40 sm:p-4 xl:last:col-span-1 xl:last:col-start-2 xl:last:max-w-none';
                  const content = (
                    <div className="relative z-10 flex h-[6.15rem] w-full max-w-[15rem] items-center justify-center px-2.5 py-2 sm:h-[6.9rem]">
                      <img src={companyItem.logoPath} alt={companyItem.name} loading="lazy" className="max-h-full w-full object-contain drop-shadow-[0_8px_12px_rgba(30,85,130,0.12)] transition-transform duration-500 group-hover:scale-[1.025]" />
                    </div>
                  );

                  return (
                    <motion.div
                      key={companyItem.name}
                      initial={reduceMotion ? false : { y: 18, opacity: 0 }}
                      whileInView={reduceMotion ? undefined : { y: 0, opacity: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ type: 'spring', stiffness: 120, damping: 18, delay: reduceMotion ? 0 : index * 0.035 }}
                      className={cardClassName}
                    >
                      {content}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImpactStats />

      <SiteFooter />

    </main>
  );
}
