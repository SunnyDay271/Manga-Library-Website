import { useParams } from "react-router-dom"
import mangaData from "../data/mangaData"
import Navbar from "../components/Navbar"
import ChapterList from "../components/ChapterList"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { MangaContext } from "../context/MangaContext"

function MangaDetail() {

  const { id } = useParams()

  const manga = mangaData.find(
    (item) => item.id === parseInt(id)
  )

  const { favorites, toggleFavorite } =
  useContext(MangaContext)

  const isFavorite = favorites.find(
    (item) => item.id === manga.id
    )

  if (!manga) {
    return <h1>Manga Not Found</h1>
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">

      <Navbar />

      {/* Banner */}
      <section className="relative h-[400px] overflow-hidden">

        <img
          src={manga.banner}
          alt=""
          className="absolute w-full h-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-[1400px] mx-auto h-full px-10 flex items-center gap-10">

          {/* Cover */}
          <img
            src={manga.image}
            alt=""
            className="w-[250px] rounded-3xl shadow-2xl"
          />

          {/* Info */}
          <div>

            <h1 className="text-6xl font-bold">
              {manga.title}
            </h1>

            <p className="text-gray-400 mt-3 text-lg">
              {manga.author}
            </p>

            <div className="flex gap-3 mt-5">

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

            <Link to="/reader">

                <div className="flex gap-4 mt-8">

            <Link to="/reader">

                <button className="bg-[#ff4d4d] px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
                    Start Reading
                </button>

            </Link>

                <button
                    onClick={() => toggleFavorite(manga)}
                    className="bg-white/10 border border-white/10 px-6 py-3 rounded-xl hover:bg-white/20 transition"
                >
                    {isFavorite ? "Saved ✓" : "Add Library"}
                </button>

            </div>

            </Link>

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