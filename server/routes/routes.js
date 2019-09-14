module.exports = (app) => {
    const controller = require('../controllers/controller.js');

    app.get('/api/users', controller.getAllUsers);
    app.get('/', controller.getHome);
    app.get('/api/getUser', controller.getUser);
    app.post('/api/createUser', controller.createUser);
    app.post('/api/deleteUser', controller.deleteUser);
};
