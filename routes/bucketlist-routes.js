const router = require("express").Router();
const bucketlistController = require('../controllers/bucketlist-controller.js');

router.route('/')
.post(bucketlistController.add)

router.route('/')
.get(bucketlistController.findAllBucketlist)

router.route('/:id')
.delete(bucketlistController.deleteItem)

router.route('/')
.delete(bucketlistController.deleteAll)

module.exports = router;