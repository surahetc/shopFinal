const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    username: {type: String},items:[{name:{type: String}}]
            
            
})

module.exports = cart = mongoose.model('cart',cartSchema);