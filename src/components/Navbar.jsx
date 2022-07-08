import React from 'react';
import { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/Logo.png';

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#342c34] text-[#f3973b] drop-shadow-lg'>
      <div>
        <img src={Logo} alt="Logo" className='w-[50px] rounded-xl'/>
      </div>

      {/* Menu */}
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contacts</li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#342c34] text-[#f3973b] flex flex-col justify-center items-center'}>
        <li className='py-6 text-3xl'>Home</li>
        <li className='py-6 text-3xl'>About</li>
        <li className='py-6 text-3xl'>Skills</li>
        <li className='py-6 text-3xl'>Projects</li>
        <li className='py-6 text-3xl'>Contacts</li>
      </ul>
      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='rounded-tr-xl hover:rounded-r-xl w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077b5] drop-shadow-2xl'>
            <a className='flex justify-between items-center w-full text-[#fffffc]' 
            href="/">Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='hover:rounded-r-xl w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#24292f] drop-shadow-2xl'>
            <a className='flex justify-between items-center w-full text-[#fffffc]' 
            href="/">Github <FaGithub size={30} />
            </a>
          </li>
          <li className='hover:rounded-r-xl w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#bb001b] drop-shadow-2xl'>
            <a className='flex justify-between items-center w-full text-[#fffffc]' 
            href="/">Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='rounded-br-xl hover:rounded-r-xl w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#c0660c] drop-shadow-2xl'>
            <a className='flex justify-between items-center w-full text-[#fffffc]' 
            href="/">Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar