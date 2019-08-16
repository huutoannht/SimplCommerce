// global variables
var map;
var markers = [];
var infowindow = new google.maps.InfoWindow();

/*window.onload = function(e){

    initialize();
}*/

function initialize() {

    var mapOptions = {
		// How zoomed in you want the map to start at (always required)
		setHeading: '',
		zoom: 3,
		mapTypeControl: false,
		streetViewControl: false,
		scrollwheel: false,
		// The latitude and longitude to center the map (always required)
		center: new google.maps.LatLng( 54.909495, 23.864879 ), // New York
		// How you would like to style the map.
		// This is where you would paste any style found on Snazzy Maps.
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
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  /*var json = JSON.parse(data);
  for (var i = 0; i < json.length; i++) {
    point = new google.maps.LatLng(json[i].latitudine, json[i].longitudine);
    var infowindowHtml = '<a href="./dettaglioLocale.php?id_loc=' + json[i].id_locale + '">' + json[i].nome_locale + '</a><br>' + json[i].address;
    addMarker(point, infowindowHtml);
  }*/
}

function addMarker(point, infowindowHtml) {
  var marker = new google.maps.Marker({
    position: point,
    map: map,
    icon: '/public/images/Map_Pin_small.svg',
  });
  google.maps.event.addListener(marker, 'click', infoCallback(infowindowHtml, marker));
  markers.push(marker);
}

function closeInfo() {
    infowindow.close();
}

function infoCallback(infowindowHtml, marker) {
  return function() {
    infowindow.close();

    //marker.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
    //map.panTo(marker.getPosition());
    //map.setCenter(marker.getPosition()); // sets center without animation


    // update the content of the infowindow before opening it
    infowindow.setContent(infowindowHtml)
    infowindow.open(map, marker);

    map.panTo(marker.getPosition());

    this.setOptions( {
				scrollwheel: true
			} );

	        // Reference to the DIV which receives the contents of the infowindow using jQuery
			var iwOuter = $( '.gm-style-iw' );
			/* The DIV we want to change is above the .gm-style-iw DIV.
			 * So, we use jQuery and create a iwBackground variable,
			 * and took advantage of the existing reference to .gm-style-iw for the previous DIV with .prev().
			 */
			var iwBackground = iwOuter.prev();
			// Remove the background shadow DIV
			iwBackground.children( ':nth-child(2)' ).css( {
				'display': 'none'
			} );
			// Remove the white background DIV
			iwBackground.children( ':nth-child(4)' ).css( {
				'display': 'none'
			} );

			$( '.gm-style-iw' ).prev().css( {
				'top': '-15px',
				'left':'-30px',
				'display':'none'
			} );

			/*$( '.gm-style-iw' ).parents( "div" ).eq(0).css( {
				'width': '490px',
				'margin-left':'260px',
				'margin-top': '10px',
				'top': '300px'
			} );*/

            $( '.gm-style-iw' ).parents( "div" ).eq(0).addClass('modal_map');



			var iwCloseBtn = iwOuter.next();
			//iwCloseBtn.css({'top':'25px', 'right':'39px'});
            iwCloseBtn.addClass('close_modal_map');



            /*setTimeout(function(){

                $( '.gm-style-iw' ).prev().css( {
                    'top': '-15px',
                    'left':'-30px',
                    'display':'none'
                } );

                $( '.gm-style-iw' ).parents( "div" ).eq(0).css( {
                    'width': '490px',
                    'margin-left':'260px',
                    'margin-top': '10px',
                    'top': '300px'
                } );//old arrow white on bottom

            }, 1000);*/


  };
}


var data = JSON.stringify([{
  latitudine: 44.494887,
  longitudine: 11.3426163,
  id_locale: "0",
  nome_locale: "Bologna",
  address: "Bologna, Italy"
}, {
  latitudine: 44.4946615,
  longitudine: 11.314634999999953,
  id_locale: "0",
  nome_locale: "Quartiere Saragozza",
  address: "Quartiere Saragozza, Bologna, Italy"
}]);


//google.maps.event.addDomListener(window, "load", initialize);
