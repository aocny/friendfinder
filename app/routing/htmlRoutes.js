// Add one of these for each page (tables, reserve, and view) and JSON
var path = require ("path")



module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("survey.html")
    // res.sendFile("survey.html");

  });
}