import user from '../controllers/controller';
var express = require('express')
var router = express.Router()

//
// export default (app) => {
//     app.route('/users')
//         .get(user.getAllUsers);
//       //  .post(notebook.createNote);
//
//     app.route('/users/:userId')
//         .get(user.getUser);
//         //.put(notebook.updateNote)
//       //  .delete(notebook.deleteNote);
//
//     app.route('/users/createUser/:userId')
//         .post(user.createUser);
// };


router.get('/', function (req, res) {
  res.send("This is /users");
})

module.exports = router;
