
const express = require('express');
const app = express();
const port =  process.env.PORT || 3001;

const bodyParser = require('body-parser');

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({extended:false}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', function(req, res) {
    console.log("started");
    res.sendFile('index.html' , { root : __dirname});
})


app.listen(port, () => console.log(`PortfolioD3Visuals listening on port ${port}!`))