const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imgSrc:
    {
        type: String,
        required: true
    }
    ,
    price: {
        type: Number,
        required: true
    },
    date_added: {
        type: Date,
        default: Date.now
    },
});

const item = mongoose.model('item',itemSchema);
module.exports={itemSchema,item}