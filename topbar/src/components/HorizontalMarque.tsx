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
      duration: 5,
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 2,
        markers: true,
        pin: wrapperRef.current, // Pinning the wrapper instead of text
      },
    });
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="bg-black h-[100vh] w-[100vw] flex items-center overflow-hidden bg-cover bg-center"
    >
      <h1
        ref={textRef}
        className="text-[60vh] whitespace-nowrap pl-10 bg-clip-text text-transparent font-bold"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1117256/pexels-photo-1117256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          backgroundSize:"cover",
          backgroundPosition:"bottom"
        }}
      >
        Horizontal Marquee
      </h1>
    </div>
  );
}

export default HorizontalMarquee;
