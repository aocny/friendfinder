var friends = require ("../data/friends.js")

module.exports = (function() {

app.get("/api/waitlist", function(req, res) {
    return res.json(waitData);
});

// Post a New Reservation
app.post("/api/reservations", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newreservation = req.body;
})
}
// add    logic for figuring out total difference
