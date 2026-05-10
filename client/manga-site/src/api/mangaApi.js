import axios from "axios"

const API =
  "http://localhost:5000/api/manga"

// Fetch Manga
export const getManga = async () => {

  try {

    const response =
      await axios.get(API)

    return response.data

  } catch (error) {

    console.error(
      "Error fetching manga:",
      error
    )

    return []

  }

}