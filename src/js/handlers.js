import { FORM, MODAL, BASKET_BTN, CLOSE_MODAL, BASKET_LIST } from './constants'
import { createProduct, loadJSON } from './api'
import { renderBasketItems } from './template'
import { Notification } from './components/notification'

// Обработчик создания товара
export const handleSubmit = () => {
  FORM.addEventListener('submit', (event) => {
    event.preventDefault()
    createProduct(event.target)
    loadJSON()
    FORM.reset()
  })
}

// Обработчик открытия модалки
export const handleOpenModal = () => {
  BASKET_BTN.addEventListener('click', () => {
    MODAL.show()
    renderBasketItems()
  })
}

// Обработчик закрытия модалки
export const handleCloseModal = () => {
  CLOSE_MODAL.addEventListener('click', () => {
    MODAL.close()
  })
}

// Обработчик добавления товара в корзину
export const handleAddToBasket = (data) => {
  // получаем все кнопки добавить в корзину
  const addBtns = document.querySelectorAll('.add-to-cart')

  addBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const productId = btn?.parentElement?.parentElement?.id
      // идем в бд искать найденный элемент
      const findedProduct = data?.find(({ id }) => id === productId)
      // добавляем найденный элемент в массив корзины
      BASKET_LIST.push(findedProduct)
      // показываем уведомление
      new Notification({ title: 'Добавление товара', subtitle: 'Товар успешно добавлен в корзину' })
      // обновляем отрисовку корзины, если модалка открыта
      if (MODAL.open) {
        renderBasketItems()
      }
    })
  })
}

// Обработчик удаления товара из корзины
export const handleDeleteProduct = () => {
  const deleteBtns = document.querySelectorAll('.product-remove')
  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const productId = btn?.parentElement?.id
      // находим индекс элемента в массиве по ID
      const productIndex = BASKET_LIST.findIndex(({ id }) => id === productId)
      // удаляем найденный элемент из массива корзины
      if (productIndex !== -1) {
        BASKET_LIST.splice(productIndex, 1)
        renderBasketItems()
        // показываем уведомление
        new Notification({ title: 'Удаление товара', subtitle: 'Товар удален из корзины' })
      }
    })
  })
}
