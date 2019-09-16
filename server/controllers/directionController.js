import Transaction from '../models/transactionModel.js'
import User from '../models/userModel.js'
var request = require('request');

exports.getAddresses = (req, res) => {
    Transaction.find({}, (err, transactions) => {
        var tMap = new Map();
        var dMap = new Map();

        transactions.forEach(function(transaction) {
            tMap.set(transaction.userID, transaction);
        });

        for (const [userID, value] of tMap.entries()) {
            let promise = User.findById(userID, (err, user) => {
                if (err) {
                    res.send(err);
                }
                dMap.set(userID, user.street_addr + ", " + user.city + ", " + user.state + ", " + user.country);
            }).exec();

            promise.then(function () {
                res.send(dMap);
            });

        }
    });
}

exports.getDirections = (req, res) => {
    res.send("HELLO");
}

exports.getGoogleDirs = (req, res) => {
    request.get("https://maps.googleapis.com/maps/api/directions/json?"
                + "origin=Boston,MA&destination=Medford,MA"
                + "&waypoints=Some Addr"
                + "&key=", (err, response, body) => {
        if (err) {
            return next(err);
        }
        res.send(body);
    });
}