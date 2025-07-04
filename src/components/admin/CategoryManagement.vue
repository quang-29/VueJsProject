<script setup>
import { onMounted, ref } from 'vue'
import { useFetchData } from '@/composable/useFetchData';

const categories = ref([])
const { loading, data, error, fetchData } = useFetchData();
onMounted(async () => {
    await fetchData('http://localhost:8080/api/v1/category/all')
    categories.value = data.value
    console.log(categories)
})
</script>

<template>
    <el-table :data="categories">
        <el-table-column prop="id" label="Id" />
        <el-table-column prop="name" label="Name" />
        <el-table-column label="Thumbnail" width="120">
            <template #default="{ row }">
                <img :src="row.thumbnail" alt="thumbnail" style="width: 60px; height: auto; border-radius: 4px;" />
            </template>
        </el-table-column>
        <el-table-column label="Hành động" width="160">
            <template #default="{ row }">
                <el-button type="primary" size="small" @click="viewOrder(row.id)">
                    Xem chi tiết
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</template>
