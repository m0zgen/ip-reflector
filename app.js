const express = require('express')
const axios = require('axios')
const url = require('url');

// App Init
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const port = process.env.PORT || "8000";

// Reflection link
// Example usage:
// curl http://127.0.0.1:8000/\?ip=1.1.1.1
app.get('/reflect', function(req, res){
    
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

// Home page
app.get('/', function(req, res){
    res.send(`Welcome to IP Reflector. `)
});

// App runner
app.listen(port, () => console.log(`Server started at port: ${port}!`));




