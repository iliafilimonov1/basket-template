import { BASKET_LIST, BASKET_LIST_CONTAINER, PRODUCTS_LIST } from './constants'
import { handleAddToBasket, handleDeleteProduct } from './handlers'

/**
 * Генерация шаблона товаров
 * @param {Object} products - массив товаров
 */
export const generateProductTemplate = (products) => {
  let html = ''
  products.forEach((product) => {
    html += `
      <div class="product-card" data-orientation="vertical" id="${product?.id}">
        <div class="product-image">
          <img src="${product?.imgSrc}" alt="${product?.name}">
        </div>
        <div class="product-info">
          <h3 class="product-name">${product?.name}</h3>
          <p class="product-category">${product?.category}</p>
          <p class="product-price">${product?.price}</p>
        </div>
        <button class="btn btn-primary add-to-cart">Add to cart</button>
      </div>
    `
  })
  PRODUCTS_LIST.insertAdjacentHTML('beforeend', html)
  handleAddToBasket(products)
}

// Функция отрисовки товаров в корзине
export const renderBasketItems = () => {
  let html = ''

  BASKET_LIST.forEach((product) => {
    html += generateProductTemplate(product, false)
  })
  BASKET_LIST_CONTAINER.innerHTML = html
  handleDeleteProduct()
}
