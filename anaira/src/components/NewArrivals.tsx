
import { Filter } from 'lucide-react';
import AnimateHeading from './AnimateHeading';
import ZigzagGrid from './ZigzagGrid';

const NewArrivals = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto">
       <AnimateHeading text="New Arrivals"/>
        {/* <p className="text-lg text-white mb-8 max-w-xl mx-auto">
          Discover timeless pieces crafted with elegance and sophistication. 
          Elevate your wardrobe with our latest collection, designed for the discerning.
        </p> */}
        <div className='text-white flex flex-row-reverse'>
          <div className='flex justify-center items-center w-[10rem] border border-zinc-900 hover:border-zinc-100 hover:bg-zinc-900 h-[4rem] text-[1.8rem] tracking-wider gap-x-4 opacity-30 hover:opacity-100 transition-all duration-75'>
            <span>Filter</span> <Filter/>
          </div>
        </div>
        <ZigzagGrid/>
      </div>
    </section>
  );
};

export default NewArrivals;
