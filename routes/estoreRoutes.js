const express = require('express')
const estoreRouter = express.Router()
const Products = require('../models/product.js')

estoreRouter.post('/', (req, res, next) => {
    const newProduct = new Products(req.body)
    newProduct.save((err, newSavedProduct) => {
        if (err) {
            return res.status(500).send(err)
        }
        return res.status(201).send(newSavedProduct)
    })
})
estoreRouter.get("/" , (req, res) => {
    Products.find((err, products) => {
        if (err){
            res.status(500)
            return res.send(err)
        }
        console.log('products')
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