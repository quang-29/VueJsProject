// useFetchBookById.js
export async function useFetchBookById(id) {
  try {
    const response = await fetch(`http://localhost:8080/api/v1/book/${id}`)
    const book = await response.json()
    return book
  } catch (error) {
    console.error('Failed to fetch book by ID:', error)
    return null
  }
}
