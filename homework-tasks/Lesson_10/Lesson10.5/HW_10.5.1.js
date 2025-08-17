let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || []

sessionsList.push(new Date())

localStorage.setItem('sessionsList', JSON.stringify(sessionsList))


