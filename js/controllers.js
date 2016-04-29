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
				// Bayside
				{
					latitude: 28.0937,
					longitude: -97.2441
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
    zoom: 12 
  };
  $scope.markers = Markers;
  $scope.polylines = Polylines;
});