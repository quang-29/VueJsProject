<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue';
import Header from './components/Header.vue';
import NavBar from './components/NavBar.vue';

</script>

<template>
  <div class="nav">
    <!-- <Header></Header>
    <NavBar
      :listcategories="categories"
      :isLoading="isLoading"
      :isError="hasError"
      /> -->
    
    <router-view />
  </div>
</template>


<style >
</style>
