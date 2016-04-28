var myApp = angular.module('myApp', ['uiGmapgoogle-maps'],function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});

myApp.factory("Markers", function(){
  var Markers = [
    {
      "id": "0",
      "coords": {
        "latitude": "27.6348",
        "longitude": "-97.2398"
      },
      "window": {
        "title": "High Bridge"
      }
    },
    {
      "id": "1",
      "coords": {
        "latitude": "27.6348",
        "longitude": "-97.2597"
      },
      "window" : {
        "title": "No where"
      }
    }
  ];
  return Markers;
});

myApp.controller("gMap",function($scope,Markers){
  $scope.map = { 
    center: { latitude: 27.6932, longitude: -97.2805 }, 
    zoom: 12 
  };
  $scope.markers = Markers;
});