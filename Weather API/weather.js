Send_button = document.getElementById("send_place");
Place = document.getElementById("place");

apikey = "67f2150649fc4ef8873145241252308";
const response = await fetch('http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${Place}');
const users = await response.json();

users.forEach( function(post)  {

});