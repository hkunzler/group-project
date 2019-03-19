const express = require('express')
const app = express()
const mongoose = requre('mongoose')
const morgan = requre('morgan')


app.use(express.json())
app.use(morgan('dev'))


app.use("/" , require ('/routes/'))

mongoose.connect("mongodb://")