import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import readerPages from "../data/readerData"

function ReaderPage() {

  const scrollRef = useRef(null)

  const [progress, setProgress] = useState(0)

  // Save Continue Reading
    useEffect(() => {

        localStorage.setItem(

            "continue",

            JSON.stringify({
                title: "One Piece",
                image:
                    "https://cdn.myanimelist.net/images/manga/2/253146.jpg",
                })

        )

    }, [])

  // Reading Progress
  useEffect(() => {

    const container = scrollRef.current

    const handleScroll = () => {

      const scrollLeft = container.scrollLeft

      const maxScroll =
        container.scrollWidth - container.clientWidth

      const percentage = (scrollLeft / maxScroll) * 100

      setProgress(percentage)
    }

    container.addEventListener("scroll", handleScroll)

    return () =>
      container.removeEventListener("scroll", handleScroll)

  }, [])

  return (
    <div className="h-screen bg-[#0a0a0a] flex flex-col overflow-hidden">

      {/* Top Controls */}
      <div className="h-16 border-b border-white/10 bg-black/40 backdrop-blur-xl flex items-center justify-between px-8">

        <Link
            to="/"
            className="text-sm text-gray-300 hover:text-white transition"
        >
            ← Back
        </Link>

        <h1 className="font-semibold">
          One Piece — Chapter 1182
        </h1>

        <button className="bg-[#ff4d4d] px-4 py-2 rounded-xl text-sm">
          Next Chapter
        </button>

      </div>

      {/* Reader */}
      <div
        ref={scrollRef}
        className="reader-scroll flex-1 overflow-x-auto overflow-y-hidden flex gap-6 px-10 py-10 scroll-smooth snap-x snap-mandatory"
      >

        {readerPages.map((page, index) => (

          <div
            key={index}
            className="min-w-[32%] snap-center flex-shrink-0"
          >

            <img
              src={page}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover rounded-3xl"
            />

          </div>

        ))}

      </div>

      {/* Bottom Progress Bar */}
      <div className="h-20 border-t border-white/10 bg-black/50 backdrop-blur-xl px-10 flex flex-col justify-center">

        <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">

          <div
            style={{ width: `${progress}%` }}
            className="h-full bg-[#ff4d4d] transition-all"
          />

        </div>

        <p className="text-sm text-gray-400 mt-2">
          {Math.floor(progress)}% completed
        </p>

      </div>

    </div>
  )
}

export default ReaderPage