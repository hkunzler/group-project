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
    // res.send(req.query.gender)
    const {gender, age} = req.query
    // res.send(gender
    if(gender === 'Male' && age==="adult"){
        Products.find({"gender" : "Male", "age" : "adult"}, function (err, product){
            if (err) return res.send(err)
            return res.status(200).send(product)
        })
    
    }else{
         Products.find((err, products) => {
        if (err){
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(products)
        })
    }
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

estoreRouter.get("/", (req, res) => {
    res.send(req.query)
    // const {Male} = req.query
    // if(male){
    //     const maleObj = Products.filter(product => product.gender === Male)
    //     res.send(maleObj)
    // }
    
})
// estoreRouter.get("/female", (req, res) => {
//     const {female} = req.query
//     res.send(Products.find({gender: 'female'}, function(err, product){
//         if(err) return (err)
//     }))
// })
// estoreRouter.get("/kids", (req, res) => {
//     const {kids} = req.query
//     res.send(Products.find({age: 'kids'}, function(err, product){
//         if(err) return (err)
//     }))
// })

module.exports = estoreRouter