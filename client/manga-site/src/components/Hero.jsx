import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?q=80&w=2070&auto=format&fit=crop"
        alt=""
        className="absolute w-full h-full object-cover opacity-20 blur-sm"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Main Content */}
      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-10 flex items-center justify-between">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[450px]"
        >

          <span className="bg-[#ff4d4d] px-4 py-2 rounded-xl text-sm font-semibold">
            Latest 24hours
          </span>

          <h1 className="text-6xl font-bold mt-6 leading-tight">
            One Piece
          </h1>

          <p className="text-gray-300 mt-4 text-lg">
            Follow Luffy and the Straw Hat Pirates in the ultimate
            adventure across the Grand Line.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-[#ff4d4d] px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
              Read Now
            </button>

            <button className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/10 hover:bg-white/20 transition">
              Add Library
            </button>
          </div>

        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >

          <img
            src="https://cdn.myanimelist.net/images/manga/2/253146.jpg"
            alt=""
            className="w-[350px] rounded-3xl shadow-2xl"
          />

        </motion.div>

      </div>

    </section>
  )
}

export default Hero