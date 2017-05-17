var classApp = angular.module('weatherApp', []);

classApp.controller("weatherCtrl", function($scope, $http) {
  var obj = $scope;

  // obj.test = "Hello, Yacub Ali";
  obj.weatherInfo = {
    heading: "Open Weather API Project",
    subHeading1: "Show Local Weather to user",
    subHeading2: {
      name: "Check out my GitHub profile:",
      link: "https://github.com/Yacub93"
    }
  };

    $http.get("http://ip-api.com/json").success(function(data) {
    obj.lat = data.lat;
    obj.lon = data.lon;

    var apiKey = "f75c54724def452edcf8b78c344fe7ed";
    var openWeatherURL = "http://api.openweathermap.org/data/2.5/weather?lat=" + obj.lat + "&lon=" + obj.lon + "&appid=" + apiKey;
   
    $http.get(openWeatherURL).success(function(data) {
          // console.log(openWeatherURL);

    obj.description = data.weather[0].description;
    obj.speed = data.wind.speed;

    // Convert knot to mph/kph
    obj.mphSpeed = (2.237 * data.wind.speed).toFixed(1) + "mph";//convert to mph 1dp place
    obj.kphSpeed = (1.852 * data.wind.speed).toFixed(1) + "kph";//convert to kph 1dp place
    // console.log(obj.speed);
    obj.location = data.name;
    obj.temp = data.main.temp;
    // console.log(obj.temp);

    // Convert kelvin to Fahrenheit/Celsius
    obj.cTemp = (obj.temp - 273).toFixed(1) + "(°C)";
    obj.fTemp = (obj.temp * (9/5) - 459.67).toFixed(1) + "(°F)";
   });

  });
});         
    
// TODO use latest angular version:
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