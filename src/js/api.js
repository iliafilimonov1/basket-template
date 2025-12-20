// Функция подгрузки данных из JSON
export async function loadJSON() {
  try {
    const response = await fetch('http://localhost:3000/products')
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Ошибка загрузки данных:', error)
  }
}

/**
 * Функция создания товара
 * @param {Object} product - объект товара
 * @param {string} product.name - название товара
 * @param {string} product.category - категория товара
 * @param {string} product.rating - рейтинг товара
 * @param {string} product.price - цена товара
 * @param {string} product.imgSrc - ссылка на изображение товара
 */
export async function createProduct(product) {
  const data = {
    name: product?.name?.value,
    category: product?.category?.value,
    rating: product?.rating?.value,
    price: product?.price?.value,
    imgSrc: product?.imgSrc?.value,
  }

  try {
    const response = await fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return await response.json()
  } catch (error) {
    console.error('Ошибка создания товара:', error)
  }
}
