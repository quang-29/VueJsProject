<script setup>
import {onMounted, ref} from 'vue'
import { useFetchData } from '@/composable/useFetchData';


const books = ref([])
const {data, loading, error, fetchData} = useFetchData()
onMounted(async() => {
    await fetchData('http://localhost:8080/api/v1/book/all')
    books.value = data.value
    console.log(books)
})
</script>
<template>
    <el-table :data="books">
        <el-table-column prop="id" label="Id" />
        <el-table-column prop="title" label="Title" />
        <el-table-column prop="authorName" label="Author Name" width="100" />
        <el-table-column prop="stock" label="Stock" width="100" />
        <el-table-column prop="sold" label="Sold" width="100" />
        <!-- <el-table-column label="Hành động" width="160">
            <template #default="{ row }">
                <el-button type="primary" size="small" @click="viewOrder(row.id)">
                    Xem chi tiết
                </el-button>
            </template>
        </el-table-column> -->
    </el-table>
</template>

<style>
</style>