'use strict';

// Create variable "url" containing the address to our joke
var url = 'http://api.icndb.com/jokes/random';

// Listening to the button with a random joke
var button = document.getElementById('get-joke');
button.addEventListener('click', function () {
    getJoke();
});

// For the variable paragraph, we will assign the DOM element of the paragraph, which is responsible for displaying the wit
var paragraph = document.getElementById('joke');

// Implementation function getJoke
function getJoke() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', function () {
        var response = JSON.parse(xhr.response);
        paragraph.innerHTML = response.value.joke;
    });
    xhr.send();
}

// Listening for a response from the server
var response = JSON.parse(xhr.response);