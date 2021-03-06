var classApp = angular.module('weatherApp', [    
// 3rd party dependencies
    'angular-skycons']);

classApp.controller("weatherCtrl", function($scope, $http) {
  var obj = $scope;

  obj.weatherInfo = {
    heading: "Local and Global Forecast",
    appInfo: "A simple weather app that displays local weather information depending on the user\'s location. The search bar allows the user to view weather from different cities across the globe.",
    subHeading2: {
      githubprofile: "https://github.com/Yacub93",
      linkedinprofile: "https://uk.linkedin.com/in/yacub-ali-4898b9103"
    }
  };

    $http.get("http://ip-api.com/json").success(function(data) {
    obj.lat = data.lat;
    obj.lon = data.lon;

    var apiKey = "e8f0c7051cd6350e566bdb40cb8ac68d";
    var openWeatherURL = "http://api.openweathermap.org/data/2.5/weather?lat=" + obj.lat + "&lon=" + obj.lon + "&appid=" + apiKey;
   
    $http.get(openWeatherURL).success(function(data) {
          // console.log(openWeatherURL);

    obj.description = data.weather[0].description;
    obj.country = data.sys.country;
    obj.speed = data.wind.speed;

    // Convert knot to mph/kph
    obj.mphSpeed = (2.237 * data.wind.speed).toFixed(1) + "mph";//convert to mph 1dp place
    obj.kphSpeed = (1.852 * data.wind.speed).toFixed(1) + "kph";//convert to kph 1dp place
    // console.log(obj.speed);
    obj.location = data.name;
    obj.temp = data.main.temp;
    // console.log(obj.temp);

    // Convert kelvin to Fahrenheit/Celsius
    obj.cTemp = (obj.temp - 273).toFixed(1) + " (°C)";
    obj.fTemp = (obj.temp * (9/5) - 459.67).toFixed(1) + " (°F)";

    // Icons for the weather
    obj.icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";


    // Change weather background based weather description
    switch(obj.description){
        case 'clear sky':{
          obj.weatherBackground = {
              "background": "url('https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=')",
              "background-size": "cover"
            };
            break;
         };
        case 'moderate rain':{
          obj.weatherBackground = {
              "background": "url('https://images.unsplash.com/photo-1438449805896-28a666819a20?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=')",
              "background-size": "cover"
            };
            break;
         }
        case 'shower rain':{
          obj.weatherBackground = {
              "background": "url('https://images.unsplash.com/photo-1438449805896-28a666819a20?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=')",
              "background-size": "cover"
            };
            break;
         }
        case 'moderate breeze':{
          obj.weatherBackground = {
              "background": "url('https://images.unsplash.com/photo-1456356627738-3a96db6e2e33?dpr=2&auto=format&fit=crop&w=1500&h=990&q=80&cs=tinysrgb&crop=&bg=')",
              "background-size": "cover"
            };
            break;
         }
        case 'mist':{
          obj.weatherBackground = {
              "background": "url('https://images.unsplash.com/photo-1485960953414-9711d266ac9d?dpr=2&auto=format&fit=crop&w=1500&h=860&q=80&cs=tinysrgb&crop=&bg=')",
              "background-size": "cover"
            };
            break;
         }
        case 'fog':{
          obj.weatherBackground = {
              "background": "url('https://images.unsplash.com/photo-1432839318976-b5c5785ce43f?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=')",
              "background-size": "cover"
            };
            break;
         }

        case 'snow':{
          obj.weatherBackground = {
              "background": "url('https://images.unsplash.com/photo-1489515217757-5fd1be406fef?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=')",
              "background-size": "cover"
            };
            break;
         }

        case 'storm':{
          obj.weatherBackground = {
              "background": "url('https://images.unsplash.com/photo-1461511669078-d46bf351cd6e?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=')",
              "background-size": "cover"
            };
            break;
         }

        case 'few clouds':{
          obj.weatherBackground = {
              "background": "url('https://images.unsplash.com/photo-1440407876336-62333a6f010f?dpr=2&auto=format&fit=crop&w=1500&h=996&q=80&cs=tinysrgb&crop=&bg=')",
              "background-size": "cover"
            };
            break;
         }
        case 'scattered clouds':{
          obj.weatherBackground = {
              "background": "url('https://images.unsplash.com/photo-1486339350933-d24faf16ca70?dpr=2&auto=format&fit=crop&w=1500&h=1124&q=80&cs=tinysrgb&crop=&bg=')",
              "background-size": "cover"
            };
            break;
         }
        case 'overcast clouds':{
          obj.weatherBackground = {
              "background": "url('https://images.unsplash.com/photo-1481433705997-f3c061a4eac8?dpr=2&auto=format&fit=crop&w=1500&h=997&q=80&cs=tinysrgb&crop=&bg=')",
              "background-size": "cover"
            };
            break;
         }
        case 'broken clouds':{
          obj.weatherBackground = {
              "background": "url('https://images.unsplash.com/photo-1486182810355-b1c079a9e78b?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=')",
              "background-size": "cover"
            };
            break;
         }
         // Prevents app from breaking by setting a default background
        default:{
          obj.weatherBackground = {
              "background": "url('https://images.unsplash.com/photo-1417577097439-425fb7dec05e?dpr=2&auto=format&fit=crop&w=1500&h=844&q=80&cs=tinysrgb&crop=&bg=')",
              "background-size": "cover"
            };
            break;
         }
     } //.Close switch statement  

   });//.http.get OpenWeatherURL
  });//.http.get Json API call 
}); //.Close controller         
    

