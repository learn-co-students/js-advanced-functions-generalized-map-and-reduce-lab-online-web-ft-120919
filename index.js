// Add your functions here

function map(array, fn){
    let newArray = []

    for (let i = 0; i < array.length; i++){
        let element = array[i]
        newArray.push(fn(element))
    }
    return newArray;
}

function reduce(array, fn, startingValue){
    let r = (!!startingValue) ? startingValue : array[0]
    let i = (!!startingValue) ? 0 : 1

    for (; i < array.length; i++){
        r = fn(array[i], r)
    }
    return r;
}