import type { Metadata } from 'next';
import { ArrowLeft, BookOpenText } from 'lucide-react';
import { notFound } from 'next/navigation';
import { SeriesOrderForm } from '@/components/books/SeriesOrderForm';
import { SiteHeader } from '@/components/navigation/SiteHeader';
import { subjectCollections } from '@/data/collections';
import { collectionSeries } from '@/data/collectionSeries';

type Props = { params: Promise<{ category: string; series: string }> };

export function generateStaticParams() {
  return collectionSeries.map(({ categoryId, id }) => ({ category: categoryId, series: id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, series } = await params;
  const collection = subjectCollections.find(({ id }) => id === category);
  const item = collectionSeries.find(({ categoryId, id }) => categoryId === category && id === series);
  return { title: collection && item ? `Order ${item.title} | Children Choice Publication Pvt. Ltd.` : 'Book order | Children Choice Publication Pvt. Ltd.' };
}

export default async function SeriesOrderPage({ params }: Props) {
  const { category, series } = await params;
  const collection = subjectCollections.find(({ id }) => id === category);
  const item = collectionSeries.find(({ categoryId, id }) => categoryId === category && id === series);
  if (!collection || !item) notFound();

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[linear-gradient(180deg,#f3faff_0%,#fff_55%,#f4faff_100%)] px-5 pb-20 pt-28 text-[#102653] sm:px-10 sm:pt-32 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <a href={`/books/${collection.id}`} className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#b9d9ed] bg-white/90 px-4 py-2.5 text-xs font-semibold text-[#263b62] transition hover:border-[#5aa8dc] hover:text-[#2e6ad3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#287fba]">
            <ArrowLeft size={15} aria-hidden="true" /> Back to {collection.title} series
          </a>
          <header className="mb-8 max-w-3xl sm:mb-10">
            <p className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#163d83]"><BookOpenText size={14} aria-hidden="true" /> Book series order</p>
            <h1 className="text-4xl font-semibold leading-[1.03] tracking-[-0.05em] sm:text-5xl">Order <span className="text-[#2e6ad3]">{item.title}.</span></h1>
            <p className="mt-4 text-sm leading-6 text-[#30466c] sm:text-base">Fill in the details below for the {collection.title} series.</p>
          </header>
          <SeriesOrderForm categoryTitle={collection.title} seriesTitle={item.title} />
        </div>
      </main>
    </>
  );
}
