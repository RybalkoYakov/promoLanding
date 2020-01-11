let googleMap;
function initMap() {
    googleMap = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 53.902263, lng: 27.561907},
        zoom: 20
    });

    let marker = new google.maps.Marker({
        position: {lat: 53.902263, lng: 27.561907},
        map: googleMap,
        title: "Center of belorussian road system"
    });
}