const chapters = [
  "Chapter 1182",
  "Chapter 1181",
  "Chapter 1180",
  "Chapter 1179",
  "Chapter 1178",
]

function ChapterList() {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold">
          Chapters
        </h2>

        <button className="text-[#ff4d4d]">
          View All
        </button>

      </div>

      <div className="space-y-4">

        {chapters.map((chapter, index) => (

          <div
            key={index}
            className="bg-white/5 hover:bg-white/10 transition p-4 rounded-2xl cursor-pointer flex justify-between"
          >

            <span>{chapter}</span>

            <span className="text-gray-400">
              2 days ago
            </span>

          </div>

        ))}

      </div>

    </div>
  )
}

export default ChapterList