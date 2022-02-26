var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Examen" });
});

router.post("/document", (req, res, next) => {
    console.log(req.body);
    res.send("hello world");
});

module.exports = router;
