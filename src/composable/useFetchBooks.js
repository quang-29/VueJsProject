import { ref } from 'vue';

export function useFetchBooks(url){
    const books = ref(null)
    const loading = ref(true)
    const error = ref(null);
    const fetchBooks = async (url) => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            books.value = json.content;
        } catch (e) {
            error.value = e
        } finally {
            loading.value = false
        }
    }
    fetchBooks(url)
    return {
        books, loading, error, fetchBooks
    };
}