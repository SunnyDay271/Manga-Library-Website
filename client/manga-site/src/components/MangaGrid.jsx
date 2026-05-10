import MangaCard from "./MangaCard"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { getManga } from "../api/mangaApi"

function MangaGrid({ selectedGenre = "All" }) {

  const location = useLocation()

  const [mangaData, setMangaData] =
    useState([])

  useEffect(() => {

    const fetchManga = async () => {

      const data = await getManga()

      console.log("API DATA:", data)

      setMangaData(data)

    }

    fetchManga()

  }, [])

  // Get Search Query
  const queryParams =
    new URLSearchParams(location.search)

  const search =
    queryParams.get("search")?.toLowerCase() || ""

  // Filter Manga
  const filteredManga = mangaData.filter((manga) => {

    // Search Match
    const matchesSearch =
      manga.title
        .toLowerCase()
        .includes(search)

    // Genre Match
    const matchesGenre =
      selectedGenre === "All" ||
      manga.genres.includes(selectedGenre)

    return matchesSearch && matchesGenre

  })

  return (

    <section>

      {/* Header */}
      <div className="flex items-center justify-between mb-8">

        <h1 className="text-3xl font-bold">
          Trending Manga
        </h1>

        <button className="text-[#ff4d4d]">
          View All
        </button>

      </div>

      {/* Empty State */}
      {filteredManga.length === 0 ? (

        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center">

          <h2 className="text-2xl font-bold">
            No Manga Found
          </h2>

          <p className="text-gray-400 mt-3">
            Try searching another title.
          </p>

        </div>

      ) : (

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {filteredManga.map((manga) => (

            <MangaCard
              key={manga.id}
              manga={manga}
            />

          ))}

        </div>

      )}

    </section>

  )

}

export default MangaGrid