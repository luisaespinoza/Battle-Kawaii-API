
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
require('dotenv').config();

const port = process.env.PORT || 3001;
const app = express();

// middleware - JSON parsing
app.use(express.json()); // server will accepts json data
app.use(cors());

// middleware - API routes
app.use("/api/v1/games", routes.games);
app.use("/api/v1/auth", routes.auth);

// connection
app.listen(port, () => console.log(`Server is running on port ${port}`));
