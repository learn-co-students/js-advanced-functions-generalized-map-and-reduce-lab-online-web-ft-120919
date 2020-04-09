// Add your functions here
let map = function(array, func){ 
    let newArray = [];
    for (let i = 0; i < array.length; i++){
      newArray.push(func(array[i]));
    }
    return newArray;
  }
  
  let reduce = function(array, func, startPoint){
    let total;
    let i;
    if(!!startPoint){
        total = startPoint;
        i = 0;
    }else {
       total= func(array[0],array[1]);
        i = 2;
    }for (i; i < array.length; i++){
        total = func(total, array[i])
    }
    return total;
  }
  
  
  
  
  
  
  
  
//   {
//       let total;
//       let i;
//     for (i; i < array.length; i++){
//         total = func(total, array[i])
//     }{
//         if(!!startPoint){
//             total = startPoint;
//             i = 0;
//         }else {
//            total= func(array[0],array[1]);
//             i = 2;
//         }

//     }
//   return total;
//   }