let form = document.querySelector("form");  // Submit form
const card = document.querySelector(".card");    // Card 
const details = document.querySelector(".details"); // Weather info
const time = document.querySelector(".time");
const forecast_app = new Forecast();

//updating our UI
const updatingUI = (data) => {   
  const { city_info, weather_info } = data; //8 passing the returned data

  //making the card appear
if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
}


//Updating weather detials 
  let detials_update = details.innerHTML = ` <h5 class="my-3">${city_info.LocalizedName}, ${city_info.Country.EnglishName}</h5>
  <div class="my-3">${weather_info[0].WeatherText}</div>
  <div class="display-4 my-4">
    <span>${weather_info[0].Temperature.Metric.Value}</span>
    <span>&deg${weather_info[0].Temperature.Metric.Unit}</span>
  </div>
`
console.log(city_info)
//Updating the photo / icon
if (weather_info[0].IsDayTime === true) {
    time.setAttribute("src", "photos/true.png")
} else {
    time.setAttribute("src", "photos/false.svg")
}

}


//1. Event listener submit from (start of JS)
form.addEventListener("submit", (e) => {
e.preventDefault();

//2.Getting the city name from the submit / user
let cityName = e.target.city.value.trim();
form.reset();

forecast_app.UpdatingCity(cityName) //3. Calling the fuction and passing the city name as argument. 
.then((data) => updatingUI(data)) // 7. Data from getCity() & weatherAPI() is returned here and passed to updating UI. 
.catch((err) => console.log(err)); // If error occours is cought here. 
});

