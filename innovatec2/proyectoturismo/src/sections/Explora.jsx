import React, { useMemo, useState } from "react";
import { FaMapMarkerAlt, FaSearch, FaStar, FaHeart } from "react-icons/fa";
import attractions, { categories } from "../data/attractionsData";
import AttractionDetail from "./AttractionDetail";

function Explore() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const filtered = useMemo(() => {
    return attractions.filter((a) => {
      const matchesCategory = activeCategory === "todos" || a.category === activeCategory;
      const matchesQuery = a.name.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const popular = filtered.slice(0, 2);
  const recommended = filtered.slice(2);

  return (
    <section
      id="explora"
      className="relative w-full bg-maya-sand rounded-t-[45px] py-10 px-5 sm:px-8 lg:px-12 mx-auto"
    >
      {/* franja decorativa superior estilo greca maya */}
      <div className="maya-band absolute top-0 left-0 right-0 h-2 rounded-t-[45px]" aria-hidden="true" />

      {/* Encabezado */}
      <div data-aos="slide-up" data-aos-delay="300" className="flex justify-between items-start pt-2">
        <div>
          <p className="text-maya-terracotta text-xs font-semibold tracking-widest uppercase">
            Explora
          </p>
          <h2 className="font-fakhwang text-3xl sm:text-4xl font-bold text-maya-ink">
            Carrillo
          </h2>
        </div>

        <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm bg-white/70 px-3 py-1.5 rounded-full">
          <FaMapMarkerAlt className="text-maya-jade" />
          Carrillo Pto. Q.Roo
        </div>
      </div>

      {/* Barra de búsqueda */}
      <div className="mt-6 bg-white rounded-2xl flex items-center px-5 py-3.5 shadow-sm border border-maya-jade/10">
        <FaSearch className="text-gray-400 shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Encuentra algo nuevo"
          className="bg-transparent outline-none ml-3 w-full text-sm"
        />
      </div>

      {/* Categorías */}
      <div
        data-aos="slide-up"
        data-aos-delay="300"
        className="flex gap-2 overflow-x-auto mt-6 pb-2 -mx-5 px-5 sm:mx-0 sm:px-0 scrollbar-hide"
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2 rounded-full whitespace-nowrap text-sm font-medium transition shrink-0 ${
              activeCategory === cat.id
                ? "bg-maya-jade text-white shadow"
                : "bg-white text-gray-500 hover:bg-maya-jade/10 hover:text-maya-jade"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 text-sm mt-10">
          No encontramos resultados para tu búsqueda.
        </p>
      )}

      {/* Populares */}
      {popular.length > 0 && (
        <>
          <div className="flex justify-between items-center mt-8">
            <h2 className="font-fakhwang text-xl sm:text-2xl font-bold text-maya-ink">
              Los más populares
            </h2>
          </div>

          <div
            data-aos="slide-up"
            data-aos-delay="300"
            className="grid sm:grid-cols-2 gap-5 mt-5"
          >
            {popular.map((a) => (
              <div
                key={a.id}
                onClick={() => setSelected(a)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelected(a)}
                className="relative h-[280px] sm:h-[320px] rounded-3xl overflow-hidden bg-cover bg-center cursor-pointer group"
                style={{ backgroundImage: `url(${a.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent group-hover:from-black/90 transition" />

                <span className="absolute top-4 left-4 bg-maya-gold text-maya-ink text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {a.categoryLabel}
                </span>

                <div className="absolute bottom-5 left-5 right-16">
                  <div className="bg-black/60 text-white px-4 py-2 rounded-full w-fit text-sm font-medium">
                    {a.name}
                  </div>

                  <div className="mt-3 bg-black/60 rounded-full px-4 py-2 flex items-center gap-2 w-fit">
                    <FaStar className="text-maya-gold" />
                    <span className="text-white text-sm">{a.rating}</span>
                  </div>
                </div>

                <button
                  onClick={(e) => toggleFavorite(a.id, e)}
                  aria-label="Guardar en favoritos"
                  className="absolute bottom-5 right-5 bg-white rounded-full p-3"
                >
                  <FaHeart className={favorites.includes(a.id) ? "text-red-500" : "text-gray-300"} />
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Recomendados */}
      {recommended.length > 0 && (
        <>
          <h2 className="font-fakhwang text-xl sm:text-2xl font-bold text-maya-ink mt-10">
            Recomendado
          </h2>

          <div className="grid sm:grid-cols-2 gap-5 mt-5">
            {recommended.map((a) => (
              <div
                key={a.id}
                onClick={() => setSelected(a)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelected(a)}
                data-aos="slide-up"
                data-aos-delay="300"
                className="cursor-pointer group"
              >
                <div
                  className="relative h-56 rounded-2xl overflow-hidden bg-cover bg-center"
                  style={{ backgroundImage: `url(${a.image})` }}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
                  <span className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                    {a.categoryLabel}
                  </span>
                  <button
                    onClick={(e) => toggleFavorite(a.id, e)}
                    aria-label="Guardar en favoritos"
                    className="absolute top-3 left-3 bg-white/90 rounded-full p-2.5"
                  >
                    <FaHeart className={favorites.includes(a.id) ? "text-red-500" : "text-gray-300"} />
                  </button>
                </div>

                <h3 className="font-semibold text-base sm:text-lg mt-3 text-maya-ink">
                  {a.name}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-0.5">
                  <FaStar className="text-maya-gold text-[11px]" />
                  {a.rating} ({a.reviews})
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {selected && (
        <AttractionDetail attraction={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

export default Explore;