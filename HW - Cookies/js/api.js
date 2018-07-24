const fetchData = function () { return $.ajax('https://api.wunderground.com/api/cfbfc5f603141e07/conditions/q/RO/Cluj_Napoca.json', {
 method: 'GET',
 success: function(response) {
   var elWeather = document.getElementById("weather");
   elWeather.innerHTML = "Celsius:" + response.current_observation.temp_c + "Fahrenheit:" +response.current_observation.temp_f;
 }
});
}