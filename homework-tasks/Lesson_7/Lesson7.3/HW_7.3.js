function User (id, name, surname , email, phone) {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.phone = phone
}

let users = [
  new User(2, 'Denis', 'Petrov', 'petrov.d@gmail.com', '+380991234589'),
  new User(4, 'Sasha', 'Ivanov', 'ivanov.s@gmail.com', '+380991234590'),
  new User(1, 'Sveta', 'Orlova', 'orlova.s@gmail.com', '+380991234591'),
  new User(6, 'Oleg', 'Petrov', 'petrov.o@gmail.com', '+380991234592'),
  new User(5, 'Dima', 'Urlov', 'urlov.d@gmail.com', '+380991234593'),
  new User(3, 'Masha', 'Dashkevich', 'dashkevich.m@gmail.com', '+380991234594'),
  new User(10, 'Roma', 'Buganov', 'buganov.r@gmail.com', '+380991234595'),
  new User(8, 'Volodya', 'Petrov', 'petrov.v@gmail.com', '+380991234596'),
  new User(9, 'Vova', 'Sokolov', 'sokolov.v@gmail.com', '+380991234597'),
  new User(7, 'Sergei', 'Petrov', 'petrov.s@gmail.com', '+380991234598'),
]


const sortUsers = users.sort((user1, user2) => user1.id - user2.id)

console.log(sortUsers)