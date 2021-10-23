const { expect, it, describe } = require("@jest/globals")
const Input = require('./input')

describe('Testes render', () => {
	it('render sem nada', () => {
		var input = new Input();
		expect(input.getHtml()).toBe("<input>");
	});

	it('render completo', () => {
		var input = new Input({ id: "id-input", value: "valor-input", maxlength: 10 }).addClass(["input", "form-control"]);
		expect(input.getHtml()).toBe("<input id=\"id-input\" value=\"valor-input\" maxlength=\"10\" class=\"input form-control\">");

		input.setAttribute("type", "number");
		expect(input.getHtml()).toBe("<input id=\"id-input\" value=\"valor-input\" maxlength=\"10\" class=\"input form-control\" type=\"number\">");

		input.setAttribute("type", "text");
		expect(input.getHtml()).toBe("<input id=\"id-input\" value=\"valor-input\" maxlength=\"10\" class=\"input form-control\" type=\"text\">");
	});
})
