var map;
function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 42.3678818618 , lng: -87.93416293 },
    zoom: 15,
    });
}