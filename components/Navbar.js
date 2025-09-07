"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='bg-purple-700 text-white'>
      <div className='flex justify-between items-center h-16 px-4 sm:px-8'>
        <div className="logo font-bold text-2xl">
          <Link href="/">ShortLinks</Link>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex justify-center gap-4 items-center'>
          <Link href="/"><li className='hover:text-purple-300 transition'>{`Home`}</li></Link>
          <Link href="/"><li className='hover:text-purple-300 transition'>{`About`}</li></Link>
          <Link href="/shorten"><li className='hover:text-purple-300 transition'>{`Shorten`}</li></Link>
          <Link href="/"><li className='hover:text-purple-300 transition'>{`Contact Us`}</li></Link>
          <li className='flex gap-2'>
            <Link href="/shorten">
              <button className='bg-purple-500 rounded-lg shadow-lg px-4 py-1 font-bold hover:bg-purple-600 transition'>Try Now</button>
            </Link>
            <Link href="/github">
              <button className='bg-purple-500 rounded-lg shadow-lg px-4 py-1 font-bold hover:bg-purple-600 transition'>GitHub</button>
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className='md:hidden flex items-center'>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" /> // X icon
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" /> // Hamburger icon
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className='flex flex-col gap-2 px-4 pb-4 md:hidden bg-purple-700'>
          <Link href="/"><li className='hover:text-purple-300 transition py-1'>Home</li></Link>
          <Link href="/"><li className='hover:text-purple-300 transition py-1'>About</li></Link>
          <Link href="/shorten"><li className='hover:text-purple-300 transition py-1'>Shorten</li></Link>
          <Link href="/"><li className='hover:text-purple-300 transition py-1'>Contact Us</li></Link>
          <div className='flex flex-col gap-2 mt-2'>
            <Link href="/shorten">
              <button className='bg-purple-500 rounded-lg shadow-lg px-4 py-1 font-bold hover:bg-purple-600 transition w-full'>Try Now</button>
            </Link>
            <Link href="/github">
              <button className='bg-purple-500 rounded-lg shadow-lg px-4 py-1 font-bold hover:bg-purple-600 transition w-full'>GitHub</button>
            </Link>
          </div>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
