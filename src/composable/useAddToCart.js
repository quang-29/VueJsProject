import Swal from 'sweetalert2'

export function useAddToCart() {
  const addToCart = (id, number = 1) => {
    const listBook = localStorage.getItem('list')
    const list = listBook ? JSON.parse(listBook) : []

    const existingItem = list.find(item => item.id === id)
    if (existingItem) {
      existingItem.number += number
    } else {
      list.push({
        id,
        number
      })
    }
    localStorage.setItem('list', JSON.stringify(list))
    Swal.fire({
      title: 'Thêm vào giỏ hàng thành công!',
      icon: 'success'
    })
  }

  return { addToCart }

}
