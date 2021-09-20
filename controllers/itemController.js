const mongoose=require('mongoose');
const {item}=require('../models/item');

module.exports.getItems= (req,res)=>
{
     item.find({}).then(items=>
        {
            res.send(items)
        }).catch(error=>{
            if(error)
                res.status(500).send("Error in collecting documents");
        })
}


