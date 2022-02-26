var mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
    titre: "string",
    description: "string",
    format: "string",
});

const Document = mongoose.model("Document", documentSchema);
module.exports = {
    Document,
};
