var myApp = angular.module('myApp', ['uiGmapgoogle-maps'],function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});

myApp.config(function(uiGmapGoogleMapApiProvider) {
	uiGmapGoogleMapApiProvider.configure({
		key: '',
		v: '3',
		libraries: 'weather,geometry,visualization'
	});
});

// **************************************************************
// POLYLINES 
// **************************************************************
myApp.factory("Polylines", function(){
 	function playSound(soundfile) {
  		var audio = document.getElementById("dummy");
  		audio.innerHTML= 
  		"<source src=\""+soundfile+"\"type=\"audio/mpeg\">";
  		audio.load();
  		audio.play();
	};
 	
 	var points = {
 		"abeamHighBridge": {
 			latitude: 27.6479,
			longitude: -97.2321
 		},
 		"aluminumPlant": {
			latitude: 27.8794,
			longitude: -97.2578
		},
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
			latitude: 27.6344,
			longitude: -97.1809
		},
		"A1NP": {
			latitude: 29.07861111,
			longitude: -97.49833333 
		},
		"A1EP": {
			latitude: 28.94499722,
			longitude: -97.27638056
		},
		"A2EP": {
			latitude: 28.81416667,
			longitude: -97.06
		},
		"A1WP": {
			latitude: 28.90666667,
			longitude: -97.65860556
		},
		"A2WP": {
			latitude: 28.76416666,
			longitude: -97.4508333
		},
		"A3WP": {
			latitude: 28.6205,
			longitude: -97.24133333
		},
		"A3SP": {
			latitude: 28.48138889,
			longitude: -97.03221389
		},
		"A4WP": {
			latitude: 28.76,
			longitude: -97.88333889
		},
		"A5WP": {
			latitude: 28.59611111,
			longitude: -97.66361111
		},
		"A6WP": {
			latitude: 28.43444444,
			longitude: -97.44305
		},
		"A6SP": {
			latitude: 28.26444444,
			longitude: -97.21805833
		},
		"A8WP": {
			latitude: 28.45222222,
			longitude: -97.97
		},
		"A9WP": {
			latitude: 28.27694167,
			longitude: -97.76193889
		},
		"FA1SP": {
			latitude: 28.20183056,
			longitude: -96.56483056
		},
		"FA1WP": {
			latitude: 28.32899722,
			longitude: -96.68900556
		},
		"M1WP": {
			latitude: 28.12966389,
			longitude: -96.97883056
		},
		"M1SP": {
			latitude: 27.93166944,
			longitude: -96.87766944
		},
		"M2NP": {
			latitude: 28.036834,
			longitude: -97.0364
		},
		"M3NW": {
			latitude: 27.608,
			longitude: -97.29815556
		},
		"M3SE": {
			latitude: 27.40483056,
			longitude: -97.22016667
		},
		"M3SW": {
			latitude: 27.43916667,
			longitude: -97.37017222
		}
	};
	
	var stroke = {
			kingsFour: {
				color: '#34A5BA',
				weight: 2,
				opacity: 0
			},
			kingsFourMoa: {
				color: '#000000',
				weight: 2
			},
			mustang: {
				color: '#37D35A',
				weight: 2,
				opacity: 0
			},
			foxtrot: {
				color: '#FF9F43',
				weight: 2,
				opacity: 0
			} 
		};

	var icons = { 
			"dashed": [{
				icon: {
					path: 'M 0,-1 0,1',
					strokeOpacity: 1,
					scale: 2
				},
				offset: '0',
				repeat: '10px'
			}]
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
				points.abeamHighBridge
			],
			stroke: stroke.kingsFour,
			clickable: true,
			editable: false,
			draggable: false,
			geodesic: false,
			visible: true,
			icons: icons.dashed,
			events: {
        	click: function (p, eventName, args) {
				 playSound('../audio/departure.mp3');
				}
      	}
        },
        
        // Highbridge to Aluminum Plant
        {
			id: 1,
			path: [
				points.abeamHighBridge,
				points.aluminumPlant
			],
			stroke: stroke.kingsFour,
			clickable: true,
			editable: false,
			draggable: false,
			geodesic: false,
			visible: true,
			icons: icons.dashed,
			events: {
        	click: function (p, eventName, args) {
				 playSound('../audio/departureHandoff.mp3');
				}
      	}
        },
        
        // Aluminum Plant to Bayside
        {
			id: 1,
			path: [
				points.aluminumPlant, 
				points.abeamBayside
			],
			stroke: stroke.kingsFour,
			clickable: true,
			editable: false,
			draggable: false,
			geodesic: false,
			visible: true,
			icons: icons.dashed,
			events: {
        	click: function (p, eventName, args) {
				 playSound('../audio/baysideTerminate.mp3');
				}
      	}
        },
        
        // Bayside to the Y
        {
			id: 1,
			path: [ 
				points.abeamBayside,
				points.yIntersection,
				points.bridge
			],
			stroke: stroke.kingsFour,
			clickable: true,
			editable: false,
			draggable: false,
			geodesic: false,
			visible: true,
			icons: icons.dashed,
			events: {
        	click: function (p, eventName, args) {
				 playSound('../audio/houstonCenter.mp3');
				}
      	}
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
			icons: icons.dashed
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
			icons: icons.dashed
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
			icons: icons.dashed
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
			icons: icons.dashed
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
			icons: icons.dashed
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
			icons: icons.dashed
        },
        // Mustang North
        {
			id: 8,
			path: [
				// Beachline
				points.beachline,
				// Port Aransas
				{
					latitude: 27.7766,
					longitude: -97.0874
				},
				// Port Aransas North
				{
					latitude: 27.8727,
					longitude: -97.0179
				},
				// Mustang 1
				{
					latitude: 27.9946,
					longitude: -96.9135
				},
				
			],
			stroke: stroke.mustang,
			editable: false,
			draggable: false,
			geodesic: false,
			visible: true,
			icons: icons.dashed
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
			icons: icons.dashed
        },
        // KINGS 4 MOA Outer Perimeter
    	  {
			id: 10,
			path: [
				// Area 1 North Point
				points.A1NP,
				// Area 1 East Point
				points.A1EP,
				// Area 2 East Point
				points.A2EP,
				// Area 3 East Point
				{
					latitude: 28.68888611,
					longitude: -96.85361111
				},
				// Area 3 South Point
				points.A3SP,
				// Area 6 South Point
				points.A6SP,
				// Area 9 Southeast Point
				{
					latitude: 28.1775,
					longitude: -97.29221944
				},
				// Area 9 Southwest Point
				{
					latitude: 28.16166389,
					longitude: -97.62638611
				},
				// Area 9 West Point
				points.A9WP,
				// Area 8 West Point
				points.A8WP,
				// Area 7 Mid Point
				{
					latitude: 28.54194444,
					longitude: -98.07527222
				},
				// Area 7 West Point
				{
					latitude: 28.66972222,
					longitude: -98.12055833
				},
				// Area 7 DME West
				{
					latitude: 28.69194444,
					longitude: -98.04694167
				},
				// Area 7 DME East
				{
					latitude: 28.71944167,
					longitude: -97.97278056
				},
				// Area 4 West Point
				points.A4WP,
				// Area 4 DME East
				{
					latitude: 28.80749722,
					longitude: -97.79083056
				},
				// Area 4 DME West
				{
					latitude: 28.84999722,
					longitude: -97.73277222
				},
				// Area 1 West Point
				points.A1WP,
				// Area 1 DME
				{
					latitude: 28.95916667,
					longitude: -97.59999444
				},
				// Area 1 North Point
				points.A1NP		
			],
			stroke: stroke.kingsFourMoa,
			editable: false,
			draggable: false,
			geodesic: false,
			visible: true,
			icons: [{
				icon: {}
					}]
        },
        // Kings 4 MOA northwest DME partition
        {
			id: 11,
			path: [
				// Area 8 West Point
				points.A8WP,
				// Area 5 West Point
				points.A5WP,
				// Area 2 West Point
				points.A2WP,
				// Area 1 East Point
				points.A1EP
			],
			stroke: stroke.kingsFourMoa,
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
        // Kings 4 MOA southeast DME partition
        {
			id: 12,
			path: [
				// Area 9 West Point
				points.A9WP,
				// Area 6 West Point
				points.A6WP,
				// Area 3 West Point
				points.A3WP,
				// Area 2 East Point
				points.A2EP
			],
			stroke: stroke.kingsFourMoa,
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
        // Kings 4 MOA east partition
        {
			id: 13,
			path: [
				// Area 1 West Point
				points.A1WP,
				// Area 2 West Point
				points.A2WP,
				// Area 3 West Point
				points.A3WP,
				// Area 3 South Point
				points.A3SP
			],
			stroke: stroke.kingsFourMoa,
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
        // Kings 4 MOA west partition
        {
			id: 14,
			path: [
				// Area 4 West Point
				points.A4WP,
				// Area 5 West Point
				points.A5WP,
				// Area 6 West Point
				points.A6WP,
				// Area 6 South Point
				points.A6SP
			],
			stroke: stroke.kingsFourMoa,
			editable: false,
			draggable: false,
			geodesic: false,
			visible: true,
			icons: [{
				icon: {}
					}]
        },
        // FOXTROT Outer Perimeter
    	  {
			id: 15,
			path: [
				// Area 2 West Point
				{
					latitude: 28.18649722,
					longitude: -96.87484167
				},
				// Area 2 South Point
				{
					latitude: 28.08733056,
					longitude: -96.74798889
				},
				// Area 2 East Point
				{
					latitude: 28.133,
					longitude: -96.68450278
				},
				// Area 1 South Point
				points.FA1SP,
				// Area 1 East Point
				{
					latitude: 28.33199722,
					longitude: -96.3315
				},
				// Area 1 North Point
				{
					latitude: 28.49866667,
					longitude: -96.46616389
				},
				// Area 1 West Point
				points.FA1WP,
				// Area 2 West Point
				{
					latitude: 28.18649722,
					longitude: -96.87484167
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
        },
        // Foxtrot partition
        {
			id: 16,
			path: [
				// Area 1 West Point
				points.FA1WP,
				// Area 1 South Point
				points.FA1SP
			],
			stroke: stroke.kingsFourMoa,
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
        // Mustang North Outer Perimeter
    	  {
			id: 17,
			path: [
				// Area 1 West Point
				points.M1WP,
				// Area 1 Inner West Point
				{
					latitude: 28.11816389,
					longitude: -96.92866111
				},
				// Area 1 North Point
				{
					latitude: 28.18249722,
					longitude: -96.85966944
				},
				// Area 1 East Point
				{
					latitude: 28.05916389,
					longitude: -96.73316944
				},
				// Area 1 South Point
				points.M1SP,
				// Area 2 South Point
				{
					latitude: 27.80616111,
					longitude: -96.99833611
				},
				// Area 2 West Point
				{
					latitude: 27.89783056,
					longitude: -97.139825
				},
				// Area 2 North Point
				points.M2NP,
				// Area 1 West Point
				points.M1WP
 	
			],
			stroke: stroke.kingsFourMoa,
			editable: false,
			draggable: false,
			geodesic: false,
			visible: true,
			icons: [{
				icon: {}
					}]
        },
        // Mustang North Partition
    	  {
			id: 18,
			path: [
				// Area 2 North Point
				points.M2NP,
				// Area 1 South Point
				points.M1SP	
			],
			stroke: stroke.kingsFourMoa,
			editable: false,
			draggable: false,
			geodesic: false,
			visible: true,
			icons: [{
				icon: {}
					}]
        },
        // Mustang South Outer Perimeter
    	  {
			id: 19,
			path: [
				// Area 3 Northwest Point
				points.M3NW,
				// Area 3 Northeast Point
				{
					latitude: 27.55633333,
					longitude: -97.14283056
				},
				// Area 3 Southeast Point
				points.M3SE,
				// Area 4 Southeast Point
				{
					latitude: 27.21266389,
					longitude: -97.28215833
				},
				// Area 4 Southwest Point
				{
					latitude: 27.26183056,
					longitude: -97.42417222
				},
				// Area 3 Southwest Point
				points.M3SW,
				// Area 3 Northwest Point
				points.M3NW
 	
			],
			stroke: stroke.kingsFourMoa,
			editable: false,
			draggable: false,
			geodesic: false,
			visible: true,
			icons: [{
				icon: {}
					}]
        },
        // Mustang South Partition
    	  {
			id: 20,
			path: [
				// Area 3 Southeast Point
				points.M3SE,
				// Area 3 Southwest Point
				points.M3SW	
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
	function playSound(soundfile) {
  		var audio = document.getElementById("dummy");
  		audio.innerHTML= 
  		"<source src=\""+soundfile+"\"type=\"audio/mpeg\">";
  		audio.play();
	}
	
	var Markers = [
		// High Bridge
		{
		  "id": "0",
		  "coords": {
			"latitude": "27.6348",
			"longitude": "-97.2398"
		  },
		  "options": {
		  	"icon":'../img/audio.png'
		  },
		  "events": {
        	"click": function (marker, eventName, args) {
				 playSound('../audio/departure.mp3');
				}
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
			"featureType": "road.highway",
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
    	},
    	// Controls labels of airfields/airports
		{
			"featureType": "transit.station.airport",
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
					"weight": 0.1
				},
				{
					"visibility": "on"
				}
			]
    	}
	],
		mapTypeControl: true,

	};
	return Options;
});

// **************************************************************
// CONTROLLER 
// **************************************************************
myApp.controller("gMap",function($scope, Markers, Polylines, Options){
  // Add map to scope
  $scope.map = { 
    center: { latitude: 27.6932, longitude: -97.2805 }, 
    zoom: 10,
  };  
  // Add options to scope
  $scope.options = Options;
  // Add markers to scope
  $scope.markers = Markers;
  // Add polylines to scope
  $scope.polylines = Polylines;
});

myApp.controller('date', function($scope) {
    $scope.today = new Date();
});