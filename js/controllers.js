var myApp = angular.module('myApp', ['uiGmapgoogle-maps'],function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});

// **************************************************************
// POLYLINES 
// **************************************************************
myApp.factory("Polylines", function(){
 	var points = {
 		"abeamBayside": {
 			latitude: 28.0937,
			longitude: -97.2578
 		},
 		"yIntersection": {
 			latitude: 28.6648,
			longitude: -97.4172
		},
 		"bridge": {
 			latitude: 28.7354,
			longitude: -97.6434
		},
		"berclair": {
			latitude: 28.5439,
			longitude: -97.5738
		},
		"beachline": {
			latitude: 27.6371,
			longitude: -97.1877
		}
	};
	
	var stroke = {
			kingsFour: {
				color: '#34A5BA',
				weight: 3
			},
			kingsFourMoa: {
				color: '#000000',
				weight: 3
			},
			mustang: {
				color: '#37D35A',
				weight: 3
			},
			foxtrot: {
				color: '#FF9F43',
				weight: 3
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
				points.abeamBayside,
				points.yIntersection,
				points.bridge
			],
			stroke: stroke.kingsFour,
			editable: false,
			draggable: false,
			geodesic: false,
			visible: true,
			icons: [{
				icon: {}
					}]
        },
        
        // KNGT North Flow
        {
			id: 2,
			path: [
				points.yIntersection,
				points.berclair
			],
			stroke: stroke.kingsFour,
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
			id: 3,
			path: [
				points.bridge,
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
			stroke: stroke.kingsFour,
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
			id: 4,
			path: [
				// Initial 29
				{
					latitude: 28.5874,
					longitude: -97.5177
				},
				// 29 Departure End
				{
					latitude: 28.6115,
					longitude: -97.5907
				}
			],
			stroke: stroke.kingsFour,
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
			id: 5,
			path: [
				// Initial 17
				points.bridge,
				// 17 Departure End
				{
					latitude: 28.6216,
					longitude: -97.6216
				}
			],
			stroke: stroke.kingsFour,
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
        
        // KNGT 35
        {
			id: 6,
			path: [
				// Initial 35
				points.berclair,
				// 35 Extended
				{
					latitude: 28.5440,
					longitude: -97.6072
				},
				// 35 Departure End
				{
					latitude: 28.5931,
					longitude: -97.6160
				}
			],
			stroke: stroke.kingsFour,
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
        // Mustang
        {
			id: 7,
			path: [
				// 13 Departure End
				{
					latitude: 27.6825,
					longitude: -97.2807
				},
				// Abeam High Bridge
				{
					latitude: 27.6469,
					longitude: -97.2321
				},
				// Beachline
				points.beachline
			],
			stroke: stroke.mustang,
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
        // Mustang North
        {
			id: 8,
			path: [
				// Beachline
				points.beachline,
				// Port Aransas
				{
					latitude: 27.7758,
					longitude: -97.0896
				},
				// Mustang 1
				{
					latitude: 27.9839,
					longitude: -96.9138
				}
			],
			stroke: stroke.mustang,
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
        // Mustang South
        {
			id: 9,
			path: [
				// Beachline
				points.beachline,
				// South
				{
					latitude: 27.4963,
					longitude: -97.2550
				},
				// South end
				{
					latitude: 27.3664,
					longitude: -97.3059
				}
			],
			stroke: stroke.mustang,
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
        // KINGS 4 MOA
    	{
			id: 10,
			path: [
				// Area 1 North Point
				{
					latitude: 29.0786,
					longitude: -97.4983
				},
				// Area 7 West Point
				{
					latitude: 28.6683,
					longitude: -98.1255
				},
				// Area 7 South Point
				{
					latitude: 28.5419,
					longitude: -98.0752
				},
				// Area 9 West Point
				{
					latitude: 28.1616,
					longitude: -97.6263
				},
				// Area 9 East Point
				{
					latitude: 28.1777,
					longitude: -97.2861
				},
				// Area 3 East Point
				{
					latitude: 28.6888,
					longitude: -96.8536
				},
				// Area 1 North Point
				{
					latitude: 29.0786,
					longitude: -97.4983
				} 
				
			],
			stroke: stroke.kingsFourMoa,
			editable: false,
			draggable: false,
			geodesic: false,
			visible: true,
			icons: [{
				icon: {}
					}]
        }
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