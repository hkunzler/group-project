const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    itemName: {
        type: String,
        required: true
    },
    itemType: {
        type: String,
        enum: ["hat", "shirt", "pants"],
        required: true
    },
    subType: {
        type: String,
        enum: ["shorts", "formal", "jeans", "button-up", "long-sleeve", "tee", "cap", "beanie"]
    },
    description: String,
    age: {
        type: String,
        enum: ["adult", "kid"]
    },
    gender: {
        type: String,
        enum: ["Male", "female"]
    },
    price: {
        type: Number,
        required: true
    },
    imgURL: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("Product", productSchema)