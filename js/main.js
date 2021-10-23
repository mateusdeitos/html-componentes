const Input = require('./components/input');
const Campo = require('./components/campo');
const Table = require('./components/table');
const Totalizador = require('./components/totalizador');
const $body = $('body');

var div = new Campo("<div>");
var input = new Input({ id: "teste2" })
	.addClass("form-control")
	.setAttribute("type", "text")
	.setAttribute("placeholder", "Digite algo aqui")
	.onKeyDown(e => {
		console.log(e.target.value)
	})

div
	.children(input)
	.appendTo($body);

