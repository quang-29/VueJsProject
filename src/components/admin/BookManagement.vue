<script setup>
import { onMounted, ref, computed } from 'vue'
import { useFetchData } from '@/composable/useFetchData';


const books = ref([])
const { data, loading, error, fetchData } = useFetchData()
const searchKeyword = ref('')

onMounted(async () => {
    await fetchData('http://localhost:8080/api/v1/book/all')
    books.value = data.value
    console.log(books)
})

const filteredBooks = computed(() =>
    books.value.filter(book =>
        book.title?.toLowerCase().includes(searchKeyword.value.toLowerCase()) ||
        book.authorName?.toLowerCase().includes(searchKeyword.value.toLowerCase())
    )
)

const addBook = () => {
    // Redirect to the add book page
    window.location.href = '/add-book'
}
const updateBook = (bookId) => {
    // Redirect to the update book page with the book ID
    window.location.href = `/update-book/${bookId}`
}

const viewDetail = (bookId) => {
    // Redirect to the book detail page with the book ID
    window.location.href = `/book/${bookId}`
}
</script>
<template>
    <div class="book-management">
        <el-input v-model="searchKeyword" placeholder="Tìm theo tiêu đề hoặc tác giả..." clearable
            style="height: 40px;" class="search-input" />
        <el-button type="primary" @click="addBook" style="height: 40px;">+ Add new book</el-button>
    </div>
    <el-table :data="filteredBooks">
        <el-table-column label="Image" width="120">
            <template #default="{ row }">
                <img :src="row.imagePath" alt="Image" style="width: 60px; height: auto; border-radius: 4px;" />
            </template>
        </el-table-column>
        <el-table-column prop="title" label="Title" />
        <el-table-column prop="authorName" label="Author Name" width="200" />
        <el-table-column prop="price" label="Price" width="100" />
        <el-table-column prop="stock" label="Stock" width="100" />
        <el-table-column prop="sold" label="Sold" width="100" />
        <el-table-column prop="publishedDate" label="Published" width="100" />
        <el-table-column prop="publisher" label="Publisher" width="100" />
        <el-table-column label="Hành động" width="100">
            <template #default="{ row }" class="action-column">
                <el-button type="primary" size="small" @click="viewDetail(row.id)">
                    Xem chi tiết
                </el-button>
                <el-button type="primary" size="small" @click="updateBook(row.id)">
                    Sửa
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<style scoped>
.book-management {
    display: flex;
    column-gap: 20px;
    margin-bottom: 20px;
}
.action-column {
    display: flex;
    align-items: center;
    column-gap: 10px;
}
</style>