function Client (id, name, surname , email, phone, ...products) {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.phone = phone;
  this.order = products;
}

function Product (title, price) {
  this.title = title;
  this.price = price
}

let Clients = [
  new Client(
    2,
    'Denis',
    'Petrov',
    'petrov.d@gmail.com',
    '+380991234589',
    new Product('TV', 14000)
  ),
  new Client(
    4,
    'Sasha',
    'Ivanov',
    'ivanov.s@gmail.com',
    '+380991234590',
    new Product('iPhoneX', 9500),
    new Product('USB flash', 500)
  ),
  new Client(
    1, 'Sveta',
    'Orlova',
    'orlova.s@gmail.com',
    '+380991234591',
    new Product('USB flash', 500)
  ),
  new Client(
    6, 'Oleg',
    'Petrov',
    'petrov.o@gmail.com',
    '+380991234592',
    new Product('iPhoneX', 9500),
    new Product('USB flash', 500)
  ),
  new Client(
    5,
    'Dima',
    'Urlov',
    'urlov.d@gmail.com',
    '+380991234593',
    new Product('TV', 14000)
  ),
  new Client(
    3, 'Masha',
    'Dashkevich',
    'dashkevich.m@gmail.com',
    '+380991234594',
    new Product('Keybord', 1500),
    new Product('USB flash', 500)
  ),
  new Client(
    10, 'Roma',
    'Buganov',
    'buganov.r@gmail.com',
    '+380991234595',
    new Product('Meat', 450),
  ),
  new Client(
    8,
    'Volodya',
    'Petrov',
    'petrov.v@gmail.com',
    '+380991234596',
    new Product('iPhoneX', 9500),
  ),
  new Client(
    9,
    'Vova',
    'Sokolov',
    'sokolov.v@gmail.com',
    '+380991234597',
    new Product('PlayStation', 22500),
  ),
  new Client(
    7, 'Sergei',
    'Petrov',
    'petrov.s@gmail.com',
    '+380991234598',
    new Product('TV', 14000)
  ),
]

console.log(Clients)