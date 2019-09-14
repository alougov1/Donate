import user from '../controllers/controller';
var express = require('express')
var app = express()
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

app.get('/', function (req, res) {
  res.send('Base Page');
})

app.get('/users', function (req, res) {
  res.send(user.getAllUsers);
})

export default app;
