"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animationType?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "zoomIn";
  delay?: number;
}

export default function ScrollAnimation({
  children,
  className = "",
  animationType = "fadeInUp",
  delay = 0,
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  const animationClasses = {
    fadeInUp: isVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-8",
    fadeInLeft: isVisible
      ? "opacity-100 translate-x-0"
      : "opacity-0 -translate-x-8",
    fadeInRight: isVisible
      ? "opacity-100 translate-x-0"
      : "opacity-0 translate-x-8",
    zoomIn: isVisible
      ? "opacity-100 scale-100"
      : "opacity-0 scale-95",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${animationClasses[animationType]} ${className}`}
    >
      {children}
    </div>
  );
}




