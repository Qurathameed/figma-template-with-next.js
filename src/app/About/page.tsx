import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
  return (
    <main className='mx-4 sm:mx-8 md:mx-14 pt-2 px-10 bg-[#C1DCDC] mt-[5rem]'>
      {/* About Section */}
      <div className='flex justify-center gap-4 text-3xl sm:text-4xl lg:text-5xl font-bold'>
        <h1>About US</h1>
      </div>

      {/* Paragraph Section */}
      <div className='flex justify-center  mt-2 sm:text-xl'>
        <p>Order now </p>
      </div>

      {/* About Section Pictures */}
      <div className='flex justify-center gap-8 mt-10 px-4 pt-6 flex-wrap'>
    <Image 
        src='/about1.png' 
        alt='1 pic' 
        width={500} // Set width in pixels
        height={300} // Set height in pixels
        className="w-full sm:w-[30%] md:w-[30%] lg:w-[30%] mb-4" 
    />
    <Image 
        src='/about2.png' 
        alt='2 pic' 
        width={500} // Set width in pixels
        height={300} // Set height in pixels
        className="w-full sm:w-[30%] md:w-[30%] lg:w-[30%] mb-4" 
    />
    <Image 
        src='/about3.png' 
        alt='3 pic' 
        width={500} // Set width in pixels
        height={300} // Set height in pixels
        className="w-full sm:w-[30%] md:w-[30%] lg:w-[30%] mb-4" 
    />
</div>

    </main>
  )
}

export default About;
