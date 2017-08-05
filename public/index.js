
// var  user_input = null;

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
  console.log(information.formatted_data.CreationDate);
};


var urlBuilder = function(userInput){
  console.log(userInput.value + "something");

  url = "http://api.bulkwhoisapi.com/whoisAPI.php?domain="+userInput.value+"&token=usemeforfree"
  console.log(url);
  makeRequest(url, requestComplete);
};




var correctuserinput= function(userInput){
  if((userInput === null) || (userInput === "Search for website")){
    console.log("we have a problem");
    var search = document.getElementById("search-box");
    while (search.hasChildNodes()) {
      search.removeChild(search.lastChild);

    }    
    app()
  }
  else
  {
    urlBuilder(user_input);
  }
};




var app = function () {
  var search = document.getElementById("search-box");

  // var search = document.querySelector("#search-box");

  var user_input = document.createElement("INPUT");
  user_input.setAttribute("type", "text");
  user_input.setAttribute("value", "Search for website");
  user_input.setAttribute("ID", 'user_input');
  submit_Button = document.createElement('button');

  search.appendChild(user_input);
  search.appendChild(submit_Button);

  submit_Button.addEventListener('click', function(){
    correctuserinput(document.getElementById('user_input').value)
  })
};

window.addEventListener('load', app);
