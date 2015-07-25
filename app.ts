import hello = require('./hello');
import $ = require('jquery');

$(() => {
	$('body').append(hello('John'));
});

