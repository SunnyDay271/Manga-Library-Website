import { useContext } from "react"
import { MangaContext } from "../context/MangaContext"

import Navbar from "../components/Navbar"
import MangaCard from "../components/MangaCard"

function Favorites() {

  const { favorites } =
    useContext(MangaContext)

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">

      <Navbar />

      <div className="max-w-[1400px] mx-auto px-10 py-10">

        <h1 className="text-4xl font-bold mb-10">
          Your Library
        </h1>

        {favorites.length === 0 ? (

          <p className="text-gray-400">
            No saved manga yet.
          </p>

        ) : (

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {favorites.map((manga) => (

              <MangaCard
                key={manga.id}
                manga={manga}
              />

            ))}

          </div>

        )}

      </div>

    </div>
  )
}

export default Favorites