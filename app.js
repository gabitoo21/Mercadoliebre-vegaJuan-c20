const express = require("express")
const app = express()
const path = require("path")
const port = 2020;

app.use(express.static("public"))

app.get("/", (req,res) => res.sendFile(path.join(__dirname,"views","home.html")));

app.listen(port, () => console.log("server runing in: ", port))