const coursesAndDurationArray = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
]

for (const coursesElement of coursesAndDurationArray) {
  const div = document.createElement('div')

  const h2 = document.createElement('h2')
  h2.innerText = coursesElement.title
  const p = document.createElement('p')
  p.innerText = coursesElement.monthDuration

  div.append(h2, p)

  document.body.appendChild(div)
}