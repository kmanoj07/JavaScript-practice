//grab the DOM and store them into variable
let playButton = document.getElementById('play')
let resultDiv = document.getElementById('result')
let p1NameDiv = document.getElementById('p1Name')
let p2NameDiv = document.getElementById('p2Name')
let p1Health = document.getElementById('p1Health')
let p2Health = document.getElementById('p2Health')

//update the Game -- Means updating the DOM with the name, Health
const updateGame = (p1, p2, gameSate) => {
    p1NameDiv.innerText = `${p1.name}`
    p2NameDiv.innerText = `${p2.name}`

    //set the health DOM
    p1Health.innerText = `${p1.health}`
    p2Health.innerText = `${p2.health}`

    if((p1.health <= 0 || p2.health <= 0)){
        game.isOver = true
        gameSate = game.isOver
        //Set the result when the game is over
        resultDiv.innerText = game.delclareWinner(gameSate,p1,p2)
        return gameSate
    }

}


//create Player class
class Player {
    constructor(name, health, attackDamage) {
        this.name = name;
        this.health = health;
        this.attackDamage = attackDamage;
    }

    //attakc an enemy with a random number
    strike(player, enemy, attackDmg) {
        //getting the random between the 1 - 10
        //Math.floor() - to round down
        let damageAmount = Math.ceil(Math.random() * attackDmg)
        //Subtract the enemy health with the damageAmount
        enemy.health = (enemy.health - damageAmount)
        //update the Game
        updateGame(p1,p2, game.isOver)

        //console.log( `${player.name} attacks ${enemy.name} for ${damageAmount} damage!`)
        return `${player.name} attacks ${enemy.name} for ${damageAmount} damage!`
    }

    heal(player) {
        //round up using Math.ceil
        let healAmt = Math.ceil(Math.random() * 5)
        player.health = player.health + healAmt

        //update the game
        updateGame(p1, p2, game.isOver)

        //return the message with the name of the player who get heal
        return `${player.name} heals for ${healAmt} HP`

    }
}

//Game class
class Game {
    constructor() {
        this.isOver = false;
    }

    //declare a winner when the game is Over
    delclareWinner(isOver, p1, p2) {
        let message = 'TIE'

        if(isOver == true && (p1.health <= 0)) {
            message = `${p2.name} WINS!`
        } else if (isOver == true && (p2.health <= 0)) {
            message = `${p1.name} WINS!`
        }

        //who ever wins just play the sound
        document.getElementById('victory').play();

        //return the message
        return message
    }

    reset(p1, p2) {
        p1.health = 100
        p2.health = 100
        this.isOver = false
        resultDiv.innerText = ''
        updateGame(p1,p2, this.isOver)
    }

    //simulation
    play(p1, p2) {
        this.reset(p1, p2)
        //unitl the game is not over just play the game
        while (!this.isOver) {
            p1.strike(p1,p2,p1.attackDamage)
            p2.heal(p2)
            p2.strike(p2,p1,p2.attackDamage)
            p1.heal(p1)

        }

        if(this.isOver == true) {
            return this.delclareWinner(this.isOver,p1,p2)
        }

    }
}

//create 2 player using the Player class
let player1 = new Player('Riyu',100, 10)
let player2 = new Player('Nina', 100, 10)

console.log(player1)
console.log(player2)

let p1 = player1
let p2 = player2

//create the object from the Game class
let game = new Game()
console.log(game)

let gameSate = game.isOver
updateGame(p1, p2, gameSate)

//console.log(p1.strike(p1, p2, p1.attackDamage))
// console.log(p1.strike(p2, p1, p2.attackDamage))

// console.log(p1.heal(p1))
// console.log(p2.heal(p2))

//The player1 controles
document.addEventListener('keydown', (e)=> {
    //pressing q = strike
    if(e.key == 'q' && p2.health > 0 && game.isOver == false) {
        p1.strike(p1,p2,p1.attackDamage)
        document.getElementById('p1attack').play()
    }
})

document.addEventListener('keydown', (e)=> {
    //pressing a = heal
    if(e.key == 'a' && p1.health > 0 && game.isOver == false) {
        p1.heal(p1)
        document.getElementById('p1heal').play()
    }
})


//The palyer2 controls
document.addEventListener('keydown', (e)=> {
    //pressing p = strike
    if(e.key == 'p' && p1.health > 0  && game.isOver == false) {
        p2.strike(p2, p1, p2.attackDamage)
        document.getElementById('p2attack').play()
    }
    //pressing l = heal
    if(e.key == 'l' && p2.health > 0 && game.isOver == false) {
        p2.heal(p2)
        document.getElementById('p2heal').play()
    }
})

//simulate
playButton.onclick = ()=> resultDiv.innerText = game.play(p1,p2)