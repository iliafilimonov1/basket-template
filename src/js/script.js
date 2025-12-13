import { loadJSON } from './api.js'
import { FORM } from './constants.js'
import { createProduct } from './api.js'

// подгрузка данных при загрузке страницы
document.addEventListener('DOMContentLoaded', loadJSON)

const FORM_HANDLER = () => {
  FORM.addEventListener('submit', (event) => {
    event.preventDefault()
    createProduct(event.target)
    loadJSON()
  })
}

FORM_HANDLER()