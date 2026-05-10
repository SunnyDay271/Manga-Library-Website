import { createContext, useEffect, useState } from "react"

export const MangaContext = createContext()

function MangaProvider({ children }) {

  const [favorites, setFavorites] = useState(() => {

    const saved =
      localStorage.getItem("favorites")

    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    )

  }, [favorites])

  const toggleFavorite = (manga) => {

    const exists = favorites.find(
      (item) => item.id === manga.id
    )

    if (exists) {

      setFavorites(
        favorites.filter(
          (item) => item.id !== manga.id
        )
      )

    } else {

      setFavorites([...favorites, manga])

    }
  }

  return (
    <MangaContext.Provider
      value={{
        favorites,
        toggleFavorite,
      }}
    >
      {children}
    </MangaContext.Provider>
  )
}

export default MangaProvider