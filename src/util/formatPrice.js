export function formatPrice(price){
    if (typeof price !== 'number') {
        price = Number(price);
    }
    return price.toLocaleString('vi-VN'); 
};