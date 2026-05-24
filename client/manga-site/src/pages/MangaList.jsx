import { useState, useMemo, useContext } from "react"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import { MangaContext } from "../context/MangaContext"
import { proxyImage } from "../api/mangaApi"

const ALL_GENRES = [
  "All", "Action", "Adventure", "Comedy", "Drama",
  "Fantasy", "Historical", "Horror", "Romance",
  "Sci-Fi", "Shounen", "Slice of Life", "Sports",
  "Supernatural",
]

const statusMap = {
  1: "ongoing", 2: "ongoing", 3: "ongoing", 4: "ongoing",
  5: "ongoing", 6: "ongoing", 7: "completed", 8: "ongoing",
  9: "completed", 10: "completed",
}

function MangaList() {
  const { mangaList, mangaLoading } = useContext(MangaContext)

  const [tab, setTab] = useState("ongoing")
  const [genre, setGenre] = useState("All")
  const [sort, setSort] = useState("az")
  const [search, setSearch] = useState("")

  const filtered = useMemo(() => {
    let list = mangaList.filter((m) => (statusMap[m.id] || "ongoing") === tab)

    if (genre !== "All") {
      list = list.filter((m) => m.genres?.includes(genre))
    }

    if (search.trim()) {
      list = list.filter((m) =>
        m.title.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (sort === "az") list = [...list].sort((a, b) => a.title.localeCompare(b.title))
    if (sort === "za") list = [...list].sort((a, b) => b.title.localeCompare(a.title))
    if (sort === "views") list = [...list].sort((a, b) => b.views - a.views)
    if (sort === "chapter") list = [...list].sort((a, b) => parseInt(b.chapter) - parseInt(a.chapter))

    return list
  }, [mangaList, tab, genre, sort, search])

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Navbar />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-10">

        <h1 className="text-4xl font-bold mb-1">Manga List</h1>
        <p className="text-gray-400 mb-8">Browse all available manga</p>

        {/* Tabs */}
        <div className="flex border-b border-white/10 mb-8">
          {["ongoing", "completed", "one-shot"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-6 py-3 text-sm font-semibold capitalize transition border-b-2 -mb-[2px] ${
                tab === t
                  ? "border-[#ff4d4d] text-white"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              {t === "one-shot" ? "One-shot" : t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search manga title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl outline-none flex-1 text-sm"
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl outline-none text-sm text-white cursor-pointer"
          >
            <option value="az" className="bg-[#1a1a1a]">A to Z</option>
            <option value="za" className="bg-[#1a1a1a]">Z to A</option>
            <option value="views" className="bg-[#1a1a1a]">Most Views</option>
            <option value="chapter" className="bg-[#1a1a1a]">Latest Chapter</option>
          </select>
        </div>

        {/* Genre Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {ALL_GENRES.map((g) => (
            <button
              key={g}
              onClick={() => setGenre(g)}
              className={`px-4 py-2 rounded-xl text-sm transition ${
                genre === g
                  ? "bg-[#ff4d4d] text-white font-semibold"
                  : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10"
              }`}
            >
              {g}
            </button>
          ))}
        </div>

        <p className="text-gray-400 text-sm mb-6">
          {filtered.length} title{filtered.length !== 1 ? "s" : ""} found
        </p>

        {/* Loading skeletons */}
        {mangaLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-5">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="aspect-[3/4] bg-white/5 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="bg-white/5 border border-white/10 rounded-3xl p-16 text-center">
            <h2 className="text-2xl font-bold">No manga found</h2>
            <p className="text-gray-400 mt-3">Try a different filter or tab.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-5">
            {filtered.map((manga) => (
              <Link to={`/manga/${manga.id}`} key={manga.id} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-white/5">
                  <img
                    src={proxyImage(manga.image)}
                    alt={manga.title}
                    className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition duration-300"
                  />
                  <span className="absolute top-2 left-2 bg-[#ff4d4d] text-xs px-2 py-1 rounded-lg font-semibold">
                    Ch.{manga.chapter}
                  </span>
                </div>
                <div className="mt-2">
                  <h3 className="font-semibold text-sm leading-tight line-clamp-2">
                    {manga.title}
                  </h3>
                  <p className="text-gray-400 text-xs mt-1 truncate">{manga.author}</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {manga.genres?.slice(0, 2).map((g, i) => (
                      <span key={i} className="text-[10px] bg-white/10 px-2 py-0.5 rounded-md text-gray-300">
                        {g}
                      </span>
                    ))}
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

export default MangaList