const router = require('express').Router();
const usersController = require('../controllers/users-controller');
// const { authenticate } = require('../controllers/users-controller');

router.route('/signup')
.post(usersController.signup);

router.route('/login')
.post(usersController.login);

module.exports = router;