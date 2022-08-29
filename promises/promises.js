console.log('Promises');
//Asynchromus programming

//You order tomato soup
//Meanwhile you continue your convo with a freind
//RESOLVED - your server bring you soup
//REJECTED - No soup

//the setTimeout() will wait for the 2 seconds and will execute
// const orederSoup = ()=> {console.log('soup is ready!');}

// console.log('you start the convo with your date!')
// setTimeout(orederSoup, 2000);
// console.log('still speaking!');

//So above code not worked as linearly 
//its like an asynchronus nature


//creating a promise
//using Promise class
//this Pomise constructor take and anonumos funciton (resolve, reject)

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let isReady = [true, false][Math.floor(Math.random() * 2)];
        isReady ? resolve('soup is ready!') : reject('No soup today!');
    }, 2000);
});

// console.log(
//     promise
//         .then((success) => { console.log({ success }); })
//         .catch((error) => { console.log({ error }); })
// );

const getSoup = async () => {
    const data = {rating:0, tip:0,pay:0,rview:0};
    try {
    const response = await promise;
    console.log(response);
    data.rating = 5;
    data.tip = 0.2;
    data.pay = 10;
    data.rview = 5;
    return data;
    } catch(error) {
        console.log(error);
        data.rating = 0;
        data.tip = 0;
        data.pay = 0;
        data.rview = 3;
        return data;
    }
}

//es6
getSoup().then((value)=> console.log(value));


// console.log('fetch', 
//     fetch('https://dog.ceo/api/breeds/image/random') //promise
//     .then((response) => response.json()) //promise
//     .then((data)=> { //resolve
//         console.log(data);
//     }).catch((error)=> {
//         console.log({error});
//     })
// );

//let async and await -- es6 wiay for asynchronus programming
//ASYNC / AWAIT
//you must create a function 
//you can not use the async  outside of the function
//this function will run out of order and speak withe db or internet, fetch request or post, comumunicaiton
// const getDog = async ()=> {
//     const response = await fetch('https://dog.ceo/api/breeds/image/random');
//     const data = await response.json();
//     console.log(data);
// }

// getDog();