
// var  user_input = null;
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
  console.log(information.results[0].geometry.location);
  // getTheInforamationHeld(information);
};





  var list = document.getElementById("website-information");
  console.log(list);
  li = document.createElement("LI")
  li.innerText = "something" + website.formatted_data.CreationDate;
  list.appendChild(li);

}


var urlBuilder = function(array){
  var joinedinput = "";
  array.forEach(function(element){
    //element.split(' ').join('+')
    element = element + ",+";
    joinedinput = joinedinput + element;
  })

  console.log(joinedinput);
  joinedinput = joinedinput.slice(0, -1);
  console.log(joinedinput);

  var url = "https://maps.googleapis.com/maps/api/geocode/json?address="+ joinedinput +"&key=AIzaSyCdjgJXbfY7yxD-Zqq7r2gaCi-0M33RNLQ";
  console.log(url);
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
  user_inputnumber.setAttribute("value", "15");
  user_inputnumber.setAttribute("ID", 'user_inputnumber');

  var user_inputStreet = document.createElement("INPUT");
  user_inputStreet.setAttribute("type", "text");
  user_inputStreet.setAttribute("value", "grampian");
  user_inputStreet.setAttribute("ID", 'user_inputstreet');

  var user_inputCounty = document.createElement("INPUT");
  user_inputCounty.setAttribute("type", "text");
  user_inputCounty.setAttribute("value", "fife");
  user_inputCounty.setAttribute("ID", 'user_inputcounty');

  var user_inputCountry = document.createElement("INPUT");
  user_inputCountry.setAttribute("type", "text");
  user_inputCountry.setAttribute("value", "uk");
  user_inputCountry.setAttribute("ID", 'user_inputcountry');


  submit_Button = document.createElement('button');

  search.appendChild(user_inputnumber);
  search.appendChild(user_inputStreet);
  search.appendChild(user_inputCounty);
  search.appendChild(user_inputCountry);
  search.appendChild(submit_Button);

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

