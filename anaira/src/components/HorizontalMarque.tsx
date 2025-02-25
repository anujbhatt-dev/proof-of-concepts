"use client";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HorizontalMarquee() {
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!textRef.current || !wrapperRef.current) return;

    let textWidth = textRef.current.offsetWidth;
    let viewportWidth = window.innerWidth;

    gsap.to(textRef.current, {
      x: `-${textWidth - viewportWidth}px`, // Move based on text width
      duration: 10,
      // ease:"back.out",
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top 0",
        end: "top -200%",
        scrub: 3,
        // markers: true,
        pin: wrapperRef.current, // Pinning the wrapper instead of text
      },
    });
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="bg-black h-[100vh] w-[100vw] flex items-center overflow-hidden bg-cover bg-center relative"      
    >
      <div className="h-full w-full absolute top-0 left-0 -z-10">
            <img src="https://media.gucci.com/content/HeroRegularStandard_1600x675/1738138535/HeroRegularStandard_GUCCI-SHOOT-DAY-21060-C_001_Default.jpg" alt="" className="w-full h-full object-cover" />
            <div className="h-full w-full bg-black/50 backdrop-blur-sm absolute top-0 left-0 "></div>
      </div>
      <h1
        ref={textRef}
        className="text-[40vh] whitespace-nowrap px-10 bg-clip-text text-white font-bold tracking-widest uppercase"        
      >
        Timeless elegance, redefined
      </h1>
    </div>
  );
}

export default HorizontalMarquee;
