const db = require("../config/db")

const mangaToSeed = [
  {
    mangadex_id: "a1c7c817-4e59-43b7-9365-09675a149a6f",
    title: "One Piece",
    author: "Eiichiro Oda",
    chapter: "1120",
    description: "Follow Monkey D. Luffy and his pirate crew in their search for the legendary treasure known as the One Piece, to become the next Pirate King.",
    image: "https://uploads.mangadex.org/covers/a1c7c817-4e59-43b7-9365-09675a149a6f/c0ee648b-8a1c-4c43-85a3-61bc1ea8b2d0.jpg.512.jpg",
    banner: "https://wallpapercave.com/wp/wp9067541.jpg",
    genres: "Action,Adventure,Fantasy,Drama",
    views: 345000,
  },
  {
    mangadex_id: "26a57e87-b583-48b2-8fca-a2c3e7d9c85a",
    title: "Kagurabachi",
    author: "Takeru Hokazono",
    chapter: "55",
    description: "A young swordsman seeks revenge against the sorcerers who killed his father and stole his enchanted blades.",
    image: "https://uploads.mangadex.org/covers/26a57e87-b583-48b2-8fca-a2c3e7d9c85a/bd2f8e14-4b36-4aef-b4a5-b90dce8f52df.jpg.512.jpg",
    banner: "https://images6.alphacoders.com/137/1371108.jpeg",
    genres: "Action,Shounen,Supernatural",
    views: 293000,
  },
  {
    mangadex_id: "bc727b75-fa9a-4019-9343-c5cebb90a457",
    title: "Dandadan",
    author: "Yukinobu Tatsu",
    chapter: "175",
    description: "Aliens, ghosts, absurd battles, and supernatural chaos collide when two high schoolers with opposite beliefs get dragged into the paranormal.",
    image: "https://uploads.mangadex.org/covers/bc727b75-fa9a-4019-9343-c5cebb90a457/fc41fc51-e8e4-4f89-9d2e-b06de01d35ad.jpg.512.jpg",
    banner: "https://images4.alphacoders.com/135/1351071.jpeg",
    genres: "Comedy,Sci-Fi,Action,Romance",
    views: 180000,
  },
  {
    mangadex_id: "c52b2ce3-7f08-4e0d-8626-04eff26f0a75",
    title: "Jujutsu Kaisen",
    author: "Gege Akutami",
    chapter: "271",
    description: "A boy swallows a cursed talisman and joins a secret organization of Jujutsu sorcerers to fight deadly Cursed Spirits.",
    image: "https://uploads.mangadex.org/covers/c52b2ce3-7f08-4e0d-8626-04eff26f0a75/8b2ac7e2-e4f1-4de5-b6d7-26e5dce60d70.jpg.512.jpg",
    banner: "https://wallpapercave.com/wp/wp7158380.jpg",
    genres: "Action,Supernatural,Shounen,Horror",
    views: 160000,
  },
  {
    mangadex_id: "a77742b1-befd-49a4-bff5-1ad4e6b0ef7b",
    title: "Chainsaw Man",
    author: "Tatsuki Fujimoto",
    chapter: "192",
    description: "Denji merges with his devil dog Pochita and becomes Chainsaw Man — a hunter who kills devils with chainsaws that emerge from his body.",
    image: "https://uploads.mangadex.org/covers/a77742b1-befd-49a4-bff5-1ad4e6b0ef7b/af4e8562-7a14-4f28-bef8-1e36e037b29c.jpg.512.jpg",
    banner: "https://wallpapercave.com/wp/wp8680462.jpg",
    genres: "Action,Horror,Shounen,Comedy",
    views: 140000,
  },
  {
    mangadex_id: "8a9e3b82-f7fa-4420-ba83-07c2d9dc4cd2",
    title: "Blue Box",
    author: "Kouji Miura",
    chapter: "130",
    description: "A badminton boy falls in love with the basketball ace at his school — and they end up living under the same roof.",
    image: "https://uploads.mangadex.org/covers/8a9e3b82-f7fa-4420-ba83-07c2d9dc4cd2/5b6c0e97-7c94-4f39-8706-9cb0e5be8b56.jpg.512.jpg",
    banner: "https://wallpapercave.com/wp/wp11540766.jpg",
    genres: "Romance,Sports,Shounen,Slice of Life",
    views: 122000,
  },
  {
    mangadex_id: "b9097045-7c62-4e31-9a93-5e1e800a2e31",
    title: "My Hero Academia",
    author: "Kohei Horikoshi",
    chapter: "430",
    description: "In a world where most people have superpowers called Quirks, a powerless boy is chosen by the greatest hero to carry on his legacy.",
    image: "https://uploads.mangadex.org/covers/b9097045-7c62-4e31-9a93-5e1e800a2e31/99cbf3c9-5b37-4c34-a41d-25bf0ef5b9cf.jpg.512.jpg",
    banner: "https://wallpapercave.com/wp/wp2077649.jpg",
    genres: "Action,Superhero,Shounen,Comedy",
    views: 115000,
  },
  {
    mangadex_id: "8f3e1818-a015-491d-bd81-3addc4d7d56a",
    title: "Spy x Family",
    author: "Tatsuya Endo",
    chapter: "110",
    description: "A spy, an assassin, and a telepath form a fake family — none of them knowing each other's true identity.",
    image: "https://uploads.mangadex.org/covers/8f3e1818-a015-491d-bd81-3addc4d7d56a/26dd2770-d383-42e9-a42b-32765a4d99c8.png.512.jpg",
    banner: "https://wallpapercave.com/wp/wp9537898.jpg",
    genres: "Action,Comedy,Slice of Life,Shounen",
    views: 98000,
  },
  {
    mangadex_id: "849a66a8-2e12-4fca-8278-1a43bf462b43",
    title: "Vinland Saga",
    author: "Makoto Yukimura",
    chapter: "215",
    description: "A young Viking warrior seeks revenge for his father's death across brutal wars and conquests — and eventually discovers what it means to truly live.",
    image: "https://uploads.mangadex.org/covers/849a66a8-2e12-4fca-8278-1a43bf462b43/9cc36e4a-dd8c-48a1-b7f0-eece0e0bfe44.jpg.512.jpg",
    banner: "https://wallpapercave.com/wp/wp6131874.jpg",
    genres: "Action,Historical,Drama,Adventure",
    views: 87000,
  },
  {
    mangadex_id: "f9c33607-9180-4ba6-b85c-e4b5faee7192",
    title: "Dungeon Meshi",
    author: "Ryoko Kui",
    chapter: "97",
    description: "An adventurer and his party explore a deadly dungeon — and cook and eat the monsters they defeat to survive.",
    image: "https://uploads.mangadex.org/covers/f9c33607-9180-4ba6-b85c-e4b5faee7192/c7c3faae-c9e5-4b89-9db9-0af44d5ccbb9.jpg.512.jpg",
    banner: "https://wallpapercave.com/wp/wp13222423.jpg",
    genres: "Adventure,Fantasy,Comedy,Slice of Life",
    views: 76000,
  },
]

