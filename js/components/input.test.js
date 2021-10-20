const { expect, it, describe } = require("@jest/globals")
const Input = require('./input')

describe('Testes render', () => {
	it('render sem nada', () => {
		var input = new Input();
		expect(input.render()).toBe("<input>");
	});

	it('render completo', () => {
		var input = new Input("id-input", "valor-input", { maxlength: 10 }, ["form-control input"]);
		expect(input.render()).toBe("<input class=\"form-control input\" maxlength=\"10\" id=\"id-input\" value=\"valor-input\">");

		input.TypeNumber();
		expect(input.render()).toBe("<input class=\"form-control input\" maxlength=\"10\" id=\"id-input\" value=\"valor-input\" type=\"number\">");

		input.TypeText();
		expect(input.render()).toBe("<input class=\"form-control input\" maxlength=\"10\" id=\"id-input\" value=\"valor-input\" type=\"text\">");
	});
})
