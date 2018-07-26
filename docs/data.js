let map;
let infowindow;

 function initMap()
 {
 // Creamos un mapa con las coordenadas actuales
   navigator.geolocation.getCurrentPosition(function(pos) {

   lat = pos.coords.latitude;
   lon = pos.coords.longitude;

   let myLatlng = new google.maps.LatLng(lat, lon);

   let mapOptions = {
     center: myLatlng,
     zoom: 14,
     mapTypeId: google.maps.MapTypeId.MAP
   };

   map = new google.maps.Map(document.getElementById("mapa"),  mapOptions);

   // Creamos el infowindow
   infowindow = new google.maps.InfoWindow();

   // Especificamos la localización, el radio y el tipo de lugares que queremos obtener
   let request = {
     location: myLatlng,
     radius: 5000,
     types: ['restaurant']
   };

   // Creamos el servicio PlaceService y enviamos la petición.
   let service = new google.maps.places.PlacesService(map);

   service.nearbySearch(request, function(results, status) {
     if (status === google.maps.places.PlacesServiceStatus.OK) {
       for (var i = 0; i < results.length; i++) {
         crearMarcador(results[i]);
       }
     }
   });
 });
}

 function crearMarcador(place)
 {
   // Creamos un marcador
   let marker = new google.maps.Marker({
     map: map,
     position: place.geometry.location
   });

 // Asignamos el evento click del marcador
   google.maps.event.addListener(marker, 'click', function() {
     infowindow.setContent(place.name);
     infowindow.open(map, this);
   });
   }


   // fetch
   /*const inputText = document.querySelector('input');
const containerTitle = document.getElementById('title');
const containerYear = document.getElementById('year');
const containerRuntime = document.getElementById('runtime');
const containerImage = document.getElementById('img');

 inputText.addEventListener('keypress',()=>{
   let key = event.which || event.keyCode;
   if(key === 13){ // codigo 13 es enter
    let movie = inputText.value;
    inputText.value = '';
    console.log(movie)
    inputText.value ='';

    fetch(`http://www.omdbapi.com/?t=${movie}&apikey=c0d83ebd `)
    .then(Response => Response.json())
    .then(data=>{
      console.log(data);
      renderInfo(data);
    })
   }
 })
 const renderInfo = (data) =>{
   containerTitle.innerHTML = data.Title;
   containerYear.innerHTML = data.Year;
   containerRuntime.innerHTML = data.Runtime;
   containerImage.innerHTML= `<img src ="${data.Poster}">`;

 }*/
