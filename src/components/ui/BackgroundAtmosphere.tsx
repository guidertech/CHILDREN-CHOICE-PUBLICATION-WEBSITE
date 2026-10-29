'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { BookOpenText, Lightbulb, Sparkles } from 'lucide-react';

export function BackgroundAtmosphere() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-[0.17]"
        style={{
          backgroundImage: 'radial-gradient(rgba(37, 99, 193, 0.2) 0.75px, transparent 0.75px)',
          backgroundSize: '30px 30px',
          maskImage: 'linear-gradient(180deg, black 0%, transparent 88%)',
        }}
      />
      <motion.div
        className="absolute -left-48 top-[8vh] size-[34rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(111, 190, 244, 0.2) 0%, rgba(163, 220, 255, 0.11) 44%, transparent 72%)' }}
        animate={reduceMotion ? undefined : { x: [0, 80, 20, 0], y: [0, 65, 120, 0], scale: [1, 1.08, 0.95, 1] }}
        transition={{ duration: 36, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-52 top-[34vh] size-[42rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(77, 151, 230, 0.18) 0%, rgba(143, 207, 248, 0.1) 46%, transparent 72%)' }}
        animate={reduceMotion ? undefined : { x: [0, -90, -30, 0], y: [0, -75, 55, 0], scale: [1, 0.94, 1.07, 1] }}
        transition={{ duration: 42, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute -bottom-64 left-[28%] size-[38rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(77, 190, 219, 0.15) 0%, rgba(151, 224, 243, 0.09) 48%, transparent 72%)' }}
        animate={reduceMotion ? undefined : { x: [0, 65, -40, 0], y: [0, -55, -110, 0], scale: [1, 1.05, 0.96, 1] }}
        transition={{ duration: 48, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute -right-44 top-[13vh] size-[30rem] rounded-full border-[3rem] border-sky-300/[0.035]"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute -left-28 top-[42vh] size-[19rem] rounded-full border border-sky-400/[0.13] sm:left-[4vw] sm:top-[38vh] sm:size-[24rem]"
        animate={reduceMotion ? undefined : { rotate: -360, scale: [1, 1.035, 1] }}
        transition={{ rotate: { duration: 84, repeat: Infinity, ease: 'linear' }, scale: { duration: 12, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <span className="absolute inset-[12%] rounded-full border border-dashed border-blue-400/[0.14]" />
        <span className="absolute left-[18%] top-[8%] size-2 rounded-full bg-sky-400/50 shadow-[0_0_16px_rgba(56,161,227,0.55)]" />
      </motion.div>
      <motion.div
        className="absolute -right-28 bottom-[7vh] size-[17rem] rounded-full border border-blue-300/[0.15] sm:right-[6vw] sm:bottom-[11vh] sm:size-[23rem]"
        animate={reduceMotion ? undefined : { rotate: 360, scale: [1, 0.96, 1] }}
        transition={{ rotate: { duration: 96, repeat: Infinity, ease: 'linear' }, scale: { duration: 14, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <span className="absolute inset-[14%] rounded-full border border-sky-300/[0.12]" />
        <span className="absolute right-[12%] top-[26%] size-1.5 rounded-full bg-blue-400/45 shadow-[0_0_14px_rgba(59,130,246,0.5)]" />
      </motion.div>
      <motion.div
        className="absolute left-[12%] top-[18vh] hidden items-center justify-center sm:flex"
        animate={reduceMotion ? undefined : { y: [0, -7, 0], rotate: [-4, 4, -4] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="absolute size-12 rounded-full bg-amber-300/25 blur-xl" />
        <Lightbulb className="relative size-6 text-amber-500/30 drop-shadow-[0_0_10px_rgba(251,191,36,0.35)]" strokeWidth={1.5} />
      </motion.div>
      <motion.div
        className="absolute right-[12%] top-[61vh] hidden items-center justify-center sm:flex"
        animate={reduceMotion ? undefined : { y: [0, 8, 0], rotate: [5, -4, 5], opacity: [0.55, 0.9, 0.55] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
      >
        <span className="absolute size-14 rounded-full bg-amber-200/25 blur-2xl" />
        <Lightbulb className="relative size-7 text-amber-500/35 drop-shadow-[0_0_12px_rgba(251,191,36,0.4)]" strokeWidth={1.4} />
      </motion.div>
      <motion.div
        className="absolute bottom-[18vh] left-[21%] hidden text-blue-500/[0.12] sm:block"
        animate={reduceMotion ? undefined : { y: [0, -8, 0], rotate: [-7, 0, -7] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
      >
        <BookOpenText size={34} strokeWidth={1.25} />
      </motion.div>
      <motion.span
        className="absolute left-[34%] top-[28vh] size-2 rounded-full bg-sky-300/55 shadow-[0_0_18px_rgba(56,161,227,0.7)]"
        animate={reduceMotion ? undefined : { y: [0, -18, 3, 0], x: [0, 8, -5, 0], opacity: [0.25, 0.8, 0.35, 0.25], scale: [0.8, 1.25, 0.9, 0.8] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.span
        className="absolute right-[32%] top-[72vh] size-1.5 rounded-full bg-blue-300/60 shadow-[0_0_16px_rgba(59,130,246,0.65)]"
        animate={reduceMotion ? undefined : { y: [0, 12, -10, 0], x: [0, -10, 5, 0], opacity: [0.2, 0.7, 0.3, 0.2], scale: [0.75, 1.2, 0.85, 0.75] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />
      <motion.div
        className="absolute right-[24%] top-[24vh] hidden text-sky-400/20 sm:block"
        animate={reduceMotion ? undefined : { rotate: [0, 18, -12, 0], scale: [0.85, 1.1, 0.9, 0.85], opacity: [0.45, 0.8, 0.45] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      >
        <Sparkles size={20} strokeWidth={1.4} />
      </motion.div>
      <motion.div
        className="absolute bottom-[22vh] right-[20%] hidden text-blue-400/15 sm:block"
        animate={reduceMotion ? undefined : { rotate: [0, -20, 12, 0], scale: [0.9, 1.15, 0.85, 0.9], opacity: [0.35, 0.75, 0.35] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      >
        <Sparkles size={15} strokeWidth={1.5} />
      </motion.div>
      <motion.div
        className="absolute -top-[15%] h-[130%] w-56 -skew-x-12 bg-gradient-to-r from-transparent via-sky-300/[0.045] to-transparent"
        animate={reduceMotion ? undefined : { x: ['-35vw', '115vw'] }}
        transition={{ duration: 38, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
      />
    </div>
  );
}
