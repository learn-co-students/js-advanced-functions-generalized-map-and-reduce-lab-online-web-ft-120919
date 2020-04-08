
function map(sourceArray, func) {
   return sourceArray.map(element => func(element))
};

function reduce(sourceArray, func, startingValue=0) {
   if (startingValue) {
       return sourceArray.reduce((acc, next) => {
        return func(acc, next)
       }, startingValue)
   } else {
       return sourceArray.reduce((acc, next) => {
           return func(acc, next)
       })
   }
}   