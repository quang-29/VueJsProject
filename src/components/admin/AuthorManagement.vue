<script setup>
import { onMounted, ref, computed } from 'vue'
import { useFetchData } from '@/composable/useFetchData';
import { formatDateTime } from '@/util/formatDate'

const authors = ref([])
const { data, loading, error, fetchData } = useFetchData()
const searchKeyword = ref('')
onMounted(async () => {
    await fetchData('http://localhost:8080/api/v1/author/all')
    authors.value = data.value
    console.log(authors)
})
const filteredAuthors = computed(() =>
    authors.value.filter(author =>
        author.authorName?.toLowerCase().includes(searchKeyword.value.toLowerCase())
    )
)
const addAuthor = () => {
    // Redirect to the add author page
    window.location.href = '/add-author'
}
const updateAuthor = (authorId) => {
    // Redirect to the update author page with the author ID
    window.location.href = `/update-author/${authorId}`
}
</script>

<template>
    <div class="author-management">
        <el-input v-model="searchKeyword" placeholder="Tìm theo tên tác giả..." clearable style="height: 40px;"
            class="search-input" />
        <el-button type="primary" @click="addAuthor" style="height: 40px;">+ Add new author</el-button>
    </div>
    <el-table :data="filteredAuthors">
        <el-table-column label="Image" width="120">
            <template #default="{ row }">
                <img :src="row.avatar" alt="Image" style="width: 60px; height: auto; border-radius: 4px;" />
            </template>
        </el-table-column>
        <el-table-column prop="authorName" label="Name" />
        <el-table-column label="Date of Birth">
            <template #default="{ row }">
                {{ new Date(row.dob).toLocaleDateString('vi-VN', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                }) }}
            </template>
        </el-table-column>

        <el-table-column prop="hometown" label="Hometown" />
        <el-table-column label="Hành động" width="200">
            <template #default="{ row }">
                <el-button type="primary" size="small" @click="updateAuthor(row.id)">
                    Sửa
                </el-button>
                <el-button type="primary" size="small" @click="updateAuthor(row.id)">
                    Xem chi tiết
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<style scoped>
.author-management {
    display: flex;
    margin-bottom: 20px;
    column-gap: 20px;
}
</style>