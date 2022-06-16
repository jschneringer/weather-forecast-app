var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector ('name');
var temp = document.querySelector ('temp');
var w = document.querySelector ('wind');

const api = "0cb09a268195d5cf8bbb2d5a334440cd"



button.addEventListener('click', function(name){
    var lat = name;
    var lon = name;
    var city = name.name;

fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=0cb09a268195d5cf8bbb2d5a334440cd`,`https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${weatherApiKey}` )
    .then(response => response.json())
    .then(data => console.log(data))

    .catch(err => alert ("Invalid Input"))
})
