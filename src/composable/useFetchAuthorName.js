import {ref} from 'vue'
export function useFetchAuthorName(url) {

    const authorName = ref(null);
    const loading = ref(true);
    const hasError = ref(null);
    const fetchAuthorName = async (url) => {
        try {
            const response = await fetch(url);
            const json = response.json();
            authorName.value = json;
        } catch (e){
            hasError.value = e;
        } finally {
            loading.value = false;
        }
        

    }

    fetchAuthorName(url);
    return {authorName,loading, hasError, fetchAuthorName}
}