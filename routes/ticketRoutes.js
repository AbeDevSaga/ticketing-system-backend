const express = require("express");
const { createTicket, getTickets, updateTicket } = require("../controllers/ticketController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/tickets", authMiddleware(["user"]), createTicket);
router.get("/tickets", authMiddleware(["user", "admin"]), getTickets);
router.put("/tickets/:id", authMiddleware(["admin"]), updateTicket);

module.exports = router;