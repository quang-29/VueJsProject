
<script setup>
import { ref, computed, onMounted } from 'vue'
import { Trash } from 'lucide-vue-next'
import { useFormatPrice } from '@/composable/useFormatPrice'
import { useFetchBookById } from '@/composable/useFetchBookById'
import Swal from 'sweetalert2'
import axios from 'axios'
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
const { formatPrice } = useFormatPrice()
const cartItems = ref([])

// Lay chi tiet thong tin sach dua vao id cua sach o localstorage
onMounted(async () => {
  const list = localStorage.getItem('list')
  const data = list ? JSON.parse(list) : []
  console.log(data)
  cartItems.value = await Promise.all(
    data.map(async (item) => {
      const book = await useFetchBookById(item.id) 
      return {
        book,
        quantity: item.number,
        checked: false
      }
    })
  )
console.log(cartItems)
})

// Kiem tra nhung sach nao duoc check
const allChecked = computed({
  get: () => cartItems.value.length > 0 && cartItems.value.every(item => item.checked),
  set: (val) => {
    cartItems.value.forEach(item => (item.checked = val))
  }
})

// Tinh tong gia cua cac sach da duoc check
const totalPrice = computed(() =>
  cartItems.value
    .filter(item => item.checked)
    .reduce((sum, item) => sum + item.book.price * item.quantity, 0)
)

// Xoa sach ra khoi gio hang
const removeItem = (id) => {
  cartItems.value = cartItems.value.filter(item => item.book.id !== id)
  syncToLocalStorage()
}

// Tang so luong sach
const increaseQty = (item) => {
  item.quantity++
  syncToLocalStorage()
}

// Giam so luong sach
const decreaseQty = (item) => {
  if (item.quantity > 1) {
    item.quantity--
    syncToLocalStorage()
  } else {
    console.log("Xoa khoi gio hang")
    removeItem(item.book.id)
  }
}

// Dong bo thay doi o localstoreage
const syncToLocalStorage = () => {
  const savedData = cartItems.value.map(item => ({
    id: item.book.id,
    number: item.quantity
  }))
  localStorage.setItem('list', JSON.stringify(savedData))
}

const handlePlaceOrder = async () => {
  const list = localStorage.getItem('list');
  const data = list ? JSON.parse(list) : [];
  const token = localStorage.getItem('token');
  if (!token) {
    alert('Bạn chưa đăng nhập! Vui lòng đăng nhập để mua hàng');
    return;
  }

  // Lay userID tu localstorage
  const user_info = localStorage.getItem('user-info')
  const userId = JSON.parse(user_info).id

  const formdata = {
    userId: userId,
    address: "Roman Plaza",
    bookCart: data
  };

  try {

    Swal.fire({
      title: 'Đang xử lý đơn hàng...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
    const response = await axios.post('http://localhost:8080/api/v1/order/placeOrder', formdata, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    setTimeout(() => {
      Swal.close(); 
      localStorage.removeItem('list');
      cartItems.value = [];

      Swal.fire({
        title: 'Đặt hàng thành công!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    }, 2000); 
  } catch (error) {
    console.error('Đặt hàng thất bại:', error);
    Swal.close();
    Swal.fire({
      title: 'Lỗi',
      text: 'Đặt hàng thất bại. Vui lòng thử lại!',
      icon: 'error'
    });
  }
};

</script>


<template>
  <div class="cart-wrapper">
    <div class="cart-left">
      <h2>GIỎ HÀNG ({{ cartItems.length }} sản phẩm)</h2>
      <div class="select-all">
        <input type="checkbox" v-model="allChecked" />
        <span>Chọn tất cả ({{ cartItems.length }} sản phẩm)</span>
      </div>

      <div class="cart-item" v-for="item in cartItems" :key="item.id">
        
        <input type="checkbox" v-model="item.checked" />

        <img :src="item.book.imagePath" class="thumb" />

        <div class="item-info">
          <p class="title">{{ item.book.title }}</p>
          <div class="prices">
            <span class="sale">{{ formatPrice(item.book.price) }}</span>
            <span class="original">{{ formatPrice(item.book.price * 1.3) }}</span>
          </div>
        </div>

        <div class="qty">
          <button @click="decreaseQty(item)">-</button>
          <input type="text" :value="item.quantity" readonly />
          <button @click="increaseQty(item)">+</button>
        </div>

        <div class="subtotal">
          {{ formatPrice(item.book.price * item.quantity) }}
        </div>

        <button class="delete" @click="removeItem(item.book.id)"><Trash /></button>

      </div>
    </div>

    <div class="cart-right">

      <div class="summary">
        <p>Thành tiền:</p>
        <p>{{ formatPrice(totalPrice) }}</p>
        <p><strong>Tổng Số Tiền (gồm VAT):</strong></p>
        <h2>{{ formatPrice(totalPrice) }}</h2>
        <button class="checkout-btn" :disabled="totalPrice === 0" @click="handlePlaceOrder">
          ĐẶT HÀNG
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-wrapper {
  display: flex;
  gap: 32px;
  padding: 40px;
  background: #f4f4f4;
  color: black;
  font-size: 20px;
}

.cart-left {
  flex: 3;
  background: white;
  padding: 20px;
  border-radius: 8px;
}

.cart-right {
  flex: 1.5;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.select-all {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  font-weight: 500;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-top: 1px solid #eee;
}

.thumb {
  width: 80px;
  height: 110px;
  object-fit: cover;
  border: 1px solid #ccc;
}

.item-info {
  flex: 1;
}

.item-info .title {
  font-size: 16px;
  font-weight: 500;
}

.prices {
  display: flex;
  gap: 10px;
  margin-top: 4px;
}

.sale {
  color: red;
  font-weight: 600;
}

.original {
  color: #999;
  text-decoration: line-through;
}

.qty {
  display: flex;
  align-items: center;
  gap: 6px;
}

.qty button {
  padding: 4px 10px;
}

.qty input {
  width: 40px;
  text-align: center;
}

.subtotal {
  width: 100px;
  color: red;
  font-weight: bold;
  text-align: right;
}

.delete {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
}

.promo, .gift {
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  font-size: 14px;
}

.btn-small {
  padding: 6px 12px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  margin-top: 8px;
  cursor: pointer;
}

.summary {
  background: white;
  padding: 20px;
  border-radius: 8px;
  font-size: 16px;
}

.summary h2 {
  color: red;
  margin: 8px 0;
}

.checkout-btn {
  width: 100%;
  padding: 12px;
  background: red;
  color: white;
  border: none;
  font-weight: bold;
  font-size: 16px;
  margin-top: 12px;
  border-radius: 6px;
  cursor: pointer;
}

.checkout-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.note {
  font-size: 12px;
  color: #888;
  text-align: center;
  margin-top: 10px;
}
</style>
