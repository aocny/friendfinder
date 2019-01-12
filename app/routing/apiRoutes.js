var friends = require ("../data/friends.js")

module.exports = (function() {

// app.get("/api/friends", function(req, res) {
//     return res.json(friends);
// });

// Post a New Friend
app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var bestMatch = {
        name: "",
        photo: "",
        friendDifference: Infinity
    };

    var userData = req.body;
    var userScores = userData.scores;
    var totalDifference;

    
    for (var i = 0; i < friends.length; i++) { 
    var currentFriend = friends[i];
    totalDifference = 0;
    for (var j = 0; j < currentFriend.scores.length; j++){
    var currentFriendscore = currentFriend.scores[j];   
    var currentUserscore = userScores [j]; 
    totalDifference += Math.abs(parseInt (currentUserscore) - parseInt (currentFriendscore));
    } 
    if (totalDifference <= bestMatch.friendDifference){
        bestMatch.name=currentFriend.name;
        bestMatch.photo=currentFriend.photo;
        bestMatch.friendDifference=totalDifferences;
    }
    } 
    friends.push (userData);
    res.json (bestMatch);
});
});


