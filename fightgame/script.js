console.log('start the game')

// DOM - Document object Model
// attaching event listener to DOM element
let play = document.getElementById('play')
console.log(play)

// play.onclick = ()=> {
//     console.log('playing');
// }

//argument - listening for, What you wnat to do on click
// play.addEventListener('click', ()=> {
//     console.log('i am clicked')
// })

// document.addEventListener('keydown', ()=> {
//     console.log('hi')
// })


//Here e  -> represents the event itself
// document.addEventListener('keydown', (e)=> {
//     if(e.key == 'q'){
//         console.log('You pressed Q')
//     } else {
//         console.log('Not Q');
//     }
// })

// ** <audio> ** Tags **
document.addEventListener('keydown', (e)=> {
    if(e.key == 'q'){
        console.log('you pressed q');
        //lets play sound punch
        const punchEle = document.getElementById('punch');
        punchEle.play();
    } else {
        console.log('Not q');
        document.getElementById('victory').play()
    }
})
