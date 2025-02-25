
import AnimateHeading from './AnimateHeading';
import ZigzagGrid from './ZigzagGrid';

const NewArrivals = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto">
       <AnimateHeading text="New Arrivals"/>
        <p className="text-lg text-white mb-8 max-w-xl mx-auto">
          Discover timeless pieces crafted with elegance and sophistication. 
          Elevate your wardrobe with our latest collection, designed for the discerning.
        </p>
        
        <ZigzagGrid/>
      </div>
    </section>
  );
};

export default NewArrivals;
