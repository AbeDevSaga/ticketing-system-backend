const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ["Open", "In Progress", "Closed"], default: "Open" },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Ticket", ticketSchema);