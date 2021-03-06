module.exports = (app) => {
    const userController = require('../controllers/userController.js');
    const transactionController = require('../controllers/transactionController');
    const directionController = require('../controllers/directionController');

    // home route
    app.get('/', userController.getHome);

    // users routes
    app.get('/api/users', userController.getAllUsers);
    app.get('/api/getUser', userController.getUser);
    app.post('/api/createUser', userController.createUser);
    app.post('/api/deleteUser', userController.deleteUser);
    app.post('/api/deleteAll', userController.deleteAll);

    // transaction routes
    app.post('/api/createTransaction', transactionController.createTransaction);
    app.get('/api/transactions', transactionController.getTransactions);
    app.post('/api/deleteTransaction', transactionController.deleteTransaction);

    // get driving route
    app.get('/api/addresses', directionController.getAddresses);
    app.get('/api/directions', directionController.getDirections);
    app.get('/googleDirections', directionController.getGoogleDirs);

};
