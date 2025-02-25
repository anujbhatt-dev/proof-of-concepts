
import ZigzagGrid from './ZigzagGrid';

const NewArrivals = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-7xl font-serif text-gray-800 mb-12 uppercase tracking-widest">
          New Arrivals
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          Discover timeless pieces crafted with elegance and sophistication. 
          Elevate your wardrobe with our latest collection, designed for the discerning.
        </p>
        
        <ZigzagGrid/>
      </div>
    </section>
  );
};

export default NewArrivals;
