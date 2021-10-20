
function Campo(tag, _config) {
	this.config = $.extend({
		class: [],
		attr: {},
	}, _config);

	this.tag = tag;

	var parseClasses = function (classes) {
		if (Array.isArray(classes)) {
			if (!classes.length) return null;
			return classes.join(" ");
		}

		return classes;
	};

	var parseAttributes = function (attributes) {
		if (!attributes) return {};

		if (typeof attributes == "object" && !Array.isArray(attributes)) {
			return attributes;
		}

		return {};
	};

	this.$ = $(this.tag, {
		class: parseClasses(this.config.class),
		attr: parseAttributes(this.config.attr),
	});

	this.render = function () {
		return this.$.prop("outerHTML");
	};

	this.setAttribute = function (key, value) {
		if (!key) {
			return this;
		}

		if ([undefined, null, ""].indexOf(value) > -1) {
			value = null;
		}

		this.$.attr(key, value);

		return this;
	};

	this.addClass = function (_class) {
		this.$.addClass(_class);
	}

	this.removeClass = function (_class) {
		this.$.removeClass();
	}

	this.setClasses = function (classes) {
		var _classes = parseClasses(classes);
		this.addClass(_classes);

		return this;
	};

	this.setAttributes = function (attributes) {
		var attr = parseAttributes(attributes);
		Object.keys(attr).forEach(function (key) {
			this.setAttribute(key, attr[key]);
		}.bind(this));
	};

	return this;
}

Campo.blankSpace = "&nbsp;";

module.exports = Campo;

