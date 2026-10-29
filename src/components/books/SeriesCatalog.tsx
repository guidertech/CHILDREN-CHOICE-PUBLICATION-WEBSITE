'use client';

import { useMemo, useState } from 'react';
import { BookOpen, Download, Search } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { collectionSeries } from '@/data/collectionSeries';

export function SeriesCatalog({ categoryId, categoryTitle }: { categoryId: string; categoryTitle: string }) {
  const [query, setQuery] = useState('');
  const reduceMotion = useReducedMotion();
  const series = useMemo(
    () => collectionSeries.filter((item) => item.categoryId === categoryId && item.title.toLowerCase().includes(query.trim().toLowerCase())),
    [categoryId, query],
  );

  return (
    <>
      <label className="mb-7 flex items-center gap-3 rounded-full border border-[#9ccbe8] bg-[#eef8ff]/90 px-5 py-3.5 text-[#263b62] shadow-[0_8px_24px_-18px_rgba(40,128,184,0.45)] backdrop-blur-xl sm:mb-9">
        <Search size={19} aria-hidden="true" />
        <span className="sr-only">Search series</span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search series"
          className="min-w-0 flex-1 bg-transparent text-sm text-[#263b62] outline-none placeholder:text-[#5b6f91]"
        />
      </label>

      {series.length ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {series.map((item, index) => (
            <motion.article
              key={item.id}
              initial={reduceMotion ? false : { y: 22, opacity: 0, scale: 0.98 }}
              whileInView={reduceMotion ? undefined : { y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ type: 'spring', stiffness: 115, damping: 18, delay: reduceMotion ? 0 : (index % 3) * 0.055 }}
              whileHover={reduceMotion ? undefined : { y: -5, scale: 1.012 }}
              className={`group relative flex ${item.coverPath ? 'min-h-[25rem]' : 'min-h-[17rem]'} flex-col justify-between overflow-hidden rounded-[1.5rem] border border-[#5aa8dc]/80 bg-[linear-gradient(145deg,rgba(218,241,255,0.95),rgba(180,222,247,0.9))] p-6 shadow-[0_20px_44px_-28px_rgba(40,128,184,0.4)] backdrop-blur-2xl transition duration-300 hover:border-[#287fba] hover:shadow-[0_28px_54px_-28px_rgba(40,128,184,0.5)] sm:p-7`}
            >
              <div className="pointer-events-none absolute -right-12 -top-16 size-40 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.72),rgba(139,202,239,0.2)_58%,transparent_72%)] transition-transform duration-700 group-hover:scale-125" aria-hidden="true" />
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" aria-hidden="true" />
              <a
                href={item.orderFormPath ?? `/books/${categoryId}/${item.id}`}
                aria-label={item.orderFormPath ? `Open ${item.title} order form PDF` : `View ${item.title} series`}
                className={`flex flex-1 flex-col rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#287fba]${item.orderFormPath ? ' pb-12' : ''}`}
              >
                <span className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl border border-white/90 bg-white/55 text-[#102653] shadow-sm transition group-hover:rotate-[-5deg] group-hover:border-[#5aa8dc] group-hover:bg-white/80">
                    <BookOpen size={21} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.16em] text-[#263b62]">{String(index + 1).padStart(2, '0')}</span>
                </span>
                {item.coverPath ? (
                  <span className="flex flex-1 items-center justify-center px-3 py-5">
                    <img src={item.coverPath} alt={`${item.title} book cover`} loading="lazy" className="h-[14rem] max-h-full w-auto max-w-full object-contain drop-shadow-[0_16px_18px_rgba(19,52,94,0.22)] transition duration-300 group-hover:-translate-y-1 group-hover:drop-shadow-[0_20px_22px_rgba(19,52,94,0.27)]" />
                  </span>
                ) : item.logoPath ? (
                  <span className="flex flex-1 items-center justify-center px-2 py-4">
                    <img src={item.logoPath} alt={`${item.title} logo`} loading="lazy" className="max-h-32 w-full max-w-[17rem] object-contain" />
                  </span>
                ) : null}
                <span>
                  <span className="mb-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-[#163d83]">{categoryTitle}</span>
                  <span className="flex items-center gap-4 text-xl font-semibold tracking-[-0.035em] text-[#102653]">
                    {item.title}
                  </span>
                </span>
              </a>
              {item.orderFormPath && (
                <a
                  href={item.orderFormPath}
                  download
                  className="absolute bottom-5 left-6 z-10 inline-flex w-fit items-center gap-2 rounded-full border border-[#7bb8df] bg-white/90 px-3.5 py-2 text-xs font-semibold text-[#102653] transition hover:border-[#287fba] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#287fba] sm:left-7"
                >
                  <Download size={14} aria-hidden="true" /> Download order form
                </a>
              )}
            </motion.article>
          ))}
        </div>
      ) : (
        <p className="rounded-2xl border border-dashed border-[#9ccbe8] bg-[#f2f9ff]/80 px-6 py-10 text-center text-sm text-[#263b62]">No series match that search.</p>
      )}
    </>
  );
}
