var express = require('express');
var bodyParser = require('body-parser')

var fs = require('fs')

var app = express();

app.use(express.json())

app.use("/", express.static('public'))

app.get("/", (req, res) => {
    res.send("Yo dog!")
})

app.post("/join", (req, res) => {
    console.log(req.body)

    let name = req.body.name;
    let email = req.body.email;
    let cover = req.body.cover;

    if(!name || !email || !cover){
        res.send({type: "danger", message:"<strong>Kaikki</strong> tiedot ovat vaadittuja"})
    }
    else{

        fs.writeFile("./data/" + Math.floor(new Date() / 1000) + ".json", JSON.stringify({name: name, email: email, cover: cover}), (err) => {
            res.send({type: "success", message:"<strong>Loistavaa!</strong> Joukkomme kasvavat kuin e^x konsanaan"})
        })

    }
    
})



app.listen(3000, function () {
    console.log('Dev app listening on port 3000!');
});