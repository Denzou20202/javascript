class Car {
  constructor(model, producer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
  }
  drive () {
    console.log(`Едим со скоростью ${this.maxSpeed} в час`)
  };
  info () {
    for (const key in this) {
      console.log(key, this[key])
    }
  };
  increaseMaxSpeed (newSpeed) {
    if (newSpeed > 0) this.maxSpeed = this.maxSpeed + newSpeed
  };
  changeYear (year) {
    if (year > 1815) this.year = year
  };
  addDriver (driver) {
    if (driver) this.driver = driver
  };
}


const car = new Car ('A4', 'Audi', 1998, 220, 2)
console.log(car)

car.info()
car.drive()
car.increaseMaxSpeed(50);
car.changeYear(2002)
car.addDriver({name: 'Denis', age: 40, stageYears: 15})
console.log(car)



