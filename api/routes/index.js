const router = require('express').Router()
const productRouter = require('./product')
const postRouter = require('./post')

router.get('/', (_, res) => res.json({ message: 'Connected !' }))
router.use('/products', productRouter)
router.use('/posts', postRouter)

module.exports = router