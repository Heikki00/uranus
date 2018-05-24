var express = require('express');
var app = express();

app.use(express.bodyParser())

app.use("/", express.static('public'))

app.get("/", (req, res) => {
    res.send("Yo dog!")
})

app.post("/join", (req, res) => {
    console.log(req)
    res.send("Copy that")
})



app.listen(3000, function () {
    console.log('Dev app listening on port 3000!');
});