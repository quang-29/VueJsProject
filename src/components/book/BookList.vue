<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { computed } from 'vue';
import { useFetchBooks } from '@/composable/useFetchBooks';
import { useAddToCart } from '@/composable/useAddToCart';
import BookItem from './BookItem.vue';

const {loading, books, error} = useFetchBooks('http://localhost:8080/api/v1/book/all')
const book = ref({})
const {addToCart} = useAddToCart();

</script>

<template>
    <div>
        <div class="book-header">
            <h4>ALL BOOKS</h4>
        </div>
        <div class="book-container">
            <div class="book-list">
                <BookItem v-for="book in books" :to="`/book/${book.id}`" :key="book.id" :book="book" />
            </div>

        </div>
    </div>
</template>

<style>
.book-header{
    color: black;
}
.book-container {
    margin: 30px;

}
.book-list {
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: 10px;
    height: auto;
    flex-wrap: wrap;
}

</style>