"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const mediaArray = [
  {
    type: "video",
    src: "bgv1.mp4",
    title: "The Legacy of Elegance",
    subtitle: "Timeless Fashion for the Elite",
    cta: "Shop the Collection",
    position: "top-left",
    fontSize: "lg",
  },
  {
    type: "image",
    src: "https://images.pexels.com/photos/1127000/pexels-photo-1127000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Refined Sophistication",
    subtitle: "Crafted for the Modern Aristocrat",
    cta: "Explore Now",
    position: "bottom-right",
    fontSize: "xl",
  },
  {
    type: "image",
    src: "https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Eternal Style",
    subtitle: "Luxury that Never Fades",
    cta: "Discover More",
    position: "center-left",
    fontSize: "2xl",
  },
  {
    type: "image",
    src: "https://images.pexels.com/photos/5709665/pexels-photo-5709665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Bespoke Heritage",
    subtitle: "Tailored for the Privileged Few",
    cta: "Browse Collection",
    position: "top-right",
    fontSize: "3xl",
  },
  {
    type: "image",
    src: "https://images.pexels.com/photos/1937336/pexels-photo-1937336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "The Art of Dressing Well",
    subtitle: "Where Tradition Meets Luxury",
    cta: "Shop Now",
    position: "bottom-left",
    fontSize: "4xl",
  },
];

const positionClasses: { [key: string]: string } = {
  "top-left": "top-10 left-10 md:top-20 md:left-20 text-left",
  "top-right": "top-10 right-10 md:top-20 md:right-20 text-right",
  "bottom-left": "bottom-10 left-10 md:bottom-20 md:left-20 text-left",
  "bottom-right": "bottom-10 right-10 md:bottom-20 md:right-20 text-right",
  "center-left": "top-1/2 left-10 md:left-20 transform -translate-y-1/2 text-left",
  "center-right": "top-1/2 right-10 md:right-20 transform -translate-y-1/2 text-right",
};

const fontSizeClasses: { [key: string]: string } = {
  lg: "text-3xl md:text-4xl",
  xl: "text-4xl md:text-5xl",
  "2xl": "text-5xl md:text-6xl",
  "3xl": "text-6xl md:text-7xl",
  "4xl": "text-7xl md:text-8xl",
};

const FullScreenMedia: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaArray.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const currentMedia = mediaArray[currentIndex];

  return (
    <div className="w-full h-[calc(100vh)] relative overflow-hidden flex items-center justify-center">
      {/* Background Media */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        key={`${currentIndex}-media`} // Unique key for media
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {currentMedia.type === "image" ? (
          <img
            src={currentMedia.src}
            alt="media"
            className="w-full h-full object-cover"
          />
        ) : (
          <video
            src={currentMedia.src}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        )}
      </motion.div>

      {/* Overlay Text with Dynamic Positioning and Animation Reset */}
      <motion.div
        key={`${currentIndex}-text`} // Unique key for text
        className={`absolute ${positionClasses[currentMedia.position]} text-white bg-black bg-opacity-40 backdrop-blur-sm px-6 py-4 `}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className={`${fontSizeClasses[currentMedia.fontSize]} font-serif font-bold mb-3`}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {currentMedia.title}
        </motion.h1>
        <motion.p
          className="text-md md:text-xl font-light mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {currentMedia.subtitle}
        </motion.p>
        <motion.button
          className="bg-white text-black font-semibold px-5 py-2  shadow-md hover:bg-gray-300 transition-all"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          {currentMedia.cta}
        </motion.button>
      </motion.div>

      {/* Centered Progress Bar */}
      {/* Centered Progress Bar */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gray-300/30  overflow-hidden">
        <motion.div
          key={`${currentIndex}-progress`} // Unique key for progress bar
          className="h-full bg-white  w-full"
          initial={{ translateX: "-100%" }} // Start from the far left
          animate={{ translateX: "0%" }} // Move to full width
          exit={{ translateX: "-100%" }} // Reset when media changes
          transition={{ duration: 10, ease: "linear" }}
        />
      </div>

    </div>
  );
};

export default FullScreenMedia;
