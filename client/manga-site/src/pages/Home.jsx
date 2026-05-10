import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import MangaGrid from "../components/MangaGrid"
import RankingSidebar from "../components/RankingSidebar"
import ContinueReading from "../components/ContinueReading"

function Home() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">

      <Navbar />

      <Hero />

      {/* Main Layout */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-10 flex flex-col lg:flex-row gap-10">

        {/* Left Content */}
        <div className="flex-1">
            
          <ContinueReading />

          <MangaGrid />

        </div>

        {/* Right Sidebar */}
        <RankingSidebar />

      </div>

    </div>
  )
}

export default Home