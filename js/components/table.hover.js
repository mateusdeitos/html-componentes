const Table = require('./table');

function TableHover(attributes) {
	Table.call(this, attributes);
	this.addClass("table-hover");
}

module.exports = TableHover;
