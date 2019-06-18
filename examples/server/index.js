"use strict";

const path = require('path');
const express = require('express');
const app = express();

// app.use((req, res, next) => { // To avoid 304
//     if (require.main !== module) { // No CSP when running it manually
//         req.headers['if-none-match'] = 'no-match-for-this';
//         res.set('Content-Security-Policy', "default-src 'self'"); // CSP set
//     }
//     next();
// });
app.use("/", express.static(path.join(__dirname, "static")));

app.listen(8002, () => {
    console.log("Dummy Listening in 8002");
});
