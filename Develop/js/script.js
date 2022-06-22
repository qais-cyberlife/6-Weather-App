var ApiKey = "32794bb53ba95f39cf7a5a2d11c7be39";

let searchHistory = []
let userInput;
let URL;
let data;
var currentDay = new Date();

let [cityname, stateCode, countryCode] = ["toronto", "on", "CA"];
currentDay = currentDay.toDateString();

$('.search-btn').on('click', () => {
  console.log($('#cityName').val());
  userInput = $('#cityName').val();
  [cityname, stateCode, countryCode] = userInput.split(", ");
  URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityname},${stateCode},${countryCode}&appid=${ApiKey}&units=metric`


  searchHistory.forEach((value) => {
    let li = $(`<li class="list-group-item">${value}</li>`)
    $('.list-group').append(li)
  })

  searchHistory.push(cityname)


  $.ajax({
    url: URL,
    method: "GET"
  }).then(function (responsedata) {
    data = responsedata
    console.log(responsedata)
  }).then(() => {
    $('#weather-stats').html(`<ul> <li> <h1>${data.name && data.name} , ${stateCode && stateCode}, ${countryCode && countryCode}  ${currentDay} <img src="http://openweathermap.org/img/wn/${data.weather.icon}@2x.png" alt=""> </h1> </li> <li>Temp: ${data.main.temp} </li> <li>Wind Speed: ${data.wind.speed} </li> <li>Humidity: ${data.main.humidity} %</li> <li><p id="uv-index">${data.main.uvindex}</p></li></ul>`)
  })
});






const searchFocus = document.getElementById('search-focus');


// const basicAutocomplete = document.querySelector('#search-autocomplete');
// const data = ['One', 'Two', 'Three', 'Four', 'Five'];
// const dataFilter = (value) => {
//   return data.filter((item) => {
//     return item.toLowerCase().startsWith(value.toLowerCase());
//   });
// };

// new mdb.Autocomplete(basicAutocomplete, {
//   filter: dataFilter
// });