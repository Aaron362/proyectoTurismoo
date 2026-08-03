import React, { useEffect } from 'react'
import { IoMail } from 'react-icons/io5'
import { AiFillInstagram } from 'react-icons/ai'
import { FaPhoneAlt, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa'

function Footer() {
  return (
    <div id='contact' className='w-full bg-black lg:px-22 px-5 py-10 flex flex-col
    justify-center items-center gap-12'>
      <div id='top' className='bg-[#046e8f] w-full lg:px-10 p-6 rounded-md flex
      lg:flex-row flex-col justify-between items-start -mt-[120px] gap-6'>
        <div className='lg-w-[70%] w-full flex flex-col justify-between items-start
        gap-5'>
          <h1 className='text-3x1 font-fakhwang font-semibold text-white text-left
          lg:w-[60%] w-full'>Crafting unforgettable journeys, one adventure at a time
          </h1>
          <hr className='lg:w-[10%] w-[20%] border-2 border-orange-600'></hr>
        </div>
        <div className='lg:w-[30%] w-full flex flex-col justify-between items-start
        gap-5'>
          <h1 className='text-white text-xl'>Subscribe our Newsletter</h1>
        </div>
        <div className='flex lg:flex-row flex-col gap-3 w-full'>
          <input type='text' placeholder='Enter your email' className='bg-white p-3
rounded-md text-black'/>
          <button className='bg-orange-600 text-white p-3 rounded-md'>Subscribe</button>
        </div>
      </div>
      <div id='mid' className='text-white w-full flex lg:flex-row flex-col justify-between
      items-start gap-10'>

        { /* 1st box */}
        <div className='lg:w-[40%] w-full'>

          <h1 className='text-3xl font-fakhwang font-semibold'>GlobeSprint</h1>
          <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, reprehenderit.</p>
          <div className='flex flex-col justify-between items-start gap-2 mt-5'>
            <div className='flex justify-start items-center
    gap-2'><IoMail className='text-orange-600 text-xl'
              /><p>hello@gmail.com</p></div>
            <div className='flex justify-start items-center
    gap-2'><FaPhoneAlt className='text-orange-600 text-xl'
              /><p>983 838 9329</p></div>
            <div></div>
          </div>
        </div>
        { /* 1st box ends */}

        { /* 2nd box starts */}
        <div className='lg:w-[20%] w-full'>
          <h1 className='text-xl font-medium font-fakhwang'>Quick Links</h1>
          <ul className='flex flex-col justify-between items-start gap-3 mt-5'>
            <li className='text-gray-300 hover:text-orange-600 cursor-pointer'>Home
            </li>
            <li className='text-gray-300 hover:text-orange-600 cursor-pointer'>About
            </li>
            <li className='text-gray-300 hover:text-orange-600 
 cursor-pointer'>Services</li>
            <li className='text-gray-300 hover:text-orange-600 
   cursor-pointer'>Features</li>
            <li className='text-gray-300 hover:text-orange-600 
 cursor-pointer'>Contact</li>
          </ul>
        </div>
        { /* 2nd box ends */}

        { /* 3rd box starts */}
        <div className='lg:w-[20%] w-full'>
          <h1 className='text-xl font-medium font-fakhwang'>Quick Links</h1>
          <ul className='flex flex-col justify-between items-start gap-3 mt-5'>
            <li className='text-gray-300 hover:text-orange-600 cursor-pointer'>Home
            </li>
            <li className='text-gray-300 hover:text-orange-600 cursor-pointer'>About
            </li>
            <li className='text-gray-300 hover:text-orange-600 
 cursor-pointer'>Services</li>
            <li className='text-gray-300 hover:text-orange-600 
   cursor-pointer'>Features</li>
            <li className='text-gray-300 hover:text-orange-600 
 cursor-pointer'>Contact</li>
          </ul>
        </div>
        { /* 3rd box ends */}

        { /* 4th box starts */}
        <div className='lg:w-[20%] w-full'>
          <h1 className='text-xl font-medium font-fakhwang'>Follow Us</h1>
          <ul className='flex flex-col justify-between items-start gap-3 mt-5'>
           <li className='text-gray-300 hover:text-orange-600 cursor-pointer flex
           justify-between items-center gap-2'><FaFacebook
             className='text-orange-600 text-xl'/>Facebook</li>
              <li className='text-gray-300 hover:text-orange-600 cursor-pointer flex
           justify-between items-center gap-2'><AiFillInstagram
             className='text-orange-600 text-xl'/>Instagram</li>
              <li className='text-gray-300 hover:text-orange-600 cursor-pointer flex
           justify-between items-center gap-2'><FaLinkedin
             className='text-orange-600 text-xl'/>Linkedin</li>
              <li className='text-gray-300 hover:text-orange-600 cursor-pointer flex
           justify-between items-center gap-2'><FaTwitter
             className='text-orange-600 text-xl'/>Twitter</li>
          </ul>
        </div>
        { /* 4th box ends */}
      </div>
<hr className='w-full- border-1 border-gray-800'></hr>
      <div id='last' className='flex justify-between items-center gap-2'>
        <p className='text-gray-300 text-center'>Copyright 2026, GlobeSpring, All Rights Reserved</p></div>
    </div>
  )
}

export default Footer
