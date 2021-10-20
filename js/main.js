const Input = require('./components/input');
const $body = $('body');

var $input = new Input("teste", 123, {}, ['form-control']).TypeNumber();
var $input2 = new Input("teste2", 123, {}, ['form-control']).TypeText();
$body.append([$input.render(), $input2.render()]);

