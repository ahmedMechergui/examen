var express = require("express");
var router = express.Router();
var Document = require("../models/DocumentModel");

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Examen" });
});

router.post("/document", async (req, res, next) => {
    let createdDocument = await Document.create({ ...req.body });
    let mydocuments = await Document.find({});
    res.send("hello world");
});

module.exports = router;
