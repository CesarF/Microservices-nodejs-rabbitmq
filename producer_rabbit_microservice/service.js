var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser"),
    methodOverride = require("method-override");

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models and Controllers
var dataCtrl = require('./controllers/data');

// API routers
var data = express.Router();

data.route('/data')
	.post(dataCtrl.submitdata)

app.use('/', data);

// Start Server
app.listen(3001, function(){
	console.log("Server runing on http://localhost:3001");
})
