import React, { useEffect } from 'react'
import cta1 from '../assets/cta1.webp'
import { FaPlay } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css'

function CtaOne() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    })
  }, []);

  return (
    <div id='cta1' style={{ backgroundImage: `url(${cta1})` }} className='relative w-full lg-h-
    [500px] h-auto lg:p-22 p-10 flex flex-col justify-center items-center gap-5
     bg-cover bg-center'>
      {/* black overlay */}
      <div className='absolute inset-0 bg-black/50'></div>

      {/* content part*/}
      <div className='relative z-10 flex flex-col justify-center items-center gap-5'>
        <h1 data-aos="zoom-in" data-aos-delay="100" className='lg:text-5x1 text-3xl
        font-fakhwang font-semibold text-white lg:w-[60%] w-full text-center
        capitalize'>Lorem ipsum dolor sit amet.?</h1>
        <p data-aos="zoom-in" data-aos-delay="200" className='text-white lg:w-[50%] 
        w-full text-lg text-center'>Lorem ipsum 
          dolor sit amet consectetur adipisicing elit. Recusandae incidunt,
           quam laudantium quasi placeat consequuntur voluptas velit quo 
           voluptates quisquam, blanditiis error illum! Ipsum non accusamus
            quibusdam eligendi! Maxime, architecto.</p>
            <div data-aos="zoom-in" data-aos-delay="300" className='bg-white lg:p-7 p-4
            rounded-full'>
              <FaPlay className='text-orange-600 text-2x1' />
            </div>
      </div>
    </div>
  )
}

export default CtaOne
