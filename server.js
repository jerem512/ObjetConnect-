var express = require("express");
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Particle = require('particle-api-js');
var particle = new Particle();
var token;

var server = require('http').createServer(app);
var io = require('socket.io')(server);
var myDevice = '250019000547363339343638';
var Devices = require('./models/device.js');
var promise = mongoose.connect('mongodb://localhost:27017/particle',{
    useMongoClient:true,
});

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use('/javaScript', express.static(__dirname + '/app/javascript'));
app.use('/controller', express.static(__dirname + '/app/controller'));
app.use('/views', express.static(__dirname + '/views'));
// app.use('/lib', express.static(__dirname + '/app/lib'));
// app.use('/css', express.static(__dirname + '/css'));



particle.login({username: 'ferro.gael@club-internet.fr', password: 'Esteban17'}).then(
    function(data){
        console.log('API call completed on promise resolve: ', data.body.access_token);
        passerDevice(data.body.access_token);
    },
    function(err) {
        console.log('API call completed on promise fail: ', err);
    }
);

function passerDevice(access_token){
    var devicesPr = particle.listDevices({ auth: access_token });
    devicesPr.then(
        function(devices){
            console.log('Devices: ', devices);
        },
        function(err) {
            console.log('List devices call failed: ', err);
        }
    );
}

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/led', function (req, res) {
    res.sendFile(__dirname + '/views/led.html');
});
app.get('/devices/:id', function(req,res){
    
    Devices.findOne({'_id':req.params.id},function(err,collection){
        if(err){
            console.log(err);
            return res.status(500);
        }
        else {
            res.send(collection);
        }
    });
});
app.get('/devices', function(req,res){

    Devices.find(function(err, collection) {
        if (err) {
            console.log(err);
            return res.send(500);
        } else {
            res.send(collection);
        }
    });
});
app.listen(8080);
console.log('serveur lancé');
