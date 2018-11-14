/*
$.getJSON("data/area_c_without_jerusalem_wgs84.geojson",{} ,function(data) {
	area_c = L.geoJSON(data, {
		style: function style(feature){
			return {
			weight: 1,
			opacity: 0.4,
			color: "rgb(110,110,110)", // Border color
			radius: 5,
			fillColor: "rgb(215,194,158)",
			fillOpacity: 0.4,
			interactive:false
			}
		}
		});
})
.then(function(){

	$.getJSON("data/area_b_wgs84.geojson",{} ,function(data) {
		area_b = L.geoJSON(data, {
			style: function style(feature){
				return {
				weight: 1,
				opacity: 0.4,
				color: "rgb(110,110,110)", // Border color
				radius: 5,
				fillColor: "rgb(168,112,0)",
				fillOpacity: 0.4,
				interactive:false
				}
			}
		});
	})
})
.then(function(){

$.getJSON("data/area_a_wgs84.geojson",{} ,function(data) {
	area_a = L.geoJSON(data, {
		style: function style(feature){
			return {
			weight: 1,
			opacity: 0.4,
			color: "rgb(110,110,110)", // Border color
			radius: 5,
			fillColor: "rgb(115,76,0)",
			fillOpacity: 0.4,
			interactive:false
			}
		}
		});
	}).done(function(){
		setTimeout(function(){
			console.log("loaded oslo accords layers");
		}, 750);
		areas_group = L.layerGroup([ area_c, area_b, area_a]).addTo(map);
	})
})
.then(function(){

	$.getJSON("data/palestinian_localities_wb_wgs84.geojson",{} ,function(data) {
		palestinian_localities_wb = L.geoJSON(data, {
			style: function style(feature){
				return {
				weight: 0,
				opacity: 0.9,
				color: "rgb(130,130,130)", // Border color
				fillColor: "rgb(78,78,78)",
				fillOpacity: 0.9,
				interactive:false
				}
			}
			});
		})
})
.then(function(){

	$.getJSON("data/settlement_border_wgs84.geojson",{} ,function(data) {
		israeli_localities = L.geoJSON(data, {
			style: function style(feature){
				return {
				weight: 0,
				opacity: 0.9,
				color: "rgb(110,110,110)", // Border color
				radius: 5,
				fillColor: "rgb(255,127,127)",
				fillOpacity: 0.9,
				interactive:true
				}
			},
			onEachFeature:jewInfo
			});
			var props = ['Name', 'NameEng'];
			searchCtrl.indexFeatures(data.features, props);
			israeli_localities.on("click", onFeatureGroupClick);
		})
			
})
.then(function(){

	$.getJSON("data/צוי_בדבר_תחום_שיפוט_ישוב.geojson",{} ,function(data) {
		warrants_juristiction = L.geoJSON(data, {
			style: function style(feature){
				return {
				weight: 1,
				opacity: 0.4,
				color: "rgb(130,130,130)", // Border color
				radius: 5,
				fillColor: "rgb(255,190,190)",
				fillOpacity: 0.4,
				interactive:false
				}
			}
			});
		}).done(function(){
			setTimeout(function(){
				console.log("loaded Settelments layers");
			}, 750);
			settlements_group = L.layerGroup([ palestinian_localities_wb, warrants_juristiction, israeli_localities]).addTo(map);
		})
		

})
.then(function(){

	$.getJSON("data/old_city_wgs84.geojson",{} ,function(data) {
		old_city = L.geoJSON(data, {
			style: function style(feature){
				return {
				weight: 1.5,
				opacity: 1,
				color: "rgb(115,76,0)", // Border color
				interactive:false
				}
			}
			});
		})
})
.then(function(){

	$.getJSON("data/SettlerHousesHagit_wgs84.geojson",{} ,function(data) {
		
		SettlerHousesHagit = L.geoJSON(data, {
			pointToLayer: function (feature, latlng) {
				return L.shapeMarker(latlng, {
					shape: "square",
					radius: 6
				});
			},
			style: function style(feature){
				return{
				strok: false,
				fillColor: "rgb(255,127,127)",
				fillOpacity: 0.9,
				weight: 0.75,
				opacity: 0.9,
				color: "rgb(0,0,0)",
				interactive:false
				}
			}
			});
		})
})
.then(function(){

	$.getJSON("data/JM_municipal_borders_wgs84.geojson",{} ,function(data) {
		jm_municipal_border = L.geoJSON(data, {
			style: function style(feature){
				return {
				weight: 1.5,
				opacity: 1,
				color: "rgb(255,198,99)", 
				fillOpacity: 0,
				interactive:false
				}
			}
			});
		})
})
.then(function(){

	$.getJSON("data/Jewish_nieghborhoods_EJ_wgs84.geojson",{} ,function(data) {
		Jewish_nieghborhoods_EJ = L.geoJSON(data, {
			style: function style(feature){
				return {
				weight: 0,
				opacity: 0,
				color: "rgb(110,110,110)", // Border color
				//radius: 5,
				fillColor: "rgb(230,0,0)",
				fillOpacity: 0.4,
				interactive:false
				}
			}
			});
		}).done(function(){
			setTimeout(function(){
				console.log("loaded Jerusalem layers");
			}, 750);
			jeruslaem_group = L.layerGroup([old_city, SettlerHousesHagit,jm_municipal_border,Jewish_nieghborhoods_EJ ]).addTo(map);
			SettlerHousesHagit.removeFrom(map);
		})
		
})
.then(function(){

	$.getJSON("data/geneva_permanent_borders_line_wgs84.geojson",{} ,function(data) {
		geneva_permanent_borders = L.geoJSON(data, {
			style: function style(feature){
				return {
				weight: 1.5,
				opacity: 1,
				color: "rgb(115,178,255)", // Line color
				interactive:false
				}
			}
			});
		})
})
.then(function(){

	$.getJSON("data/green_line_line_wgs84.geojson",{} ,function(data) {
		green_line = L.geoJSON(data, {
			style: function style(feature){
				return {
				weight: 1.5,
				opacity: 1,
				color: "rgb(56,168,0)", // Line color
				interactive:false
				}
			}
			});
		})
})
.then(function(){

	$.getJSON("data/barrier_to_show_clean_wgs84.geojson",{} ,function(data) {
		barrier = L.geoJSON(data, {
			style: function style(feature){
				return {
				weight: 1.5,
				opacity: 1,
				dashArray: barrier_line_type(feature.properties.Status_sip),
				color: "rgb(0,0,0)", // Line color
				interactive:false
				}
			}
			});
		}).done(function(){
			setTimeout(function(){
				console.log("loaded Borders layers");
			}, 750);
			borders_group =L.layerGroup([geneva_permanent_borders,green_line,barrier]).addTo(map);
		})
		
})
.then(function(){

	$.getJSON("data/jewish_large_settlements_label.geojson",{} ,function(data) {
		large_labels_jewish = L.geoJSON(data, {
			pointToLayer: function (feature, latlng) {
				return L.circleMarker(latlng,geojsonMarkerOptions);
			},
			onEachFeature:function(feature, layer){
				layer.bindTooltip("<span class=tooltip-content>"+feature.properties.Name+"</span>", {permanent: true, direction: 'center', opacity: 0.9, className: "Large-label", interactive:true }).openTooltip();
			},
			style: function style(feature){
				return {
				weight: 0.1,
				opacity: 0,
				color: "rgb(0,0,0)", // Line color
				interactive:false
				}
			}
			})//.addTo(map);
		});
})
.then(function(){

	$.getJSON("data/jewish_mediumlarge_settlements_label.geojson",{} ,function(data) {
		medium_labels_jewish = L.geoJSON(data, {
			pointToLayer: function (feature, latlng) {
				return L.circleMarker(latlng,geojsonMarkerOptions);
			},
			onEachFeature:function(feature, layer){
				layer.bindTooltip("<span class=tooltip-content>"+feature.properties.Name+"</span>", {permanent: true, direction: 'center', opacity: 0.9, className: "Large-label", interactive:true }).openTooltip();
			},
			style: function style(feature){
				return {
				weight: 0.1,
				opacity: 0,
				color: "rgb(0,0,0)", // Line color
				interactive:false
				}
			}
			})//.addTo(map);
		});
})
.then(function(){

	$.getJSON("data/jewish_all_settlements_label.geojson",{} ,function(data) {
		all_labels_jewish = L.geoJSON(data, {
			pointToLayer: function (feature, latlng) {
				return L.circleMarker(latlng,geojsonMarkerOptions);
			},
			onEachFeature:function(feature, layer){
				layer.bindTooltip("<span class=tooltip-content>"+feature.properties.Name+"</span>", {permanent: true, direction: 'center', opacity: 0.9, className: "Large-label", interactive:true }).openTooltip();
			},
			style: function style(feature){
				return {
				weight: 0.1,
				opacity: 0,
				color: "rgb(0,0,0)", // Line color
				interactive:false
				}
			}
			})//.addTo(map);
		});
})


.then(function(){

	$.getJSON("data/palestinian_large_settlements_label.geojson",{} ,function(data) {
		large_labels_palestinian = L.geoJSON(data, {
			pointToLayer: function (feature, latlng) {
				return L.circleMarker(latlng,geojsonMarkerOptions);
			},
			onEachFeature:function(feature, layer){
				layer.bindTooltip("<span class=tooltip-content>"+feature.properties.Lable_Heb+"</span>", {permanent: true, direction: 'center', opacity: 0.9, className: "Large-label", interactive:true }).openTooltip();
			},
			style: function style(feature){
				return {
				weight: 0.1,
				opacity: 0,
				color: "rgb(0,0,0)", // Line color
				interactive:false
				}
			}
			})//.addTo(map);
		});
})
.then(function(){

	$.getJSON("data/palestinian_mediumlarge_settlements_label.geojson",{} ,function(data) {
		medium_labels_palestinian = L.geoJSON(data, {
			pointToLayer: function (feature, latlng) {
				return L.circleMarker(latlng,geojsonMarkerOptions);
			},
			onEachFeature:function(feature, layer){
				layer.bindTooltip("<span class=tooltip-content>"+feature.properties.Lable_Heb+"</span>", {permanent: true, direction: 'center', opacity: 0.9, className: "Large-label", interactive:true }).openTooltip();
			},
			style: function style(feature){
				return {
				weight: 0.1,
				opacity: 0,
				color: "rgb(0,0,0)", // Line color
				interactive:false
				}
			}
			})//.addTo(map);
		});
})
.then(function(){
	$.getJSON("data/palestinian_all_settlements_label.geojson",{} ,function(data) {
		all_labels_palestinian = L.geoJSON(data, {
			pointToLayer: function (feature, latlng) {
				return L.circleMarker(latlng,geojsonMarkerOptions);
			},
			onEachFeature:function(feature, layer){
				layer.bindTooltip("<span class=tooltip-content>"+feature.properties.Lable_Heb+"</span>", {permanent: true, direction: 'center', opacity: 0.9, className: "Large-label", interactive:true }).openTooltip();
			},
			style: function style(feature){
				return {
				weight: 0.1,
				opacity: 0,
				color: "rgb(0,0,0)", // Line color
				interactive:false
				}
			}
			})//.addTo(map);
        })
        .then(function(){
			setTimeout(function(){
				console.log("loaded all layers, creating groups");
			}, 1250);
			//settlements_group = L.layerGroup([ palestinian_localities_wb, warrants_juristiction, israeli_localities]).addTo(map);
			//jeruslaem_group = L.layerGroup([old_city, SettlerHousesHagit,jm_municipal_border,Jewish_nieghborhoods_EJ ]).addTo(map);
			//SettlerHousesHagit.removeFrom(map);
			//borders_group =L.layerGroup([geneva_permanent_borders,green_line,barrier]).addTo(map);
			/*groupedOverlays = {
				"Borders":{
					"<span><img src ='./images/geneva.png' width='25' height='9'/>Proposed solution (Geneva Initiative )":geneva_permanent_borders,
					'<span><img src ="./images/green_line.png" width="25" height="9"/>1949 Armistice border - "Green Line"':green_line,
					"<span>Barrier fence<ul><li><img src ='./images/barrier_completed.png' width='25' height='9'/> Completed</li><li><img src ='./images/barrier_planned.png' width='25' height='9'/> Planned</li></ul></span>":barrier
				},
				"Settlements": {
					"<span><img src ='./images/palestinian_settlements.png' width='25' height='25'/>Palestinian Localities</span>": palestinian_localities_wb,
					"<span><img src ='./images/warrants.png' width='25' height='25'/>Juristiction Warrants</span>":warrants_juristiction,
					"<span><img src ='./images/israeli_settlements.png' width='25' height='25'/>Israeli Locaities</span>":israeli_localities
				},
				"Oslo Accords, September 1995": {
				  "<span><img src ='./images/area_a.png' width='25' height='25'/>Area A - full Palestinian control</span>": area_a,
				  "<span><img src ='./images/area_b.png' width='25' height='25'/>Area B - civilian Palestinian control</span>": area_b,
				  "<span><img src ='./images/area_c.png' width='25' height='25'/>Area C - full Israeli control</span>": area_c
				},
				"Jeruslaem":{
					"<span><img src ='./images/old_city.png' width='25' height='9'/>Old City": old_city,
					"<span><img src ='./images/houses.png' width='25' height='25'/>Settlers Houses":SettlerHousesHagit,
					"<span><img src ='./images/jm_border.png' width='25' height='9'/>Jerusalem municipal border":jm_municipal_border,
					"<span><img src ='./images/jewish_neighborhoods.png' width='25' height='25'/>Jewish neighborhoods East Jerusalem":Jewish_neighborhoods_EJ
				}
			  };
			  var GLoptions = {
				// Show a checkbox next to non-exclusive group labels for toggling all
				groupCheckboxes: true
			  };
			  var layers_no_groups = {
				"<span><img src ='./images/geneva.png' width='25' height='9'/>Proposed solution (Geneva Initiative )":geneva_permanent_borders,
				'<span><img src ="./images/green_line.png" width="25" height="9"/>1949 Armistice border - "Green Line"':green_line,
				"<span>Barrier fence<ul><li><img src ='./images/barrier_completed.png' width='25' height='9'/> Completed</li><li><img src ='./images/barrier_planned.png' width='25' height='9'/> Planned</li></ul></span>":barrier,
				"<span><img src ='./images/palestinian_settlements.png' width='25' height='25'/>Palestinian Localities</span>": palestinian_localities_wb,
				"<span><img src ='./images/warrants.png' width='25' height='25'/>Juristiction Warrants</span>":warrants_juristiction,
				"<span><img src ='./images/israeli_settlements.png' width='25' height='25'/>Israeli Locaities</span>":israeli_localities,
				"<span><img src ='./images/area_a.png' width='25' height='25'/>Area A - full Palestinian control</span>": area_a,
				"<span><img src ='./images/area_b.png' width='25' height='25'/>Area B - civilian Palestinian control</span>": area_b,
				"<span><img src ='./images/area_c.png' width='25' height='25'/>Area C - full Israeli control</span>": area_c,
				"<span><img src ='./images/old_city.png' width='25' height='9'/>Old City": old_city,
				"<span><img src ='./images/houses.png' width='25' height='25'/>Settlers Houses":SettlerHousesHagit,
				"<span><img src ='./images/jm_border.png' width='25' height='9'/>Jerusalem municipal border":jm_municipal_border,
				"<span><img src ='./images/jewish_neighborhoods.png' width='25' height='25'/>Jewish neighborhoods East Jerusalem":Jewish_neighborhoods_EJ
			  }
			  
			  setTimeout(function(){
				console.log("Organizing layer order");
			},400);
			  //L.control.groupedLayers(basemaps, groupedOverlays,GLoptions,{collapsed:false}).addTo(map);
			  L.control.layers(basemaps,layers_no_groups,{collapsed:false}).addTo(map)
			  info.addTo(map);
			  if(current_language =="en"){
				$(".leaflet-control-layers-overlays").prepend("<h4>Peace Now</h4>");
			}
			  //SettlerHousesHagit.removeFrom(map)
			  area_c.bringToFront()
			  area_b.bringToFront()
			  area_a.bringToFront()
			  palestinian_localities_wb.bringToFront()
			  warrants_juristiction.bringToFront()
			  israeli_localities.bringToFront()
			  old_city.bringToFront()
			  //SettlerHousesHagit.bringToFront()
			  jm_municipal_border.bringToFront()
			  Jewish_nieghborhoods_EJ.bringToFront()
			  geneva_permanent_borders.bringToFront()
			  green_line.bringToFront()
			  barrier.bringToFront()


				var serach_layers = L.layerGroup([ palestinian_localities_wb, israeli_localities])
				// Add Legend to Map
				//legend.addTo(map);
				
				
				
});
*/
/*
$.when(borders_group, areas_group, settlements_group).done(function(){
	groupedOverlays = {
		"Borders":{
			"<span><img src ='./images/geneva.png' width='25' height='9'/>Proposed solution (Geneva Initiative )":geneva_permanent_borders,
			'<span><img src ="./images/green_line.png" width="25" height="9"/>1949 Armistice border - "Green Line"':green_line,
			"<span>Barrier fence<ul><li><img src ='./images/barrier_completed.png' width='25' height='9'/> Completed</li><li><img src ='./images/barrier_planned.png' width='25' height='9'/> Planned</li></ul></span>":barrier
		},
		"Settlements": {
			"<span><img src ='./images/palestinian_settlements.png' width='25' height='25'/>Palestinian Localities</span>": palestinian_localities_wb,
			"<span><img src ='./images/warrants.png' width='25' height='25'/>Juristiction Warrants</span>":warrants_juristiction,
			"<span><img src ='./images/israeli_settlements.png' width='25' height='25'/>Israeli Locaities</span>":israeli_localities
		},
		"Oslo Accords, September 1995": {
		  "<span><img src ='./images/area_a.png' width='25' height='25'/>Area A - full Palestinian control</span>": area_a,
		  "<span><img src ='./images/area_b.png' width='25' height='25'/>Area B - civilian Palestinian control</span>": area_b,
		  "<span><img src ='./images/area_c.png' width='25' height='25'/>Area C - full Israeli control</span>": area_c
		},
		"Jeruslaem":{
			"<span><img src ='./images/old_city.png' width='25' height='9'/>Old City": old_city,
			"<span><img src ='./images/houses.png' width='25' height='25'/>Settlers Houses":SettlerHousesHagit,
			"<span><img src ='./images/jm_border.png' width='25' height='9'/>Jerusalem municipal border":jm_municipal_border,
			"<span><img src ='./images/jewish_neighborhoods.png' width='25' height='25'/>Jewish neighborhoods East Jerusalem":Jewish_neighborhoods_EJ
		}
	  };
	  var GLoptions = {
		// Show a checkbox next to non-exclusive group labels for toggling all
		groupCheckboxes: true
	  };
	  L.control.groupedLayers(basemaps, groupedOverlays,GLoptions,{collapsed:false}).addTo(map);

	  if(current_language =="en"){
		$(".leaflet-control-layers-overlays").prepend("<h4>Peace Now</h4>");
	}

	//SettlerHousesHagit.removeFrom(map)
	area_c.bringToFront()
	area_b.bringToFront()
	area_a.bringToFront()
	palestinian_localities_wb.bringToFront()
	warrants_juristiction.bringToFront()
	israeli_localities.bringToFront()
	old_city.bringToFront()
	//SettlerHousesHagit.bringToFront()
	jm_municipal_border.bringToFront()
	Jewish_nieghborhoods_EJ.bringToFront()
	geneva_permanent_borders.bringToFront()
	green_line.bringToFront()
	barrier.bringToFront()


	var serach_layers = L.layerGroup([ palestinian_localities_wb, israeli_localities])

})
$(document).ready(function(){
	$("leaflet-fusesearch-panel").on('click', '.result-item', function () {
		console.log('hello world');
		res.coords = israeli_localities.getLayer(res._leaflet_id).feature;
		map.setView(res.coords.layer.getCenter(), 12);
	})
  }
)

/*
$(".result-item").click(function(){
	console.log('hello world');
	var match = israeli_localities.eachLayer(function(layer) {
		if (layer.feature.properties.Name == res.feature.properties.Name) {
			return layer
		}
	})
		res.coords = israeli_localities.getLayer(res._leaflet_id).feature;
		map.setView(res.coords.layer.getCenter(), 12);
})*/
/*
if(map.hasLayer(large_labels_palestinian)){
				map.removeLayer(large_labels_palestinian)
				large_labels_jewish = L.geoJSON(all_labels_jewish_data.responseJSON, {
					pointToLayer: function (feature, latlng) {
						return L.circleMarker(latlng,geojsonMarkerOptions);
					},
					onEachFeature:function(feature, layer){
						layer.bindTooltip("<span class=tooltip-content>"+feature.properties.Name+"</span>", 
						{permanent: true, direction: 'center', opacity: 1, className: "Large-label", interactive:false }).openTooltip();
					},
					style: function style(feature){
						return {
						weight: 0.1,
						opacity: 0,
						color: "rgb(0,0,0)", // Line color
						interactive:false
						}
					},
					filter: function(feature){
								if (feature.properties.AREA1 > 1380000) {
									return  'true'
									   }
							}
					}).addTo(map)
			}
			
			if(map.hasLayer(medium_labels_jewish)){
				map.removeLayer(medium_labels_jewish)

				medium_labels_jewish = L.geoJSON(all_labels_jewish_data.responseJSON, {
					pointToLayer: function (feature, latlng) {
						return L.circleMarker(latlng,geojsonMarkerOptions);
					},
					onEachFeature:function(feature, layer){
						layer.bindTooltip("<span class=tooltip-content>"+feature.properties.Name+"</span>", 
						{permanent: true, direction: 'center', opacity: 1, className: "Large-label", interactive:false }).openTooltip();
					},
					style: function style(feature){
						return {
						weight: 0.1,
						opacity: 0,
						color: "rgb(0,0,0)", // Line color
						interactive:false
						}
					},
					filter: function(feature){
								if (feature.properties.AREA1 <= 1380000 && feature.properties.AREA1 >= 350000) {
									return  'true'
									   }
							}
					}).addTo(map);
				}

				if(map.hasLayer(all_labels_jewish)){
					map.removeLayer(all_labels_jewish)

				all_labels_jewish = L.geoJSON(all_labels_jewish_data.responseJSON, {
						pointToLayer: function (feature, latlng) {
							return L.circleMarker(latlng,geojsonMarkerOptions);
						},
						onEachFeature:function(feature, layer){
							layer.bindTooltip("<span class=tooltip-content>"+feature.properties.Name+"</span>",
							 {permanent: true, direction: 'center', opacity: 1, className: "Large-label", interactive:false }).openTooltip();
						},
						style: function style(feature){
							return {
							weight: 0.1,
							opacity: 0,
							color: "rgb(0,0,0)", // Line color
							interactive:false
							}
						},
						filter: function(feature){
									if (feature.properties.AREA1 > 350000) {
										return  'true'
										   }
								}
						}).addTo(map)
					}
				
				if(map.hasLayer(large_labels_palestinian)){
					map.removeLayer(large_labels_palestinian)

				large_labels_palestinian = L.geoJSON(all_labels_palestinian_data.responseJSON, {
							pointToLayer: function (feature, latlng) {
								return L.circleMarker(latlng,geojsonMarkerOptions);
							},
							onEachFeature:function(feature, layer){
								layer.bindTooltip("<span class=tooltip-content>"+feature.properties.Lable_Heb+"</span>", 
								{permanent: true, direction: 'center', opacity: 1, className: "Large-label", interactive:false }).openTooltip();
							},
							style: function style(feature){
								return {
								weight: 0.1,
								opacity: 0,
								color: "rgb(0,0,0)", // Line color
								interactive:false
								}
							},
							filter: function(feature){
										if (feature.properties.AREA1 > 5500000) {
											return  'true'
											   }
									}
						}).addTo(map)
					}
					
					if(map.hasLayer(medium_labels_palestinian)){
						map.removeLayer(medium_labels_palestinian)

					medium_labels_palestinian = L.geoJSON(all_labels_palestinian_data.responseJSON, {
						pointToLayer: function (feature, latlng) {
							return L.circleMarker(latlng,geojsonMarkerOptions);
						},
						onEachFeature:function(feature, layer){
							layer.bindTooltip("<span class=tooltip-content>"+feature.properties.Lable_Heb+"</span>",
							 {permanent: true, direction: 'center', opacity: 1, className: "Large-label", interactive:false }).openTooltip();
							},
						style: function style(feature){
							return {
							weight: 0.1,
							opacity: 0,
							color: "rgb(0,0,0)", // Line color
							interactive:false
								}
							},
							filter: function(feature){
								if (feature.properties.AREA1 >= 550000) {
									return  'true'
									   }
							}
						}).addTo(map)	
					}
					
					if(map.hasLayer(all_labels_palestinian)){
						map.removeLayer(all_labels_palestinian)

					all_labels_palestinian = L.geoJSON(all_labels_palestinian_data.responseJSON, {
									pointToLayer: function (feature, latlng) {
										return L.circleMarker(latlng,geojsonMarkerOptions);
									},
									onEachFeature:function(feature, layer){
										layer.bindTooltip("<span class=tooltip-content>"+feature.properties.Lable_Heb+"</span>",
										 {permanent: true, direction: 'center', opacity: 1, className: "Large-label", interactive:false }).openTooltip();
									},
									style: function style(feature){
										return {
										weight: 0.1,
										opacity: 0,
										color: "rgb(0,0,0)", // Line color
										interactive:false
										}
									}
									}).addTo(map)
								}



*//*
if(map.hasLayer(large_labels_jewish)){
				map.removeLayer(large_labels_jewish)
			large_labels_jewish = L.geoJSON(all_labels_jewish_data.responseJSON, {
				pointToLayer: function (feature, latlng) {
					return L.circleMarker(latlng,geojsonMarkerOptions);
				},
				onEachFeature:function(feature, layer){
					layer.bindTooltip("<span class=tooltip-content>"+feature.properties.NameEng+"</span>", 
					{permanent: true, direction: 'center', opacity: 1, className: "Large-label", interactive:false }).openTooltip();
				},
				style: function style(feature){
					return {
					weight: 0.1,
					opacity: 0,
					color: "rgb(0,0,0)", // Line color
					interactive:false
					}
				},
				filter: function(feature){
							if (feature.properties.AREA1 > 1380000) {
								return  'true'
								   }
						}
				}).addTo(map)
			}

			if(map.hasLayer(medium_labels_jewish)){
				map.removeLayer(medium_labels_jewish)

				medium_labels_jewish = L.geoJSON(all_labels_jewish_data.responseJSON, {
					pointToLayer: function (feature, latlng) {
						return L.circleMarker(latlng,geojsonMarkerOptions);
					},
					onEachFeature:function(feature, layer){
						layer.bindTooltip("<span class=tooltip-content>"+feature.properties.NameEng+"</span>", 
						{permanent: true, direction: 'center', opacity: 1, className: "Large-label", interactive:false }).openTooltip();
					},
					style: function style(feature){
						return {
						weight: 0.1,
						opacity: 0,
						color: "rgb(0,0,0)", // Line color
						interactive:false
						}
					},
					filter: function(feature){
								if (feature.properties.AREA1 <= 1380000 && feature.properties.AREA1 >= 350000) {
									return  'true'
									   }
							}
					}).addTo(map);
				}
		
				if(map.hasLayer(all_labels_jewish)){
					map.removeLayer(all_labels_jewish)

				all_labels_jewish = L.geoJSON(all_labels_jewish_data.responseJSON, {
						pointToLayer: function (feature, latlng) {
							return L.circleMarker(latlng,geojsonMarkerOptions);
						},
						onEachFeature:function(feature, layer){
							layer.bindTooltip("<span class=tooltip-content>"+feature.properties.NameEng+"</span>",
							 {permanent: true, direction: 'center', opacity: 1, className: "Large-label", interactive:false }).openTooltip();
						},
						style: function style(feature){
							return {
							weight: 0.1,
							opacity: 0,
							color: "rgb(0,0,0)", // Line color
							interactive:false
							}
						},
						filter: function(feature){
									if (feature.properties.AREA1 > 350000) {
										return  'true'
										   }
								}
						}).addTo(map)
					}
		
					if(map.hasLayer(large_labels_palestinian)){
						map.removeLayer(large_labels_palestinian)

				large_labels_palestinian = L.geoJSON(all_labels_palestinian_data.responseJSON, {
							pointToLayer: function (feature, latlng) {
								return L.circleMarker(latlng,geojsonMarkerOptions);
							},
							onEachFeature:function(feature, layer){
								layer.bindTooltip("<span class=tooltip-content>"+feature.properties.NAME+"</span>", 
								{permanent: true, direction: 'center', opacity: 1, className: "Large-label", interactive:false }).openTooltip();
							},
							style: function style(feature){
								return {
								weight: 0.1,
								opacity: 0,
								color: "rgb(0,0,0)", // Line color
								interactive:false
								}
							},
							filter: function(feature){
										if (feature.properties.AREA1 > 5500000) {
											return  'true'
											   }
									}
						}).addTo(map)
					}
					
					if(map.hasLayer(medium_labels_palestinian)){
						map.removeLayer(medium_labels_palestinian)

					medium_labels_palestinian = L.geoJSON(all_labels_palestinian_data.responseJSON, {
						pointToLayer: function (feature, latlng) {
							return L.circleMarker(latlng,geojsonMarkerOptions);
						},
						onEachFeature:function(feature, layer){
							layer.bindTooltip("<span class=tooltip-content>"+feature.properties.NAME+"</span>",
							 {permanent: true, direction: 'center', opacity: 1, className: "Large-label", interactive:false }).openTooltip();
							},
						style: function style(feature){
							return {
							weight: 0.1,
							opacity: 0,
							color: "rgb(0,0,0)", // Line color
							interactive:false
								}
							},
							filter: function(feature){
								if (feature.properties.AREA1 >= 550000) {
									return  'true'
									   }
							}
						}).addTo(map)
					}	
					
					if(map.hasLayer(all_labels_palestinian)){
						map.removeLayer(all_labels_palestinian)

					all_labels_palestinian = L.geoJSON(all_labels_palestinian_data.responseJSON, {
									pointToLayer: function (feature, latlng) {
										return L.circleMarker(latlng,geojsonMarkerOptions);
									},
									onEachFeature:function(feature, layer){
										layer.bindTooltip("<span class=tooltip-content>"+feature.properties.NAME+"</span>",
										 {permanent: true, direction: 'center', opacity: 1, className: "Large-label", interactive:false }).openTooltip();
									},
									style: function style(feature){
										return {
										weight: 0.1,
										opacity: 0,
										color: "rgb(0,0,0)", // Line color
										interactive:false
										}
									}
									}).addTo(map)
								}
*/
