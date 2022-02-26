var mongoose = require("mongoose");

const DocumentSchema = new mongoose.Schema({
    titre: "string",
    description: "string",
    format: "string",
});

module.exports = Document = mongoose.model("document", DocumentSchema);
