document.getElementById('btn').addEventListener('click', function () {
  const ageInput = parseInt(document.getElementById('age').value)

  if (isNaN(ageInput)) {
    alert ('Enter your age again')
  } else if (ageInput < 18) {
    alert ('Access denied')
  } else {
    alert(`Your age ${ageInput}, welcome`)
  }
}
)




