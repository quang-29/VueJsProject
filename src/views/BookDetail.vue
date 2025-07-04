<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import Swal from 'sweetalert2'
import { useAddToCart } from '@/composable/useAddToCart'
import { formatPrice } from '@/util/formatPrice'


const route = useRoute()
const book = ref({})
const quantity = ref(1)
const { addToCart } = useAddToCart();


// Lay thong tin chi tiet sach dua tren id
onMounted(async () => {
  try {
    const response = await fetch(`http://localhost:8080/api/v1/book/${route.params.id}`)
    const json = await response.json()
    book.value = json
  } catch (error) {
    console.error('Failed to fetch book:', error)
  }
})

const increaseQty = () => quantity.value++
const decreaseQty = () => {
  if (quantity.value > 1) quantity.value--
}
</script>

<template>
  <div class="book-detail">
    <div class="left">
      <img :src="book.imagePath" class="main-image" />
      <div class="thumbnails">
        <img :src="book.imagePath" v-for="n in 3" :key="n" />
      </div>
    </div>

    <div class="right">
      <h1 class="title">{{ book.title }}</h1>
      <p class="author">Tác giả: <strong>{{ book.authorName }}</strong></p>

      <p class="isbn">Mã ISBN: <strong>{{ book.isbn }}</strong></p>
      <div class="status">
        <p>Tình trạng: 
          <span :class="book.stock > 0 ? 'in-stock': 'out-of-stock'">{{ book.stock > 0 ? 'Còn hàng': 'Hết hàng' }}</span>
        </p>
        <p>Nhà xuất bản: <span>
          {{ book.publisher}}
        </span></p>
      </div>

      <div class="price-block">
        <span class="original-price">{{ formatPrice(book.price) }}</span>
        <span class="sale-price">{{ formatPrice(book.price * 1.3) }}</span>
        <span class="discount">-30%</span>
      </div>

      <div class="qty">
        <button @click="decreaseQty" class="btn_quantity"><p>-</p></button>
         <span class="quantity">{{quantity}}</span>
        <button @click="increaseQty" class="btn_quantity"><p>+</p></button>
      </div>

      <div class="actions">
        <button class="add-to-cart" @click="addToCart(book.id,quantity)" :disabled="book.stock <= 0">THÊM VÀO GIỎ</button>
        <button class="buy-now" :disabled="book.stock <= 0">MUA NGAY</button>
      </div>

      <div class="description">
        <span class="book-description">MÔ TẢ:</span>
        <p>{{ book.description }}</p>
      </div>
    </div>
  </div>
</template>

<style>
.book-detail {
  display: flex;
  gap: 40px;
  padding: 40px;
  font-family: 'Segoe UI', sans-serif;
  background: #fff;
}

.left {
  width: 40%;
}

.main-image {
  width: 70%;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.thumbnails {
  display: flex;
  gap: 8px;
  margin-top: 12px;
}

.thumbnails img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.right {
  flex: 1;
}

.title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: black;
   font-weight: 600;
}

.author {
  font-size: 1.25rem;
  margin-bottom: 16px;
  color: black;
  font-weight: 600;
}
.isbn {
  color: black;
  font-size: 1.25rem;
  margin-bottom: 10px;
  font-weight: 600;
}
.price-block {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}

.original-price {
  font-size: 1.75rem;
  color: #d63532;
  
}

.sale-price {
  font-size: 1.75rem;
  font-weight: bold;
  text-decoration: line-through;
  color: #888;
}

.discount {
  background: #e53935;
  color: white;
  font-size: 14px;
  padding: 4px 8px;
  border-radius: 4px;
}

.qty {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.qty button {
  padding: 18px 24px;
  font-size: 18px;
  border: none;
  background-color: #f3f4f4;
  height: 45px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.qty input {
  width: 50px;
  text-align: center;
}

.actions {
  display: flex;
  column-gap: 16px;
  margin-bottom: 32px;
  align-items: center;
  margin-top: 32px;
}

.add-to-cart {
  padding: 12px 20px;
  background-color: #f36f47;
  color: white;
  border: none;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  height: 60px;
  margin: 0;
}

.buy-now {
  padding: 12px 20px;
  background-color: #19479c;
  color: white;
  border: none;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  height: 60px;
}

.description {
  color: #333;
  font-size: 1.15rem;
}

.description .book-description{
  font-weight: 600;
}
.quantity {
  color: black;
  font-size: 1.25rem;
  align-items: center;
}
.btn_quantity {
  padding: 8px;
  font-size: 1.5rem;

}
.status {
  display: flex;
  align-items: center;
  column-gap: 40px;
  font-size: 1.25rem;
  color: black;
  margin-bottom: 10px;
}
.status p {
   font-weight: 600;
}

.add-to-cart:disabled,
.buy-now:disabled {
  background-color: #ccc;       
  color: #666;                   
  cursor: not-allowed;           
  opacity: 0.7;                 
  pointer-events: none;        
}
.in-stock {
  color: #f1653b;
}
.out-of-stock{
  color: #e53935;
}

</style>
