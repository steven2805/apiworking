
var defaults = ["number", "Street", "City/County", "Country"];
var userInput = [];

var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.addEventListener('load', callback);
  request.open('GET', url);
  request.send();
};

var requestComplete = function() {
  if (this.status !== 200) return;
  var jsonString = this.responseText;
  var information = JSON.parse(jsonString);
  if(information.status === "ZERO_RESULTS"){
    console.log("no information found about the address");
  }else
  {
  // console.log(information.results[0].address_components[0].long_name)
  console.log(information.results[0].geometry.location);
  detailedOutPut(information);
}
};

var detailedOutPut = function(information){
  var number = information.results[0].address_components[0].long_name;
  var street = information.results[0].address_components[1].short_name;
  var town = information.results[0].address_components[2].long_name;
  var county = information.results[0].address_components[4].long_name;
  var country = information.results[0].address_components[5].long_name;
  console.log(information);
  var postCode = information.results[0].address_components[6].long_name;
  console.log(information);
  var heldInformation = [];
  heldInformation.push(number,town,street,county,country,postCode);
  displayinginfo(heldInformation, information);
};

var displayinginfo = function(infoarray, data){
  console.log(infoarray);
  var list = document.getElementById('address-information');
  infoarray.forEach(function(info){
    // console.log(info);
    var li = document.createElement('LI');
    li.innerText = info;
    list.appendChild(li);

    lat = data.results[0].geometry.location.lat
    lng = data.results[0].geometry.location.lng
    // console.log(lat,lng);
    creatingAMAp(lat,lng);
  })
};



var creatingAMAp = function(x,y){
  var mainMap = new MapBuilder(x,y);

}




var urlBuilder = function(array){
  var joinedinput = "";
  array.forEach(function(element){
    //element.split(' ').join('+')
    element = element + ",+";
    joinedinput = joinedinput + element;
  })
  joinedinput = joinedinput.slice(0, -1);
  // console.log(joinedinput);
  var url = "https://maps.googleapis.com/maps/api/geocode/json?address="+ joinedinput +"&key=AIzaSyCdjgJXbfY7yxD-Zqq7r2gaCi-0M33RNLQ";
  // console.log(url);
  makeRequest(url, requestComplete);
};




var correctuserinput= function(userInput){
  var counter = -1;
  var cleararray =[];
  userInput.forEach(function(value){
    // console.log(value);
    ++counter
    // console.log(defaults[counter]);
    if(value === defaults[counter]){
    }
    else 
    {
      cleararray.push(value);
    }
  })
  urlBuilder(cleararray);
};




var app = function () {


  var search = document.getElementById("search-box");

  // var search = document.querySelector("#search-box");

  var user_inputnumber = document.createElement("INPUT");
  user_inputnumber.setAttribute("type", "text");
  user_inputnumber.setAttribute("value", "number");
  user_inputnumber.setAttribute("ID", 'user_inputnumber');

  var user_inputStreet = document.createElement("INPUT");
  user_inputStreet.setAttribute("type", "text");
  user_inputStreet.setAttribute("value", "Street");
  user_inputStreet.setAttribute("ID", 'user_inputstreet');

  var user_inputCounty = document.createElement("INPUT");
  user_inputCounty.setAttribute("type", "text");
  user_inputCounty.setAttribute("value", "City/County");
  user_inputCounty.setAttribute("ID", 'user_inputcounty');

  var user_inputCountry = document.createElement("INPUT");
  user_inputCountry.setAttribute("type", "text");
  user_inputCountry.setAttribute("value", "Country");
  user_inputCountry.setAttribute("ID", 'user_inputcountry');


  submit_Button = document.createElement('button');

  search.appendChild(user_inputnumber);
  search.appendChild(user_inputStreet);
  search.appendChild(user_inputCounty);
  search.appendChild(user_inputCountry);
  search.appendChild(submit_Button);



  // var autocomplete = new google.maps.places.Autocomplete(document.getElementById('user_inputnumber'));
  // autocomplete.addListener('place_changed', function() {

  //   var place = autocomplete.getPlace();
  //   console.log(place.geometry.location.lat())
  //   console.log(place.geometry.location.lng())
  //   creatingAMAp(place.geometry.location.lat(), place.geometry.location.lng())
  // })
  submit_Button.addEventListener('click', function(){

    userInput.push(document.getElementById('user_inputnumber').value);
    userInput.push(document.getElementById('user_inputstreet').value);
    userInput.push(document.getElementById('user_inputcounty').value);
    userInput.push(document.getElementById('user_inputcountry').value)

    correctuserinput(userInput);
  })
};

window.addEventListener('load', app);

// https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyCdjgJXbfY7yxD-Zqq7r2gaCi-0M33RNLQ

