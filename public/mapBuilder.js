var MapBuilder = function(x,y){
  var container = document.getElementById("main-map");
  // console.log(container);
  this.googleMap = new google.maps.Map(container,{
    center: {lat: x, lng: y},
    zoom: 15
  });
  this.marker = new google.maps.Marker({
     position: {lat: x, lng: y},
     map: this.googleMap,
     title: 'Hello World!'
   });
  


}