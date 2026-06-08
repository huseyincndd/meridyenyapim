"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Above-the-fold content — visible immediately, no entrance animation */
  eager?: boolean;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  eager = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(eager);

  useEffect(() => {
    if (eager) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(el);

    const onMotionChange = () => {
      if (media.matches) {
        setVisible(true);
        observer.disconnect();
      }
    };
    media.addEventListener("change", onMotionChange);

    return () => {
      observer.disconnect();
      media.removeEventListener("change", onMotionChange);
    };
  }, [eager]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate3d(0, 0, 0)" : "translate3d(0, 20px, 0)",
        transition: visible
          ? `opacity 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`
          : "none",
      }}
    >
      {children}
    </div>
  );
}
