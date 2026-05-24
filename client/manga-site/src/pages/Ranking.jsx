import { useContext } from "react"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import { MangaContext } from "../context/MangaContext"
import { proxyImage } from "../api/mangaApi"

function Ranking() {
  const { mangaList, mangaLoading } = useContext(MangaContext)

  const ranked = [...mangaList].sort((a, b) => b.views - a.views)

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Navbar />

      <div className="max-w-[900px] mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-2">Ranking</h1>
        <p className="text-gray-400 mb-10">Top manga by total views</p>

        {mangaLoading ? (
          <div className="flex flex-col gap-4">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="h-24 bg-white/5 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {ranked.map((manga, index) => (
              <Link to={`/manga/${manga.id}`} key={manga.id}>
                <div className="flex items-center gap-6 bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition group">
                  <span
                    className={`text-3xl font-bold w-10 text-center flex-shrink-0 ${
                      index === 0 ? "text-yellow-400"
                      : index === 1 ? "text-gray-300"
                      : index === 2 ? "text-amber-600"
                      : "text-gray-600"
                    }`}
                  >
                    {index + 1}
                  </span>

                  <img
                    src={proxyImage(manga.image)}
                    alt={manga.title}
                    className="w-14 h-20 object-cover rounded-xl flex-shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <h2 className="font-bold text-lg group-hover:text-[#ff4d4d] transition truncate">
                      {manga.title}
                    </h2>
                    <p className="text-gray-400 text-sm">{manga.author}</p>
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {manga.genres.map((g, i) => (
                        <span key={i} className="text-xs bg-white/10 px-2 py-1 rounded-lg">
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-right flex-shrink-0">
                    <p className="text-[#ff4d4d] font-bold text-lg">
                      {(manga.views / 1000).toFixed(0)}K
                    </p>
                    <p className="text-gray-400 text-xs">views</p>
                    <p className="text-gray-300 text-sm mt-1">Ch. {manga.chapter}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Ranking