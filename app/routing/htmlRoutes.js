// Add one of these for each page (tables, reserve, and view) and JSON
var path = require ("path")

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
 

module.exports = function(app) {
}