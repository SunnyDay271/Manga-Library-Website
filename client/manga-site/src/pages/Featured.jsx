import { useContext } from "react"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import { MangaContext } from "../context/MangaContext"

const categories = [
  { label: "Action & Adventure", filter: (m) => m.genres?.includes("Action") },
  { label: "Romance & Slice of Life", filter: (m) => m.genres?.includes("Romance") || m.genres?.includes("Slice of Life") },
  { label: "Comedy & Sci-Fi", filter: (m) => m.genres?.includes("Comedy") || m.genres?.includes("Sci-Fi") },
  { label: "Drama & Historical", filter: (m) => m.genres?.includes("Drama") || m.genres?.includes("Historical") },
]

function FeaturedCard({ manga }) {
  return (
    <Link to={`/manga/${manga.id}`} className="flex-shrink-0 w-[160px] group">
      <div className="relative overflow-hidden rounded-2xl bg-white/5">
        <img
          src={manga.image}
          alt={manga.title}
          className="w-[160px] h-[220px] object-cover group-hover:scale-105 transition duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <span className="absolute bottom-3 left-3 right-3 text-sm font-semibold leading-tight line-clamp-2">
          {manga.title}
        </span>
        <span className="absolute top-3 left-3 bg-[#ff4d4d] text-xs px-2 py-1 rounded-lg font-semibold">
          Ch.{manga.chapter}
        </span>
      </div>
      <p className="text-gray-400 text-xs mt-2 truncate">{manga.author}</p>
    </Link>
  )
}

function Featured() {
  const { mangaList, mangaLoading } = useContext(MangaContext)

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative w-full h-[220px] overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=2070"
          alt=""
          className="absolute w-full h-full object-cover opacity-20 blur-sm"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center">
          <span className="bg-[#ff4d4d] px-4 py-1 rounded-xl text-sm font-semibold">
            Special Feature Archive
          </span>
          <h1 className="text-5xl font-bold mt-4">Featured Updates</h1>
          <p className="text-gray-400 mt-2">Latest chapters across all series</p>
        </div>
      </section>

      {/* Category Rows */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-10 flex flex-col gap-14">
        {mangaLoading ? (
          <div className="flex gap-5 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-[160px] h-[220px] bg-white/5 rounded-2xl flex-shrink-0 animate-pulse" />
            ))}
          </div>
        ) : (
          categories.map((cat) => {
            const items = mangaList.filter(cat.filter)
            if (items.length === 0) return null
            return (
              <section key={cat.label}>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">{cat.label}</h2>
                  <Link to="/manga-list" className="text-[#ff4d4d] text-sm hover:underline">
                    View All
                  </Link>
                </div>
                <div className="flex gap-5 overflow-x-auto pb-3" style={{ scrollbarWidth: "none" }}>
                  {items.map((manga) => (
                    <FeaturedCard key={manga.id} manga={manga} />
                  ))}
                </div>
              </section>
            )
          })
        )}
      </div>
    </div>
  )
}

export default Featured