let arr = ['Main','Products','About us','Contacts']


const menu = document.createElement('ul')
menu.classList.add('menu')


document.body.appendChild(menu)

for (const item of arr) {
  const liItem =  document.createElement('li')
  liItem.innerText = item
  menu.appendChild(liItem)
}