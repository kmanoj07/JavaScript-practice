console.log('Inside the arrays');

// Basics of arrays
// To hold multuple objects into a single container and access with the index 
const groceries = ['Bannana', 'Mango', 'Pear', 'Apple'];
console.log(groceries); // Array  len = 4; index start for 0, 1, 2, 3

// accessing from the index
console.log(groceries[0]); // 0+1
console.log(groceries[1]); // 0+2
console.log(groceries[2]); // 0+3
console.log(groceries[3]); // 0+4

console.log(groceries[4]); // this particular index will give undefined as the index do ot eixist

//length - Give the number of object in the array
console.log(groceries.length);

// let pushing a new onject in an array
groceries.push('Atta');

console.log(groceries);
console.log(groceries.length);

//arrays method 
// push -- it will append a new object in aray at last index
// pop -- it will remove the object from the last and return back to us.
let result = groceries.pop();
console.log(result);

//slice method - take a knife and slice from the index till index
console.log(groceries.slice(0, 2)); // starts 0 - inclusive and upto 2 but not 2
console.log(groceries);

console.log(groceries.slice(1, 3));

//(push, pop, length, slice, indexof)

//indexof - it will give me the index of the object in array
console.log(groceries.indexOf('Mango')); //if exist it will return the index of that object else return the -1
console.log(groceries.indexOf('Manoj')); // it will return the -1