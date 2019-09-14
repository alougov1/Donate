import User from '../models/userModel.js';

exports.getHome = (req, res) => {
    res.send("this should be the home");
};

exports.getUser = (req, res) => {
    User.findById(req.query.id, (err, user) => {
        if (err) {
            res.send(err);
        }

        res.send(user);
    });
};

exports.getAllUsers = (req, res) => {
    User.find({}, (err, users) => {
        var userMap = {};

        users.forEach(function(user) {
          userMap[user._id] = user;
        });

        res.send(userMap);

    });
};



exports.createUser = (req, res) => {
    // const newUser = new User(req.body);
    console.log(req.body);
    const newUser = new User(req.body);

    newUser.save((err, user) => {
        if (err) {
            res.send(err);
        }

        res.send(user);
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
    console.log(req.body);
    User.deleteOne({id: req.body._id}, (err, user) => {
        if (err) {
            res.send(err);
        }

        res.send(user);
    });
};

