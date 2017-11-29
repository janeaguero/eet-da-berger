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

	berger.create( , function(result){

	});
});

router.put("/bergers/update", function(req, res) {
	var condition = "id = " + req.params.id;

	berger.update(, function(result) {

	})
});

module.exports = router;