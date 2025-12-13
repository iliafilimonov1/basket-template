const counterInput = document.querySelector('.counter__input') // инпут
const counterBtnUp = document.querySelector('.counter__btn--up') // кнопка увеличения
const counterBtnDown = document.querySelector('.counter__btn--down') // кнопка уменьшения

counterBtnUp.addEventListener('click', () => {
  counterInput.value++

  if (counterInput.value >= '1') {
    counterBtnDown.disabled = false
  }
  if (counterInput.value === '10') {
    counterBtnUp.setAttribute('disabled', true)
  }
})

counterBtnDown.addEventListener('click', () => {
  if (counterInput.value === '1') {
    counterBtnDown.disabled = true
  }
  counterInput.value--
})

// надо доделать
