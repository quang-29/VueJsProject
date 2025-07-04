<script setup>

import { useFormatPrice } from '@/composable/useFormatPrice'
import {ref,computed} from 'vue'

const {formatPrice} = useFormatPrice();



const data = ref({
        title: 'Áo thun nam thể thao hàng VNXK vải dày mịn - Vải Đốm',
        url: 'https://is4.fwrdassets.com/images/p/fw/z/TFOF-MS4_V1.jpg',
        target: '_blank',
        sale: 0.1,
        selectedProduct: 2,
        cardNumber: 1,
        listProductDetail: [
            {
                image: 'https://cavathanquoc.com/wp-content/uploads/2024/06/Ao-thun-tron-cotton-mau-do-man-1.jpg',
                quantity: 0,
                textColor: 'Màu Đỏ',
                price: 20000,
            }, {
                image: 'https://cavathanquoc.com/wp-content/uploads/2024/06/Ao-thun-tron-cotton-mau-xanh-duong-4-700x933.jpg',
                quantity: 8,
                textColor: 'Màu Xanh',
                price: 40000,
            }, {
                image: 'https://dosi-in.com/images/detailed/42/CDL10_2.jpg',
                quantity: 2,
                textColor: 'Màu Đen',
                price: 30000,
            }, 
        ],
        listDesc: [
            'Chất liệu: polyester và thun',
            'Thoát mồ hôi tốt',
            'Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát',
            'Kết hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc',
            'Chất liệu: polyester và thun'
        ],
        description: '<p>M&ocirc; tả: &Aacute;o thun cổ tr&ograve;n thể thao Hiye chuy&ecirc;n được may từ chất liệu nilon tho&aacute;ng m&aacute;t v&agrave; tho&aacute;t mồ h&ocirc;i tốt, kết hợp th&ecirc;m sợi thun tạo độ co gi&atilde;n gi&uacute;p người ti&ecirc;u d&ugrave;ng thoải m&aacute;i khi mặc</p> ',
        testDescription: `<p>Test hjskhfk h</p>

        <p><strong><span style="background-color:#8e44ad">fhsdjkfhsk&nbsp; hsdjkfk&nbsp;</span></strong></p>`
    })
     const handleClickColor = (event, index) => {
        productSelected.value = data.value.listProductDetail[index]

     }
const productSelected = ref({});
const productInCart = ref([])

        const handleAddToCart = () => {
        console.log("Bạn đã ấn thêm vào giỏ hàng");

        if (Object.keys(productSelected.value).length === 0) {
            console.log("Bạn chưa chọn sản phẩm nào!");
            alert("Bạn chưa chọn sản phẩm nào!");
            return;
        }

        if (productSelected.value.quantity === 0) {
            console.log("Sản phẩm bạn chọn đã hết hàng!");
            alert("Sản phẩm bạn chọn đã hết hàng!");
            return;
        }

        const foundInCart = productInCart.value.find(
            item => item.textColor === productSelected.value.textColor
        );

        const productInList = data.value.listProductDetail.find(
            item => item.textColor === productSelected.value.textColor
        );

        if (!productInList || productInList.quantity === 0) {
            alert("Sản phẩm đã hết hàng trong kho!");
            return;
        }

        if (foundInCart) {
            foundInCart.cartQuantity++;
        } else {
            productInCart.value.push({
            ...productSelected.value,
            cartQuantity: 1
            });
        }

        productInList.quantity--;

        console.log("Giỏ hàng hiện tại:", productInCart.value);
        }

// const handleCart = computed(() => {
//     return numberOfProduct.value;
// })




</script>

