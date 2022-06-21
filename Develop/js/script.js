 var ApiKey = "32794bb53ba95f39cf7a5a2d11c7be39";
 var URL = "https://api.openweathermap.org/data/2.5/onecall?lat=40.76031&lon=-111.88822&appid=" + ApiKey

 var cityName = $('#cityName').val();

 
$.ajax({
  url: URL, 
  method: "GET"
}).then(function(responsedata){
  console.log (responsedata)
})

 
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