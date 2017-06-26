var url = 'http://api.icndb.com/jokes/random';


var button = document.getElementById('get-joke');
button.addEventListener('click', function(){
  var paragraph = document.getElementById('joke');
	getJoke() {
  		var xhr = new XMLHttpRequest();
  		xhr.open('GET', url);
  		xhr.addEventListener('load', function(){
    		var response = JSON.parse(xhr.response);
    		paragraph.innerHTML = response.value.joke;
  		});
  	xhr.send();
	}

});