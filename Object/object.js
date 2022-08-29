// creating object 
// The Object person is created here with the propery 
//object {}
// Key: value pairs
// const person = {
//     name: 'Leonardo',
//     age : '50',
//     work:'actor'
// }

// // console.log(person);

// // //accessing the property using dot . operator
// // console.log(person.age);
// // console.log(person.name);
// // console.log(person.work);

// //if there is not property exist in this object
// console.log(person.shirt); // undefined

// //we can access the property using the [""]

// console.log(person['name']);
// console.log(person['age']);
// console.log(person['work']);

// //assining new prop to current object dynamically
// person.phone = '91-9871-8126-53';
// console.log(person);

// //lets create another obj
// const person2 = {
//     name:'Manoj',
//     age:'29',
//     shirt:'white'
// }

//es6 arrow funciton
//object
//template literals
//return the result
// const introducer = (name, shirt)=> {
//     //creating an object
//     //assinig the property
//     const person = {
//         name: name,
//         shirt: shirt
//     }
//     const intro = `hi my name is ${person.name} and the shirt color is ${person.shirt}`;
//     return intro;
// }

// console.log(introducer('Manoj', 'black'));

//lets create and method inside an object
//In javascript a method is a property contaning the funciton defination 
const introducer = (name, shirt)=> {
    const person = {
        name: name,
        shirt: shirt,
        assets:100000,
        liabilities:5000,
        networth: function() {
            //this -- this refrence to current person obj and it properties
            return (this.assets - this.liabilities);
        }
    }
    return `hi my name is ${person.name} and the shirt color is ${person.shirt}  and the net worth is $${person.networth()} USD`;
}

console.log(introducer('Manoj', 'Black'));
