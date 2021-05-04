function initMap() {
  const myLatLng = { lat: 41.925724 , lng:  -87.781382 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9.25,
    center: myLatLng,
  });
	
	// markers
  const iit = new google.maps.Marker({
    title: "Illinois Institute of Technology",
    position: { lat: 41.835057 , lng: -87.627006 },
    map,
		icon: 'images/iit.png',
		animation: google.maps.Animation.DROP,
  });
	const sixflags = new google.maps.Marker({
    title: "Six Flags Great America",
    position: { lat: 42.370544 , lng: -87.936058 },
    map,
		icon: 'images/sixflags.png',
		animation: google.maps.Animation.DROP,
  });
	const bean = new google.maps.Marker({
    title: "Millennium Park",
    position: { lat: 41.882688 , lng: -87.622573 },
    map,
		icon: 'images/bean.png',
		animation: google.maps.Animation.DROP,
  });
	const park = new google.maps.Marker({
    title: "Riis Park",
    position: myLatLng,
    map,
		icon: 'images/tree.png',
		animation: google.maps.Animation.DROP,
  });
	
	// text for each marker
	const iitString = "Illinois Institute of Technology";
	const flagString = "Six Flags Great America";
	const beanString = "Millenium Park";
	const parkString = "Riis Park";
	
	// windows and listeners
	const iitwindow = new google.maps.InfoWindow({
		content: iitString,
  });
	iit.addListener("click", () => {
    iitwindow.open(map, iit);
  });
	
	const flagwindow = new google.maps.InfoWindow({
		content: flagString,
  });
	sixflags.addListener("click", () => {
    flagwindow.open(map, sixflags);
  });
	
	const beanwindow = new google.maps.InfoWindow({
		content: beanString,
  });
	bean.addListener("click", () => {
    beanwindow.open(map, bean);
  });
	
	const parkwindow = new google.maps.InfoWindow({
		content: parkString,
  });
	park.addListener("click", () => {
    parkwindow.open(map, park);
  });
	
}

$(document).ready(function(){
	$('.slider').bxSlider();
});

$(function(){
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
  });
});