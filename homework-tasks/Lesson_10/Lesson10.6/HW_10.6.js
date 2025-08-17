let killogramm = document.getElementById('convert')
const resultDiv = document.getElementById('result')

killogramm.oninput = function () {
  resultDiv.innerText = String(this.value * 2.2)
}

