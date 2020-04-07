// Add your functions here
function map(input, funct) {
	return input.map(funct);
}

function reduce(input, func, sp = 0) {
    let sv = sp ? sp : input[0];
    let index = sp ? 0 : 1;
    console.log(sv)
	for (;index < input.length; index++) {
		const element = input[index];
		sv = func(sv, element);
    }
    return sv
}
