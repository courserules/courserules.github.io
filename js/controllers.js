var myApp = angular.module('myApp', ['uiGmapgoogle-maps'],function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});



myApp.factory("Polylines", function(){
 	var Polylines =[]
	Polylines = [
    	{
			// KINGS 4
			id: 1,
			path: [
				// 13L Departure End
				{
					latitude: 27.6829,
					longitude: -97.2798
				},
				// Abeam High Bridge
				{
					latitude: 27.6479,
					longitude: -97.2321
				},
				// Aluminum Plant
				{
					latitude: 27.8794,
					longitude: -97.2578
				},
				// Abeam Bayside
				{
					latitude: 28.0937,
					longitude: -97.2578
				}
			],
			stroke: {
				color: '#6060FB',
				weight: 3
			},
			editable: false,
			draggable: false,
			geodesic: false,
			visible: true,
			icons: [{
				icon: {}
					}]
            },
        {
			// Mustang Departure
			id: 2,
			path: [
			
			],
			stroke: {
				color: '#6060FB',
				weight: 3
			},
			editable: false,
			draggable: false,
			geodesic: false,
			visible: true,
			icons: [{
				icon: {
					
				},
				offset: '25px',
				repeat: '50px'
			}]
        }
	];

  return Polylines
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
			"latitude": "27.8794",
			"longitude": "-97.2578"
		  },
		  "window" : {
			"title": "Aluminum Plant"
		  }
		}
	];
	return Markers;
});

myApp.controller("gMap",function($scope, Markers, Polylines){
  $scope.map = { 
    center: { latitude: 27.6932, longitude: -97.2805 }, 
    zoom: 12,
	styles:
[{"featureType":"poi","elementType":"all","stylers":[{"hue":"#000000"},{"saturation":-100},{"lightness":-100},{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"hue":"#000000"},{"saturation":-100},{"lightness":-100},{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"hue":"#000000"},{"saturation":0},{"lightness":-100},{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"hue":"#000000"},{"saturation":-100},{"lightness":-100},{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"on"}]},{"featureType":"transit","elementType":"labels","stylers":[{"hue":"#000000"},{"saturation":0},{"lightness":-100},{"visibility":"off"}]},{"featureType":"landscape","elementType":"labels","stylers":[{"hue":"#000000"},{"saturation":-100},{"lightness":-100},{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"hue":"#bbbbbb"},{"saturation":-100},{"lightness":26},{"visibility":"on"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"hue":"#dddddd"},{"saturation":-100},{"lightness":-3},{"visibility":"on"}]}], 
  };
  $scope.markers = Markers;
  $scope.polylines = Polylines;
});