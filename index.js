const express = require('express')
const app = express()
const router = require('./api/routes')
const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/', router)

app.listen(port, () => console.log(`App listening in port ${port}`))