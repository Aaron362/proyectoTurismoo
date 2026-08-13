import React, { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaHeart,
  FaStar,
  FaMapMarkerAlt,
  FaHistory,
  FaHeadphones,
  FaPlay,
  FaPause,
  FaCamera,
  FaVideo,
  FaLeaf,
  FaPaw,
  FaMapMarkedAlt,
  FaUtensils,
  FaClock,
  FaDirections,
  FaCloudSun,
  FaRecycle,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

// Divisor decorativo inspirado en las grecas escalonadas (xot) de la
// arquitectura maya. Se usa entre secciones para reforzar la identidad visual.
function MayaDivider() {
  return (
    <div className="maya-divider" aria-hidden="true">
      <svg viewBox="0 0 120 10" preserveAspectRatio="none" className="w-full h-2">
        <path
          d="M0 10 L10 10 L10 4 L20 4 L20 10 L30 10 L30 0 L40 0 L40 10 L50 10 L50 4 L60 4 L60 10 L70 10 L70 0 L80 0 L80 10 L90 10 L90 4 L100 4 L100 10 L110 10 L110 0 L120 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

function SectionHeader({ icon, title }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-maya-jade/10 text-maya-jade shrink-0">
        {icon}
      </span>
      <h3 className="font-fakhwang text-lg font-bold text-maya-ink">{title}</h3>
    </div>
  );
}

function AttractionDetail({ attraction, onClose }) {
  const [liked, setLiked] = useState(false);
  const [galleryTab, setGalleryTab] = useState("current");
  const [activeImg, setActiveImg] = useState(0);
  const [speaking, setSpeaking] = useState(false);

  // Bloquea el scroll del body mientras el panel está abierto
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Cierra con la tecla Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Detiene la síntesis de voz (audioguía) al cerrar el panel
  useEffect(() => {
    return () => {
      window.speechSynthesis?.cancel();
    };
  }, []);

  if (!attraction) return null;

  const images = attraction.gallery[galleryTab] || [];

  const handleAudioGuide = () => {
    if (!("speechSynthesis" in window)) {
      alert("Tu navegador no soporta la audioguía por voz.");
      return;
    }
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    const text = `${attraction.name}. ${attraction.history}`;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "es-MX";
    utterance.rate = 0.95;
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(utterance);
    setSpeaking(true);
  };

  const mapSrc = `https://www.google.com/maps?q=${attraction.coords.lat},${attraction.coords.lng}&z=15&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${attraction.coords.lat},${attraction.coords.lng}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-maya-sand w-full sm:max-w-xl sm:rounded-[32px] rounded-t-[32px] max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Imagen principal */}
        <div
          className="relative h-64 sm:h-72 bg-cover bg-center"
          style={{ backgroundImage: `url(${attraction.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />

          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute top-4 left-4 bg-white/90 rounded-full p-3 shadow hover:bg-white transition"
          >
            <FaArrowLeft className="text-maya-ink" />
          </button>

          <button
            onClick={() => setLiked((v) => !v)}
            aria-label="Guardar en favoritos"
            className="absolute top-4 right-4 bg-white/90 rounded-full p-3 shadow hover:bg-white transition"
          >
            <FaHeart className={liked ? "text-red-500" : "text-gray-400"} />
          </button>

          <span className="absolute bottom-4 left-4 bg-maya-gold text-maya-ink text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            {attraction.categoryLabel}
          </span>
        </div>

        <MayaDivider />

        <div className="px-5 sm:px-8 pb-28 pt-5">
          {/* Encabezado */}
          <div className="flex justify-between items-start gap-3">
            <div>
              <h2 className="font-fakhwang text-2xl sm:text-3xl font-bold text-maya-ink">
                {attraction.name}
              </h2>
              <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                <FaMapMarkerAlt className="text-maya-terracotta" />
                {attraction.location}
              </div>
            </div>
            <div className="flex items-center gap-1 bg-maya-jade/10 px-3 py-1.5 rounded-full shrink-0">
              <FaStar className="text-maya-gold" />
              <span className="font-semibold text-maya-ink text-sm">{attraction.rating}</span>
              <span className="text-gray-400 text-xs">({attraction.reviews})</span>
            </div>
          </div>

          <p className="text-gray-600 text-sm sm:text-base mt-4 leading-relaxed">
            {attraction.shortDescription}
          </p>

          {/* Facilidades */}
          <div className="flex flex-wrap gap-2 mt-4">
            {attraction.facilities.map((f) => (
              <span
                key={f}
                className="text-xs font-medium bg-white border border-maya-jade/20 text-maya-ink px-3 py-1.5 rounded-full"
              >
                {f}
              </span>
            ))}
          </div>

          <MayaDivider />

          {/* Historia */}
          <section className="mt-2">
            <SectionHeader icon={<FaHistory />} title="Historia del lugar" />
            <p className="text-gray-600 text-sm leading-relaxed">{attraction.history}</p>
          </section>

          <MayaDivider />

          {/* Audioguía */}
          <section>
            <SectionHeader icon={<FaHeadphones />} title="Audioguía" />
            <button
              onClick={handleAudioGuide}
              className="w-full flex items-center justify-between bg-white border border-maya-jade/20 rounded-2xl px-4 py-3.5 hover:border-maya-jade transition"
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-maya-terracotta text-white">
                  {speaking ? <FaPause /> : <FaPlay className="ml-0.5" />}
                </span>
                <div className="text-left">
                  <p className="text-sm font-semibold text-maya-ink">
                    {speaking ? "Reproduciendo…" : "Escuchar reseña narrada"}
                  </p>
                  <p className="text-xs text-gray-400">Narración generada por voz del navegador</p>
                </div>
              </div>
              {speaking && (
                <span className="flex gap-0.5 items-end h-4">
                  <span className="w-1 bg-maya-terracotta animate-audioBar1 h-2 rounded-full" />
                  <span className="w-1 bg-maya-terracotta animate-audioBar2 h-4 rounded-full" />
                  <span className="w-1 bg-maya-terracotta animate-audioBar3 h-3 rounded-full" />
                </span>
              )}
            </button>
          </section>

          <MayaDivider />

          {/* Galería: actuales y antiguas */}
          <section>
            <SectionHeader icon={<FaCamera />} title="Fotografías" />
            <div className="flex gap-2 mb-3">
              <button
                onClick={() => {
                  setGalleryTab("current");
                  setActiveImg(0);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${
                  galleryTab === "current"
                    ? "bg-maya-jade text-white"
                    : "bg-white text-gray-500 border border-maya-jade/20"
                }`}
              >
                Actuales
              </button>
              <button
                onClick={() => {
                  setGalleryTab("historic");
                  setActiveImg(0);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${
                  galleryTab === "historic"
                    ? "bg-maya-jade text-white"
                    : "bg-white text-gray-500 border border-maya-jade/20"
                }`}
              >
                Históricas
              </button>
            </div>

            <div className="relative h-52 rounded-2xl overflow-hidden">
              <img
                src={images[activeImg]}
                alt={`${attraction.name} ${galleryTab === "historic" ? "histórica" : "actual"}`}
                className={`w-full h-full object-cover transition ${
                  galleryTab === "historic" ? "grayscale sepia-[.4] contrast-110" : ""
                }`}
              />
              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImg((i) => (i - 1 + images.length) % images.length)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2"
                    aria-label="Anterior"
                  >
                    <FaChevronLeft className="text-maya-ink text-sm" />
                  </button>
                  <button
                    onClick={() => setActiveImg((i) => (i + 1) % images.length)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2"
                    aria-label="Siguiente"
                  >
                    <FaChevronRight className="text-maya-ink text-sm" />
                  </button>
                </>
              )}
            </div>
            {galleryTab === "historic" && (
              <p className="text-[11px] text-gray-400 mt-2 italic">
                Tratamiento ilustrativo mientras se integra el archivo fotográfico histórico original.
              </p>
            )}
          </section>

          <MayaDivider />

          {/* Videos */}
          <section>
            <SectionHeader icon={<FaVideo />} title="Video" />
            {attraction.videoUrl ? (
              <div className="rounded-2xl overflow-hidden aspect-video">
                <iframe
                  src={attraction.videoUrl}
                  title={`Video de ${attraction.name}`}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-maya-jade/30 bg-white/60 flex flex-col items-center justify-center py-8 text-center">
                <FaVideo className="text-maya-jade/40 text-2xl mb-2" />
                <p className="text-sm text-gray-500">Video institucional próximamente</p>
              </div>
            )}
          </section>

          <MayaDivider />

          {/* Flora y fauna */}
          <section>
            <SectionHeader icon={<FaLeaf />} title="Flora y fauna" />
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-white rounded-2xl p-4 border border-maya-jade/10">
                <p className="flex items-center gap-2 text-sm font-semibold text-maya-jade mb-2">
                  <FaLeaf /> Flora
                </p>
                <ul className="space-y-1.5">
                  {attraction.flora.map((item) => (
                    <li key={item} className="text-xs text-gray-600 leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-maya-jade/10">
                <p className="flex items-center gap-2 text-sm font-semibold text-maya-terracotta mb-2">
                  <FaPaw /> Fauna
                </p>
                <ul className="space-y-1.5">
                  {attraction.fauna.map((item) => (
                    <li key={item} className="text-xs text-gray-600 leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <MayaDivider />

          {/* Ubicación */}
          <section>
            <SectionHeader icon={<FaMapMarkedAlt />} title="Ubicación en el mapa" />
            <div className="rounded-2xl overflow-hidden h-52 border border-maya-jade/10">
              <iframe
                title={`Mapa de ${attraction.name}`}
                src={mapSrc}
                className="w-full h-full"
                loading="lazy"
              />
            </div>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 w-full bg-maya-ink text-white text-sm font-semibold py-3 rounded-2xl hover:bg-black transition"
            >
              <FaDirections /> Cómo llegar
            </a>
          </section>

          <MayaDivider />

          {/* Negocios cercanos */}
          <section>
            <SectionHeader icon={<FaUtensils />} title="Negocios cercanos" />
            <div className="space-y-2">
              {attraction.nearbyBusinesses.map((b) => (
                <div
                  key={b.name}
                  className="flex items-center justify-between bg-white rounded-2xl px-4 py-3 border border-maya-jade/10"
                >
                  <div>
                    <p className="text-sm font-semibold text-maya-ink">{b.name}</p>
                    <p className="text-xs text-gray-400">{b.type}</p>
                  </div>
                  <span className="text-xs font-medium text-maya-jade bg-maya-jade/10 px-2.5 py-1 rounded-full">
                    {b.distance}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <MayaDivider />

          {/* Horarios y recomendaciones */}
          <section>
            <SectionHeader icon={<FaClock />} title="Horarios y recomendaciones" />
            <div className="bg-white rounded-2xl p-4 border border-maya-jade/10 space-y-3">
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-maya-ink">Horario: </span>
                {attraction.schedule.hours}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-maya-ink">Mejor momento: </span>
                {attraction.schedule.bestTime}
              </p>
              <ul className="space-y-1.5 pt-1">
                {attraction.schedule.recommendations.map((r) => (
                  <li key={r} className="text-xs text-gray-600 leading-relaxed">
                    ✓ {r}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <MayaDivider />

          {/* Información ambiental */}
          <section>
            <SectionHeader icon={<FaCloudSun />} title="Información ambiental" />
            <div className="bg-white rounded-2xl p-4 border border-maya-jade/10 space-y-2">
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-maya-ink">Clima: </span>
                {attraction.environment.climate}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-maya-ink">Temporada de lluvias: </span>
                {attraction.environment.rainySeason}
              </p>
              <p className="text-xs text-gray-600 flex gap-2 pt-1 leading-relaxed">
                <FaRecycle className="text-maya-jade shrink-0 mt-0.5" />
                {attraction.environment.conservation}
              </p>
            </div>
          </section>
        </div>

        {/* Barra inferior fija */}
        <div className="sticky bottom-0 left-0 right-0 bg-maya-sand/95 backdrop-blur border-t border-maya-jade/10 px-5 sm:px-8 py-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400">Desde</p>
            <p className="text-xl font-bold text-maya-jade">{attraction.price}</p>
          </div>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-maya-terracotta hover:bg-maya-ink text-white font-semibold px-8 py-3 rounded-full transition flex items-center gap-2"
          >
            Visitar <FaArrowLeft className="rotate-180" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AttractionDetail;
