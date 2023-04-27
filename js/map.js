
// Create variables for Basemaps

/*
var Stamen_TonerLite = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	    subdomains: 'abcd',
		minZoom: 0,
		maxZoom: 20,
		ext: 'png'
	});  // Stamen - Tone Lite ( Creative Commons Attribution (CC BY 3.0), can use freely, with attribution)

*/
var CartoDB_PositronNoLabels = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}{r}.png', {
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
		subdomains: 'abcd',
		maxZoom: 19
	});	// CartoDB - Positron No Labels (CC Attribution 3.0 Unported, free to use, must attribute should check with carto https://github.com/CartoDB/cartodb/issues/12033)

	var CartoDB_Positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
		subdomains: 'abcd',
		maxZoom: 19
	});


var map = L.map('map', {
		layers: CartoDB_Positron,
		center: [ 31.895827, 34.811196],
		zoom: 12
		});



		var current_language = "he"
var basemaps = {
	'CartoDB - Positron (No Labels)':CartoDB_Positron,
	//'Stamen - Toner Light': Stamen_TonerLite,
	'CartoDB - Positron (No Labels)':CartoDB_PositronNoLabels
};

const numberWithCommas = (x) => {
	var parts = x.toString().split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return parts.join(".");
  }

// Create empty variables for map layers
var points_data, shops




var shopIcon = L.Icon.extend({
    options: {
        iconSize:     [50, 50],
        iconAnchor:   [25, 25],
        popupAnchor:  [-3, -5]
    }
});

var SecondHandIcon = new shopIcon({iconUrl: 'images/SecondHand.png'})


var geojsonMarkerOptions = {
	radius: 4,
	weight: 0.1,
	opacity: 0.5,
	fillOpacity: 0.5
};

fetch("data/points.geojson")
.then(res => res.json())
.then(points_data => {
	shops = L.geoJSON(points_data, {
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng,{icon: SecondHandIcon});
		},
		onEachFeature:function(feature, layer){
			layer.bindPopup("<span><center><b>"+feature.properties.name+"</b></center></span></br>"+
			"<span>"+feature.properties.type+"</span>"
			);
		},
		style: function style(feature){
			return {
			weight: 1,
			opacity: 0.5,
			color: "rgb(0,0,0)", // Line color
			fillColor:"green",
			interactive:true
			}
		}
		}).addTo(map);

	L.control.layers(basemaps, shops).addTo(map);
	}
)




