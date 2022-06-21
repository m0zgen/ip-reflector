const express = require('express')
const axios = require('axios')
const url = require('url');

// App Init
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const port = process.env.PORT || "8000";

app.get('/reflect', function(req, res){
    // curl http://127.0.0.1:8000/\?ip=54.38.158.34

    var data = []
    var ip = req.query.ip;
    console.log(ip);

    axios.get(`http://ip-api.com/json/${ip}`).then(resp => {
        // console.log(resp.data);
        data = resp.data;
        console.log(data)
        // res.send('Response send to client::'+ ip);
        res.status(200).json(data)
    });

});

app.get('/', function(req, res){
    // curl http://127.0.0.1:8000/\?ip=54.38.158.34

    res.send(`Welcome to IP Reflector. `)

});


app.listen(port, () => console.log(`Server started at port: ${port}!`));




