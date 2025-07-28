let user1 = {name: 'user1', username: 'name_user1', password: 1235};
let user3 = {name: 'user3', username: 'name_user3', password: 'qwerty'};
let user5 = {name: 'user5', username: 'name_user5', password: 54321};
let user7 = {name: 'user7', username: 'name_user7', password: 'asdfg'};
let user9 = {name: 'user9', username: 'name_user9', password: 6789};

let users = [
  user1,
  {name: 'user2', username: 'name_user2', password: 'qwerty'},
  user3,
  {name: 'user4', username: 'name_user4', password: 54321},
  user5,
  {name: 'user6', username: 'name_user6', password: 'asdfg'},
  user7,
  {name: 'user8', username: 'name_user8', password: 6789},
  user9,
  {name: 'user10', username: 'name_user10', password: 'qwerty'},
]

console.log(users[0].name, users[0].password)
console.log(users[1].name, users[1].password)
console.log(users[2].name, users[2].password)
console.log(users[3].name, users[3].password)
console.log(users[4].name, users[4].password)
console.log(users[5].name, users[5].password)
console.log(users[6].name, users[6].password)
console.log(users[7].name, users[7].password)
console.log(users[8].name, users[8].password)
console.log(users[9].name, users[9].password)