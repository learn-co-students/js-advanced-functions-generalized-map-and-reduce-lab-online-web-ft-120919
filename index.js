// Add your functions here
function map(input, funct) {
	return input.map(funct);
}

function reduce(input, func, sp=0) {
    let sv = sp
	return input.reduce(function(pasedIn, item) {
        console.log(pasedIn, item)
     return func(item, pasedIn)  
    }, sv)
}