const seed = async () => {
  console.log("🌱 Seeding manga into MySQL...")

  await new Promise((resolve, reject) => {
    db.query(
      `CREATE TABLE IF NOT EXISTS manga (
        id INT AUTO_INCREMENT PRIMARY KEY,
        mangadex_id VARCHAR(255) UNIQUE,
        title VARCHAR(255) NOT NULL,
        author VARCHAR(255),
        chapter VARCHAR(50),
        description TEXT,
        image VARCHAR(500),
        banner VARCHAR(500),
        genres VARCHAR(255),
        views INT DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )`,
      (err) => (err ? reject(err) : resolve())
    )
  })

  for (const manga of mangaToSeed) {
    await new Promise((resolve) => {
      db.query(
        `INSERT INTO manga
          (mangadex_id, title, author, chapter, description, image, banner, genres, views)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE
          title=VALUES(title),
          author=VALUES(author),
          chapter=VALUES(chapter),
          description=VALUES(description),
          image=VALUES(image),
          banner=VALUES(banner),
          genres=VALUES(genres),
          views=VALUES(views)`,
        [
          manga.mangadex_id,
          manga.title,
          manga.author,
          manga.chapter,
          manga.description,
          manga.image,
          manga.banner,
          manga.genres,
          manga.views,
        ],
        (err) => {
          if (err) console.error(`❌ Error inserting ${manga.title}:`, err.message)
          else console.log(`✅ Seeded: ${manga.title}`)
          resolve()
        }
      )
    })
  }

  console.log("🎉 Done! All manga seeded.")
  process.exit(0)
}

seed()