import { BrowserRouter, Routes, Route } from "react-router-dom"
import MangaProvider from "./context/MangaContext"
import Home from "./pages/Home"
import MangaDetail from "./pages/MangaDetail"
import ReaderPage from "./pages/ReaderPage"
import Favorites from "./pages/Favorites"
import Ranking from "./pages/Ranking"
import Featured from "./pages/Featured"
import MangaList from "./pages/MangaList"

function App() {
  return (
    <MangaProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manga/:id" element={<MangaDetail />} />
          <Route path="/reader" element={<ReaderPage />} />
          <Route path="/library" element={<Favorites />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/manga-list" element={<MangaList />} />
        </Routes>
      </BrowserRouter>
    </MangaProvider>
  )
}

export default App