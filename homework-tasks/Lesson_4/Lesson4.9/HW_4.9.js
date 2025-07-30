function list (users) {
  for (let user of users)  {
    document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
  }

}

list([
  {id:1, name:'Denis', age:30},
  {id:2, name:'Dasha', age:25},
  {id:3, name:'Dima', age:19},
  {id:4, name:'Sasha', age:27},
])

