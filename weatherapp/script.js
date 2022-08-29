const API_URL = 'https://yahoo-weather5.p.rapidapi.com/weather';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e44885e14dmshb9576ec822ed657p194778jsna10bddc07b79',
		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
	}
};

const getWeather = (city)=> {
    return fetch(API_URL+`?location=${city}&format=json&u=f`, options)
    .then((response) => {return response.json()})
    .then((json) => json)
    .catch((error) => {return {error}});
}

const searchCity = async ()=> {
    const city = document.getElementById('city-input').value;
    //console.log(city);
    const data =  await getWeather(city);
    displayData(data);
}

const displayData = (weatherdata) => {
    console.log(weatherdata);
    const degreeCelcius = ((weatherdata.current_observation.condition.temperature - 32 ) * 5/9).toFixed(2);
    document.querySelector('#city-name').innerText = `${weatherdata.location.city}`;
    document.querySelector('#weather-type').innerText  = `${weatherdata.current_observation.condition.text}`;
    document.querySelector('#temp').innerText = `celcius: ${degreeCelcius} C | Fharenhite: ${weatherdata.current_observation.condition.temperature} F`;
    document.querySelector('#lat').innerText = `${weatherdata.location.lat} `;
    document.querySelector('#long').innerText = `${weatherdata.location.long}`;
}