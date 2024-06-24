import { useState, useEffect, useRef } from 'react';

type UseSectionInViewOptions = {
  id: string;
  delay?: number;
};

type UseSectionInViewReturn = {
  inView: boolean;
};

export const useSectionInView = ({
  id,
  delay = 0,
}: UseSectionInViewOptions): UseSectionInViewReturn => {
  const [inView, setInView] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const element = document.getElementById(id);

    if (!element) {
      console.warn(`Element with id ${id} not found`);
      return;
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setTimeout(() => {
          setInView(true);
          observer.current?.disconnect();
        }, delay);
      }
    };

    observer.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    observer.current.observe(element);

    return () => {
      observer.current?.disconnect();
    };
  }, [id, delay]);

  return { inView };
};

export default useSectionInView;
