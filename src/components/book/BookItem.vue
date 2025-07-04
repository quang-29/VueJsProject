<script setup>
import { useAddToCart } from '@/composable/useAddToCart';
import { formatPrice } from '@/util/formatPrice';
const props = defineProps({
    book: Object,
    require: true
})

const { addToCart } = useAddToCart();

</script>


<template>
    <RouterLink class="book-item" :to="`/book/${book.id}`">
        <div class="book-image" :style="{
            backgroundImage: `url(${book.imagePath})`
        }"></div>
        <div class="book-infor">
            <h3 class="book-title"> {{ book.title }}</h3>
            <p class="book-author">{{ book.authorName }}</p>
            <div class="stock-and-remain">
                <div class="price-block">
                    <span class="original-price">{{ formatPrice(book.price) }}</span>
                    <span class="sale-price">{{ formatPrice(book.price * 1.3) }}</span>
                    <span class="discount">-30%</span>
                </div>
                <div class="book-sold">
                    <span>Đã bán: {{ book.sold }}</span>
                </div>
            </div>
            <div class="rating">
                <el-icon>
                    <StarFilled />
                </el-icon>
                <span>{{ book.averageRating }}</span>
            </div>

            <div class="btn-add-to-cart" @click.stop="addToCart(book.id, 1)">
                <el-icon>
                    <ShoppingCart />
                </el-icon>
            </div>
        </div>
    </RouterLink>

</template>

<style setup>
.book-item {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 10px;
    padding: 5px;
    width: calc((100% - 4 * 16px) / 5);
    border: 1px solid transparent;
    transition: all 0.3s ease;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    border-radius: 12px;
    margin-top: 20px;
    position: relative;
    z-index: 1;
}

.book-item:hover {
    background-color: transparent;
    border-radius: 12px;
    border: 1px solid #f75454;
    /* transform: translateY(-5px) scale(1) */
}

.book-image {
    width: 100%;
    aspect-ratio: 2 / 3;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
}

.book-infor {
    width: 100%;
    font-size: 1.25rem;
    color: black;
    padding: 20px 10px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    overflow: hidden;
    margin-top: 10px;
}

.book-author {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: black;
    font-size: 20px;
    margin-top: 5px;
}
.book-title {
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    display: block;

}
.price-block {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
}

.original-price {
  color: #d63532;
  font-size: 1rem;

  
}
.sale-price {
  font-weight: bold;
  text-decoration: line-through;
  color: #888;
  font-size: 1rem;

}

.discount {
  background: #e53935;
  color: white;
  font-size: 14px;
  padding: 4px 8px;
  border-radius: 4px;
}
.stock-and-remain {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}
.book-sold {
    font-size: 1rem;
}
.btn-add-to-cart {
    width: 35px;
    height: 35px;
    background-color: #f75454;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: rgb(241, 235, 235);
    position: absolute;
    right: 20px;
    bottom: 20px;
    z-index: 999;
}

.btn-add-to-cart:hover {
    background-color: #f06c6c;
    color: white;
}

.rating {
    display: flex;
    align-items: center;
    margin-top: 5px;
}


</style>