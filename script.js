const slider = document.getElementById('slider')
const lengthTitle = document.querySelector('.length__title')
const uppercaseCheckbox = document.getElementById('uppercase')
const lowercaseCheckbox = document.getElementById('lowercase')
const numberCheckbox = document.getElementById('number')
const symbolCheckbox = document.getElementById('symbol')
const showResult = document.getElementById('result')
const generate = document.getElementById('generate')
const copyfunction = document.getElementById('result')

const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowercase = 'abcdefghijklmnopqrstuvwxyz'
const specialSymbol = "!@#$%^&*()_-+={}[]|:;'<>,.?/"
const number = '0123456789'
let stringToChoosePass = uppercase + lowercase + number
let Password = ''
let length = parseInt(slider.value)

// handle slider to adjust lenght of password
slider.addEventListener('input', function () {
  lengthTitle.setAttribute('data-length', slider.value)
  length = parseInt(slider.value)
})

// handle the selection area of for the password
uppercaseCheckbox.addEventListener('input', () => {
  if (uppercaseCheckbox.checked === false) {
    stringToChoosePass = stringToChoosePass.replace(uppercase, '')
  } else {
    stringToChoosePass += uppercase
  }
})

lowercaseCheckbox.addEventListener('input', () => {
  if (lowercaseCheckbox.checked === false) {
    stringToChoosePass = stringToChoosePass.replace(lowercase, '')
  } else {
    stringToChoosePass += lowercase
  }
})
numberCheckbox.addEventListener('input', () => {
  if (numberCheckbox.checked === false) {
    stringToChoosePass = stringToChoosePass.replace(number, '')
  } else {
    stringToChoosePass += number
  }
})
symbolCheckbox.addEventListener('input', () => {
  if (symbolCheckbox.checked === true) {
    stringToChoosePass += specialSymbol
  } else {
    stringToChoosePass = stringToChoosePass.replace(specialSymbol, '')
  }
})

// handle generate operation of password
generate.addEventListener('click', () => {
  if (Password != '') return
  for (let i = 0; i < length; i++) {
    Password += stringToChoosePass.charAt(
      Math.floor(Math.random() * stringToChoosePass.length)
    )
  }
  showResult.innerText = Password
})



// handle copy funtion
copyfunction.addEventListener('mouseover', () => {
  if (!Password) {
    showResult.innerText = 'CLICK GENERATE'
  } else {
    showResult.innerText = 'Click to Copy'
  }
})
copyfunction.addEventListener('mouseout', function () {
  if (!Password) {
    showResult.innerText = 'CLICK GENERATE'
  } else {
    showResult.innerText = Password
  }
})

showResult.addEventListener('click', () => {
  navigator.clipboard.writeText(Password)
  alert('copied')
})
