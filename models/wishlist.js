const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
    username: {type: String},items:[{name:{type: String}}]
            
            
})

module.exports = wishlist = mongoose.model('wishlist',wishlistSchema);