"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SECTION_SELECTOR = "[data-scroll-section][id]";

export default function ScrollHashSync() {
  const pathname = usePathname();

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(SECTION_SELECTOR),
    );

    if (sections.length === 0) return;

    let frame = 0;

    const updateHash = () => {
      frame = 0;

      const activationLine = Math.min(window.innerHeight * 0.32, 240);
      const firstSectionTop = sections[0].getBoundingClientRect().top + window.scrollY;
      const nearPageBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8;

      let activeId = "";

      if (window.scrollY + activationLine >= firstSectionTop) {
        for (const section of sections) {
          if (section.getBoundingClientRect().top <= activationLine) {
            activeId = section.id;
          } else {
            break;
          }
        }
      }

      // The final section can be shorter than the viewport, so make sure its
      // hash becomes active when the user reaches the bottom of the page.
      if (nearPageBottom) {
        activeId = sections[sections.length - 1].id;
      }

      const currentHash = window.location.hash.slice(1);
      if (currentHash === activeId) return;

      const baseUrl = `${window.location.pathname}${window.location.search}`;
      const nextUrl = activeId ? `${baseUrl}#${activeId}` : baseUrl;
      window.history.replaceState(window.history.state, "", nextUrl);
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateHash);
    };

    // Let the browser finish any initial jump to a URL hash before measuring.
    const initialFrame = window.requestAnimationFrame(requestUpdate);
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.cancelAnimationFrame(initialFrame);
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [pathname]);

  return null;
}
