const express = require('express')
const estoreRouter = express.Router()
const Products = require('../models/product.js')

estoreRouter.get("/" , (req, res) => {
    Products.find((err, products) => {
        if (err){
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(products)
    })
})

estoreRouter.get("/:_id" , (req, res) =>{

    Products.findOne({_id: req.params._id}, (err, foundProduct) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(foundProduct)
    })
})

module.exports = estoreRouter