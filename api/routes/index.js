const router = require('express').Router()
const productRouter = require('./product')

router.get('/', (_, res) => res.json({ message: 'Connected !' }))
router.use('/products', productRouter)

module.exports = router