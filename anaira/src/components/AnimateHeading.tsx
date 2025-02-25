"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

interface AnimateHeadingProps {
  text: string;
}

const AnimateHeading: React.FC<AnimateHeadingProps> = ({ text }) => {
  const lettersRef = useRef<HTMLSpanElement[]>([]);
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.from(lettersRef.current, {
      y: 100,
      opacity: 0,
      stagger: 0.05,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", // Starts animation when 80% of the element is visible
        toggleActions: "play none none reverse", // Play on enter, reverse on leave        
      },
    });
  }, []);

  return (
    <h1
      ref={containerRef}
      className="text-[7rem] font-serif text-white mb-12 uppercase tracking-widest flex overflow-hidden"
    >
      {text.split("").map((letter, index) => (
        <span
          key={index}
          ref={(el) => {
            if (el) lettersRef.current[index] = el;
          }}
          className="inline-block"
        >
          {letter}
        </span>
      ))}
    </h1>
  );
};

export default AnimateHeading;
