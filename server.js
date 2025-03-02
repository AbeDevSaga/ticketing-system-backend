const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const ticketRoutes = require("./routes/ticketRoutes");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

// app.use((req, res, next) => {
//   console.log(`${req.method} request made to: ${req.url}`); 
//   next(); 
// });

app.use("/api/auth", authRoutes);
app.use("/api", ticketRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
