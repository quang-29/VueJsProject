<script setup>
import { ArrowDown } from 'lucide-vue-next'
import { watch } from 'vue'
import { useRouter } from 'vue-router'



const router = useRouter()
const handleDirect = (id) =>{
  router.push({ name: 'categoryBook', params: { id } })

}

defineProps({
  listcategories: {
    type: Array,
    default: () => []
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  isError: {
    type: [Object, String, Boolean],
    default: null
  }
})

</script>

<template>
  <div class="navbar-container">

    <RouterLink to="/" :style="{ backgroundColor: 'white' }">
      <button class="btn">
        <span>Home</span>
      </button>
    </RouterLink>

    <div class="btn category-list dropdown">
      <span>All categories</span>
      <ArrowDown size="16" />

      <ul class="dropdown-menu">
        <li v-if="isError">Không thể tải danh mục</li>
        <li v-else-if="isLoading">Đang tải danh mục...</li>
        <li v-else-if="listcategories.length === 0">Không có danh mục</li>
        <li v-else v-for="category in listcategories" :key="category.id" class="category-list-item">
          <div class="category-card" @click="handleDirect(category.id)">
            {{ category.name }}
          </div>
        </li>
      </ul>
    </div>

    <RouterLink to="/discount" :style="{ backgroundColor: 'white' }">
      <button class="btn"><span>Discount Deals</span></button>
    </RouterLink>
    
    <RouterLink to="/order" :style="{ backgroundColor: 'white' }">
      <button class="btn"><span>Gifs & Others</span></button>
    </RouterLink>
    
    <RouterLink to="/order" :style="{ backgroundColor: 'white' }">
      <button class="btn"><span>All Orders</span></button>
    </RouterLink>
    

    <RouterLink to="/about" :style="{ backgroundColor: 'white' }">
      <button class="btn">
        <span>About Mickey's Bookstore</span>
      </button>
    </RouterLink>

  </div>
</template>

<style>
.btn {
  padding: 10px 14px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  color: black;
  background-color: white;
  position: relative;
}
.btn:hover {
  background-color: #d6d8db;
  transform: translateY(-1px);
}
.navbar-container {
  display: flex;
  align-items: center;
  margin-top: 10px;
  z-index: 1000;
}
.category-list {
  display: flex;
  align-items: center;
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  list-style: none;
  padding: 8px 0;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  display: none;
  z-index: 999;
  width: 300px;
}
.dropdown:hover .dropdown-menu {
  display: block;
}
.dropdown-menu li {
  padding: 8px 12px;
  cursor: pointer;
}
.dropdown-menu li:hover {
  background-color: #f1f1f1;
}
.category-list-item{
  z-index: 999;
}
</style>
