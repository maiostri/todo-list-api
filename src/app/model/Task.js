const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    text: {
      type: String,
    },
    id: {
        type: String,
      }
  }
);

module.exports = mongoose.model("Task", TaskSchema);