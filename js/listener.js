newFunction();

function newFunction() {
	$(document).on('click', '.result-item', function () {
		console.log('hello world');
		res.coords = israeli_localities.getLayer(res._leaflet_id).feature;
		map.setView(res.coords.layer.getCenter(), 12);
	});
}
