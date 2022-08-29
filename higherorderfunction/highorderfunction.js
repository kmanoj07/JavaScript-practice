// console.log('Inside the higher order function')
// console.log('This is very easy function')
// console.log('higer order function `MRF` ');
//map()
//filter()
//reduce() 

//map() 
//array = looping over an array and printing each and every object from the nuber
//its a way of iterating of the collections
//map through this mean [].loopthrough this
//mpa loops and return an array

//map() higher oreder function
const arr = [1,2,3,4,5];

arr.map( (number)=>{
    console.log(number)
});


arr.map( (number)=> number * 2); // this is doing implicit returns

//Note the map or loop through will return the array as well
let result = arr.map((number)=> number * 2);
console.log(result);

//This is the main difference between the for and the map()

const doubleMap = (numbers)=> {
    return numbers.map( (number) => number * 2 );
}
console.log(doubleMap([2,4,6,8]));


//filter() -- again it works on collection and filter out object on some basis 
//lets do fill up the empty bucket 
//filter the number array and check if the number is greater than greaterThan that put into the empty array
//filter([1,2,3,4], 3) [4, 5, 6]
//this how we do filtering of number  manually
const filter = (numbers, greaterThan) => {
    const result = [];
    for(const number of numbers){
        if(number > greaterThan){
            result.push(number);
        }
    }
    return result;
}

const numarr = [2,3,4,5,6,7,1,2, 12, 10];
console.log(filter(numarr, 3));

//Now lets do es6 .filter()
//it makes the filtering very easier on collectin of array
//filter returns and array with matching condition
const nums = [1,2,3,4,5,6];

const filNums = nums.filter( (num) => num > 4 || num <  2);
console.log(filNums);

//the array of an object
const actors = [
    {name: 'johnny', netWorth:2000000},
    {name:'amber', netWorth:10},
    {name:'leonardo', netWorth:100000000}
]

//reduce to use the summing up the networth of actors
console.log(actors.reduce((prev, cur) => prev + cur.netWorth, 0));

//filter the array of object and return the array with actors networth > 10
console.log(actors.filter((actor) => actor.netWorth > 10));

let filteredArr = actors.filter((actor) => actor.netWorth > 10);
document.getElementById('para').innerText= `${JSON.stringify(filteredArr)}`;

//instead of shwing the whole object we need to display the names withe join ' '
let names = filteredArr.map((actor) => actor.name).join(', ');
console.log(names);
document.getElementById('para').innerText = names;


//reduce() higher order function
//sum all of the net worths -- Whenever you think summing think reduce
//reduce takes an funciton as argument - that why its called the high order function
//reduce loop and gives my accumultor
const num = [1,2,4,5,6,10];

//takes the anonymous function
const res = num.reduce(function(prev, next) {
    return prev + next;
})
console.log(res);

//convert into the es6 function
//takes the anonymous function
console.log(num.reduce((prev, next)=> prev + next));

//This is the multiplication with reduce
console.log(num.reduce((prev, next)=>  prev * next));















