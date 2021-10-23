const { expect, it, describe } = require("@jest/globals")
const Campo = require('./campo')

describe('Testes render', () => {
	it('render sem config', () => {
		var campo = new Campo("<input>");
		expect(campo.getHtml()).toBe("<input>");
	});

	it('render com classes e attr null', () => {
		var campo = new Campo("<input>", { class: null, attr: null });
		expect(campo.getHtml()).toBe("<input>");
	});

	it('render com classes', () => {
		var campo = new Campo("<input>").addClass(["classe1", "classe2"]);
		expect(campo.getHtml()).toBe("<input class=\"classe1 classe2\">");

		var campo = new Campo("<input>").addClass(["classe1", "classe2"]);
		expect(campo.getHtml()).toBe("<input class=\"classe1 classe2\">");
	});

	it('render com attributes', () => {
		var campo = new Campo("<input>").addAttributes({ id: 123, type: "text" });
		expect(campo.getHtml()).toBe("<input id=\"123\" type=\"text\">");
	});
})

describe('Testes setAttribute', () => {
	it('deve setar o attribute', () => {
		var campo = new Campo("<input>");
		campo
			.setAttribute("type", "text")
			.setAttribute("value", 123);

		expect(campo.getHtml()).toBe("<input type=\"text\" value=\"123\">");
	});

	it('não deve setar attribute', () => {
		var campo = new Campo("<input>");
		campo
			.setAttribute(null, "text")
			.setAttribute("type", null)

		expect(campo.getHtml()).toBe("<input>");
	});
})

describe('Testes setClasses', () => {
	it('deve setar as classes', () => {
		var campo = new Campo("<input>");

		campo.addClass("form-control");
		campo.addClass(["input"]);
		expect(campo.getHtml()).toBe("<input class=\"form-control input\">");

		campo.addClass(["input", "form", "teste"]);
		expect(campo.getHtml()).toBe("<input class=\"form-control input form teste\">");

		campo.removeClass();
		campo.addClass(["form", "input"]);
		expect(campo.getHtml()).toBe("<input class=\"form input\">");
	});
})

describe('Testes setAttributes', () => {
	it('deve setar os attributes', () => {
		var campo = new Campo("<input>");

		campo.addAttributes({
			id: 123,
			value: 456,
			type: "text",
			"data-opa": "yes",
		});
		expect(campo.getHtml()).toBe("<input id=\"123\" value=\"456\" type=\"text\" data-opa=\"yes\">");

	});
})
