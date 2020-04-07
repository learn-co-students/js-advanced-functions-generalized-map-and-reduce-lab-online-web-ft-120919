// Add your functions here

// let add = function (a) {
//     return a * -1
//   }
//   let same = function (a) {
//       return a
//   }
   
//   function map(array){
//       let mapped = []
//       for(let i = 0; i < array.length; i++){
//           mapped.push(add(array[i]))
//   }
//       return mapped;
//   }
function map(sourceArray, callBack) {
    let mapped = []
  
    for (let i = 0; i < sourceArray.length; i++) {
      let element = sourceArray[i]
      mapped.push(callBack(element))
    }
  
    return mapped;
  }
  

  function reduce(sourceArray, callback, startingPoint) {

      //initialValue--A value to use as the first argument to the first call of the callback.
      // If no initialValue is supplied, the first element in the array will be used as the initial accumulator value and skipped as currentValue. 
      //Calling reduce() on an empty array without an initialValue will throw a TypeError.

    let reduced = (!startingPoint) ? sourceArray[0] : startingPoint

    //The index of the current element being processed in the array. Starts from index 0 if an initialValue is provided. Otherwise, it starts from index 1.

    let i = (!startingPoint) ? 1 : 0
    
    for (; i < sourceArray.length; i++) {
        reduced = callback(sourceArray[i], reduced)
    }
    return reduced
}