<template>
    <div class="container">
        <div class="list-blog">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi sunt eveniet maxime magni in, nostrum
                facilis, temporibus, quam facere sint est blanditiis harum dicta. Tempore suscipit ut hic. Deleniti,
                qui.</p>
        </div>
        <div id="app">
            <div class="cart">Giỏ hàng ({{ handleCart }})</div>
            <div class="product">
                <div class="product-image">
                    <div class="image" :style="{ width: '250px', height: '330px' }">
                        
                        <img 
                            v-if="productSelected && productSelected.image" 
                            :src="productSelected.image" 
                            :alt="productSelected.textColor"
                        />
                            <img v-else :src="data.url" alt="Ảnh mặc định" />

                    </div>
                </div>
                <div class="product-content">
                    <h3 class="title">
                    <a v-bind:href="url" v-bind:target="target">{{ data.title }}</a>
                    </h3>
                    <p class="brand">Thương hiệu: No brand</p>
                    <p class="quantity" v-if="productSelected.quantity > 0">Còn lại: {{ productSelected.quantity }} Sản phẩm</p>
                    <p class="quantity" v-if="productSelected.quantity <= 0">Sản phẩm đã hết hàng</p>
                    <p class="price">{{ productSelected.price ? formatPrice(productSelected.price) : 'Vui lòng chọn sản phẩm' }}</p>


                    <!-- <div class="wrapper-price">
                        <div class="final-price">{{ formatFinalPrice }}</div>
                        <div class="origin-price">{{ formatPrice }}</div>
                        <div class="sale-price">-{{sale * 100}}%</div>
                    </div> -->
                    <div class="wrapper-color">
                        <div class="text">Màu sắc</div>
                        <div class="list-color">
                            <!-- <p class="color-text">{{ getProduct.textColor }}</p> -->
                            <ul>
                                <li 
                                    v-for="(item, index) in data.listProductDetail"
                                    v-bind:key="index"
                                    v-on:click="handleClickColor($event, index)">
                                    <img v-bind:src="item.image" v-bind:alt="item.textColor">
                                </li>
                                <!-- <li><img src="./images/blue.jpg" alt="color"></li> -->
                                <!-- <li><img src="./images/red.jpg" alt="color"></li> -->
                            </ul>
                        </div>
                    </div>
                    <button 
                        v-on:click="handleAddToCart"
                        class="add-to-cart">Add to cart</button>
                </div>
                
            </div>
            <div class="description">
                <ul class="extra-info">
                    <li v-for="item in listDesc">{{ item }}</li>
                </ul>
                <h2>Chất liệu bền chặt&nbsp;</h2>
            </div>
                
        </div>
    </div>
</template>

<style>
body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    color: black;
    font-size: 16px;
}
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 30px;
}
img {
    max-width: 100%;
}
.product {
    max-width: 700px;
    display: flex;
    margin-top: 20px;
    position: relative;
}
.product .product-image {
    flex-basis: 40%;
    max-width: 40%;
    padding-right: 30px;
}
.product .product-content {
    flex-basis: 60%;
}
.product-image .image {
    width: 100%;
    border: 1px solid #ccc;
}
.product-image .image img {
    display: block;
}
.title {
    margin-top: 0;
}
.title a {
    color: #333;
    text-decoration: none;
}
.cart {
    display: inline-block;
    padding: 15px 10px;
    border: 1px solid #ccc;
}
.wrapper-price .final-price {
    color: #f57224;
    font-weight: 700;
    font-size: 22px;
    margin-bottom: 5px;
}
.wrapper-price .origin-price,
.wrapper-price .sale-price {
    display: inline-block;
    font-size: 14px;
    color: #ccc;
    vertical-align: middle;
}
.wrapper-price .sale-price {
    color: #333;
    margin-left: 5px;
    padding: 3px;
    font-size: 10px;
    border-radius: 5px;
    border: 1px solid #f57224;
}

.wrapper-color {
    display: flex;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid #eee;
}
.wrapper-color .text {
    width: 100px;
    min-width: 100px;
}
.wrapper-color p {
    margin-top: 0;
    margin-bottom: 10px;
}
.list-color ul {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
}
.list-color ul li {
    width: 40px;
    height: 40px;
    border: 1px solid #ccc;
    margin-right: 20px;
}
.list-color ul li:hover,
.list-color ul li.active {
    border-color: #f57224;
}

.description {
    max-width: 700px;
}
.description .extra-info {
    padding-left: 0;
    list-style-position: inside;
}
.add-to-cart {
    border: 1px solid #ffb916;
    background: #ffb916;
    color: #fff;
    display: block;
    padding: 12px 30px;
    margin-top: 30px;
    text-transform: uppercase;
    font-size: 16px;
    cursor: pointer;
}
header {
    color: #fff;
    padding: 15px 30px;
    background-color: #3498db;
}
footer {
    color: #fff;
    padding: 15px 30px;
    background-color: #34495e;
}
header h1, footer h1 {
    margin: 0;
}
</style>