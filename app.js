const express = require('express')
const logger = require('morgan')
const cors = require('cors')
require('dotenv').config()

const authRouter = require("./routes/api/auth")

const transactionRouter = require("./routes/api/transaction")
const hotelRouter = require("./routes/api/hotel")
const roomRouter = require("./routes/api/room")

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use(express.json({ limit: 10000 }))

app.use("/api/v1/auth", authRouter)
app.use('/api/v1/hotel', hotelRouter)
app.use('/api/v1/room', roomRouter)

app.use('/api/v1/transaction', transactionRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err
  res.status(status).json({ message })
})

module.exports = app
