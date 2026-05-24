import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { MangaContext } from "../context/MangaContext"
import { proxyImage } from "../api/mangaApi"

function RankingSidebar() {
  const { mangaList } = useContext(MangaContext)
  const navigate = useNavigate()

  const top5 = [...mangaList]
    .sort((a, b) => b.views - a.views)
    .slice(0, 5)

  return (
    <aside className="w-full lg:w-[320px]">
      <div className="sticky top-24">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Hottest</h2>
            <Link to="/ranking" className="text-[#ff4d4d] text-sm hover:underline">
              View All
            </Link>
          </div>

          <div className="space-y-5">
            {top5.map((manga, index) => (
              <div
                key={manga.id}
                onClick={() => navigate(`/manga/${manga.id}`)}
                className="flex gap-4 items-center group cursor-pointer"
              >
                <span className="text-2xl font-bold text-gray-500 w-6">
                  {index + 1}
                </span>
                <img
                  src={proxyImage(manga.image)}
                  alt={manga.title}
                  className="w-16 h-20 object-cover rounded-xl"
                />
                <div className="flex-1">
                  <h3 className="font-semibold group-hover:text-[#ff4d4d] transition line-clamp-1">
                    {manga.title}
                  </h3>
                  <p className="text-sm text-gray-400">{manga.author}</p>
                  <p className="text-sm mt-1 text-gray-300">
                    {(manga.views / 1000).toFixed(0)}K views
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default RankingSidebar