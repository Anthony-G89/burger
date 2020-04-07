const express = require("express");
const router = express.Router();

const burgers = require("../models/burger");

router.get("/", (req, res) => {
    burgers.all(results => {

        res.render("index", {
            burgers: results
        });
    });
});

router.post("/api/burgers", (req, res) => {
    burgers.create([
        "burger_name", "devoured"
    ], [
        req.body.burgerName, false
    ], function (results) {
        res.json({ id: results.insertId });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    const condition = "id =" + req.params.id;

    burgers.update({
        devoured: req.body.devoured
    }, condition, function (results) {
        if (results.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", (req, res) => {
    const condition = "id =" + req.params.id;

    burgers.delete(condition, function (results) {
        if (results.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;

