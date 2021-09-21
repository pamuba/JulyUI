const express = require('express');
const app = express();
const todoRoutes = require('./routes/todo.routes')
const mongodb = require("./mongodb/mongodb.connect")

app.use(express.json())
app.use("/todos", todoRoutes)
mongodb.connect();

app.get("/", (req, res) => {
    res.json("Hello World")
});

// app.listen(3000, ()=>{
//     console.log("Server is running!")
// })

module.exports = app;