 function map(obj, func) {
   let result = []
   for (let i = 0; i < obj.length; i++) {
     let element = obj[i]
     result.push(func(element))
   }
   return result
 }

 function reduce(obj, func, start) {
   let accum = !!start ? start : obj[0]
   let i = !!start ? 0 : 1
   for (; i < obj.length; i++) {
     accum = func(obj[i], accum)
   }
   return accum
 }