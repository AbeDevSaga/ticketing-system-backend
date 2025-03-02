const Ticket = require("../models/Ticket");

const createTicket = async (req, res) => {
  const { title, description } = req.body;

  try {
    const ticket = new Ticket({ title, description, createdBy: req.user.id });
    await ticket.save();
    res.status(201).json(ticket);
  } catch (err) {
    res.status(500).json({ message: "Error creating ticket" });
  }
};

const getTickets = async (req, res) => {
  try {
    const tickets = req.user.role === "admin"
      ? await Ticket.find().populate("createdBy", "username")
      : await Ticket.find({ createdBy: req.user.id }).populate("createdBy", "username");
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ message: "Error fetching tickets" });
  }
};

const updateTicket = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const ticket = await Ticket.findByIdAndUpdate(id, { status }, { new: true });
    res.json(ticket);
  } catch (err) {
    res.status(500).json({ message: "Error updating ticket" });
  }
};

module.exports = { createTicket, getTickets, updateTicket };