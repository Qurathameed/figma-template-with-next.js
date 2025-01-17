
import React, { useEffect } from 'react';
import Image from 'next/image';

const Hero = () => {
      return (
        <main className='mt-4 mx-5 pt-2 px-10'>
        {/* Hero Section Image */}
        <div className="flex justify-center bg-[#C1DCDC] ">
          <Image 
            src="/hero.png" 
            alt="hero section pic" 
            width={1200}  // Set width in pixels
            height={600}  // Set height in pixels (you can adjust this to match the aspect ratio)
            className="w-full max-w-10xl" 
          />
        </div>
        {/* Plant Images (Responsive) */}
        <div data-aos="move-up" className="flex justify-center gap-8 mt-[3rem] px-10 pt-10 flex-wrap">
  {/* Images with responsive sizes */}
  <Image 
    src="/hero1.png" 
    alt="1 pic" 
    layout="responsive" 
    width={100}  // Aspect ratio width
    height={200} // Aspect ratio height
    className="sm:w-1/2 md:w-1/4 lg:w-1/5 mb-6 md:mb-0" 
  />
  <Image 
    src="/hero2.png" 
    alt="2 pic" 
    layout="responsive" 
    width={100}  // Aspect ratio width
    height={200} // Aspect ratio height
    className="sm:w-1/2 md:w-1/4 lg:w-1/5 mb-6 md:mb-0" 
  />
  <Image 
    src="/hero3.png" 
    alt="3 pic" 
    layout="responsive" 
    width={100}  // Aspect ratio width
    height={200} // Aspect ratio height
    className="sm:w-1/2 md:w-1/4 lg:w-1/5 mb-6 md:mb-0" 
  />
  <Image 
    src="/hero4.png" 
    alt="4 pic" 
    layout="responsive" 
    width={200}  // Aspect ratio width
    height={300} // Aspect ratio height
    className="sm:w-1/2 md:w-1/4 lg:w-1/5 mb-6 md:mb-0" 
  />
</div>

      </main>
      
  );
};

export default Hero;

