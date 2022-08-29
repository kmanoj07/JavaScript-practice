
const imgHero = document.querySelector('#imgHero');
const searchHero = document.querySelector('#search-hero');
//API super Hero access token 
//3206184832932999
//BASE_URL = https://superheroapi.com/api/access-token
//https://superhero-search.p.rapidapi.com/api/villains
//'https://superhero-search.p.rapidapi.com/api/heroes'
// 'https://superhero-search.p.rapidapi.com/api',  
// /id 	GET 	Search by character id. Returns all information of the character.
// /id/powerstats 	GET 	Returns JSON Array of all powerstats of given character.
// /id/biography 	GET 	Returns JSON Array of character's biography.
// /id/appearance 	GET 	Returns JSON Array of character's appearance.
// /id/work 	GET 	Returns JSON Array of character's work i.e. occupation and operation base.
// /id/connections 	GET 	Returns JSON Array of character's connections.
// /id/image 	GET 	Returns image url of the character.
// /name

const getSuperHero = (val)=> {
    fetch('https://superhero-search.p.rapidapi.com/api/heroes', 
    {
        method: 'GET',
        headers:{
            'X-RapidAPI-Key': 'e44885e14dmshb9576ec822ed657p194778jsna10bddc07b79',
            'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
        }
    })
    .then((response) =>  {return response.json()})
    .then((json) => {
        showImages(json);
    });
};

getSuperHero();


function showImages(json) {
    console.log(json);
    select = document.createElement('select');
    select.name = 'hero';
    select.id = 'hero';
    json.forEach((element) => {
        const option = document.createElement('option');
        option.value = element.images.md;
        option.text = element.images.md;
        option.id = element.id;
        select.appendChild(option);
    });
    document.body.appendChild(select);
}
