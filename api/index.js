const express = require("express")
const app = express()

app.use("/",(req,res) => {
    res.send("Server is running.");
});

port_number = process.env.PORT || 5000

app.listen(5000, console.log(`server running on port ${port_number}`));

