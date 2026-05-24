import { useParams, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import ChapterList from "../components/ChapterList"
import { MangaContext } from "../context/MangaContext"
import { getMangaById } from "../api/mangaApi"

function MangaDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { favorites, toggleFavorite } = useContext(MangaContext)

  const [manga, setManga] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getMangaById(id).then((data) => {
      setManga(data)
      setLoading(false)
    })
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center">
        <p className="text-white text-xl">Loading...</p>
      </div>
    )
  }

  if (!manga) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center">
        <p className="text-white text-xl">Manga not found.</p>
      </div>
    )
  }

  const isFavorite = favorites.find((item) => item.id === manga.id)

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Navbar />

      <section className="relative h-[400px] overflow-hidden">
        <img
          src={manga.banner || manga.image}
          alt=""
          className="absolute w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-[1400px] mx-auto h-full px-10 flex items-center gap-10">
          <img
            src={manga.image}
            alt={manga.title}
            className="w-[250px] rounded-3xl shadow-2xl object-cover"
          />

          <div>
            <h1 className="text-6xl font-bold">{manga.title}</h1>
            <p className="text-gray-400 mt-3 text-lg">{manga.author}</p>

            <div className="flex gap-3 mt-5 flex-wrap">
              {manga.genres.map((genre, index) => (
                <span
                  key={index}
                  className="bg-white/10 border border-white/10 px-4 py-2 rounded-xl text-sm"
                >
                  {genre}
                </span>
              ))}
            </div>

            <p className="max-w-[700px] text-gray-300 mt-6 leading-relaxed">
              {manga.description}
            </p>

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => navigate("/reader")}
                className="bg-[#ff4d4d] px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
              >
                Start Reading
              </button>

              <button
                onClick={() => toggleFavorite(manga)}
                className="bg-white/10 border border-white/10 px-6 py-3 rounded-xl hover:bg-white/20 transition"
              >
                {isFavorite ? "Saved ✓" : "Add Library"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-10 py-10">
        <ChapterList />
      </div>
    </div>
  )
}

export default MangaDetail