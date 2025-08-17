const tableForm = document.forms['tableForm']

const table = document.getElementById('table')

tableForm.onsubmit = function (evt) {
  table.innerText = ''
  evt.preventDefault()
  const rowsValue = Number(tableForm.rows.value)
  const columnsValue = Number(tableForm.columns.value)
  const dataValue = tableForm.data.value

  console.log(rowsValue, columnsValue, dataValue)

  for (let i = 0; i < rowsValue; i++) {
    const tr = document.createElement('tr')
    for (let j = 0; j < columnsValue; j++) {
      const td = document.createElement('td');
      td.innerText = dataValue
      tr.appendChild(td)

    }
    table.appendChild(tr)
  }
}