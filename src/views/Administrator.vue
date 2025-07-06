<script setup>
import { ref } from 'vue'
import {
  Document,
  Collection,
  User,
} from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'
import { BookAudio, LogOut, PercentSquareIcon } from 'lucide-vue-next'
import OrderManagement from '@/components/admin/OrderManagement.vue'
import CategoryManagement from '@/components/admin/CategoryManagement.vue'
import BookManagement from '@/components/admin/BookManagement.vue'
import AuthorManagement from '@/components/admin/AuthorManagement.vue'
import UserManagement from '@/components/admin/UserManagement.vue'

const activeTab = ref('orders')
const router = useRouter()

const handleMenuSelect = (key) => {
    if (key === 'logout') {
    handleLogout()
  } else {
    activeTab.value = key
  }
}

const handleLogout = () => {
  ElMessageBox.confirm(
    'Bạn có chắc chắn muốn đăng xuất?',
    'Xác nhận',
    {
      confirmButtonText: 'Đăng xuất',
      cancelButtonText: 'Hủy',
      type: 'warning',
    }
  )
    .then(() => {
      localStorage.clear()
      ElMessage({
        type: 'success',
        message: 'Đăng xuất thành công',
      })
      router.push('/signIn')
    })
    .catch(() => {
    })
}


</script>
<template>
  <el-container class="layout-container-demo" style="height: 100vh">
    <el-aside width="200px">
      <el-scrollbar>
        <el-menu :default-active="activeTab" @select="handleMenuSelect" class="el-menu-vertical-demo">
          <el-menu-item index="orders">
            <el-icon>
              <document />
            </el-icon>
            <span>Quản lý đơn hàng</span>
          </el-menu-item>
          <el-menu-item index="books">
            <el-icon>
              <collection />
            </el-icon>
            <span>Quản lý sách</span>
          </el-menu-item>
          <el-menu-item index="categories">
            <el-icon>
              <BookAudio />
            </el-icon>
            <span>Quản lý danh mục</span>
          </el-menu-item>
          <el-menu-item index="authors">
            <el-icon>
              <PercentSquareIcon />
            </el-icon>
            <span>Quản lý tác giả</span>
          </el-menu-item>
          <el-menu-item index="users">
            <el-icon>
              <user />
            </el-icon>
            <span>Quản lý người dùng</span>
          </el-menu-item>
          <el-menu-item index="logout">
            <el-icon>
              <LogOut />
            </el-icon>
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
            <BookManagement />
          </div>

          <div v-else-if="activeTab === 'categories'">
            <CategoryManagement />
          </div>

          <div v-else-if="activeTab === 'authors'">
            <AuthorManagement />
          </div>

          <div v-else-if="activeTab === 'users'">
            <UserManagement />
          </div>

          
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>



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