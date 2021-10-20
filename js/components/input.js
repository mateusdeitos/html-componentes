const Campo = require('./campo');

function Input(id, value, attributes, classes) {
	attributes = attributes || {};
	attributes.id = id;
	attributes.value = value;

	Campo.call(this, "<input>", {
		attr: attributes || {},
		class: classes || []
	});

	this.TypeNumber = function () {
		this.setAttribute("type", "number");
		return this;
	};
	this.TypeText = function () {
		this.setAttribute("type", "text");
		return this;
	};
}

module.exports = Input;
