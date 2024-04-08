class Forecast {
   constructor() {
      this.APIKey = `WodrRD49yyWWBanLz9Mk98VkNDnqHnWX`,
      this.cityURL = `http://dataservice.accuweather.com/locations/v1/cities/search`,
      this.weatherURL = `http://dataservice.accuweather.com/currentconditions/v1/`
   }
   async UpdatingCity(cityName) { // 
      const city = await this.getCity(cityName); // 4. Fetching city data
      const weather = await this.weatherAPI(city.Key); //5 Fetching weather data
      
      return {  // 6. data from above function is returned here. 
         city_info: city, 
         weather_info: weather, 
      }
   }

   async getCity(cityName) {
      const city_base = `?apikey=${this.APIKey}&q=${cityName}`
      
      const connecting = await fetch(this.cityURL + city_base);
      const json_City = await connecting.json();
   
      return json_City[0];
   }

   async weatherAPI(Key) {
      const weather_base = `${Key}?apikey=${this.APIKey}`

      const connecting = await fetch(this.weatherURL + weather_base); 
      const json_Weather = await connecting.json();
      
      return json_Weather;
   }
}



