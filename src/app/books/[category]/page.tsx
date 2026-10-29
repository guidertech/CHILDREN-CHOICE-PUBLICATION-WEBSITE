import type { Metadata } from 'next';
import { ArrowLeft, BookOpenText } from 'lucide-react';
import { notFound } from 'next/navigation';
import { SeriesCatalog } from '@/components/books/SeriesCatalog';
import { SiteHeader } from '@/components/navigation/SiteHeader';
import { SiteFooter } from '@/components/ui/SiteFooter';
import { subjectCollections } from '@/data/collections';

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return subjectCollections.map(({ id }) => ({ category: id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const collection = subjectCollections.find(({ id }) => id === category);
  return { title: collection ? `${collection.title} Series | Children Choice Publication Pvt. Ltd.` : 'Books | Children Choice Publication Pvt. Ltd.' };
}

export default async function CollectionPage({ params }: Props) {
  const { category } = await params;
  const collection = subjectCollections.find(({ id }) => id === category);
  if (!collection) notFound();

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[linear-gradient(180deg,#f3faff_0%,#fff_55%,#f4faff_100%)] px-5 pb-20 pt-28 text-[#102653] sm:px-10 sm:pt-32 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <a href="/#collections" className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#b9d9ed] bg-white/90 px-4 py-2.5 text-xs font-semibold text-[#263b62] transition hover:border-[#5aa8dc] hover:text-[#2e6ad3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#287fba]">
            <ArrowLeft size={15} aria-hidden="true" /> All book collections
          </a>

          <header className="mb-8 max-w-3xl sm:mb-10">
            <p className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#163d83]"><BookOpenText size={14} aria-hidden="true" /> {collection.descriptor}</p>
            <h1 className="text-4xl font-semibold leading-[1.03] tracking-[-0.05em] sm:text-5xl lg:text-6xl">{collection.title}<span className="text-[#2e6ad3]"> series.</span></h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#30466c] sm:text-base">{collection.description} Choose a series to open its order form.</p>
          </header>

          <SeriesCatalog categoryId={collection.id} categoryTitle={collection.title} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
