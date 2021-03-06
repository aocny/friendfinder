// Dependencies
// =============================================================
var express = require("express");
var path = require("path");


var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000
app.use(express.static("public"))
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
