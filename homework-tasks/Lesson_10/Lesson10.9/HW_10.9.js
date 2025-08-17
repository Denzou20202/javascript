const storageKey = "priceHistory";

let history = JSON.parse(localStorage.getItem(storageKey)) || [];

let price = history.length > 0
  ? history[history.length - 1].price
  : parseInt(document.getElementById('priceBox').innerText);

let lastUpdate = history.length > 0
  ? history[history.length - 1].lastUpdate
  : 0;

const now = Date.now()
const diffSeconds = (now - lastUpdate) / 1000;

if (diffSeconds >= 10) {
  price += 10;
  let lasUpdateToStr = new Date(now).toLocaleString()
  history.push({ price, lastUpdate: now, lasUpdateToStr});

  localStorage.setItem(storageKey, JSON.stringify(history));
}

document.getElementById("priceBox").innerText = price + " грн";
