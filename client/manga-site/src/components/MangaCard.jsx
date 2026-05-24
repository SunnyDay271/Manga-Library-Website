import { Link } from "react-router-dom"
import { useState } from "react"
import { proxyImage } from "../api/mangaApi"

function MangaCard({ manga }) {
  const [imgError, setImgError] = useState(false)

  return (
    <Link to={`/manga/${manga.id}`}>
      <div className="group cursor-pointer">
        <div className="relative overflow-hidden rounded-2xl bg-white/5">
          <img
            src={imgError ? "/fallback.jpg" : proxyImage(manga.image)}
            alt={manga.title}
            onError={() => setImgError(true)}
            className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition duration-300"
          />
          <span className="absolute top-3 left-3 bg-[#ff4d4d] text-xs px-3 py-1 rounded-lg font-semibold">
            Ch.{manga.chapter}
          </span>
        </div>
        <div className="mt-3">
          <h2 className="font-bold text-base leading-tight line-clamp-2">
            {manga.title}
          </h2>
          <p className="text-gray-400 text-sm mt-1">{manga.author}</p>
        </div>
      </div>
    </Link>
  )
}

export default MangaCard