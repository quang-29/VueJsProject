<script setup>
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue';
import { useFetchData } from '@/composable/useFetchData';
import { ref, onMounted } from 'vue'

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
    <Header></Header>
    <NavBar
      :listcategories="categories"
      :isLoading="isLoading"
      :isError="hasError"
      /> 
  <router-view />
</template>


