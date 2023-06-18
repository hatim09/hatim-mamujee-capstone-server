const router = require("express").Router();
const bucketlistController = require('../controllers/bucketlist-controller.js');

router.route('/')
.post(bucketlistController.add)

module.exports = router;