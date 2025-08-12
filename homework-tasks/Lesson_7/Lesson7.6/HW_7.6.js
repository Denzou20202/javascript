function Car (model, producer, year, maxSpeed, engineVolume) {
  this.model = model;
  this.producer = producer;
  this.year = year;
  this.maxSpeed = maxSpeed;
  this.engineVolume = engineVolume;
  this.drive = function () {
    console.log(`Едим со скоростью ${maxSpeed} в час`)
  };
  this.info = function () {
    for (const key in this) {
      console.log(key, this[key])
    }
  };
  this.increaseMaxSpeed = function (newSpeed) {
    if (newSpeed > 0) this.maxSpeed = this.maxSpeed + newSpeed
  };
  this.changeYear = function (year) {
    if (year > 1815) this.year = year
  };
  this.addDriver = function (driver) {
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



