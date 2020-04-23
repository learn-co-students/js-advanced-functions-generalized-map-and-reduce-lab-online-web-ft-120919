// Add your functions here
function map(srcArray, func) {
    let mapArray = []
    srcArray.forEach(index => {
      mapArray.push(func(index))
    })
    return mapArray
  }
  
  function reduce(srcArray, func, startingPoint) {
    let total
    let i
  
    if (!!startingPoint) {
      total = startingPoint
      i = 0
  
    } else {
      total = func(srcArray[0], srcArray[1])
      i = 2
    }
    for (i; i < srcArray.length; i++) {
      total = func(total, srcArray[i])
    }
    return total
  } 