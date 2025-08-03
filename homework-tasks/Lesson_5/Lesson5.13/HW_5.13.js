const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
  const currencyItem = currencyValues.find(
    item => item.currency === exchangeCurrency
  );

  return sumUAH / currencyItem.value;
};
console.log(exchange(15000,
  [
    {currency:'USD',value:42},
    {currency:'EUR',value:45}],
'USD'))