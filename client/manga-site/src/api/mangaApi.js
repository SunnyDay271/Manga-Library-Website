import axios from "axios"

const API = "http://localhost:5000/api/manga"

export const getManga = async () => {
  try {
    const res = await axios.get(API)
    return res.data
  } catch (err) {
    console.error("getManga error:", err)
    return []
  }
}

export const getMangaById = async (id) => {
  try {
    const res = await axios.get(`${API}/${id}`)
    return res.data
  } catch (err) {
    console.error("getMangaById error:", err)
    return null
  }
}

export const searchManga = async (query) => {
  try {
    const res = await axios.get(`${API}/search/${query}`)
    return res.data
  } catch (err) {
    console.error("searchManga error:", err)
    return []
  }
}

// This turns a blocked image URL into a safe localhost URL
export const proxyImage = (url) => {
  if (!url) return ""
  return `http://localhost:5000/proxy-image?url=${url}`
}