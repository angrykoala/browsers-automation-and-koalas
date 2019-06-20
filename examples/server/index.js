"use strict";

const path = require('path');
const express = require('express');
const app = express();


app.use("/", express.static(path.join(__dirname, "static")));

app.get("/api/form", (req,res)=>{
    console.log(req.query)
    res.send(`${req.query.firstname} ${req.query.lastname}`)
})

app.listen(8002, () => {
    console.log("Dummy Listening in 8002");
});
