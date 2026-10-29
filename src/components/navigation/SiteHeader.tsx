'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, BookOpenText, Lightbulb, Menu, MessageCircle, Search, X } from 'lucide-react';
import { subjectCollections } from '@/data/collections';
import { NavigationLinks } from '@/components/navigation/NavigationLinks';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const reduceMotion = useReducedMotion();

  const filteredCollections = subjectCollections.filter((collection) =>
    `${collection.title} ${collection.descriptor}`.toLowerCase().includes(searchQuery.trim().toLowerCase()),
  );

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/15 bg-[#10244d]/95 shadow-[0_12px_34px_-20px_rgba(8,20,50,0.82)] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.span
          animate={reduceMotion ? undefined : { y: [0, -7, 0], rotate: [-8, -2, -8] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[8%] top-1/2 text-sky-100/20"
        ><BookOpenText size={36} /></motion.span>
        <motion.span
          animate={reduceMotion ? undefined : { y: [0, 5, 0], opacity: [0.5, 0.95, 0.5] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-[24%] top-1 text-amber-300/55"
        ><Lightbulb size={22} /></motion.span>
        <motion.span
          animate={reduceMotion ? undefined : { y: [0, -5, 0], opacity: [0.45, 0.9, 0.45] }}
          transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          className="absolute right-[7%] bottom-1 text-amber-300/50"
        ><Lightbulb size={18} /></motion.span>
      </div>

      <div className="relative mx-auto flex h-[82px] max-w-[1440px] items-center gap-3 px-3 sm:h-[92px] sm:gap-4 sm:px-8 lg:px-14 xl:px-20">
        <a
          href="/#home"
          className="group flex shrink-0 items-center gap-2 rounded-xl py-1 pr-1 text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300 sm:gap-3 sm:pr-2"
          aria-label="Children Choice Publication Pvt. Ltd. home"
        >
          <img src="/company-logo-mark.png" alt="" className="size-10 rounded-full border-2 border-[#ed2638] object-cover shadow-md sm:size-14" />
          <span className="leading-tight">
            <span className="block text-[10px] font-extrabold uppercase tracking-[0.07em] text-white sm:text-sm">Children Choice</span>
            <span className="mt-1 block text-[7px] font-medium uppercase tracking-[0.16em] text-blue-100/70 sm:text-[9px] sm:tracking-[0.21em]">Publication Pvt. Ltd.</span>
          </span>
        </a>

        <nav className="relative ml-auto hidden items-center gap-1 xl:flex 2xl:gap-2" aria-label="Main navigation">
          <NavigationLinks />
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 xl:ml-3">
          <button
            type="button"
            onClick={() => { setSearchOpen((open) => !open); setMenuOpen(false); }}
            aria-label={searchOpen ? 'Close collection search' : 'Search book collections'}
            aria-expanded={searchOpen}
            aria-controls="collection-search-panel"
            className="grid size-10 place-items-center rounded-full border border-white/25 bg-white text-[#10244d] transition-colors hover:bg-sky-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 sm:size-11"
          >
            {searchOpen ? <X size={17} aria-hidden="true" /> : <Search size={17} aria-hidden="true" />}
          </button>
          <a
            href="https://wa.me/917618181877"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact Children Choice Publication on WhatsApp"
            className="group inline-flex h-10 items-center gap-2 rounded-full bg-[#ed1c35] px-3.5 text-[11px] font-semibold text-white shadow-[0_8px_18px_-8px_rgba(237,28,53,0.9)] transition hover:bg-[#d9112a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 sm:h-11 sm:px-4 sm:text-xs"
          >
            <MessageCircle size={14} aria-hidden="true" />
            <span className="hidden sm:inline">Contact Us</span>
            <ArrowRight size={13} aria-hidden="true" className="hidden transition-transform group-hover:translate-x-0.5 sm:block" />
          </a>
          <button
            type="button"
            onClick={() => { setMenuOpen((open) => !open); setSearchOpen(false); }}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-controls="mobile-navigation"
            className="grid size-10 place-items-center rounded-full border border-white/25 bg-white text-[#10244d] transition-colors hover:bg-sky-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 xl:hidden"
          >
            {menuOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
          </button>
        </div>

        <AnimatePresence>
          {searchOpen && (
            <motion.div
              id="collection-search-panel"
              key="collection-search-panel"
              initial={reduceMotion ? false : { opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: reduceMotion ? 0 : 0.18 }}
              className="absolute right-4 top-[calc(100%+0.5rem)] z-50 w-[min(22rem,calc(100vw-2rem))] rounded-2xl border border-[#d6e5f5] bg-white p-4 text-[#17243b] shadow-xl sm:right-8 xl:right-20"
            >
              <label htmlFor="header-collection-search" className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">Find a book collection</label>
              <div className="flex items-center gap-2 rounded-xl border border-[#d6e5f5] bg-[#f2f8ff] px-3">
                <Search size={15} aria-hidden="true" className="shrink-0 text-slate-500" />
                <input id="header-collection-search" type="search" autoFocus value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Hindi, English, lab…" className="h-11 min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-500" />
              </div>
              <div className="mt-2 grid" role="group" aria-label="Book collections">
                {filteredCollections.length ? filteredCollections.map((collection) => (
                  <a key={collection.id} href={`/books/${collection.id}`} onClick={() => setSearchOpen(false)} className="rounded-lg px-3 py-3 text-sm transition-colors hover:bg-[#eaf5ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">{collection.title}</a>
                )) : <p className="px-3 py-3 text-sm text-slate-500">No collections found.</p>}
              </div>
            </motion.div>
          )}
          {menuOpen && (
            <motion.nav
              id="mobile-navigation"
              key="mobile-navigation"
              initial={reduceMotion ? false : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: reduceMotion ? 0 : 0.22, ease: 'easeOut' }}
              className="absolute inset-x-3 top-[calc(100%+0.5rem)] z-50 grid gap-1 rounded-2xl border border-[#d6e5f5] bg-[#10244d] p-3 shadow-xl xl:hidden sm:inset-x-8 sm:p-4"
              aria-label="Mobile navigation"
            >
              <NavigationLinks mobile onNavigate={() => setMenuOpen(false)} />
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
