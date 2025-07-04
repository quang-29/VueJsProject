
export function useFormatPrice() {
  const formatPrice = (price) => {
    console.log('formatPrice called with:', price)
    if (!price || isNaN(price)) return '0đ'
    return Number(price).toLocaleString('vi-VN') + 'đ'
  }

  return {
    formatPrice
  }
}
