<script setup>
import { onMounted, ref } from 'vue'
import { useFetchData } from '@/composable/useFetchData';
import { RouterLink } from 'vue-router';
import { formatDateTime } from '@/util/formatDate';
const orders = ref([])
const showDialog = ref(false)
const selectedOrder = ref({})

const { loading, data, error, fetchData } = useFetchData()

onMounted(async () => {
    await fetchData('http://localhost:8080/api/v1/order/all')
    orders.value = data.value
    console.log(orders)
})

const viewOrder = (orderId) => {
  showDialog.value = true;
  const order = orders.value.find(item => item.id === orderId);
  console.log(order)
  selectedOrder.value = order;


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

</script>

<template>
    <el-table :data="orders">
        <el-table-column prop="id" label="Id" />
        <el-table-column prop="address" label="Address" />
        <el-table-column prop="createdAt" label="Created At" width="100" />
        <el-table-column prop="status" label="Satus" width="100" />
        <el-table-column prop="totalPrice" label="Total" width="100" />
        <el-table-column label="Hành động" width="160">
            <template #default="{ row }">
                <el-button type="primary" size="small" @click="viewOrder(row.id)">
                    Xem chi tiết
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
          <button :disabled="selectedOrder.status == 'PENDING'? false: true" class="btn_cancelOrder">Xác nhận đơn hàng</button>
        </div>
        
      </div>



      <template #footer>
        <el-button @click="showDialog = false">Đóng</el-button>
      </template>
    </el-dialog>
</template>

<style setup>
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
