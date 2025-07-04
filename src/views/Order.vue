<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { RouterLink } from 'vue-router'

const orders = ref([])
const loading = ref(false)
const showDialog = ref(false);
const selectedOrder = ref(null)

const fetchOrders = async () => {
  loading.value = true
  const token = localStorage.getItem('token')
  const user_info = localStorage.getItem('user-info')
  const user = JSON.parse(user_info)
  console.log(user.id)
  console.log(token)
  try {
    const response = await axios.get(`http://localhost:8080/api/v1/order/user/${user.id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    orders.value = response.data.content
    console.log(orders)
  } catch (err) {
    console.error(err.response.data.message)
  } finally {
    loading.value = false
  }
}


const statusType = (status) => {
  switch (status) {
    case 'PENDING':
      return 'warning'
    case 'SHIPPED':
      return 'success'
    case 'CANCELLED':
      return 'danger'
    default:
      return 'info'
  }
}

const viewOrder = (orderId) => {
  showDialog.value = true;
  const order = orders.value.find(item => item.id === orderId);
  selectedOrder.value = order


}

const formatDateTime = (dateString) => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).format(date)
}



onMounted(() => {
  fetchOrders()
})
</script>

<template>
  <div class="order-list-container">

    <p v-if="orders.length === 0" class="no_order">Bạn chưa có đơn hàng nào.</p>
    <el-table v-else :data="orders" v-loading="loading" style="width: 100%" border stripe highlight-current-row>
      <el-table-column prop="id" label="Mã đơn" width="100" />
      <el-table-column prop="createdAt" label="Ngày đặt" width="300">
        <template #default="{ row }">
          {{ row.created_at }}
        </template>
      </el-table-column>
      <el-table-column prop="address" label="Address" width="300">
        <template #default="{ row }">
          {{ row.address }}
        </template>
      </el-table-column>
      <el-table-column prop="totalPrice" label="Tổng tiền" width="300">
        <template #default="{ row }">
          {{ row.totalPrice.toLocaleString('vi-VN') }} đ
        </template>
      </el-table-column>
      <el-table-column prop="status" label="Trạng thái">
        <template #default="{ row }">
          <el-tag :type="statusType(row.status)">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Hành động" align="center" width="300">
        <template #default="{ row }">
          <el-button type="primary" size="small" @click="viewOrder(row.id)">
            Xem
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="showDialog" title="Chi tiết đơn hàng" width="90%" :close-on-click-modal="false"
      :destroy-on-close="true" :modal="true" class="custom-dialog">
      <div v-if="selectedOrder" class="sub_dialog">
        <div style="margin-bottom: 20px;">
          <p><strong>Mã đơn:</strong> {{ selectedOrder.id }}</p>
          <p><strong>Ngày đặt:</strong> {{ formatDateTime(selectedOrder.createdAt) }}</p>
          <p><strong>Địa chỉ:</strong> {{ selectedOrder.address }}</p>
          <p><strong>Trạng thái:</strong>
            <el-tag :type="statusType(selectedOrder.status)">
              {{ selectedOrder.status }}
            </el-tag>
          </p>
        </div>

        <div class="card-container">
          <RouterLink v-for="book in selectedOrder.orderItemDTOList" :key="book.bookId" :to="`/book/${book.bookId}`"
            class="book-card">
            <img :src="book.bookImage" alt="Ảnh bìa" class="book-image" />
            <div class="book-details">
              <h4>{{ book.bookTitle }}</h4>
              <p><strong>Tác giả:</strong> {{ book.bookAuthor }}</p>
              <p><strong>Giá:</strong> {{ book.bookPrice.toLocaleString('vi-VN') }} đ</p>
              <p><strong>Số lượng:</strong> {{ book.quantity }}</p>
            </div>
          </RouterLink>

        </div>

        <div class="order_action">
          <p class="total_money"><strong>Tổng tiền:</strong> {{ selectedOrder.totalPrice.toLocaleString('vi-VN') }} đ</p>
          <button :disabled="selectedOrder.status == 'PENDING'? false: true" class="btn_cancelOrder">Hủy đơn hàng</button>
        </div>
        
      </div>



      <template #footer>
        <el-button @click="showDialog = false">Đóng</el-button>
      </template>
    </el-dialog>
  </div>


</template>


<style scoped>
.order-list-container {
  padding: 40px;
  background: #f9f9f9;
  font-family: 'Segoe UI', sans-serif;
}
h2 {
  margin-bottom: 20px;
  color: #333;
}

el-table-column {
  height: 50px;
}
.order_action{
  display: flex;
  align-items: center;
  margin-top: 20px;
  column-gap: 20px;
}
.btn_cancelOrder{
  padding: 12px 24px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: white;
  color: rgba(211, 19, 42);
  border: 1px solid rgba(211,19,42);
  font-size: 1.25rem;
  transition: background-color 0.3s ease, color 0.3s ease;

}
.btn_cancelOrder:hover{
  background-color: #bd0909;
  color: white;
}
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.book-card {
  display: flex;
  flex-direction: row;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  width: 100%;
  max-width: 49%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: white;
  transition: transform 0.2s;
  color: black;

}

.book-card:hover {
 transform: translateY(-5px);
}

.book-image {
  width: 100px;
  height: auto;
  margin-right: 15px;
  border-radius: 6px;
  object-fit: cover;
}

.book-details {
  flex: 1;
}

.book-details h4 {
  margin: 0 0 10px 0;
  color: #333;
}

.sub_dialog {
  font-size: 1.15rem;
}

.total_money {
  font-size: 1.25rem;
  color: #bd0909;
}
.no_order {
  color: black;
  text-align: center;
  font-size: 1.25rem;
}
</style>
