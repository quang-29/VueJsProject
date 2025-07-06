<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue';
import Header from './components/Header.vue';
import NavBar from './components/NavBar.vue';

</script>

<template>
  <div class="nav">
    <router-view />
  </div>
</template>


<style >
body, html {
  height: auto;
  overflow-y: auto;
}

</style>
