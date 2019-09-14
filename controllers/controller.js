import mongoose from 'mongoose';
import UserModel from '../models/userModel.js';

var User = UserModel;

exports.getUser = (req, res) => {
    user.findById(req.params.id, (err, note) => {
        if (err) {
            res.send(err);
        }

        res.json(user);
    });
};

exports.getAllUsers = (req, res) => {
    user.find({}, (err, users) => {
        if (err) {
            res.send(err);
        }

        res.json(users);
    });
};

exports.createUser = (req, res) => {
    const newUser = new user(req.body);

    newUser.save((err, user) => {
        if (err) {
            res.send(err);
        }

        res.json(user);
    });
};

// exports.updateNote = (req, res) => {
//     note.findOneAndUpdate({
//         _id: req.params.noteId
//     }, req.body,
//         (err, note) => {
//             if (err) {
//                 res.send(err);
//             }
//
//             res.json(note);
//         });
// };

exports.deleteUser = (req, res) => {
    note.remove({
        _id: req.params.userId
    }, (err) => {
        if (err) {
            res.send(err);
        }

        res.json({
            message: `user ${req.params.userId} successfully deleted`
        });
    });
};
