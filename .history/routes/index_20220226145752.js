var express = require("express");
var router = express.Router();
var Document = require("../models/DocumentModel");

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Examen" });
});

router.post("/documents", async (req, res, next) => {
    try {
        let createdDocument = await Document.create({ ...req.body });
        res.status(200).json({
            msg: "document crée avec succés",
            data: createdDocument,
        });
    } catch (err) {
        throw err;
    }
});

module.exports = router;
