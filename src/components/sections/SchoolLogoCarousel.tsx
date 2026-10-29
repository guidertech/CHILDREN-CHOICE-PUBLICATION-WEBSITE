'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const schools = [
  { name: 'Saint Xaviers Vision School', logo: '/assets/school-logos/saint-xaviers-vision-school.png' },
  { name: 'ASIE Global School', logo: '/assets/school-logos/asie-global-school.png' },
  { name: 'St Teresa School', logo: '/assets/school-logos/st-teresa-school.png' },
  { name: 'Delhi Public School', logo: '/assets/school-logos/delhi-public-school.png' },
  { name: 'Bal Bharti Senior Secondary School, Gurugram', logo: '/assets/school-logos/bal-bharti-sr-sec-school.png' },
  { name: 'Silicon Academy', logo: '/assets/school-logos/silicon-academy.png' },
];

export function SchoolLogoCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || hovered) return;

    const interval = window.setInterval(() => {
      const viewport = viewportRef.current;
      if (!viewport) return;

      const slides = viewport.querySelectorAll<HTMLElement>('[data-school-slide]');
      if (slides.length < schools.length + 1) return;

      const step = slides[1].offsetLeft - slides[0].offsetLeft;
      const loopPoint = step * schools.length;

      if (viewport.scrollLeft >= loopPoint - 2) {
        viewport.scrollTo({ left: 0, behavior: 'instant' });
      } else {
        viewport.scrollBy({ left: step, behavior: 'smooth' });
      }
    }, 1800);

    return () => window.clearInterval(interval);
  }, [hovered, reduceMotion]);

  const slides = [...schools, ...schools];

  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f5fbff_0%,#fff_100%)] px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24"
      aria-labelledby="school-logos-title"
    >
      <div className="pointer-events-none absolute -right-28 top-0 size-80 rounded-full border-[3rem] border-[#e8f5fd]" aria-hidden="true" />
      <div className="relative isolate mx-auto max-w-7xl rounded-[2rem] border-2 border-[#62b0e6]/90 bg-[linear-gradient(145deg,rgba(255,255,255,0.9),rgba(228,244,255,0.9))] p-5 shadow-[0_30px_90px_-42px_rgba(36,124,190,0.42)] ring-4 ring-[#d8efff]/70 backdrop-blur-xl sm:rounded-[2.5rem] sm:p-8 lg:p-10">
        <motion.div
          className="pointer-events-none absolute -inset-3 -z-10 rounded-[2.7rem] bg-[radial-gradient(ellipse_at_50%_45%,rgba(75,171,233,0.3),rgba(156,218,252,0.15)_48%,transparent_75%)] blur-2xl sm:rounded-[3rem]"
          animate={reduceMotion ? undefined : { opacity: [0.45, 0.9, 0.45], scale: [0.985, 1.015, 0.985] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" aria-hidden="true" />
        <div className="mb-8 flex flex-col justify-between gap-5 sm:mb-10 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 inline-flex items-center gap-2.5 rounded-full border border-[#b9ddf5] bg-white/75 px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.24em] text-[#164b8d] shadow-sm"><span className="h-1.5 w-7 rounded-full bg-[#398fc5]" /> School communities</p>
            <h2 id="school-logos-title" className="max-w-2xl text-4xl font-semibold leading-[1.04] tracking-[-0.05em] text-[#102653] sm:text-5xl">Learning grows in <span className="text-[#2e6ad3]">good company.</span></h2>
          </div>
          <p className="max-w-sm rounded-2xl border border-white/80 bg-white/55 px-4 py-3 text-sm leading-6 text-[#30466c] shadow-sm backdrop-blur-md sm:pb-3">A selection of school identities, moving through the spotlight.</p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocusCapture={() => setHovered(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setHovered(false);
          }}
        >
          <div
            ref={viewportRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="School logos"
          >
            {slides.map((school, index) => (
              <div
                key={`${school.name}-${index}`}
                data-school-slide
                aria-hidden={index >= schools.length}
                className="flex w-[calc((100%_-_3rem)/4)] shrink-0 snap-start items-center justify-center rounded-[1.5rem] border border-[#5aa8dc]/75 bg-[#b9e0f7]/75 p-4 shadow-[0_20px_44px_-28px_rgba(40,128,184,0.34)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#287fba] hover:bg-[#c8eaff]/90 hover:shadow-[0_28px_48px_-28px_rgba(40,128,184,0.42)] sm:w-[calc((100%_-_1rem)/2)] md:w-[calc((100%_-_2rem)/3)] lg:w-[calc((100%_-_3rem)/4)]"
              >
                <img src={school.logo} alt={index < schools.length ? school.name : ''} loading="lazy" className="h-36 w-full object-contain sm:h-40" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
