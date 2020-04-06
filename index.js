function map(array, func) {
    return array.map(func)
}

function reduce(array, func, start=0) {
    let answer = array.reduce(func)
    return answer === !!answer ? answer : answer + start
}