'use client';

import { useState } from 'react';
import { ArrowUpRight, BookOpen, BookOpenCheck, BrainCircuit, Building2, ChevronDown, NotebookTabs } from 'lucide-react';
import { navigation } from '@/data/navigation';
import { subjectCollections } from '@/data/collections';

const destinationIcons = [BookOpenCheck, BrainCircuit, NotebookTabs, Building2];

export function NavigationLinks({ mobile = false, onNavigate }: { mobile?: boolean; onNavigate?: () => void }) {
  const [booksOpen, setBooksOpen] = useState(false);
  const categoryLinks = subjectCollections.map((collection) => (
    <a
      key={collection.id}
      href={`/books/${collection.id}`}
      onClick={() => { setBooksOpen(false); onNavigate?.(); }}
      className="flex min-h-11 items-center justify-between rounded-lg px-3 text-sm text-[#17243b] transition-colors hover:bg-[#eaf5ff] hover:text-[#164c9b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
    >
      {collection.title}
      <ArrowUpRight size={14} aria-hidden="true" className="opacity-45" />
    </a>
  ));

  const linkClasses = mobile
    ? 'group flex min-h-12 w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-[15px] font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300'
    : 'group inline-flex h-11 items-center gap-2 whitespace-nowrap rounded-xl border border-white/[0.08] bg-white/[0.045] px-3 text-[10px] font-medium text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 2xl:px-3.5 2xl:text-[11px]';

  return (
    <>
      <div className={`relative ${mobile ? 'w-full' : ''}`}>
        <button
          type="button"
          onClick={() => setBooksOpen((open) => !open)}
          aria-expanded={booksOpen}
          aria-haspopup="true"
          className={`${linkClasses} ${mobile ? 'hover:bg-white/10' : ''}`}
        >
          <BookOpen size={mobile ? 18 : 15} aria-hidden="true" className="shrink-0 text-amber-300" />
          <span>Our Books</span>
          <ChevronDown size={13} aria-hidden="true" className={`ml-0.5 transition-transform duration-200 ${booksOpen ? 'rotate-180' : ''}`} />
        </button>

        {booksOpen && (
          <div className={mobile
            ? 'mt-1 grid gap-1 overflow-hidden border-l border-white/20 pl-3'
            : 'absolute left-1/2 top-[calc(100%+0.5rem)] z-50 grid w-64 -translate-x-1/2 gap-1 rounded-2xl border border-[#d6e5f5] bg-white p-2 shadow-xl'}
          >
            {categoryLinks}
          </div>
        )}
      </div>

      {navigation.map((item, index) => {
        const Icon = destinationIcons[index];
        const content = (
          <>
            {Icon && <Icon size={mobile ? 18 : 14} aria-hidden="true" className="shrink-0 text-amber-300" />}
            <span>{item.label}</span>
            {item.external && <ArrowUpRight size={12} aria-hidden="true" className="ml-0.5 opacity-55 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />}
          </>
        );

        if (!item.href) {
          return (
            <button key={item.label} type="button" disabled title="Website destination not configured" className={`${linkClasses} cursor-not-allowed opacity-45`}>
              {content}
            </button>
          );
        }

        return (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noreferrer noopener' : undefined}
            onClick={onNavigate}
            className={`${linkClasses} ${!mobile && item.href === '/about' ? 'bg-white/[0.1]' : ''}`}
          >
            {content}
          </a>
        );
      })}
    </>
  );
}
