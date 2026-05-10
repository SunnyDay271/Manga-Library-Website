import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import MangaDetail from "./pages/MangaDetail"
import ReaderPage from "./pages/ReaderPage"
import Favorites from "./pages/Favorites"

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/manga/:id"
          element={<MangaDetail />}
        />

        <Route
          path="/reader"
          element={<ReaderPage />}
        />

        <Route
          path="/library"
          element={<Favorites />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App