//class - template - Where we can instantiate the many objects of the same type
//properties - so, this will have some propery
//methods - and some method to manipulate the property

//this is the Car template
// class Car {
//     //constructor - to initialise the properties of the object at the time of object creation
//     constructor(name,color, speed) {
//         this.name = name;
//         this.color = color;
//         this.topSpeed = speed;
//         this.currentSpeed = 0;

//     }

//     zeroToSixty() {
//         setTimeout(()=> {
//             console.log('Phew! That was fast');
//             this.currentSpeed = 60;
//             console.log(this.currentSpeed);
//         }, 2000);
//     }

//     //methods of this class 
//     drive(speed) {
//         this.currentSpeed = this.currentSpeed + speed;
//         console.log(`driving speed at ${this.currentSpeed}`);
//     }

//     break() {
//         console.log('car breaking');
//         this.currentSpeed = this.currentSpeed - 10;
//     }

//     stop() {
//         console.log('Car stopped!')
//         this.currentSpeed = 0;
//     }

//     getCurrentSpeed() {
//         return this.currentSpeed;
//     }
// }


//porsche
// const porsche = new Car('Porche', 'red', 240);
// console.log(porsche);
// console.log(porsche.name);
// console.log(porsche.color);
// console.log(porsche.topSpeed);
// console.log(porsche.currentSpeed);

// const num  = [1, 2, 3, 4, 5].forEach(_ => porsche.drive());
// console.log(porsche.currentSpeed);
// porsche.zeroToSixty();
// porsche.break();
// console.log(porsche.currentSpeed);
// porsche.stop();
// console.log(porsche.currentSpeed);

// //porsche.zeroToSixty();

// console.log(porsche.getCurrentSpeed());

//lets drive a porsche
// porsche.drive(10);
// porsche.drive(10);
// porsche.drive(10);
// porsche.drive(10);
// porsche.break();
// console.log(porsche.getCurrentSpeed());
// porsche.stop();
// porsche.zeroToSixty();

//create a object out of that template
//using new key word we create the object
// const ferrari = new Car('ferrari', 'red', 250);
// console.log(ferrari);

// //printing the properties
// console.log(ferrari.name);
// console.log(ferrari.color);
// console.log(ferrari.topSpeed);
// //console.log(`At start the speed is ${ferrari.currentSpeed}`);
// // ferrari.drive();
// // ferrari.drive();
// // ferrari.drive();
// // console.log(`driving speed at current speed ${ferrari.currentSpeed}`);
// // ferrari.zeroToSixty();
// console.log(`Current Speed : ${ferrari.currentSpeed}`);
// ferrari.drive();
// console.log(`Current Speed : ${ferrari.currentSpeed}`);
// ferrari.drive();
// console.log(`Current Speed : ${ferrari.currentSpeed}`);
// ferrari.break();
// console.log(`Current Speed : ${ferrari.currentSpeed}`);
// ferrari.drive();
// ferrari.drive();
// ferrari.drive();
// ferrari.drive();
// ferrari.drive();
// ferrari.drive();
// ferrari.break();
// console.log(`Current Speed : ${ferrari.currentSpeed}`);
// ferrari.stop();
// console.log(`Current Speed : ${ferrari.currentSpeed}`);




// To get the type of any object
//use typeof operator
// console.log(typeof [1,2,3]);

// class Array {

//     push() {

//     }

//     join() {

//     }
// }


//prototype
//java script provides the prototype property so, that we can add new prototype and methods to the existing class protypes
// Array.prototype.myPush = function (item) {
//     this[this.length] = item;
//     return this;
// }

// const fruits = ['Bannana', 'Blue berry', 'Apple'];
// console.log(fruits.myPush('Biscuits'));
// console.log(fruits.myPush('cookie'));

// //for objects 
// const actors = {name:'Tom cruise', age : 50, money:2000000 };
// console.log(Object.keys(actors)); // it will return all the key related to the passed objects
// console.log(Object.values(actors)); //it will return all the values of the object passed;

//This how the internal of the Object 
// class Object {
//     keys(){

//     }

//     values() {

//     }
// }





//Lets create the class Bank

class Bank {

    //Always open the back with the initial amount
    constructor(money) {
        this.amount = money;
    }

    getbalance() {
        return this.amount;
    }

    deposit(money) {
        this.amount = this.amount + money;
        console.log({balance: this.amount});
    }

    withdraw(money) {
        if (this.amount > 0) {
            this.amount = this.amount - money;
            console.log({balance: this.amount});
        } else {
            console.log({balance: this.amount});
            console.log('Not enough balance! you can not withdraw the money anymore.');
        }
    }
}

//manoj open an account with the initial amount 500
const manoj = new Bank(500);
console.log(manoj);

//getBalance
// console.log(`Balance: $${manoj.getbalance()}`);
manoj.deposit(1000);
// console.log(`Balance: $${manoj.getbalance()}`);
manoj.deposit(1000);
// console.log(`Balance: $${manoj.getbalance()}`);
manoj.withdraw(1000);
// console.log(`Balance: $${manoj.getbalance()}`);
manoj.withdraw(1000);
manoj.withdraw(100);
manoj.withdraw(400);
manoj.withdraw(10);

manoj.deposit(50000);
manoj.withdraw(1000);



