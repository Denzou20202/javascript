let currentNumber = +localStorage.getItem('number')

currentNumber += 1

localStorage.setItem('number', currentNumber)

document.getElementById('target').innerText = currentNumber

