const userForm = document.forms.userForm

const button = document.getElementById('btn');

const targetDiv = document.getElementById('target');

button.addEventListener('click', (evt) => {
  evt.preventDefault()
  const nameValue = userForm.name.value
  const surnameValue = userForm.surname.value
  const ageValue = userForm.age.value

  let obj = {nameValue, surnameValue, ageValue}

  targetDiv.innerText = obj.nameValue + ' ' + obj.surnameValue + ' ' + obj.ageValue

  console.log(obj)

})


