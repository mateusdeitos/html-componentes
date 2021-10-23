const Table = require('./table');

function TableHeaderFixo(attributes) {
	Table.call(this, attributes);
	this.addClass("sticky");
}

module.exports = TableHeaderFixo;
