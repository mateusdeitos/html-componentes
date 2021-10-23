const Campo = require("./campo");

function Totalizador(attributes) {
	Campo.call(this, "<div>");
	this
		.addAttributes(attributes)
		.addClass("content-totais");

	this.isMultiplasLinhas = function () {
		this.addClass("multiple-lines");
		return this;
	}

	this.withHoverEffect = function () {
		this.addClass("hover-effect");
		return this;
	}

	this.addItem = function (Item) {
		return this.children(Item);
	}
}

Totalizador.Item = function (label, valor, attributes) {
	Campo.call(this, "<div>");
	this.addAttributes(attributes);
	this.addClass("total");

	this.children([
		new Campo("<h4>").html(label),
		new Campo("<div>").html(valor),
	]);
}

// Como usar

var totalizador = new Totalizador();

totalizador.addItem(new Totalizador.Item("Total", "R$ 100,00"));
totalizador.addItem(new Totalizador.Item("Total-2", "R$ 100,00"));

totalizador.appendTo($("body"));

module.exports = Totalizador;
