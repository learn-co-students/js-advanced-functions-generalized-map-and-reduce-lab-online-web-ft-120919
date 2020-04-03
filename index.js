// Add your functions here

function map(sourceArray, fn) {
  return sourceArray.map(element => fn(element))
}

function reduce(sourceArray, fn, startingPoint) {
  if (startingPoint) {
    return sourceArray.reduce((element, acc) => {
      return fn(element, acc)
    }, startingPoint)
  } else {
    return sourceArray.reduce((element, acc) => {
      return fn(element, acc)
    })
  }

}
