function swap (arr, index1, index2) {
  if (index1 < arr.length && index2 < arr.length) {

    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp

    return arr
  }

  return -Infinity
}
console.log(swap([12, 25, 89, 5, -123], 0, 4));
