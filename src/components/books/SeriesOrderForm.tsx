'use client';

import { useState, type FormEvent } from 'react';
import { CheckCircle2, ClipboardList } from 'lucide-react';

export function SeriesOrderForm({ categoryTitle, seriesTitle }: { categoryTitle: string; seriesTitle: string }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  const inputClass = 'mt-2 w-full rounded-xl border border-[#d0e0f1] bg-white px-4 py-3 text-sm text-[#102653] outline-none transition placeholder:text-[#6b7e9d] focus:border-[#5c91dc] focus:ring-2 focus:ring-[#dbeafe]';

  return (
    <section className="rounded-[1.75rem] border border-[#5aa8dc]/80 bg-[linear-gradient(145deg,rgba(208,237,253,0.94),rgba(180,222,247,0.9))] p-5 shadow-[0_20px_60px_-38px_rgba(40,128,184,0.38)] backdrop-blur-2xl sm:p-8">
      <div className="mb-7 flex items-start gap-4 border-b border-white/70 pb-6">
        <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-[#b9d7f2] bg-[#eaf4ff] text-[#102653]"><ClipboardList size={21} aria-hidden="true" /></span>
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#163d83]">Selected series</p>
          <h2 className="mt-1 text-xl font-semibold tracking-[-0.03em] text-[#102653]">{seriesTitle}</h2>
          <p className="mt-1 text-xs text-[#30466c]">{categoryTitle}</p>
        </div>
      </div>

      {submitted ? (
        <div role="status" aria-live="polite" className="rounded-2xl border border-[#c9def3] bg-[#f4f9ff] p-5 text-sm leading-6 text-[#30466c]">
          <p className="flex items-center gap-2 font-semibold text-[#102653]"><CheckCircle2 size={18} className="text-[#2e6ad3]" aria-hidden="true" /> Form details checked</p>
          <p className="mt-2">This is a local form preview. Your details have not been sent or stored.</p>
          <button type="button" onClick={() => setSubmitted(false)} className="mt-4 text-xs font-semibold text-[#2e6ad3] underline underline-offset-4">Edit details</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
          <label className="text-xs font-semibold text-[#263b62]">Full name *
            <input name="name" autoComplete="name" required className={inputClass} placeholder="Your name" />
          </label>
          <label className="text-xs font-semibold text-[#263b62]">School / organization *
            <input name="school" autoComplete="organization" required className={inputClass} placeholder="School or organization" />
          </label>
          <label className="text-xs font-semibold text-[#263b62]">Phone number *
            <input name="phone" type="tel" autoComplete="tel" required pattern="[0-9+() -]{7,20}" className={inputClass} placeholder="Phone number" />
          </label>
          <label className="text-xs font-semibold text-[#263b62]">Email (optional)
            <input name="email" type="email" autoComplete="email" className={inputClass} placeholder="name@example.com" />
          </label>
          <label className="text-xs font-semibold text-[#263b62]">Quantity *
            <input name="quantity" type="number" min="1" step="1" required defaultValue="1" className={inputClass} />
          </label>
          <label className="text-xs font-semibold text-[#263b62] sm:col-span-2">Delivery address *
            <textarea name="address" autoComplete="street-address" required rows={3} className={`${inputClass} resize-y`} placeholder="Enter the delivery address" />
          </label>
          <p className="text-[11px] leading-5 text-[#526987] sm:col-span-2">This order form is not connected to a submission service yet. Submitting will only validate the fields in your browser.</p>
          <button type="submit" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#286bd1] px-6 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:bg-[#174da6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#286bd1] sm:col-span-2 sm:justify-self-start">Review order details</button>
        </form>
      )}
    </section>
  );
}