// Global Forecast Controller
classApp.controller('forecastCtrl', function($scope, $http) {

  var skycons = new Skycons({"color": "#FFFAFF"});

  // skycons.add("animated-icon", Skycons.CLEAR_DAY);

  skycons.play();

      // create a blank object to handle form data.
  $scope.formData = {};
  $scope.showForecast = false; //hide div content initially

    
  $scope.getCity = function () {

    // var element = event.srcElement ? event.srcElement : event.target;
    // console.log(element, angular.element(element));

   $scope.showForecast = true; // display forecast if getCity is called
  
    var apiKey = "e8f0c7051cd6350e566bdb40cb8ac68d";
    var openWeatherURL = "http://api.openweathermap.org/data/2.5/weather?q=" + $scope.formData.city + "&APPID=" + apiKey;

    $http.get(openWeatherURL).success(function(data) {

    $scope.forecast =  data.weather[0].description;
    $scope.city = data.name;
    $scope.country = data.sys.country;

    $scope.speed = data.wind.speed;

    // Convert knot to mph/kph
    $scope.mphSpeed = (2.237 * data.wind.speed).toFixed(1) + "mph";//convert to mph 1dp place
    $scope.kphSpeed = (1.852 * data.wind.speed).toFixed(1) + "kph";//convert to kph 1dp place

    $scope.temp = data.main.temp;

    // Convert kelvin to Fahrenheit/Celsius
    $scope.cTemp = ($scope.temp - 273).toFixed(1) + " (°C)";
    $scope.fTemp = ($scope.temp * (9/5) - 459.67).toFixed(1) + " (°F)";

    $scope.humidity = data.main.humidity + '%';


    // console.log("City: " +  $scope.city);
    // console.log("Description: " + $scope.forecast);
    // console.log("Speed: " +  $scope.mphSpeed + '/' + $scope.kphSpeed);
    // console.log("Temp: " +   $scope.cTemp + '/' + $scope.fTemp);

    // Update Weather animation according to weather description
    // Icons for the weather
    switch($scope.forecast){
        case 'clear sky':{
          skycons.set("animated-icon", Skycons.CLEAR_DAY);
          $scope.weatherBackground = {
              "background": "url('https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=')",
              "background-size": "inherit"
            };
            break;
         };
        case 'moderate rain':{
          skycons.set("animated-icon", Skycons.RAIN);
            break;
         }
        case 'shower rain':{
          skycons.set("animated-icon", Skycons.RAIN);
            break;
         }
        case 'light rain':{
          skycons.set("animated-icon", Skycons.RAIN);
            break;
         }
        case 'broken clouds':{
          skycons.set("animated-icon", Skycons.CLOUDY);
            break;
         }
        case 'few clouds':{
          skycons.set("animated-icon", Skycons.PARTLY_CLOUDY_DAY);
            break;
         }
        case 'scattered clouds':{
          skycons.set("animated-icon", Skycons.CLOUDY);
            break;
         }
        case 'moderate breeze':{
          skycons.set("animated-icon", Skycons.WIND);
            break;
         }
        case 'mist':{
          skycons.set("animated-icon", Skycons.FOG);
            break;
         }
        case 'fog':{
          skycons.set("animated-icon", Skycons.FOG);
            break;
         }
        case 'snow':{
          skycons.set("animated-icon", Skycons.SNOW);
            break;
         }
        case 'storm':{
          skycons.set("animated-icon", Skycons.SLEET);
            break;
         }
   }      
 
    
    });
    // console.log("City selected is: " + $scope.formData.city);
 }


});










// TODO:
// Implement  a search feature for weather information of other locations.
// use latest angular version functionality below:
//   $http({
//   		method: 'GET',
//  		url: 'http://ip-api.com/json'
// }).then(function successCallback(response) {
//     // this callback will be called asynchronously
//     // when the response is available
//     var data = response.data;

//     vm.lat = response.data.lat;
//     vm.long = response.data.lon;

//     var apiKey = "f75c54724def452edcf8b78c344fe7ed";
//     var openWeatherURL =
//       "http://api.openweathermap.org/data/2.5/weather?lat="
//       vm.lat +
//       "&lon=" +
//       vm.lon +
//       "&APPID=" +
//       apiKey;

//   $http({
//   		method: 'GET',
//  		  url: openWeatherURL
// }).then(function successCallback(response) {
//     // this callback will be called asynchronously
//     // when the response is available
//     console.log(openWeatherURL);
    
//     },function errorCallback(response) {
//     // called asynchronously if an error occurs
//     // or server returns response with an error status.
//   	});