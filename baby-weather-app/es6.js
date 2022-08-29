// The modern way of writing the functio arrow function
//We can assing the functio into a variable as well
const tipCalculate = function calculateTip(food, tip) {
    console.log(`${food}  ${tip}`);
}
tipCalculate(20, 40);

//Arrow function - function having no name
//this arrow function having the super power to automatically return the resutl implicityl
const sum = (a, b) => {
    console.log(a + b);
}

//removing the curly braces
const mul = (a, b) => a * b ; // that is automatically return the the mul of a * b
console.log(mul);
console.log(mul(8, 9));

const add = (a, b) => a + b;
console.log(add(2, 3));

const sub = (a, b) => a - b;
console.log(sub(6, 4));



