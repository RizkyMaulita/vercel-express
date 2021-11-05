const router = require('express').Router()
const { ProductController } = require('../controllers')

router.get('/', ProductController.findAllProducts)
router.post('/', ProductController.insertOneProduct)

module.exports = router