import { loadJSON } from './api.js'
import { handleCloseModal, handleOpenModal, handleSubmit } from './handlers.js'
import { generateProductTemplate } from './template.js'

// подгрузка данных при загрузке страницы
document.addEventListener('DOMContentLoaded', async () => {
  const data = await loadJSON()
  generateProductTemplate(data)
})

handleSubmit()
handleOpenModal()
handleCloseModal()
