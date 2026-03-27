import { useState, useEffect } from 'react';

/**
 * Tracks scroll progress as a percentage [0, 100].
 * Feature: portfolio-website, Property 1: scroll progress is bounded
 * Validates: Requirements 3.2
 */
export default function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollable = scrollHeight - clientHeight;

      if (scrollable <= 0) {
        setProgress(0);
        return;
      }

      const raw = (scrollY / scrollable) * 100;
      setProgress(Math.min(100, Math.max(0, raw)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}
