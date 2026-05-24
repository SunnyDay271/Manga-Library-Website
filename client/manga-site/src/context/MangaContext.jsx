import { createContext, useEffect, useState, useContext } from "react"
import { getManga } from "../api/mangaApi"

export const MangaContext = createContext()

function MangaProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites")
    return saved ? JSON.parse(saved) : []
  })

  // Global manga list — fetched once, used everywhere
  const [mangaList, setMangaList] = useState([])
  const [mangaLoading, setMangaLoading] = useState(true)

  useEffect(() => {
    getManga().then((data) => {
      setMangaList(data)
      setMangaLoading(false)
    })
  }, [])

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorite = (manga) => {
    const exists = favorites.find((item) => item.id === manga.id)
    if (exists) {
      setFavorites(favorites.filter((item) => item.id !== manga.id))
    } else {
      setFavorites([...favorites, manga])
    }
  }

  return (
    <MangaContext.Provider
      value={{
        favorites,
        toggleFavorite,
        mangaList,
        mangaLoading,
      }}
    >
      {children}
    </MangaContext.Provider>
  )
}

export default MangaProvider