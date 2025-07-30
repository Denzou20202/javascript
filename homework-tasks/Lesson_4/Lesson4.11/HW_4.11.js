function sum (array) {
  let kasa = 0
  for (let item of array) {
    kasa = kasa + item
  }
  return kasa
}
console.log(sum([12, 25, 89, 5, -123]));
