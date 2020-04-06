// Add your functions here
function map(sourceArray, func) {
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(func(sourceArray[i]))
    }
    return newArray
}

function reduce(sourceArray, func, start) {
    let memo = start ? start : sourceArray[0]
    let i = start ? 0 : 1
    for (; i < sourceArray.length; i++) {
        memo = func(sourceArray[i], memo)
    }
    return memo
}