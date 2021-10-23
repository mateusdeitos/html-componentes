const Table = require('./table');

function TableComBordas(attributes) {
	Table.call(this, attributes);
	this.addClass("table-bordered");
}

module.exports = TableComBordas;
