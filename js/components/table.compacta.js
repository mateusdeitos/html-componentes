const Table = require('./table');

function TableCompacta(attributes) {
	Table.call(this, attributes);
	this.addClass("table-condensed");
}

module.exports = TableCompacta;
