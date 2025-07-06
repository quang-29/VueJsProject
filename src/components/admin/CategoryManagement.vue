<script setup>
import { onMounted, ref, computed } from 'vue'
import { useFetchData } from '@/composable/useFetchData';

const categories = ref([])
const { loading, data, error, fetchData } = useFetchData();
const showDialog = ref(false)
const searchKeyword = ref('')
const selectedCategory = ref({})

onMounted(async () => {
    await fetchData('http://localhost:8080/api/v1/category/all')
    categories.value = data.value
    console.log(categories)
})

const filteredCategories = computed(() =>
    categories.value.filter(category =>
        category.name?.toLowerCase().includes(searchKeyword.value.toLowerCase())
    )
)

const viewCategory = (categoryId) => {
    showDialog.value = true;
    const category = categories.value.find(item => item.id === categoryId);
    console.log(category)
    selectedCategory.value = category;
}

const addCategory = () => {
    // Redirect to the add category page
    window.location.href = '/add-category'
}
</script>

<template>
  <div class="category-management">
    <el-input v-model="searchKeyword" placeholder="Tìm theo tên danh mục..." clearable style="height: 40px;"
      class="search-input" />
    <el-button type="primary" @click="addCategory" style="height: 40px;">+ Add new category</el-button>
  </div>

    <el-table :data="filteredCategories">
        <el-table-column prop="id" label="Id" width="100" />
        <el-table-column prop="name" label="Name" />
        <el-table-column label="Thumbnail" width="200">
            <template #default="{ row }">
                <img :src="row.thumbnail" alt="thumbnail" style="width: 80px; height: auto; border-radius: 4px;" />
            </template>
        </el-table-column>
        <el-table-column label="Hành động" width="160">
            <template #default="{ row }">
                <el-button type="primary" size="small" @click="viewCategory(row.id)">
                    Xem chi tiết
                </el-button>
            </template>
        </el-table-column>
    </el-table>

        <el-dialog v-model="showDialog" title="Chi tiết danh mục" width="90%" :close-on-click-modal="false"
      :destroy-on-close="true" :modal="true" class="custom-dialog">
      <div v-if="selectedCategory" class="sub_dialog">
        <div style="margin-bottom: 20px;">
          <p><strong>Mã danh mục:</strong> {{ selectedCategory.id }}</p>
          <p><strong>Tên danh mục:</strong> {{ selectedCategory.name }}</p>
        </div>

        <div class="card-container">
          <RouterLink v-for="book in selectedCategory.bookList" :key="book.id" :to="`/book/${book.id}`"
            class="book-card">
            <img :src="book.image" alt="Ảnh bìa" class="book-image" />
            <el-tag :type="statusType(book.status)">
              {{ book.status }}
            </el-tag>
          </RouterLink>
        </div>
      </div>
      <template #footer>
        <el-button @click="showDialog = false">Đóng</el-button>
      </template>
    </el-dialog>
</template>

<style scoped>
.category-management {
    display: flex;
    margin-bottom: 20px;
    column-gap: 20px;
    align-items: center;
}
</style>