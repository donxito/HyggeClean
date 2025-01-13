"use client";

import { useEffect, useRef, RefObject } from "react";

interface AnimationOptions {
  threshold?: number;
  rootMargin?: string;
  animation?: string;
}

export function useScrollAnimation<T extends HTMLElement>(
  options: AnimationOptions = {}
): RefObject<T | null> {
  const elementRef = useRef<T | null>(null);
  const {
    threshold = 0.1,
    rootMargin = "-50px",
    animation = "animate-fade-in-up",
  } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          elementRef.current?.classList.remove("opacity-0", "-translate-y-10");
          elementRef.current?.classList.add(animation);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (elementRef.current) {
      elementRef.current.classList.add("opacity-0", "-translate-y-10");
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [animation, threshold, rootMargin]);

  return elementRef;
}
