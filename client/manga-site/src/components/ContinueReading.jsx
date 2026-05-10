import { Link } from "react-router-dom"

function ContinueReading() {

  // Get Saved Data
  const manga =
    JSON.parse(localStorage.getItem("continue"))

  // If Nothing Saved
  if (!manga) return null

  return (

    <section className="mb-12">

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">
        Continue Reading
      </h1>

      {/* Card */}
      <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 flex flex-col md:flex-row gap-6 items-center">

        {/* Cover */}
        <img
          src={manga.image}
          alt={manga.title}
          className="w-32 rounded-2xl"
        />

        {/* Info */}
        <div className="flex-1 text-center md:text-left">

          <h2 className="text-2xl font-bold">
            {manga.title}
          </h2>

          <p className="text-gray-400 mt-2">
            Continue where you left off
          </p>

          {/* Button */}
          <Link to="/reader">

            <button className="mt-5 bg-[#ff4d4d] hover:scale-105 transition px-5 py-3 rounded-xl font-semibold">

              Continue Reading

            </button>

          </Link>

        </div>

      </div>

    </section>

  )
}

export default ContinueReading