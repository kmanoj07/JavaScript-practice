console.log('I am in weathere.js');

//data type
//string
//Number
//undefined
//null
//Arrays
//object
//boolean


//operators of Mathmatics
//mulitplication *
//Divide /
//remainder %
//Modulo/remainder %
// subtraction -
// addition +

// Maths Method
//Floor 
//ceil

// console.log(Math.floor(110.60)); //round down 
// console.log(Math.ceil(110.90)); // round up

// //Math.random() - this method will give the random wvalue between 0-1 not including 1 which is an upper bound
// console.log(Math.floor(Math.random() * 3) + 1); // *  // 1,2,3


//const -- The value cannnot be changed
//let -- The value can be changed
// var -- the value can be changed not recommnended as the redeclation is allowed for th same variable.

//lets create  a weather app
// const weather = prompt('Please enter the weather?')
// if(weather == 'rain'){
//     console.log('Grab and umbrella!');
// } else {
//     console.log('Wear your sunglass');
// }


//function 

//creating a function
// function sayMyName(name) {
//     console.log(name);
// }

// //calling a funciton
// sayMyName(prompt('Please your name!'));


// // template literal  =  `` we can use the varible inside the string ${var}
// function greeting(name){
//     let greet = `hi name is ${name}`;
//     console.log(greet);
// }

// greeting('Amber heard');

// function  sum(a, b) {
//     return a + b;
// }

// console.log(sum(3, 4));

// function  sum1(a, b) {
//     console.log(a + b);
// }

// console.log(sum1(3, 4)); // this line will throw undefied


//calculate the food total
function calculateTotalTip(food, tip) {
    food = Number(food);
    let tipPerc = tip / 100;
    let tipAmount = food * tipPerc;
    let totaAmount = food * tipAmount;
    return totaAmount;
}

let tipresult = calculateTotalTip(prompt('how much the food?'), 20);
console.log( Math.floor(tipresult));




