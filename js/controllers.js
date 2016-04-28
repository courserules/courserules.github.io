var myApp = angular.module('myApp', ['uiGmapgoogle-maps']);

myApp.factory("Markers", function(){
  var Markers = [
    {
      "id": "0",
      "coords": {
        "latitude": "27.6318",
        "longitude": "-97.2338"
      },
      "window": {
        "title": "High Bridge"
      }
    },
    {
      "id": "1",
      "coords": {
        "latitude": "40.7903",
        "longitude": "-73.9597"
      },
      "window" : {
        "title": "Manhattan New York, NY"
      }
    }
  ];
  return Markers;
});

myApp.controller("gMap",function($scope,Markers){
  $scope.map = { 
    center: { latitude: 27.6932, longitude: -97.2805 }, 
    zoom: 14 
  };
  $scope.markers = Markers;
});