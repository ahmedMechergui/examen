var mongoose = require("mongoose");

const documenSchema = new mongoose.Schema({
    titre: "string",
    description: "string",
    format: "string",
});
