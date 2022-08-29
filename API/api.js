//.then  promises 
//asynchronous programming 

console.log('I am in random Dog page');

const URL = 'https://dog.ceo/api/breeds/image/random';

const imgBtn = document.querySelector('#imgBtn');
const rdmDogimg = document.querySelector('#random-dog');

imgBtn.onclick = () => getRandomDogImage(rdmDogimg);

function getRandomDogImage(rdmDogimg) {

    //using the fetch() to call the API
    fetch(URL)
    .then((response) => {return response.json()} )
    .then((json) => {
        console.log(json);
        rdmDogimg.src = `${json['message']}`;
    } );
}
