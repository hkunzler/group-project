const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')


app.use(express.json())
app.use(morgan('dev'))


app.use("/" , require ('./routes/estoreRoutes.js'))

mongoose.connect("mongodb://localhost:27017/products-db", {useNewUrlParser: true}, () => {
    console.log('[XD] connected to DB')
})

app.listen(7000, () => {
    console.log('[+] Server is running on Port 7000')
})