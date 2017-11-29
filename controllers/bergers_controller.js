var express = require("express");
var router = express.Router();
var berger = require("../models/berger.js");

router.get("/", function(req, res){
	res.redirect("/bergers");
});

router.get("/bergers", function(req, res){
	berger.all(function(bergerData) {
		res.render("index", {berger_data: bergerData});
	});
});

router.post("/bergers/create", function(req, res) {
	berger.create(req.body.berger_nom, function(result){
		console.log(result);
		res.redirect("/");
	});
});

router.put("/bergers/update", function(req, res) {
	var condition = "id = " + req.params.id;
	berger.update(req.body.berger_id, function(result) {
		console.log(result);
		res.redirect("/");
	});
});

module.exports = router;