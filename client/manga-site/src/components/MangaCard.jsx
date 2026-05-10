import { Link } from "react-router-dom"

function MangaCard({ manga }) {
  return (

    <Link to={`/manga/${manga.id}`}>

      <div className="group cursor-pointer">

        <div className="relative overflow-hidden rounded-2xl">

          {/* Cover */}
          <img
            src={manga.image}
            alt=""
            className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition duration-300"
          />

          {/* Tag */}
          <span className="absolute top-3 left-3 bg-[#ff4d4d] text-xs px-3 py-1 rounded-lg font-semibold">
            Latest
          </span>

        </div>

        {/* Info */}
        <div className="mt-3">

          <h2 className="font-bold text-lg">
            {manga.title}
          </h2>

          <p className="text-gray-400 text-sm">
            Chapter #{manga.chapter}
          </p>

        </div>

      </div>

    </Link>
  )
}

export default MangaCard