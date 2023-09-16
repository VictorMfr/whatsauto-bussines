// Importing Libraries
const express = require("express");

// Initializing express
const app = express();

const port = process.env.PORT || 3001;

// Setting Routes
app.get("/", (req, res) => {
    res.send("Server Started!")
})


// Starting Server
app.listen(port, () => console.log(`Server Started at ${port}`));