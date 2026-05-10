import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

function Navbar() {

  const [search, setSearch] = useState("")

  const navigate = useNavigate()

  // Search Handler
  const handleSearch = (e) => {

    if (e.key === "Enter") {

      if (search.trim() !== "") {

        navigate(`/?search=${search}`)

      }

    }

  }

  return (

    <nav className="sticky top-0 z-50 w-full h-20 bg-black/40 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-10">

      {/* Logo */}
      <Link to="/">

        <h1 className="text-3xl font-bold text-[#ff4d4d] cursor-pointer">
          MANGA WEB
        </h1>

      </Link>

      {/* Navigation */}
      <div className="flex gap-8 text-sm">

        <Link
          to="/"
          className="hover:text-[#ff4d4d] transition"
        >
          Updates
        </Link>

        <Link
          to="/"
          className="hover:text-[#ff4d4d] transition"
        >
          Featured
        </Link>

        <Link
          to="/"
          className="hover:text-[#ff4d4d] transition"
        >
          Ranking
        </Link>

        <Link
          to="/"
          className="hover:text-[#ff4d4d] transition"
        >
          Manga List
        </Link>

        <Link
          to="/library"
          className="hover:text-[#ff4d4d] transition"
        >
          Library
        </Link>

      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search manga..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleSearch}
        className="bg-[#1f1f1f] px-4 py-2 rounded-lg outline-none border border-white/10 w-[220px]"
      />

    </nav>

  )
}

export default Navbar