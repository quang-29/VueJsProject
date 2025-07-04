<script setup>
import ImageView from '@/components/ImageView.vue';
import CategoryView from '@/components/CategoryView.vue';
import BookList from '@/components/book/BookList.vue';
import { useFetchData } from '@/composable/useFetchData';
import { onMounted } from 'vue';
import { ref } from 'vue';
import Header from '@/components/Header.vue';
import NavBar from '@/components/NavBar.vue';

const categories = ref(null)
const isLoading = ref(true)
const hasError = ref(null)

const { loading, data, error, fetchData } = useFetchData()
onMounted(async () => {
  await fetchData('http://localhost:8080/api/v1/category/all')
  categories.value = data.value
  isLoading.value = loading.value
  hasError.value = error.value
})



</script>

<template>
  <main>

    <div class="nav">
      <ImageView />
      <CategoryView :listcategories="categories"
                  :isLoading="isLoading"
                  :isError="hasError"

      />
      <BookList />
    </div>

  </main>
</template>
