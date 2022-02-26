var express = require("express");
var router = express.Router();
var Document = require("../models/DocumentModel");

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Examen" });
});
router.get("/list", async (req, res, next) => {
    try {
        let documents = await Document.find({});
        res.render("list.twig", { documents: documents });
    } catch (err) {
        console.log(err);
        res.status(400).json({ msg: "un erreur est survenue" });
    }
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

router.put("/documents/:id", async (req, res, next) => {
    try {
        let id = req.params.id;
        const updatedDocument = Document.findByIdAndUpdate(
            { id },
            { ...req.body }
        );
        res.status(200).json({ msg: "success", data: updatedDocument });
    } catch (err) {
        trhow;
    }
});

router.put("/documents");

module.exports = router;
