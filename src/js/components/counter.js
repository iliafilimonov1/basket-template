const input = document.querySelector('.counter__input') // поле для ввода количества
const btnUp = document.querySelector('.counter__btn--up') // кнопка увеличения количества
const btnDown = document.querySelector('.counter__btn--down') // кнопка уменьшения количества

// обработчик увеличения количества
btnUp.addEventListener('click', () => {
  let value = +input.value
  if (value < 10) {
    input.value = value + 1
    btnUp.disabled = input.value === 10
    btnDown.disabled = false
  }
})

// обработчик уменьшения количества
btnDown.addEventListener('click', () => {
  let value = +input.value
  if (value > 1) {
    input.value = value - 1
    btnDown.disabled = input.value === 1
    btnUp.disabled = false
  }
})
