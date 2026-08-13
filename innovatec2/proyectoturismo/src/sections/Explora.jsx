import React from "react";
import {FaMapMarkerAlt,FaSearch,FaStar,FaHeart,} from "react-icons/fa";
import sijil from "../assets/sijil.jpg";
import sayab from "../assets/sayab.jpg";
import museo from "../assets/museo.jpg";
import puerta from "../assets/puertaalmar.webp";


function Explore() {
  const menuLinks = [
    { name: 'Home', to: 'home'},
    { name: 'Explora', to: 'explora'},
    { name: 'Services', to: 'services'},
    { name: 'Packages', to: 'packages'},
    { name: 'Contact', to: 'contact'},
  ];
  return (
    <section id="explora" className="w-full bg-white rounded-t-[45px] py-10 px-5 lg:px-10">

      {/* Encabezado */}

      <div  data-aos="slide-up"
            data-aos-delay="300" className="flex justify-between items-center">
        <div>
          <p  className="text-gray-500 text-sm">Explora</p>

          <h2 className="text-4xl font-bold">
            Carrillo
          </h2>
        </div>

        <div  className="flex items-center gap-2 text-gray-500 text-sm">
          <FaMapMarkerAlt className="text-blue-600" />
          Carrillo Pto. Q.Roo
        </div>
      </div>

      {/* Barra de búsqueda */}

      <div className="mt-8 bg-gray-100 rounded-2xl flex items-center px-5 py-4">
        <FaSearch className="text-gray-400" />

        <input 
          type="text"
          placeholder="Encuentra algo nuevo"
          className="bg-transparent outline-none ml-3 w-full"
        />
      </div>

      {/* Categorías */}

      <div  data-aos="slide-up"
            data-aos-delay="300" className="flex gap-3 overflow-x-auto mt-8 pb-2">
        <button  className="onClick={()=>setMenuOpen(true) px-5 py-2 rounded-full whitespace-nowrap text-gray-500 hover:bg-blue-100 hover:text-blue-600 hover:font-bold">
          Cenotes
        </button>

        <button className="px-5 py-2 rounded-full whitespace-nowrap text-gray-500 hover:bg-blue-100 hover:text-blue-600 hover:font-bold">
          Hoteles
        </button>

        <button className="px-5 py-2 rounded-full whitespace-nowrap text-gray-500 hover:bg-blue-100 hover:text-blue-600 hover:font-bold">
          Comida
        </button>

        <button className="px-5 py-2 rounded-full whitespace-nowrap text-gray-500 hover:bg-blue-100 hover:text-blue-600 hover:font-bold">
          Historia
        </button>

        <button className="px-5 py-2 rounded-full whitespace-nowrap text-gray-500  hover:bg-blue-100 hover:text-blue-600 hover:font-bold">
          Artesanías
        </button>
      </div>

      {/* Populares */}

      <div  className="flex justify-between items-center mt-10">
        <h2 className="text-2xl font-bold">
          Los más populares
        </h2>

        <button className="text-blue-600 font-medium">
          Ver más
        </button>
      </div>

      <div  data-aos="slide-up"
            data-aos-delay="300" className="grid md:grid-cols-2 gap-6 mt-6">

        {/* Sijil */}

        <div  data-aos="slide-up"
            data-aos-delay="300"
          className="relative h-[320px] rounded-3xl overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${sijil})` }}
        >
          <div data-aos="slide-up"
            data-aos-delay="300" className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

          <div  data-aos="slide-up"
            data-aos-delay="300" className="absolute bottom-5 left-5">
            <div className="bg-black/60 text-white px-4 py-2 rounded-full">
              Sijil Noh Ha
            </div>

            <div  data-aos="slide-up"
            data-aos-delay="300" className="mt-3 bg-black/60 rounded-full px-4 py-2 flex items-center gap-2 w-fit">
              <FaStar className="text-yellow-400" />
              <span className="text-white">4.5</span>
            </div>
          </div>

          <button  data-aos="slide-up"
            data-aos-delay="300" className="absolute bottom-5 right-5 bg-white rounded-full p-3">
            <FaHeart className="text-red-500" />
          </button>
        </div>

        {/* Sayab */}

        <div  data-aos="slide-up"
            data-aos-delay="300"
          className="relative h-[320px] rounded-3xl overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${sayab})` }}
        >
          <div  data-aos="slide-up"
            data-aos-delay="300" className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

          <div  data-aos="slide-up"
            data-aos-delay="300" className="absolute bottom-5 left-5">
            <div  data-aos="slide-up"
            data-aos-delay="300" className="bg-black/60 text-white px-4 py-2 rounded-full">
              Sayab Kuxtal
            </div>

            <div   data-aos="slide-up"
            data-aos-delay="300" className="mt-3 bg-black/60 rounded-full px-4 py-2 flex items-center gap-2 w-fit">
              <FaStar className="text-yellow-400" />
              <span className="text-white">4.5</span>
            </div>
          </div>

          <button  data-aos="slide-up"
            data-aos-delay="300" className="absolute bottom-5 right-5 bg-white rounded-full p-3">
            <FaHeart className="text-red-500" />
          </button>
        </div>

      </div>

      {/* Recomendados */}

      <h2   className="text-2xl font-bold mt-12">
        Recomendado
      </h2>

      <div className="grid sm:grid-cols-2 gap-6 mt-6">

        {/* Museo */}

        <div  data-aos="slide-up"
            data-aos-delay="300">
          <div  data-aos="slide-up"
            data-aos-delay="300"
            className="relative h-60 rounded-2xl overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${museo})` }}
          >
            <span  data-aos="slide-up"
            data-aos-delay="300" className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
              Museo
            </span>
          </div>

          <h3  data-aos="slide-up"
            data-aos-delay="300" className="font-semibold text-lg mt-3">
            Museo Histórico
          </h3>
        </div>

        {/* Puerta al Mar */}

        <div  data-aos="slide-up"
            data-aos-delay="300">
          <div  data-aos="slide-up"
            data-aos-delay="300"
            className="relative h-60 rounded-2xl overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${puerta})` }}
          >
            <span  data-aos="slide-up"
            data-aos-delay="300"className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
              Playa
            </span>
          </div>

          <h3  data-aos="slide-up"
            data-aos-delay="300" className="font-semibold text-lg mt-3">
            Puerta al Mar
          </h3>
        </div>

      </div>

    </section>
  );
}

export default Explore;