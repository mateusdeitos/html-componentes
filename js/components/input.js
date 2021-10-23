const Campo = require('./campo');

function Input(attributes) {
	Campo.call(this, "<input>");
	this.addAttributes(attributes);

	this.setId = function (id) {
		this.addAttributes({ id });
		return this;
	};

	this.setValue = function (value) {
		this.addAttributes({ value });
		return this;
	};
}

module.exports = Input;
