import React, { useEffect } from 'react'
import heroimg from '../assets/hero.webp'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-scroll';
function Hero() {

  const menuLinks = [
    { name: 'Explora', to: 'explora' },
  ];
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    })
  }, []);
  return (
    <div id='hero' className="relative w-full lg:h-screen h-auto bg-cover
    bg-center z-20" style={{ backgroundImage: `url(${heroimg})` }}>
      {/* black overlay */}
      <div className='absolute inset-0 bg-black/40'></div>

      {/* content */}
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center gap-6 px-6 text-white">
        <h1 data-aos="zoom-in" data-aos-delay="100" className='lg:text-7xl text-4xl
        capitalize text-center font-fakhwang font-bold'>DESCUBRE<br />
          CARRILLO</h1>

        <p data-aos="zoom-in" data-aos-delay="100" className='lg:text-5xl text-2xl
        font-fakhwang font-semibold text-white lg:w-[60%] w-full text-center
        capitalize'>Conoce el <h1 data-aos="zoom-in" data-aos-delay="400" className='lg:text-5xl text-3xl
        font-fakhwang font-semibold text-white'>Corazon de la Zona Maya</h1></p>

        <Link
          to={menuLinks[0].to}
          smooth={true}
          duration={500}
          offset={-70}
        >
          <button
            data-aos="slide-up"
            data-aos-delay="300"
            className="bg-blue-600 hover:bg-black hover:text-white px-12 py-3 font-semibold capitalize rounded-md mt-5 cursor-pointer transition-all duration-300"
          >
            Explora
          </button>
        </Link>
      </div>
    </div>





  )
}

export default Hero
