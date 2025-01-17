import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '../Components/Footer'

const Categories = () => {
  return (
    <main className='mt-[2rem] mx-4 sm:mx-8 md:mx-16 pt-2  sm:px-8 md:px-10 bg-[#C1DCDC]'>
      {/* Categories Section */}
      <div className='flex justify-center gap-4 text-3xl sm:text-4xl lg:text-5xl font-bold mt-[2rem]'>
        <h1>Categories</h1>
      </div>
      
      {/* Paragraph Section */}
      <div className='flex justify-center  mt-2 sm:text-xl'>
        <p>Find what you are looking for</p>
      </div>
      
      {/* Category Section Pictures */} 
      <div className='flex justify-center gap-4 mt-10 px-4 pt-6 flex-wrap'>
  <Image 
    src='/categorie.png' 
    alt='category image' 
    layout="responsive" // This will make the image responsive
    width={1200}  // Set the width based on aspect ratio
    height={800}  // Set the height based on aspect ratio
    className="w-full sm:w-[70%] md:w-[50%] lg:w-[40%] mb-4" 
  />
</div>

      {/* Footer Section */}
      <Footer/>
    </main>
  )
}

export default Categories;
