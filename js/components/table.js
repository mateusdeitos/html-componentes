const Campo = require('./campo');

function Table(attributes) {
	Campo.call(this, "<table>");
	this.addClass("table");
	this.addAttributes(attributes);

	this.addTHead = function (TableTHead) {
		this.prepend(TableTHead);
		return this;
	}

	this.addTBody = function (TableTBody) {
		this.append(TableTBody);
		return this;
	}
}

Table.THead = function (children) {
	Campo.call(this, "<thead>");
	this.append(children);

	this.addRow = function (TableRow) {
		this.append(TableRow);
		return this;
	}
}

Table.Th = function (children) {
	Campo.call(this, "<th>");
	this.append(children);
}

Table.TBody = function (children) {
	Campo.call(this, "<tbody>");
	this.append(children);

	this.addRow = function (TableRow) {
		this.append(TableRow);
		return this;
	}
}

Table.Tr = function (children) {
	Campo.call(this, "<tr>");
	this.append(children);
	this.addClass('tr');

	this.addCell = function (TableCell) {
		this.append(TableCell);
		return this;
	}

	this.addCells = function (TableCells) {
		this.append(TableCells);
		return this;
	}
}

Table.Td = function (children) {
	Campo.call(this, "<td>");
	this.append(children);
}

// Como usar

var pessoas = [
	{
		nome: "João",
		sobrenome: "Silva",
		idade: "20"
	},
	{
		nome: "Maria",
		sobrenome: "Santos",
		idade: "25"
	},
];

// Forma 1:

var table = new Table({ id: "table-teste" });
var tbody = new Table.TBody();
var thead = new Table.THead();

var nomes = Object.keys(pessoas[0]).map(key => new Table.Th(key.toUpperCase()));

thead
	.addRow(new Table.Tr(nomes))
	.appendTo(table);

pessoas.forEach(pessoa => {
	var Row = new Table.Tr()
		.setAttribute('data-id', pessoa.nome)
		.onClick(() => console.log(pessoa));

	Row.addCell(new Table.Td(pessoa.nome));
	Row.addCell(new Table.Td(pessoa.sobrenome));
	Row.addCell(new Table.Td(pessoa.idade));

	tbody.addRow(Row);
})

tbody.appendTo(table);

// table.appendTo($("body"));

// Forma 2:

new Table({ id: "table-teste-2" })
	.addTHead(
		new Table.THead(
			new Table.Tr(nomes)
		)
	)
	.addTBody(
		new Table.TBody(
			pessoas.map(pessoa => new Table.Tr()
				.setAttribute('data-id', pessoa.nome)
				.onClick(() => console.log(pessoa))
				.addCell(new Table.Td(pessoa.nome))
				.addCell(new Table.Td(pessoa.sobrenome))
				.addCell(new Table.Td(pessoa.idade))
			)
		)
	).appendTo($("body"));


module.exports = Table;
