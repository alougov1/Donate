import User from '../models/userModel.js';

exports.getHome = (req, res) => {
    res.send("this should be the home");
};

exports.getUser = (req, res) => {
    User.findById(req.params.id, (err, note) => {
        if (err) {
            res.send(err);
        }

        res.json(user);
    });
};

exports.getAllUsers = (req, res) => {
    res.send("Trying to get all users");
    // User.find({}, (err, users) => {
    //     var userMap = {};
    //
    //     users.forEach(function(user) {
    //       userMap[user._id] = user;
    //     });
    //
    //     res.send(userMap);
    //
    // });
};

exports.createUser = (req, res) => {
    const newUser = new User(req.body);

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
