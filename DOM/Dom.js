// console.log('hello world');

// let title = document.getElementById('title');
// //this will show the element
// console.log(title);
// console.log(title.innerText);

// title.innerText = 'Goodbye my lover!'
// title.innerHTML = '<p>Good by you as paragraph!</p>';
// let message = '<h1>this is another message</h1>';
// title.innerHTML = `Myname is ${message}`;

// console.log(title.style.color);
// title.style.color = 'red';

//This is how individually picking the element by id and attaching the click event
// let redDiv = document.getElementById('red');
// let yellowDiv = document.getElementById('yellow');
// let greenDiv = document.getElementById('green');

// //attaching event listner
// // redDiv.addEventListener('click', (e)=> {
// //     alert(e.target.innerText);
// // })

// //this onclick = anoymous function
// // redDiv.onclick = function () {
// // }

// //modern way of writing an anonymus function
// redDiv.onclick = ()=> {
//     console.log('user chose: Rock!');
//     //getCompyterChoice = 'Paper'
//     //user choice vs computerChoice -> result
//     //-1, 0, 1
//     //show the result on the screen (DOM)
// }

// yellowDiv.onclick = ()=> {
//     console.log('user chose: Paper!');
// }

// greenDiv.onclick = ()=> {
//     console.log('user chose: scissor!');
// }

//let more best way
const squares = document.querySelectorAll('.clrBtn');
// console.log(squares);
// console.log(squares[0].value);
// console.log(squares[1].value);
// console.log(squares[2].value);

//loop over the squares
//es6 forEach(function) higher order function loop to loop 
const timesClicked = {'red' : 0, 'yellow': 0, 'green': 0};
squares.forEach((square) => {
    //console.log(square.value);
    square.onclick = () => {
        timesClicked[square.value] = timesClicked[square.value] + 1; //add one to previous value
        //console.log(square.value);
        square.innerText = timesClicked[square.value];
    }
});


let reset = document.querySelector('#reset');
reset.onclick = () => {
    squares.forEach((square) => square.innerText = 0);
}
console.log(timesClicked);