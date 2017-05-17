var classApp = angular.module('weatherApp', []);
// angular.module('weatherCtrl', ['ngRoute']);
classApp.controller("weatherCtrl", function($scope, $http) {
  var vm = $scope;
  var vm = $scope;
  // vm.test = "Hello, Yacub Ali";
  vm.weatherInfo = {
    heading: "Open Weather API Project",
    subHeading1: "Show Local Weather to user",
    subHeading2: {
      name: "check out my GitHub page",
      link: "https://github.com/Yacub93"
    }
  };
    // $http.jsonp("http://ipinfo.io/json?callback=JSON_CALLBACK");
  //   $http.get("http://ip-api.com/json").success(function(data) {
  //   vm.lat = data.lat;
  //   vm.lon = data.lon;
  //     console.log(vm.lat);
  //   var apiKey = "f75c54724def452edcf8b78c344fe7ed";
  //   var openWeatherURL = "http://api.openweathermap.org/data/2.5/weather?lat=" + vm.lat + "&lon=" + vm.lon + "&appid=" + apiKey;
   
  //   $http.get(openWeatherURL).success(function(data) {
  //         // console.log(openWeatherUrl);



  //  });

  // });
});         
    
// //Latest angular version:
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