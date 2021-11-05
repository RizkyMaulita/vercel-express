const router = require('express').Router()
const { PostController } = require('../controllers')

router.get('/', PostController.findAllPost)

module.exports = router