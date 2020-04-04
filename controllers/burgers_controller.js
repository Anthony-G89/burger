const express = require("express");
const router = express.Router();

const burgers = require("../models/burger");

router.get("/", (req, res) => {

    burgers.all(results => {

        var object = {
            burger: results
        };
        res.render("index", object);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function (results) {
        res.json({ id: results.insertId });
    });
});

router.delete("/api/cats/:id", function (req, res) {
    const condition = "id =" + req.params.id;

    burger.delete(condition, function (results) {
        if (results.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

