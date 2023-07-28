const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const todoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

module.exports = new mongoose.model("Todo", todoSchema);
