function exchange (sumUAH,currencyValues,exchangeCurrency) {
  let currencyItem = {}

  for (let i = 0; i < currencyValues.length; i++) {
    if (currencyValues[i].currency === exchangeCurrency) {
      currencyItem = currencyValues[i]
      break
    }
  }
    let result = sumUAH / currencyItem.value

    return result

}
console.log(exchange(15000,
  [
    {currency:'USD',value:42},
    {currency:'EUR',value:45}],
'USD'))