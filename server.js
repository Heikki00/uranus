var express = require('express');
var app = express();

app.use("/", express.static('public'))

app.get("/", (req, res) => {
    res.send("Yo dog!")
})

app.listen(3000, function () {
    console.log('Dev app listening on port 3000!');
});