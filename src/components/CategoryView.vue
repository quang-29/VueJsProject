<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const handleDirectCategoryDetail = (categoryId) => {
  // alert.alert("Bạn đã ấn vô");
  console.log(categoryId)
  // router.push
}

defineProps({listcategories: Array,
             isLoading: Boolean,
             isError: Boolean
});
</script>

<template>
  <div class="category-container">

    <div class="category-header">
        <h4>CATEGORY</h4>
    </div>
    <div class="category-lists">
      <div class="category-error" v-if="isError">No data to fetch...</div>
      <div v-else-if="isLoading">Đang tải dữ liệu</div>
          <div class="category-item" v-else v-for="category in listcategories.slice(0, 10)" :key="category.id">
            <div
              class="categorylink"
              :style="{
                backgroundImage: `url(${category.thumbnail})`,
                width: '350px',
                height: '250px',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }"
            >
              <div class="wrapper"></div>
              <div class="htitle">
                <span class="category-title">{{ category.name }}</span>
              </div>
              <!-- <div class="hbutton" @click="handleDirectCategoryDetail(category.id)">
                <button class="btn-seemore">Xem Thêm</button>
              </div> -->
              <RouterLink :to="`/categoryBook/${category.id}`" class="custom-link">
                 <button class="btn-seemore">Xem Thêm</button>
              </RouterLink>
            </div>
          </div>
    </div>
  </div>
</template>

<style>
.category-header {
    color: black;
    margin-bottom: 40px;
}

.category-container{
    width: 100%;
    height: auto;
    margin-top: 40px;
}
.category-lists {
    display: flex;
    align-items: center;
    justify-content: center;

}
.category-item {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    
}
.categorylink{
    border-radius: 30px;
    padding: 0 10px;
    position: relative;
}
.category-error {
  color: black;
}

.wrapper {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 30px;
    z-index: 1;
}
.image-category {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
}
.categorylink {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.htitle {
    z-index: 999;
    color: white;
    font-weight: 600;
    z-index: 10;

}
.category-title {
    font-size: 24px;
}
.custom-link{
    margin-top: 50px;
    z-index: 10;
}
.custom-link:hover{
  background-color: transparent;
}

.btn-seemore {
    padding: 8px 10px;
    border: none;
    border-radius: 15px;
    font-size: 18px;

}
.category-lists {
  display: flex;
  flex-wrap: wrap; 
  justify-content: center;
  gap: 16px;
}

.category-item {
  width: calc((100% - 4 * 16px) / 5);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  margin-bottom: 120px;
  transition: all 0.4s ease;

}
.category-item:hover{
    transform: scale(1.05) translateY(-2px);
}


</style>