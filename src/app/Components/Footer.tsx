import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#C1DCDC]">
      <div className="flex justify-center py-12 px-6 sm:px-12 md:px-24 gap-8 flex-wrap">
  <Image 
    src="/footer.png" 
    alt="footer img" 
    layout="responsive"  // Makes the image responsive
    width={1200}  // Set a width in pixels (adjust as needed)
    height={400} // Set a height in pixels (adjust based on aspect ratio)
    className="w-full sm:w-auto max-w-full h-auto" 
  />
</div>
</footer>
  );
};

export default Footer;
