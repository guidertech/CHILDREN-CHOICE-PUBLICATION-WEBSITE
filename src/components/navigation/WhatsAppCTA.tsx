'use client';

import { useEffect, useState } from 'react';

const whatsappNumber = '917618181877';

export function WhatsAppCTA() {
  const [footerActionVisible, setFooterActionVisible] = useState(false);

  useEffect(() => {
    const footerAction = document.getElementById('footer-sample-kit-cta');
    if (!footerAction) return;

    const observer = new IntersectionObserver(([entry]) => {
      setFooterActionVisible(entry.isIntersecting);
    }, { threshold: 0.1 });

    observer.observe(footerAction);
    return () => observer.disconnect();
  }, []);

  if (footerActionVisible) return null;

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Request sample kits on WhatsApp at +91 7618181877"
      className="fixed bottom-5 right-5 z-50 inline-flex max-w-[calc(100vw-2.5rem)] items-center gap-2.5 rounded-full bg-[#009e6e] px-4 py-3 text-[11px] font-semibold leading-tight text-white shadow-[0_10px_28px_-10px_rgba(0,120,84,0.55)] transition duration-300 hover:-translate-y-1 hover:bg-[#008d63] hover:shadow-[0_16px_34px_-10px_rgba(0,120,84,0.55)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#009e6e] sm:right-7 sm:bottom-7 sm:gap-3 sm:px-5 sm:py-3.5 sm:text-sm"
    >
      <svg viewBox="0 0 32 32" className="size-7 shrink-0 sm:size-8" fill="none" aria-hidden="true">
        <path d="M16 2.7A12.55 12.55 0 0 0 5.18 21.62L3.4 28.1l6.65-1.75A12.55 12.55 0 1 0 16 2.7Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M11.2 9.6c-.38-.85-.78-.86-1.14-.88h-.97c-.34 0-.9.13-1.37.64-.47.52-1.8 1.76-1.8 4.3s1.85 4.98 2.1 5.33c.26.34 3.57 5.72 8.82 7.78 4.35 1.71 5.24 1.37 6.18 1.28.94-.09 3.04-1.24 3.47-2.45.43-1.2.43-2.23.3-2.45-.13-.21-.47-.34-.99-.6-.51-.26-3.03-1.5-3.5-1.67-.48-.17-.82-.26-1.16.26-.34.51-1.33 1.67-1.63 2.01-.3.35-.6.39-1.12.13-.51-.26-2.17-.8-4.14-2.55-1.53-1.36-2.56-3.03-2.86-3.55-.3-.51-.03-.79.23-1.05.23-.23.51-.6.77-.9.26-.3.34-.51.51-.86.17-.34.09-.64-.04-.9-.13-.26-1.12-2.79-1.56-3.82Z" fill="currentColor" transform="translate(2 0) scale(.82)" />
      </svg>
      <span>Request Sample Kits : 7618181877</span>
    </a>
  );
}
