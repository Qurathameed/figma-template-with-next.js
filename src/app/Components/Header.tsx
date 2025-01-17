"use client"
import React, { useState } from 'react'
// import { useState } from 'react';
import { BsPersonExclamation } from 'react-icons/bs';
import { FaPlantWilt, FaRegHeart } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import { MdOutlineShoppingCart } from 'react-icons/md';
import Link from 'next/link';  // Assuming you are using Next.js

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle the menu toggle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white w-full h-24 pt-8">
      <div className="flex justify-between items-center px-6 md:px-16">
        {/* Logo and Title */}
        <ul className="flex items-center gap-2">
          <li><FaPlantWilt className="text-green-600 text-4xl" /></li>
          <li><h1 className="text-black font-bold text-4xl">GREENMIND</h1></li>
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>

        {/* Menu and Icons for larger screens */}
        <div className="flex gap-20 text-xl font-semibold items-center">
          <ul className="hidden md:flex gap-20 text-black">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/Categories">Categories</Link></li>
            <li><Link href="/About">About</Link></li>
            <li><Link href="/Contact">Contact</Link></li>
          </ul>

          <div className="hidden md:flex gap-14 text-4xl text-black">
            <BsPersonExclamation className="bg-slate-50 text-black p-2 rounded" />
            <IoSearch className="bg-slate-50 text-black p-2 rounded" />
            <FaRegHeart className="bg-slate-50 text-black p-2 rounded" />
            <MdOutlineShoppingCart className="bg-slate-50 text-black p-2 rounded" />
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 absolute top-24 left-0 right-0 shadow-lg">
          <ul className="flex flex-col gap-4 text-xl font-semibold text-black">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/Categories">Categories</Link></li>
            <li><Link href="/About">About</Link></li>
            <li><Link href="/Contact">Contact</Link></li>
          </ul>

          <div className="flex justify-between mt-4">
            <BsPersonExclamation className="text-2xl bg-slate-50 text-black p-2 rounded" />
            <IoSearch className="text-2xl bg-slate-50 text-black p-2 rounded" />
            <FaRegHeart className="text-2xl bg-slate-50 text-black p-2 rounded" />
            <MdOutlineShoppingCart className="text-2xl bg-slate-50 text-black p-2 rounded" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
