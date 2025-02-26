import { testimonials } from '@/utils/testimonySeed'
import React from 'react'
import AnimateHeading from './AnimateHeading'

export default function Testimonials() {
  return (
    <div className='px-[5rem] max-w-screen-xl mx-auto'>
        <AnimateHeading text="testimonials"/>
        <div className='flex flex-col items-center'>
        {
          testimonials.map((testimony, i) => (
            <div key={testimony.name + i} className={`${i%2==0?"md:translate-x-[20%]":"md:-translate-x-[20%]"} flex justify-between bg-zinc-950 gap-4 mb-[5rem] p-[1rem] max-w-[60vw] min-h-[35vh] items-center relative`}> 
                <div className='font-bold text-[10rem] absolute top-0 left-0 -translate-x-[50%] -translate-y-[50%] text-white/70 font-sans'>
                  {i+1}
                </div>
                <div  className={`h-[35vh] w-[35vh] flex-shrink-0 relative `} >
                  <img src={`/testimony${i}.jpg`} alt="" className='h-full w-full object-cover'/>
                </div>
                <div>
                  <h3 className='text-[2rem] mb-[1rem]'>{testimony.name}</h3>
                  <p className='text-sm opacity-40 mb-[2rem]'>{testimony.testimony} </p>
                  <p className='text-sm opacity-40 mb-[2rem]'>{testimony.testimony} </p>
                  <p className='text-right opacity-90'>{testimony.occupation}</p>
                </div>
            </div>
          ))
        }
        </div>
    </div>
  )
}
