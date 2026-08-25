import React, { useEffect, useState } from 'react'
import heroimg from '../assets/hero.webp'
import heroimg2 from '../assets/hero2.jpg'
import heroimg3 from '../assets/hero3.jpg'
import heroimg4 from '../assets/hero4.webp'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-scroll';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
function Hero() {

  const menuLinks = [
    { name: 'Explora', to: 'explora' },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = [
    heroimg,
    heroimg2,
    heroimg3,
    heroimg4
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    })
  }, []);

  useEffect(() => {
    const slider = setInterval(() => {
      nextImage();
    }, 8000);

    return () => clearInterval(slider);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  };

  const previousImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? heroImages.length - 1 : prev - 1
    );
  };

  return (
    <div
      id='hero'
      className="relative w-full lg:h-screen h-auto overflow-hidden z-20"
    >

      {/* SLIDER */}
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentImage * 100}%)`
        }}
      >

        {heroImages.map((image, index) => (
          <div
            key={index}
            className="relative min-w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${image})`
            }}
          >
            {/* black overlay */}
            <div className='absolute inset-0 bg-black/40'></div>
          </div>
        ))}

      </div>

      {/* Previous button */}
      <button
        onClick={previousImage}
        className='absolute left-5 top-1/2 -translate-y-1/2 z-20
        bg-black/50 hover:bg-black/80 text-white
        p-4 rounded-full transition-all duration-300 cursor-pointer'
      >
        <FaChevronLeft />
      </button>

      {/* Next button */}
      <button
        onClick={nextImage}
        className='absolute right-5 top-1/2 -translate-y-1/2 z-20
        bg-black/50 hover:bg-black/80 text-white
        p-4 rounded-full transition-all duration-300 cursor-pointer'
      >
        <FaChevronRight />
      </button>

      {/* content */}
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center gap-6 px-6 text-white">

        <h1
          data-aos="zoom-in"
          data-aos-delay="100"
          className='lg:text-7xl text-4xl
          capitalize text-center font-fakhwang font-bold'
        >
          FELIPE CARRILLO<br />
          PUERTO
        </h1>

        <p
          data-aos="zoom-in"
          data-aos-delay="100"
          className='lg:text-5xl text-2xl
          font-fakhwang font-semibold text-white lg:w-[60%] w-full text-center
          capitalize'
        >
          Conoce el

          <h1
            data-aos="zoom-in"
            data-aos-delay="400"
            className='lg:text-5xl text-3xl
            font-fakhwang font-semibold text-white'
          >
            Corazon de la Zona Maya
          </h1>
        </p>

        <Link
          to={menuLinks[0].to}
          smooth={true}
          duration={500}
          offset={-70}
        >
          <button
            data-aos="slide-up"
            data-aos-delay="300"
            className="bg-blue-600 hover:bg-black hover:text-white
            px-12 py-3 font-semibold capitalize rounded-md mt-5
            cursor-pointer transition-all duration-300"
          >
            Explora
          </button>
        </Link>

      </div>

      {/* Image indicators */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3'>

        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              currentImage === index
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white'
            }`}
          ></button>
        ))}

      </div>

    </div>
  )
}

export default Hero