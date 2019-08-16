var map;

function init() {
	// Basic options for a simple Google Map
	// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

	var global_region = [];
	var i = 0;

	var global_coordinate1;
	var global_coordinate2;

	$('.form-radio-group label').each(function(index){//here it takes the address with "CHECKED" and set it on map
		
		if( $(this).parents('.form-radio-group').children('input').is(':checked') ){

			global_region[i] = $(this).parents('.form-radio-group').children('input').attr('data-coordinates'); 

		    var global_coordinates = global_region[i].split(",");

		    global_coordinate1 = parseFloat(global_coordinates[0]);
		    global_coordinate2 = parseFloat(global_coordinates[1]);

			

			i++;
		}
	});

	var mapOptions = {

		// How zoomed in you want the map to start at (always required)
		zoom: 15,
		mapTypeControl: false,
		streetViewControl: false,
		scrollwheel: true,
		// The latitude and longitude to center the map (always required)
		center: new google.maps.LatLng( global_coordinate1, global_coordinate2 ), 

		styles: [ {
			"featureType": "administrative",
			"elementType": "labels.text.fill",
			"stylers": [ {
				"color": "#444444"
			} ]
		}, {
			"featureType": "landscape",
			"elementType": "all",
			"stylers": [ {
				"color": "#f2f2f2"
			} ]
		}, {
			"featureType": "poi",
			"elementType": "all",
			"stylers": [ {
				"visibility": "off"
			} ]
		}, {
			"featureType": "road",
			"elementType": "all",
			"stylers": [ {
				"saturation": -100
			}, {
				"lightness": 45
			} ]
		}, {
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [ {
				"lightness": "64"
			} ]
		}, {
			"featureType": "road",
			"elementType": "geometry.fill",
			"stylers": [ {
				"lightness": "100"
			}, {
				"saturation": "-81"
			} ]
		}, {
			"featureType": "road",
			"elementType": "geometry.stroke",
			"stylers": [ {
				"lightness": "100"
			} ]
		}, {
			"featureType": "road.highway",
			"elementType": "all",
			"stylers": [ {
				"visibility": "simplified"
			} ]
		}, {
			"featureType": "road.arterial",
			"elementType": "labels.icon",
			"stylers": [ {
				"visibility": "off"
			} ]
		}, {
			"featureType": "transit",
			"elementType": "all",
			"stylers": [ {
				"visibility": "off"
			} ]
		}, {
			"featureType": "water",
			"elementType": "all",
			"stylers": [ {
				"color": "#c4ccd6"
			}, {
				"visibility": "on"
			} ]
		} ]
	};
	// Get the HTML DOM element that will contain your map
	// We are using a div with id="map" seen below in the <body>
	var mapElement = document.getElementById( 'contact-map' );
	// Create the Google Map using our element and options defined above
	map = new google.maps.Map( mapElement, mapOptions );
	// Multiple Markers

	var region = [];
	var i = 0;

	$('.form-radio-group label').each(function(index){//get each address 

		region[i] = $(this).parents('.form-radio-group').children('input').attr('data-coordinates'); 

	    var coordinates = region[index].split(",");

	    var coordinate1 = parseFloat(coordinates[0]);
	    var coordinate2 = parseFloat(coordinates[1]);

	    region[i] = ['', coordinate1, coordinate2];

		i++;

	});

	var markers = [];

	markers.push.apply(markers, region);


	var contentString = ''
		// Info Window Content (issokantys langai ju html butina ta pati tavrka kaip kordinaciu)
	var infoWindowContent = [
		[ contentString ]
	];
    
	var map_postionHeight;
	var map_postionWidth;
    

    
	
    

	var mapPosition = new google.maps.Size( map_postionHeight, map_postionWidth );
	// Display multiple markers on a map
	var infoWindow = new google.maps.InfoWindow( {
			maxHeight: 720,
			height: 700,
			
		} ),
		marker, i;
	//custom logo for marker
	//var customMarker = 'https://findprice.lt/public/assets/images/pin.png';

	var url_icon = 'https://'+window.location.href.split('/')[2]+'/public/assets/images/pin.png';

	var customMarker = url_icon;
	
	// Loop through our array of markers & place each one on the map
	for ( i = 0; i < markers.length; i++ ) {
		
		var position = new google.maps.LatLng( markers[ i ][ 1 ], markers[ i ][ 2 ] );
		marker = new google.maps.Marker( {
			position: position,
			icon: customMarker,
			map: map,
			title: markers[ i ][ 0 ]
		} );
		// Allow each marker to have an info window
		google.maps.event.addListener( marker, 'click', ( function( marker, i ) {
			return function() {
				infoWindow.setContent( infoWindowContent[ i ][ 0 ] );
				infoWindow.open( map, marker );
				map.setCenter( marker.getPosition() );
			}
		} )( marker, i ) );
		google.maps.event.addListener( map, 'click', function( event ) {
			this.setOptions( {
				scrollwheel: true
			} );
		} );

	}
}

function newLocation(newLat,newLng)
{
	map.setCenter({
		lat : newLat,
		lng : newLng
	});
}

jQuery( document ).ready( function() {
	google.maps.event.addDomListener( window, 'load', init );//.form-radio-group label


	$('.form-radio-group label').bind('click', function(){

	    var region = $(this).parents('.form-radio-group').children('input').attr('data-coordinates'); 

	    var coordinates = region.split(",");

	    var num1 = parseFloat(coordinates[0]);
	    var num2 = parseFloat(coordinates[1]);

	    newLocation(num1, num2);

	});



    /*var regionRadio = $('.form-radio-group label');

    regionRadio.on('click', function(){
        
    	if( $(this).attr('for') == 'Mainoffice2' ){

    		newLocation(54.898232, 23.913937);

    	}else if( $(this).attr('for') == 'Mainoffice' ){

    		newLocation(33.912917, -84.261869);

    	}

    });*/


    /*
    euroRadio.on('change', function(){alert('ok')
        //newLocation(54.898232, 23.913937);
    });

    usRadio.on('change', function(){alert('ok2')
        //newLocation(33.912917, -84.261869);
    });
*/
} );