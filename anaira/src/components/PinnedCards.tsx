"use client"
import { useGSAP } from '@gsap/react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import AnimateHeading from './AnimateHeading';

gsap.registerPlugin(ScrollTrigger)

function PinnedCards() {
  useGSAP(() => {
    gsap.utils.toArray(".card").forEach(card => {
      gsap.set(card as HTMLElement, { transformOrigin: "center" });
      gsap.to(card as HTMLElement, {
        scale: 0.8,
        opacity: 0,
        scrollTrigger: {
          trigger: card as gsap.DOMTarget,
          start: "top 15%",
          end: "bottom 15%",
          scrub: true,
        //   markers: true
        }
      });
    });
  });

  return (
    <main className='w-full flex flex-col gap-y-[4rem] items-center pt-[15vh] text-white text-center pb-[10rem] bg-black'>
      <div> 
            <div className='w-[80vw]'>
              <AnimateHeading text="Best Seller"/>
            </div>
            <p className="text-lg text-white mb-8 max-w-xl mx-auto text-left">
            Discover timeless pieces crafted with elegance and sophistication. 
            Elevate your wardrobe with our latest collection, designed for the discerning.
            </p>
      </div>  
      <div className='card sticky top-[15vh] flex flex-col gap-4 items-center bg-[#2e251e] md:w-[40vw] px-[20px] py-[15vh]'>
        <img src="/1.png" alt="Classic Tailoring" className='w-[180px] aspect-square' />
        <h1 className='text-4xl font-thin'>The <br /> <span className='font-bold'>Heritage Suit</span></h1>
        <p>Timeless craftsmanship meets modern refinement—our signature tailored suit.</p>
      </div>

      <div className='card sticky top-[15vh] flex flex-col gap-4 items-center bg-[#2e251e] md:w-[40vw] px-[20px] py-[15vh]'>
        <img src="/2.png" alt="Luxury Knitwear" className='w-[180px] aspect-square' />
        <h1 className='text-4xl font-thin'>The <br /> <span className='font-bold'>Cashmere Classic</span></h1>
        <p>Soft, understated, and effortlessly elegant—crafted from the finest cashmere.</p>
      </div>

      <div className='card sticky top-[15vh] flex flex-col gap-4 items-center bg-[#2e251e] md:w-[40vw] px-[20px] py-[15vh]'>
        <img src="/3.png" alt="Tailored Trousers" className='w-[180px] aspect-square' />
        <h1 className='text-4xl font-thin'>The <br /> <span className='font-bold'>Oxford Trousers</span></h1>
        <p>Perfectly cut for a sharp silhouette—classic, refined, and essential.</p>
      </div>

      <div className='card sticky top-[15vh] flex flex-col gap-4 items-center bg-[#2e251e] md:w-[40vw] px-[20px] py-[15vh]'>
        <img src="/4.png" alt="Luxury Accessories" className='w-[180px] aspect-square' />
        <h1 className='text-4xl font-thin'>The <br /> <span className='font-bold'>Silk Ascot</span></h1>
        <p>Luxury in the details—our pure silk ascots elevate any ensemble.</p>
      </div>

      <div className='card sticky top-[15vh] flex flex-col gap-4 items-center bg-[#2e251e] md:w-[40vw] px-[20px] py-[15vh] rounded-lg'>
        <img src="/5.png" alt="Heritage Footwear" className='w-[180px] aspect-square' />
        <h1 className='text-4xl font-thin'>The <br /> <span className='font-bold'>Oxford Brogues</span></h1>
        <p>Handcrafted with precision—shoes that stand the test of time.</p>
      </div>

      <div className='card sticky top-[15vh] flex flex-col gap-4 items-center bg-[#2e251e] md:w-[40vw] px-[20px] py-[15vh] rounded-lg'>
        <img src="/6.png" alt="Timeless Overcoat" className='w-[180px] aspect-square' />
        <h1 className='text-4xl font-thin'>The <br /> <span className='font-bold'>Mayfair Overcoat</span></h1>
        <p>Elegance in motion—our classic wool overcoat, a symbol of sophistication.</p>
      </div>
    </main>
  )
}

export default PinnedCards;
