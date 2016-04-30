var myApp = angular.module('myApp', ['uiGmapgoogle-maps'],function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});

// **************************************************************
// POLYLINES 
// **************************************************************
myApp.factory("Polylines", function(){
 	var points = {
 		"YIntersection": {
 			latitude: 28.6648,
			longitude: -97.4172
		},
 		"Bridge": {
 			latitude: 28.7354,
			longitude: -97.6434
		}
	};
		
 	var Polylines = [
    	// KINGS 4
    	{
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
				},
				// Y-Intersection
				points.YIntersection,
				// Bridge
				points.Bridge
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
        
        // KNGT 11
        {
			id: 2,
			path: [
				// Bridge
				points.Bridge,
				// Initial 11 (Keyboard Fields)
				{
					latitude: 28.6449,
					longitude: -97.7022
				},
				// 11 Departure End
				{
					latitude: 28.6212,
					longitude: -97.6227
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
				icon: {},
				offset: '25px',
				repeat: '50px'
			}]
        },
        
        // KNGT 29
        {
			id: 3,
			path: [
				// Initial 29
				{
					latitude: 28.5910,
					longitude: -97.5146
				},
				// 29 Departure End
				{
					latitude: 28.6115,
					longitude: -97.5907
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
				icon: {},
				offset: '25px',
				repeat: '50px'
			}]
        },
        
        // KNGT 17
        {
			id: 4,
			path: [
				// Initial 17
				points.Bridge,
				// 17 Departure End
				{
					latitude: 28.6216,
					longitude: -97.6216
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
				icon: {},
				offset: '25px',
				repeat: '50px'
			}]
        },
        
        // KNGT 29
	];

  return Polylines
});

// **************************************************************
// MARKERS
// **************************************************************
myApp.factory("Markers", function(){
	var Markers = [
		// High Bridge
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
		// Aluminum Plant
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

// **************************************************************
// OPTIONS 
// **************************************************************
myApp.factory("Options", function(){
	var Options = {
		// Styles the map
		styles: [
		{
			"featureType": "poi",
			"elementType": "all",
			"stylers": [
				{
					"hue": "#000000"
				},
				{
					"saturation": -100
				},
				{
					"lightness": -100
				},
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "all",
			"stylers": [
				{
					"hue": "#000000"
				},
				{
					"saturation": -100
				},
				{
					"lightness": -100
				},
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "administrative",
			"elementType": "all",
			"stylers": [
				{
					"hue": "#000000"
				},
				{
					"saturation": 0
				},
				{
					"lightness": -100
				},
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "labels",
			"stylers": [
				{
					"hue": "#ffffff"
				},
				{
					"saturation": -100
				},
				{
					"lightness": 100
				},
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "labels",
			"stylers": [
				{
					"hue": "#000000"
				},
				{
					"saturation": -100
				},
				{
					"lightness": -100
				},
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "road.local",
			"elementType": "all",
			"stylers": [
				{
					"hue": "#ffffff"
				},
				{
					"saturation": -100
				},
				{
					"lightness": 100
				},
				{
					"visibility": "on"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
				{
					"hue": "#ffffff"
				},
				{
					"saturation": -100
				},
				{
					"lightness": 100
				},
				{
					"visibility": "on"
				}
			]
		},
		{
			"featureType": "transit",
			"elementType": "labels",
			"stylers": [
				{
					"hue": "#000000"
				},
				{
					"saturation": 0
				},
				{
					"lightness": -100
				},
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "landscape",
			"elementType": "labels",
			"stylers": [
				{
					"hue": "#000000"
				},
				{
					"saturation": -100
				},
				{
					"lightness": -100
				},
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [
				{
					"hue": "#bbbbbb"
				},
				{
					"saturation": -100
				},
				{
					"lightness": 26
				},
				{
					"visibility": "on"
				}
			]
		},
		{
			"featureType": "landscape",
			"elementType": "geometry",
			"stylers": [
				{
					"hue": "#dddddd"
				},
				{
					"saturation": -100
				},
				{
					"lightness": -3
				},
				{
					"visibility": "on"
				}
			]
		},
		// Controls coloration of airfields/airports
		{
			"featureType": "transit.station.airport",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"invert_lightness": true
				},
				{
					"gamma": 3
				},
				{
					"hue": "#ff7700"
				}
			]
    	}
	]};
	return Options;
});

// **************************************************************
// CONTROLLER 
// **************************************************************
myApp.controller("gMap",function($scope, Markers, Polylines, Options){
  // Add map to scope
  $scope.map = { 
    center: { latitude: 27.6932, longitude: -97.2805 }, 
    zoom: 12,
  };  
  // Add options to scope
  $scope.options = Options;
  // Add markers to scope
  $scope.markers = Markers;
  // Add polylines to scope
  $scope.polylines = Polylines;
});