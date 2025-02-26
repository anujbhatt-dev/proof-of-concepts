"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCursorStore } from '@/store/useCursorStore';
import { Product, productsData } from '@/utils/productsData';
import { useRouter } from 'next/navigation';



  

const ZigzagGrid = () => {
  const [visibleProducts, setVisibleProducts] = useState<Product[]>(productsData.slice(0, 12));
  const { scaleUp, scaleDown} = useCursorStore()
  const router = useRouter();

  const handleCursorEnter = ()=>{
      scaleUp("View Product")
  }

  const handleCursorLeave = ()=>{
    scaleDown()
  }

  const handleClick = (product:Product) => {
    handleCursorLeave()
    router.push(`/${product.name.replaceAll(" ","-").toLowerCase()}`)
  };


  

  return (
    <section className="pt-20">
      <div className="container mx-auto">        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[4rem]">
            <div className='flex flex-col gap-[4rem]'>
                {visibleProducts.slice(0,3).map((product, index) => (
                    <motion.div
                    key={product.id}
                    onMouseEnter={handleCursorEnter}
                    onMouseLeave={handleCursorLeave}
                    onClick={()=>handleClick(product)}
                    className={`relative overflow-hidden bg-white shadow-lg ₹{
                        index % 2 === 0 ? 'transform translate-x-4' : 'transform -translate-x-4'
                    } cursor-pointer`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, type: 'spring', stiffness: 50 }}
                    >
                    <img
                        src={product.image+product.id+".webp"}
                        alt={product.name}
                        className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 p-6 bg-white/40 backdrop-blur-sm text-black w-full">
                        <h3 className="text-4xl font-semibold">{product.name}</h3>
                        <p className="text-xl text-zinc-950 font-sans">{product.description}</p>
                        <p className="mt-2 text-lg font-bold font-sans"><span className=' text-4xl'>₹{product.price}</span> <span className='line-through opacity-50'> ₹{ product.price * 2}</span></p>
                    </div>
                    </motion.div>
                ))}
            </div>
            <div className='flex flex-col gap-[4rem]'>
                {visibleProducts.slice(3,6).map((product, index) => (
                    <motion.div
                    key={product.id}
                    onMouseEnter={handleCursorEnter}
                    onMouseLeave={handleCursorLeave}
                    onClick={()=>handleClick(product)}
                    className={`relative overflow-hidden bg-white shadow-lg ₹{
                        index % 2 === 0 ? 'transform translate-x-4' : 'transform -translate-x-4'
                    } cursor-pointer`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, type: 'spring', stiffness: 50 }}
                    >
                    <img
                        src={product.image+product.id+".webp"}
                        alt={product.name}
                        className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 p-6 bg-white/40 backdrop-blur-sm text-black w-full">
                        <h3 className="text-4xl font-semibold">{product.name}</h3>
                        <p className="text-xl text-zinc-950 font-sans">{product.description}</p>
                        <p className="mt-2 text-lg font-bold font-sans"><span className=' text-4xl'>₹{product.price}</span> <span className='line-through opacity-50'> ₹{ product.price * 2}</span></p>
                    </div>
                    </motion.div>
                ))}
            </div>
            <div className='flex flex-col gap-[4rem]'>
                {visibleProducts.slice(6,9).map((product, index) => (
                    <motion.div
                    key={product.id}
                    onMouseEnter={handleCursorEnter}
                    onMouseLeave={handleCursorLeave}
                    onClick={()=>handleClick(product)}
                    className={`relative overflow-hidden bg-white shadow-lg ₹{
                        index % 2 === 0 ? 'transform translate-x-4' : 'transform -translate-x-4'
                    } cursor-pointer`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, type: 'spring', stiffness: 50 }}
                    >
                    <img
                        src={product.image+product.id+".webp"}
                        alt={product.name}
                        className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 p-6 bg-white/40 backdrop-blur-sm text-black w-full">
                        <h3 className="text-4xl font-semibold">{product.name}</h3>
                        <p className="text-xl text-zinc-950 font-sans">{product.description}</p>
                        <p className="mt-2 text-lg font-bold font-sans"><span className=' text-4xl'>₹{product.price}</span> <span className='line-through opacity-50'> ₹{ product.price * 2}</span></p>
                    </div>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* <button
          onClick={handleLoadMore}
          className="mt-12 px-6 py-3 text-lg border border-white/50 font-semibold  transition duration-300 w-[15rem] text-white mx-auto"
        >
          Load More
        </button> */}
      </div>
    </section>
  );
};

export default ZigzagGrid;
