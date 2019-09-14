module.exports = (app) => {
    const controller = require('../controllers/controller.js');

    app.get('/api/users', controller.getAllUsers);
    app.get('/', controller.getHome);
};
