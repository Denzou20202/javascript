const container = document.getElementById('container')

fetch('https://dummyjson.com/recipes')
  .then(res => res.json())
  .then(recipesObject => {
    const {recipes} = recipesObject
    console.log(recipes)

    for (const recipe of recipes) {
      const div = document.createElement('div')
      div.classList.add('cart-container')
      const titleDiv = document.createElement('div')
      titleDiv.classList.add('title-text')
      titleDiv.innerText = `
          "userId" : ${recipe.userId}
          "name" : ${recipe.name}
         `
      const img = document.createElement('img')
      img.src = recipe.image
      img.setAttribute('style', 'width:250px; height:250px; border-radius: 50% ')
      const infoDiv = document.createElement('p')
      infoDiv.innerText = `
            "caloriesPerServing" : ${recipe.caloriesPerServing}
            "cookTimeMinutes" : ${recipe.cookTimeMinutes}
            "cuisine" : "${recipe.cuisine}"
            "difficulty" : "${recipe.difficulty}"
        `
      const ul = document.createElement('ul')
      ul.innerText = "Ingredients"
      for (const product of recipe.ingredients) {
        const li = document.createElement('li')
        li.innerText = `${product}`
        ul.appendChild(li)
      }
      const ol = document.createElement('ol')
      ol.innerText = "Instruction"
      for (const item of recipe.instructions) {
        const li = document.createElement('li')
        li.innerText = `${item}`
        ol.appendChild(li)
      }

      div.append(titleDiv, img, infoDiv,ol, ul)
      container.appendChild(div)
    }
  });

















// prepTimeMinutes : 20
// rating : 4.6
// reviewCount : 98
// servings : 4

