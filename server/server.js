const express = require("express");
require("dotenv").config();
const errorHandler = require("./middlewire/errorhandler");
const ConnectDB = require("./config/dbConnection");
ConnectDB();
const app = express();
const cors = require("cors");
app.use(cors()); // allow Vite frontend

const PORT = process.env.PORT || 5000;
app.use(express.json());

app.use("/", require("./Routers/notesRouter"));
app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`server is in http://localhost:${PORT}`)
})