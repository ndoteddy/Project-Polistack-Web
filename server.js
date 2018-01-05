var dotenv = require('dotenv');
const myEnv = dotenv.config();
var express = require ('express'),
    app = express (),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require ('./api/models/normalModel'),
    bodyParser=require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
//const url = 'mongodb://localhost/signatures';
const url = 'mongodb://'+process.env.DB_USER+':'+process.env.DB_PASS+process.env.DB_URL;
console.log(url);
//====MONGOOSE CONNECT===//
mongoose.connect(url, function (err, db) {
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
        console.log('Connection established to', url);
    }
});
//==========================//


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route


app.listen(port);

app.use(function(req, res) {
    var allowedOrigins = ['http://127.0.0.1:3000', 'http://localhost:3000', 'http://127.0.0.1:8080', 'http://localhost:8080'];
    var origin = req.headers.origin;
    if(allowedOrigins.indexOf(origin) > -1){
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    res.status(404).send({url: req.originalUrl + ' not found'})
});





console.log('todo list RESTful API server started on: ' + port);