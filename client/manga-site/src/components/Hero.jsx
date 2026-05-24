import { motion } from "framer-motion"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { MangaContext } from "../context/MangaContext"
import { proxyImage } from "../api/mangaApi"

function Hero() {
  const { toggleFavorite, favorites, mangaList, mangaLoading } = useContext(MangaContext)
  const navigate = useNavigate()

  const featuredManga = mangaList[0]

  const isFavorite = featuredManga
    ? favorites.find((item) => item.id === featuredManga.id)
    : false

  if (mangaLoading || !featuredManga) {
    return (
      <section className="relative w-full h-[500px] flex items-center justify-center bg-black">
        <p className="text-gray-400 text-lg">Loading...</p>
      </section>
    )
  }

  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Background banner image — proxied through localhost */}
      <img
        src={proxyImage(featuredManga.banner)}
        alt=""
        className="absolute w-full h-full object-cover opacity-20 blur-sm"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-10 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[450px]"
        >
          <span className="bg-[#ff4d4d] px-4 py-2 rounded-xl text-sm font-semibold">
            Latest 24hours
          </span>

          <h1 className="text-6xl font-bold mt-6 leading-tight">
            {featuredManga.title}
          </h1>

          <p className="text-gray-300 mt-4 text-lg">
            {featuredManga.description}
          </p>

          <div className="flex gap-4 mt-8">
            <button
              onClick={() => navigate("/reader")}
              className="bg-[#ff4d4d] px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              Read Now
            </button>

            <button
              onClick={() => toggleFavorite(featuredManga)}
              className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/10 hover:bg-white/20 transition"
            >
              {isFavorite ? "Saved ✓" : "Add Library"}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Cover image — proxied through localhost */}
          <img
            src={proxyImage(featuredManga.image)}
            alt={featuredManga.title}
            className="w-[350px] rounded-3xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero