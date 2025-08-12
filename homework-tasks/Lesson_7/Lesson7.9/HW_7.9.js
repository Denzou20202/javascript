class Cinderella {

  constructor(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
  }
}

class Prince {

  constructor(name, age, shoeSize) {
    this.name = name;
    this.age = age;
    this.shoeSize = shoeSize;
  }
}

const cinderellas = [
  new Cinderella('Dasha', 27, 39),
  new Cinderella('Masha', 34, 41),
  new Cinderella('Olga', 25, 37),
  new Cinderella('Sasha', 18, 38),
  new Cinderella('Yulia', 22, 40),
  new Cinderella('Marfa', 31, 39),
  new Cinderella('Elena', 29, 36),
  new Cinderella('Anastasia', 21, 35),
  new Cinderella('Helena', 25, 37),
  new Cinderella('Oleksandra', 26, 38),
]

const prince = new Prince('Jone', 27, 35)

const princeWife = cinderellas.find(cinderella => cinderella.footSize === prince.shoeSize)

console.log('Вот она невеста нашего принца' , princeWife)

const niceFoot = cinderellas.filter(cinderella => cinderella.footSize <= 37 )
console.log('У них тоже красивые ножки', niceFoot)

cinderellas.forEach(Cinderella => {
    if (Cinderella.age > 18 && Cinderella.age < 29) {
      console.log(`${Cinderella.name}, Еще встретишь своего принца`)
    } else {
      console.log(`${Cinderella.name}, Регистрируйся на сайте Знакомств ;)`)
    }
  }
)