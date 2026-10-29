import { ArrowRight, Leaf } from 'lucide-react';

const whatsappUrl = 'https://wa.me/917618181877';

export function SiteFooter() {
  return (
    <footer id="site-footer" className="relative isolate flex min-h-[24rem] flex-col justify-center overflow-hidden border-t border-[#c9e2f3] bg-[#f1f9ff] px-5 py-12 text-[#172b59] sm:min-h-[25rem] sm:px-10 sm:py-14 lg:min-h-[26rem] lg:px-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_12%_80%,rgba(210,235,248,0.38),transparent_22%),radial-gradient(ellipse_at_82%_15%,rgba(183,222,246,0.4),transparent_31%),linear-gradient(110deg,#f4faff_0%,#ffffff_55%,#eaf6ff_100%)]" aria-hidden="true" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-36 w-28 text-[#8caf50]/65 sm:h-44 sm:w-36" aria-hidden="true">
        <span className="absolute bottom-[-1.5rem] left-8 h-32 w-1 rotate-[12deg] rounded-full bg-[#8caf50]/50" />
        <Leaf className="absolute bottom-5 left-1 size-10 -rotate-[35deg] fill-[#a8c76f]/35" strokeWidth={1.5} />
        <Leaf className="absolute bottom-12 left-11 size-9 rotate-[24deg] fill-[#a8c76f]/35" strokeWidth={1.5} />
        <Leaf className="absolute bottom-20 left-3 size-8 -rotate-[18deg] fill-[#a8c76f]/35" strokeWidth={1.5} />
        <Leaf className="absolute bottom-28 left-12 size-7 rotate-[24deg] fill-[#a8c76f]/35" strokeWidth={1.5} />
      </div>

      <div className="pointer-events-none absolute -right-3 -top-2 hidden h-36 w-44 sm:block" aria-hidden="true">
        <div className="absolute right-5 top-2 h-7 w-24 rotate-[-8deg] rounded-md border-b-[5px] border-[#337bb3] bg-[#83c7f0] shadow-md">
          <span className="absolute inset-y-0 left-3 w-1 bg-white/65" />
        </div>
        <div className="absolute right-1 top-9 h-7 w-32 rotate-[5deg] rounded-md border-b-[5px] border-[#286da2] bg-[#6fb6e4] shadow-md">
          <span className="absolute inset-y-0 left-4 w-1 bg-white/65" />
        </div>
        <div className="absolute right-7 top-[4.25rem] h-7 w-28 rotate-[-4deg] rounded-md border-b-[5px] border-[#24639a] bg-[#91c9ed] shadow-md">
          <span className="absolute inset-y-0 left-4 w-1 bg-white/65" />
        </div>
        <div className="absolute right-0 top-[5.75rem] h-7 w-24 rotate-[7deg] rounded-md border-b-[5px] border-[#337bb3] bg-[#83c7f0] shadow-md">
          <span className="absolute inset-y-0 left-3 w-1 bg-white/65" />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-7 border-b border-[#c9dff0] pb-8 xl:flex-row xl:items-center xl:justify-between xl:gap-8 xl:pb-9">
          <a href="/#home" className="group inline-flex w-fit items-center gap-3 rounded-xl transition hover:-translate-y-0.5" aria-label="Children Choice Publication Pvt. Ltd., back to top">
            <img src="/company-logo-mark.png" alt="" className="size-[4.5rem] rounded-full border-2 border-[#ee2437] object-cover shadow-[0_5px_14px_-8px_rgba(16,38,83,0.6)] transition duration-300 group-hover:scale-105 sm:size-20" />
            <span className="leading-tight">
              <span className="block text-2xl font-extrabold uppercase tracking-[0.05em] text-[#102653] sm:text-[1.7rem]">Children Choice</span>
              <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.23em] text-[#183d7a] sm:text-[13px]">Publication Pvt. Ltd.</span>
            </span>
          </a>

          <nav className="flex flex-wrap items-center gap-x-5 gap-y-3 text-[15px] font-semibold text-[#102653] sm:gap-x-7 sm:text-[17px] xl:ml-auto xl:justify-end xl:pr-24" aria-label="Footer information">
            <a href="/about" className="transition-colors hover:text-[#1769d2]">About Us</a>
            <span className="h-4 w-px bg-[#9fc5df]" aria-hidden="true" />
            <span className="text-[#62718d]" aria-disabled="true">Terms and conditions</span>
            <span className="h-4 w-px bg-[#9fc5df]" aria-hidden="true" />
            <span className="text-[#62718d]" aria-disabled="true">Privacy</span>
            <span className="h-4 w-px bg-[#9fc5df]" aria-hidden="true" />
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#1769d2]">Contact Us</a>
          </nav>
        </div>

        <div className="flex flex-col gap-5 pt-7 text-sm text-[#263b62] sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:text-[15px]">
          <p>Copyright © 2026 Children Choice Publication Pvt. Ltd. All rights reserved.</p>
          <a href="/#collections" className="inline-flex w-fit items-center gap-2 text-base font-bold text-[#102653] transition hover:-translate-y-0.5 hover:text-[#1769d2]">
            Explore our books <ArrowRight size={15} aria-hidden="true" />
          </a>
          <a id="footer-sample-kit-cta" href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2.5 rounded-full bg-[#18a878] px-5 py-3.5 text-xs font-semibold text-white shadow-[0_8px_18px_-8px_rgba(0,120,84,0.55)] transition hover:-translate-y-0.5 hover:bg-[#108e65] sm:px-6 sm:py-4 sm:text-sm">
            <svg viewBox="0 0 32 32" className="size-5 shrink-0" fill="none" aria-hidden="true">
              <path d="M16 2.7A12.55 12.55 0 0 0 5.18 21.62L3.4 28.1l6.65-1.75A12.55 12.55 0 1 0 16 2.7Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
              <path d="M11.2 9.6c-.38-.85-.78-.86-1.14-.88h-.97c-.34 0-.9.13-1.37.64-.47.52-1.8 1.76-1.8 4.3s1.85 4.98 2.1 5.33c.26.34 3.57 5.72 8.82 7.78 4.35 1.71 5.24 1.37 6.18 1.28.94-.09 3.04-1.24 3.47-2.45.43-1.2.43-2.23.3-2.45-.13-.21-.47-.34-.99-.6-.51-.26-3.03-1.5-3.5-1.67-.48-.17-.82-.26-1.16.26-.34.51-1.33 1.67-1.63 2.01-.3.35-.6.39-1.12.13-.51-.26-2.17-.8-4.14-2.55-1.53-1.36-2.56-3.03-2.86-3.55-.3-.51-.03-.79.23-1.05.23-.23.51-.6.77-.9.26-.3.34-.51.51-.86.17-.34.09-.64-.04-.9-.13-.26-1.12-2.79-1.56-3.82Z" fill="currentColor" transform="translate(2 0) scale(.82)" />
            </svg>
            Request Sample Kits : 7618181877
          </a>
        </div>
      </div>
    </footer>
  );
}
