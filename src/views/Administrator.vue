<template>
  <el-container class="layout-container-demo" style="height: 100vh">
    <el-aside width="200px">
      <el-scrollbar>
        <el-menu
          :default-active="activeTab"
          @select="handleMenuSelect"
          class="el-menu-vertical-demo"
        >
          <el-menu-item index="orders">
            <el-icon><document /></el-icon>
            <span>Quản lý đơn hàng</span>
          </el-menu-item>
          <el-menu-item index="books">
            <el-icon><collection /></el-icon>
            <span>Quản lý sách</span>
          </el-menu-item>
          <el-menu-item index="categories">
            <el-icon><BookAudio /></el-icon>
            <span>Quản lý danh mục</span>
          </el-menu-item>
          <el-menu-item index="authors">
            <el-icon><PercentSquareIcon /></el-icon>
            <span>Quản lý tác giả</span>
          </el-menu-item>
          <el-menu-item index="users">
            <el-icon><user /></el-icon>
            <span>Quản lý người dùng</span>
          </el-menu-item>
          <el-menu-item index="logout">
            <el-icon><LogOut /></el-icon>
            <span>Đăng xuất</span>
          </el-menu-item>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-main>
        <el-scrollbar>
          <div v-if="activeTab === 'orders'">
            <OrderManagement />
          </div>

          <div v-else-if="activeTab === 'books'">
            <el-table :data="bookData">
              <BookManagement />
            </el-table>
          </div>

          <div v-else-if="activeTab === 'categories'">
            <CategoryManagement />
          </div>

          <div v-else-if="activeTab === 'authors'">
            <p>Danh sách tác giả sẽ được hiển thị tại đây.</p>
          </div>

          <div v-else-if="activeTab === 'users'">
            <el-table :data="userData">
              <el-table-column prop="username" label="Tên đăng nhập" />
              <el-table-column prop="email" label="Email" />
              <el-table-column prop="role" label="Vai trò" width="100" />
            </el-table>
          </div>

          <div v-else-if="activeTab === 'logout'">
            <p>Bạn đã đăng xuất.</p>
          </div>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { ref } from 'vue'
import {
  Document,
  Collection,
  User,
} from '@element-plus/icons-vue'
import { BookAudio, LogOut, PercentSquareIcon } from 'lucide-vue-next'
import OrderManagement from '@/components/admin/OrderManagement.vue'
import CategoryManagement from '@/components/admin/CategoryManagement.vue'
import BookManagement from '@/components/admin/BookManagement.vue'

const activeTab = ref('orders')

const handleMenuSelect = (key) => {
  activeTab.value = key
}

const tableData = ref([
  { date: '2025-07-01', name: 'Tom', address: 'Hà Nội' },
  { date: '2025-07-01', name: 'Anna', address: 'Hồ Chí Minh' },
])

const bookData = ref([
  { title: 'Sách A', author: 'Tác giả A', year: 2020 },
  { title: 'Sách B', author: 'Tác giả B', year: 2022 },
])

const userData = ref([
  { username: 'user1', email: 'user1@example.com', role: 'ADMIN' },
  { username: 'user2', email: 'user2@example.com', role: 'USER' },
])
</script>

<style scoped>
.layout-container-demo .el-header {
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>