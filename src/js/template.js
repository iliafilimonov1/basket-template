import { BASKET_LIST, BASKET_LIST_CONTAINER, PRODUCTS_LIST } from './constants'
import { handleAddToBasket, handleDeleteProduct } from './handlers'

/**
 * Генерация шаблона товаров
 * @param {Object} products - массив товаров
 */
export const generateProductTemplate = (products) => {
  PRODUCTS_LIST.innerHTML = ''

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
    html += `
      <div class="product-card" data-orientation="horizontal" id="${product?.id}">
        <div class="product-image">
          <img src="${product?.imgSrc}" alt="${product?.name}">
        </div>
        <div class="product-info">
          <h3 class="product-name">${product?.name}</h3>
          <p class="product-category">${product?.category}</p>
          <!-- Компонент степпер  -->
          <div class="counter">
            <label class="counter__field">
              <input class="counter__input" type="text" value="1" maxlength="3" readonly />
              <span class="counter__text">шт</span>
            </label>
            <div class="counter__btns">
              <button class="counter__btn counter__btn--up" aria-label="Увеличить количество">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5">
                  <g>
                    <g>
                      <path d="M3.904-.035L-.003 3.151 1.02 5.03l2.988-2.387 2.988 2.387 1.022-1.88-3.89-3.186z"></path>
                    </g>
                  </g>
                </svg>
              </button>
              <button disabled class="counter__btn counter__btn--down" aria-label="Уменьшить количество">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5">
                  <g>
                    <g>
                      <path d="M3.904 5.003L-.003 1.818 1.02-.062l2.988 2.386L6.995-.063l1.022 1.88-3.89 3.186z"></path>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <p class="product-price">${product?.price}</p>
        </div>
        <button class="close-button product-remove" aria-label="Удалить товар">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
            <path d="m6 6 20 20" stroke="currentColor" stroke-width="3" fill="none"/>
            <path d="m26 6-20 20" stroke="currentColor" stroke-width="3" fill="none"/>
          </svg>
        </button>
      </div>
    `
  })
  BASKET_LIST_CONTAINER.innerHTML = html
  handleDeleteProduct()
}
