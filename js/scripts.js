var url = 'http://api.icndb.com/jokes/random';
var button = document.getElementById('get-joke');

button.addEventListener('click', function() { 
    getJoke();    
});

getJoke();

function getJoke() {
    var xhr = new XMLHttpRequest();
    var paragraph = document.getElementById('joke');    
    
    xhr.open('GET', url);
    xhr.addEventListener('load', function() {
        var response = JSON.parse(xhr.response);
        paragraph.innerHTML = response.value.joke;
    });
    xhr.send();
}