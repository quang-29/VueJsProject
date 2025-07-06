<script setup>
import { onMounted, ref, computed } from 'vue';

const users = ref([]);
const searchKeyword = ref('');
onMounted(async () => {
    try {
        const request = await fetch('http://localhost:8080/api/v1/user/all', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
        if (request.status === 200) {
            const response = await request.json();
            users.value = response.content;
            console.log(users.value);
        } else {
            console.error('Failed to fetch user data:', request.statusText);
        }
    } catch (err) {
        console.error('Error fetching user data:', err);
    }
});
const filteredUsers = computed(() =>
    users.value.filter(user =>
        user.username?.toLowerCase().includes(searchKeyword.value.toLowerCase())
    )
);
const addUser = () => {
    window.location.href = '/add-user';
};
const updateUser = (userId) => {
    window.location.href = `/update-user/${userId}`;
};

const disEnableUser = (userId) => {
    console.log(`Disabling user with ID: ${userId}`);
};
</script>

<template>
    <div class="user-management">
        <el-input v-model="searchKeyword" placeholder="Tìm theo tên người dùng..." clearable style="height: 40px;"
            class="search-input" />
        <el-button type="primary" @click="addUser" style="height: 40px;">+ Add new user</el-button>
    </div>
    <el-table :data="filteredUsers">
        <el-table-column prop="id" label="Id" width="100" />
        <el-table-column prop="username" label="Username" />
        <el-table-column prop="email" label="Email" />
        <el-table-column prop="role" label="Role" width="100" />
        <el-table-column prop="enable" label="Active" />
        <el-table-column label="Hành động" width="400">
            <template #default="{ row }">
                <el-button type="primary" size="small" @click="updateUser(row.id)">
                    Sửa
                </el-button>
                <el-button type="primary" size="small" @click="updateUser(row.id)">
                    Xem chi tiết
                </el-button>
                <el-button v-if="row.role !== 'ADMIN'" type="danger" size="small" @click="disEnableUser(row.id)">
                    Vô hiệu hóa
                </el-button>

            </template>
        </el-table-column>
    </el-table>
</template>

<style>
.user-management {
    display: flex;
    margin-bottom: 20px;
    column-gap: 20px;
}

.search-input {
    width: 80%;
}
</style>