import { useState, useEffect, useRef } from 'react';

/**
 * Tracks which section is currently most visible using IntersectionObserver.
 * Validates: Requirements 1.2
 *
 * @param {string[]} sectionIds - Array of section element ids to observe
 * @returns {string} The id of the currently most visible section
 */
export default function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '');
  const ratiosRef = useRef({});

  useEffect(() => {
    if (!sectionIds.length) return;

    // Initialise ratio map
    sectionIds.forEach((id) => {
      ratiosRef.current[id] = 0;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratiosRef.current[entry.target.id] = entry.intersectionRatio;
        });

        // Pick the section with the highest intersectionRatio
        const mostVisible = sectionIds.reduce((best, id) => {
          return (ratiosRef.current[id] ?? 0) > (ratiosRef.current[best] ?? 0)
            ? id
            : best;
        }, sectionIds[0]);

        setActiveSection(mostVisible);
      },
      {
        threshold: Array.from({ length: 21 }, (_, i) => i / 20), // 0, 0.05, 0.1 … 1.0
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      ratiosRef.current = {};
    };
  }, [sectionIds]);

  return activeSection;
}
