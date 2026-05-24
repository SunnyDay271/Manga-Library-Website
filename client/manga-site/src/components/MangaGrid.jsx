import { useContext } from "react"
import { Link, useLocation } from "react-router-dom"
import MangaCard from "./MangaCard"
import { MangaContext } from "../context/MangaContext"

function MangaGrid({ selectedGenre = "All" }) {
  const { mangaList, mangaLoading } = useContext(MangaContext)
  const location = useLocation()

  const queryParams = new URLSearchParams(location.search)
  const search = queryParams.get("search")?.toLowerCase() || ""

  const filtered = mangaList
    .filter((manga) => manga.title.toLowerCase().includes(search))
    .filter((manga) =>
      selectedGenre === "All" || manga.genres?.includes(selectedGenre)
    )
    .slice(0, 8)

  if (mangaLoading) {
    return (
      <section>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Trending Manga</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="aspect-[3/4] bg-white/5 rounded-2xl animate-pulse"
            />
          ))}
        </div>
      </section>
    )
  }

  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Trending Manga</h1>
        <Link to="/manga-list" className="text-[#ff4d4d] hover:underline text-sm">
          View All
        </Link>
      </div>

      {filtered.length === 0 ? (
        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-bold">No Manga Found</h2>
          <p className="text-gray-400 mt-3">Try searching another title.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((manga) => (
            <MangaCard key={manga.id} manga={manga} />
          ))}
        </div>
      )}
    </section>
  )
}

export default MangaGrid