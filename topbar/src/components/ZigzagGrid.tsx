"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
}

const productsData: Product[] = [
    { id: 1, name: 'Luxury Coat', description: 'Premium wool', image: 'product', price: '₹199' },
    { id: 2, name: 'Tailored Suit', description: 'Modern aristocrat fit', image: 'product', price: '₹249' },
    { id: 3, name: 'Silk Blouse', description: 'Luxurious silk', image: 'product', price: '₹129' },
    { id: 4, name: 'Classic Trench', description: 'Timeless design', image: 'product', price: '₹179' },
    { id: 5, name: 'Cashmere Sweater', description: 'Soft and warm', image: 'product', price: '₹220' },
    { id: 6, name: 'Tailored Trousers', description: 'Elegant fit', image: 'product', price: '₹150' },
    { id: 7, name: 'Leather Gloves', description: 'Genuine leather', image: 'product', price: '₹89' },
    { id: 8, name: 'Cashmere Scarf', description: 'Soft and cozy', image: 'product', price: '₹99' },
    { id: 9, name: 'Vintage Watch', description: 'A timeless piece', image: 'product', price: '₹499' },
    { id: 10, name: 'Formal Shirt', description: 'Perfect for any occasion', image: 'product', price: '₹130' },
    { id: 11, name: 'Classic Brogues', description: 'Handcrafted leather', image: 'product', price: '₹220' },
    { id: 12, name: 'Chic Handbag', description: 'Elegant and spacious', image: 'product', price: '₹350' },
  ];
  

const ZigzagGrid = () => {
  const [visibleProducts, setVisibleProducts] = useState<Product[]>(productsData.slice(0, 12));

  const handleLoadMore = () => {
    const nextIndex = visibleProducts.length;
    setVisibleProducts((prev) => [
      ...prev,
      ...productsData.slice(nextIndex, nextIndex + 12),
    ]);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className='flex flex-col gap-8'>
                {visibleProducts.slice(0,3).map((product, index) => (
                    <motion.div
                    key={product.id}
                    className={`relative overflow-hidden bg-white shadow-lg ₹{
                        index % 2 === 0 ? 'transform translate-x-4' : 'transform -translate-x-4'
                    }`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, type: 'spring', stiffness: 50 }}
                    >
                    <img
                        src={product.image+product.id+".webp"}
                        alt={product.name}
                        className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black to-transparent text-white w-full">
                        <h3 className="text-xl font-semibold">{product.name}</h3>
                        <p className="text-sm">{product.description}</p>
                        <p className="mt-2 text-lg font-bold">{product.price}</p>
                    </div>
                    </motion.div>
                ))}
            </div>
            <div className='flex flex-col gap-8'>
                {visibleProducts.slice(3,6).map((product, index) => (
                    <motion.div
                    key={product.id}
                    className={`relative overflow-hidden bg-white shadow-lg ₹{
                        index % 2 === 0 ? 'transform translate-x-4' : 'transform -translate-x-4'
                    }`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, type: 'spring', stiffness: 50 }}
                    >
                    <img
                        src={product.image+product.id+".webp"}
                        alt={product.name}
                        className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black to-transparent text-white w-full">
                        <h3 className="text-xl font-semibold">{product.name}</h3>
                        <p className="text-sm">{product.description}</p>
                        <p className="mt-2 text-lg font-bold">{product.price}</p>
                    </div>
                    </motion.div>
                ))}
            </div>
            <div className='flex flex-col gap-8'>
                {visibleProducts.slice(6,9).map((product, index) => (
                    <motion.div
                    key={product.id}
                    className={`relative overflow-hidden bg-white shadow-lg ₹{
                        index % 2 === 0 ? 'transform translate-x-4' : 'transform -translate-x-4'
                    }`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, type: 'spring', stiffness: 50 }}
                    >
                    <img
                        src={product.image+product.id+".webp"}
                        alt={product.name}
                        className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black to-transparent text-white w-full">
                        <h3 className="text-xl font-semibold">{product.name}</h3>
                        <p className="text-sm">{product.description}</p>
                        <p className="mt-2 text-lg font-bold">{product.price}</p>
                    </div>
                    </motion.div>
                ))}
            </div>
          {/* {visibleProducts.slice(0,3).map((product, index) => (
            <motion.div
              key={product.id}
              className={`relative overflow-hidden bg-white shadow-lg ₹{
                index % 2 === 0 ? 'transform translate-x-4' : 'transform -translate-x-4'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 50 }}
            >
              <img
                src={product.image+product.id+".webp"}
                alt={product.name}
                className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black to-transparent text-white w-full">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-sm">{product.description}</p>
                <p className="mt-2 text-lg font-bold">{product.price}</p>
              </div>
            </motion.div>
          ))} */}
        </div>

        <button
          onClick={handleLoadMore}
          className="mt-12 px-6 py-3 text-lg border border-black/50 font-semibold  transition duration-300 w-[15rem]"
        >
          Load More
        </button>
      </div>
    </section>
  );
};

export default ZigzagGrid;
