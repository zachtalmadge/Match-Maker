const express = require('express')
const apiRoutes = express.Router()
const friends = require('../app/data/friends.json')

apiRoutes.get("/count", (req, res) => { // send number of friends to homepage
    res.json(friends.length)
})

apiRoutes.post('/newMatch', (req, res) => { // send matched friend to survey page
    sendMatchedFriend(req, res)
})

function sendMatchedFriend(req, res){
    let userScores = req.body // store incoming JSON
    let arr = []
    for(i = 0; i < friends.length; i++){ // loop through friends
        let totalDiff = 0;
        for(j = 0; j < 10; j++){ // loop through survey scores
            totalDiff += Math.abs(userScores[j] - friends[i].scores[j])
        }
        //terminate early if totalDiff is 0 (answers are exact)
        if (totalDiff === 0) return res.json(friends[i]) 
        // store the totalDiff and friends name in an array
        arr.push([totalDiff, friends[i].name]) 
    }
    // sort the array so that friend with smallest totalDiff is first
    let sort = arr.sort((a,b) => a[0] - b[0]) 
    let match = sort[0][1]

    for(people of friends) { //loop through friends until first friend in sort array is found
        if (match === people.name) return res.json(people)
    }
}

module.exports = apiRoutes