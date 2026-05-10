const rankingData = [
  {
    title: "One Piece",
    author: "Eiichiro Oda",
    image: "https://cdn.myanimelist.net/images/manga/2/253146.jpg",
    views: "345K",
  },
  {
    title: "Kagurabachi",
    author: "Takeru Hokazono",
    image: "https://cdn.myanimelist.net/images/manga/1/304273.jpg",
    views: "293K",
  },
  {
    title: "Dandadan",
    author: "Yukinobu Tatsu",
    image: "https://cdn.myanimelist.net/images/manga/3/249993.jpg",
    views: "180K",
  },
  {
    title: "Blue Box",
    author: "Kouji Miura",
    image: "https://cdn.myanimelist.net/images/manga/2/237227.jpg",
    views: "122K",
  },
]

function RankingSidebar() {
  return (
    <aside className="w-full lg:w-[320px]">

      <div className="sticky top-24">

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">

          {/* Header */}
          <div className="flex items-center justify-between mb-6">

            <h2 className="text-2xl font-bold">
              Hottest
            </h2>

            <button className="text-[#ff4d4d] text-sm">
              View All
            </button>

          </div>

          {/* Ranking List */}
          <div className="space-y-5">

            {rankingData.map((manga, index) => (

              <div
                key={index}
                className="flex gap-4 items-center group cursor-pointer"
              >

                {/* Rank */}
                <span className="text-2xl font-bold text-gray-500 w-6">
                  {index + 1}
                </span>

                {/* Image */}
                <img
                  src={manga.image}
                  alt=""
                  className="w-16 h-20 object-cover rounded-xl"
                />

                {/* Info */}
                <div className="flex-1">

                  <h3 className="font-semibold group-hover:text-[#ff4d4d] transition">
                    {manga.title}
                  </h3>

                  <p className="text-sm text-gray-400">
                    {manga.author}
                  </p>

                  <p className="text-sm mt-1 text-gray-300">
                    {manga.views} views
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </aside>
  )
}

export default RankingSidebar