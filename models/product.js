const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    itemName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imgURL: String,
    price: {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model("Product", productSchema)