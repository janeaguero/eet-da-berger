var orm = require("../config/orm.js");

var berger = {

	all: function(cb) {
		orm.all("bergers", function(res) {
			cb(res);
		});
	},

	create: function(name, cb) {
		orm.create("bergers", [
			"berger_nom", "devoured"
		], [
			name, false
		], cb);
	},

	update: function(id, cb) {
		var condition = "id=" + id;
		orm.update("bergers", {
			devoured: true
		}, condition, cb);
	}
};

module.exports = berger;