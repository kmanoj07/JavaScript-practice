// //lets fill the empty array twicing the each number from the original array
// //es6 way of creating an arrow function
// const doubleNumber = (numbers)=> {
//     const result = []; // declartion of an empty array
//     for(const number of numbers){
//         result.push(2 * number);
//     }
//     return result;
// }

//passing the array object into an arrow function
//so in the same manner we can have the movie object in an array and we loop over it 
// console.log(doubleNumber([1,2,3,4,5,6,7,8,9]));

// for(const movie of movies){
//     return card(movie);
// }

//since the function is not returning any thing it will give the undefined
// const howManyLettres = (sentence) => {
//     //we can loop through the entire string phrase
//     // for(const letter of sentence){ // of in for loop will get the object it self and the in will get the index
//     //     console.log(letter);
//     // }
//     let count = 0;
//     for(const letter in sentence){
//         //console.log(letter + 1); // 01
//         count = Number(letter) + 1; // letter start with the zero
//     }
//     return {result : count}; // returning the object from the arrow function
// }
//The space is also included
//Althoug it is returning and object so, access the property of the object
// const phrase = 'hey can you count my character in the my line ';
// let result = howManyLettres(phrase); // this wll count the character of the string
// console.log(result.result);

// //There is another way to find the length of the string
// const len = phrase.length; //length is a property of anything which has string
// console.log(len);


//create a function thats add all the numbers in the Array
// const sumArray = (numberArray) => { // local frames for this variables
//     let sum = 0;
//     for(const number of numberArray){ // i will use the off instead of in
//         sum = sum + number;
//     }
//     return {sum: sum};
// }
// //global frames of these variable
// const numberArray = [1,2,3,4,5];
// let result = sumArray(numberArray);
// console.log(result.sum);


//crete a function return the max number from the array
// const max = (numbers)=> {
//     let max = -9999999999;
//     for(const number of numbers){
//         if(number > max){
//             max = number;
//         }
//     }
//     return {max: max};
// }

// const numArr = [10,20,90,17,90,89];
// let res = max(numArr);
// console.log(res);

// //same get the minimum
// const min = (numbers)=> {
//     let min = 1000000000;
//     for(const number of numbers){
//         if(number < min){
//             min = number;
//         }
//     }
//     return {min: min};
// }
// res = min([10,20,90,17,90,89]);
// console.log(res.min);

//this method return the object of the frequncey of the letter
// const letterFrequency = (phrase) => {
//     //'hahha' return  => {'h': 3, 'a' , 2}
//     const freObj = {}; //empty object
//     for(const char of phrase){
//         console.log(char);
//         if(char in freObj){ // if the char = 'h' exist in the object - true else false
//             console.log(true);
//             freObj[char] = freObj[char] + 1; //get the previous count of the char increaase by 1
//         } else {
//             freObj[char] = 1; //adding the property as char to the empty objec and initial count of the character is 1
//         }
//     }
//     return freObj;
// }

// console.log(letterFrequency('What are you dong later tonight and hahha'));

//wordFrequency('lol what lol')
//return {'lol': 2, what: 1};
const wordFreq = (phrase) => {
    let frequency = {};
    //if we could just split this phrase into words of array we loop over it
    const wordArr = phrase.split(' '); 
    //Now loop over the word 
    //check if the wrod exist in frequncey obj
    //if yes than get the fequency count and increase it by 1
    //else add the word the frequncey obj with value initial count 1
    for (const word of wordArr) {
        if(word in frequency){
            frequency[word] = frequency[word] + 1; //increase by onde
        } else {
            frequency[word] = 1; // add the word to frequency and add initial count of that word to 1
        }
    }
    return frequency;
}

const userInput = prompt('Enter your search text');
console.log(wordFreq(userInput));
