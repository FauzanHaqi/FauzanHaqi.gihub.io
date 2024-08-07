"use client"

import { useState, useEffect, useRef } from 'react';

export const useIntersectionObserver = (
  elementRef: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (elementRef.current) observer.current.observe(elementRef.current);

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [elementRef, options]);

  return isIntersecting;
};
