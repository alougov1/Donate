import Transaction from '../models/transactionModel.js'
import User from "../models/userModel";

exports.createTransaction = (req, res) => {
    const newT = new Transaction(req.body);

    newT.save((err, transaction) => {
        if (err) {
            res.send(err);
        }

        res.send(transaction);
    });
}

exports.getTransactions = (req, res) => {
    Transaction.find({}, (err, transactions) => {
        var tMap = {};

        transactions.forEach(function(transaction) {
            tMap[transaction._id] = transaction;
        });

        res.send(tMap);

    });
}

exports.deleteTransaction = (req, res) => {
    Transaction.deleteOne({id: req.body._id}, (err, transaction) => {
        if (err) {
            res.send(err);
        }

        res.send(transaction);
    });
}