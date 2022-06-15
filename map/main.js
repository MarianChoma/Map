
const mymap = L.map('map').setView([48.15227,17.07327], 17);


var goldIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
var redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFyaWFuY2hvbWEiLCJhIjoiY2t2ZTg3ZXNvMzBkNTJxb2s2Ym96a2V5biJ9.qfsDejIYDuqW_CRBFl97mw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

const marker=L.marker([48.15227,17.07328], {icon: redIcon}).addTo(mymap)

L.featureGroup([
    L.marker([48.154101, 17.075100], {icon: goldIcon}).bindPopup('<h2>ZOO</h2><p>Autobusy:<br>31,39, N31</p>'),
    L.marker([48.15458,17.07460], {icon: goldIcon}).bindPopup('<h2>ZOO</h2><p>Autobusy:<br>31,39, N31</p>'),
    L.marker([48.15462,17.07574], {icon: goldIcon}).bindPopup('<h2>ZOO</h2><p>Autobusy:<br>30, 32, 37, 92, 192, N29</p>'),
    L.marker([48.15564,17.07238], {icon: goldIcon}).bindPopup('<h2>Televízia</h2><p>Autobusy:<br>31,39, N31</p>'),
    L.marker([48.15405, 17.07693], {icon: goldIcon}).bindPopup('<h2>ZOO</h2><p>Autobusy:<br>30, 32, 37, 92, 192, N29</p>'),
    L.marker([48.14813, 17.07178], {icon: redIcon}).bindPopup('<h2>Botanická záhrada</h2><p>Električky:<br>4,9</p>'),
    L.marker([48.14812, 17.07247], {icon: redIcon}).bindPopup('<h2>Botanická záhrada</h2><p>Električky:<br>4,9</p>'),
    L.marker([48.14794, 17.0723], {icon: goldIcon}).bindPopup('<h2>Botanická záhrada</h2><p>Autobusy:<br>29, 32, N29, N33, N34</p>'),
    L.marker([48.14832, 17.07204], {icon: goldIcon}).bindPopup('<h2>Botanická záhrada</h2><p>Autobusy:<br>29, 32, N29, N33, N34</p>')]).addTo(mymap);

const bloky = [{
    "type": "Feature",
    "properties": {"blok": "A",
        "ustav": "Ústav jadrového a fyzikáleho inžinierstva",
        "institut": "Inštitút komunikácie a aplikovanej lingvistiky"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [17.072567,48.151960],
            [17.073891,48.151959],
            [ 17.073892, 48.151820],
            [17.072574, 48.151829],
            [ 17.072567, 48.151960 ]

        ]]
    }
}, {
    "type": "Feature",
    "properties": {"blok": "B",
        "ustav": "Ústav elektrotechniky",
        "institut": "Ústav multimediálnych inforamčných a kominikačných technológií"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [17.073024, 48.152453],
            [17.073020, 48.152337],
            [ 17.074367,  48.152324],
            [ 17.074368, 48.152461],
            [17.073024, 48.152453]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {"blok": "C",
    "ustav": "Ústav informatiky a matematiky",
        "institut": "Ústav elektroenergetiky a aplikovanej elektortechniky"
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [17.073890, 48.152825],
            [17.073890, 48.152968],
            [ 17.072823, 48.152973],
            [ 17.072828, 48.152829],
            [17.073890, 48.152825]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {"blok": "D",
    "ustav": "Ústav automobilovej mechatroniky",
        "institut": "Ústav robotiky a kybernetiky"
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [ 17.074384, 48.153327],
            [17.074383, 48.153473],
            [ 17.073214, 48.153472],
            [ 17.073216, 48.153332],
            [ 17.074384, 48.153327]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {"blok": "E",
    "ustav": "Ústav elektorinky a fotoniky"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [17.07391 , 48.1538197],
            [17.073910, 48.153977],
            [ 17.072855,48.153981],
            [17.072847, 48.153832],
            [17.073891, 48.1538197]
        ]]
    }
},{
    "type": "Feature",
    "properties": {
        "blok": "T",
        "ustav": "Technologický inštitút športu"
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [17.07255, 48.15444],
            [17.07281, 48.15445],
            [17.07282, 48.1535],
            [17.07293, 48.1535],
            [17.07293, 48.15332],
            [17.07256, 48.15333]
        ]]
    }
}];

var layerGroup = L.geoJSON(bloky, {
    onEachFeature: function (feature, layer) {
        if(feature.properties.blok==='E' || feature.properties.blok==='T'){
            layer.bindPopup('<h2>Blok: '+feature.properties.blok+'</h2><p>Názov ústavu: '+feature.properties.ustav+'</p>');
        }
        else{
        layer.bindPopup('<h2>Blok: '+feature.properties.blok+'</h2><p>Názov ústavu: '+feature.properties.ustav+'</p><p>Názov inštitútu:'+feature.properties.institut+'</p>');
        }
    },
    style: function(feature) {
        switch (feature.properties.blok) {
            case 'A': return {color: "#0000ff"};
            case 'B':   return {color: "#ff004d"};
            case 'C': return {color: "#00ff33"};
            case 'D':   return {color: "#ffdd00"};
            case 'E': return {color: "#8d0418"};
            case 'T': return {color: "#38020a"};
        }
    }
}).addTo(mymap);

L.Routing.control({
    waypoints: [
        L.latLng(null),
        L.latLng(48.15227,17.07328)
    ],
    routeWhileDragging: true,
    geocoder: L.Control.Geocoder.nominatim(),
    createMarker: function(i, wp, nWps) {
        if (i === 0 || i === nWps - 1) {
            return L.marker(wp.latLng, {
                icon: redIcon
            });
        }
    }
}).addTo(mymap);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

const pole=[];
const polyline = new L.Polyline(pole).addTo(mymap);

mymap.on('click', function(event) {

    let mark=new L.Marker(event.latlng, {icon: greenIcon}).addTo(mymap);
    pole.push(mark);

    polyline.addLatLng(event.latlng);
    console.log(polyline._bounds._northEast);

});

const superi=()=>{
    let length=0;
    for(let i=0;i<pole.length-1;i++) {
        console.log(pole[i]);
        length+=pole[i].getLatLng().distanceTo(pole[i+1].getLatLng());
    }
    document.getElementById('length').innerHTML = ''+length/1000 +' km';
}




