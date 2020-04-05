// Add your functions here

function map(arr, fn) {
  let res = []

  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i]))
  }
  return res
}

function reduce(arr, fn, starting) {
  let res = (!!starting) ? starting : arr[0]
  let i = (!!starting) ? 0 : 1 

  for (; i < arr.length; i++) {
    res = fn(arr[i], res)
  }
  return res
}
