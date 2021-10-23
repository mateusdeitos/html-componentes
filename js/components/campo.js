function Base(tag) {
	$.extend(this, $(tag));
}

function Events() {
	this.onClick = function (callback) {
		this.on("click", callback);
		return this;
	}

	this.offClick = function (callback) {
		this.off("click", callback);
		return this;
	}

	this.onChange = function (callback) {
		this.on("change", callback);
		return this;
	}

	this.onKeyDown = function (callback) {
		this.on("keydown", callback);
		return this;
	}

	this.onFocus = function (callback) {
		this.on("focus", callback);
		return this;
	}

	this.onBlur = function (callback) {
		this.on("blur", callback);
		return this;
	}
}
function Campo(tag) {
	Base.call(this, tag);
	Events.call(this);

	var parseAttributes = function (attributes) {
		if (!attributes) return {};

		if (typeof attributes == "object" && !Array.isArray(attributes)) {
			return attributes;
		}

		return {};
	};

	this.setAttribute = function (name, value) {
		this.attr(name, value);
		return this;
	}

	this.addAttributes = function (attributes) {
		this.attr(parseAttributes(attributes));
		return this;
	}

	this.children = function (children) {
		this.append(children);
		return this;
	}

	this.getHtml = function () {
		return this.prop("outerHTML");
	}

	return this;
}

Campo.blankSpace = "&nbsp;";

module.exports = Campo;

