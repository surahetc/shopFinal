const mongoose=require('mongoose');
const {item}=require('../models/item');







module.exports.addItem =  (req,res) => {
    var newItem = new item();

    newItem.name=req.body.name;
    newItem.imgSrc=req.body.imgSrc;
    newItem.price=req.body.price;
    try{
        newItem.save();
        res.send("Item saved")
    }
    catch
    {
        res.send("Item not saved")
    }

   
    console.log(req.body.name + "is added");
};
module.exports.updateItem = (req,res) => {
        item.findOneAndUpdate({name:req.body.name},{name:req.body.name,price:req.body.price},{new:true},(err,data)=>
        {
            if(err)
            {
                res.send("Error in updating")
            }
            res.send("Item updated")

        })

    };
   


module.exports.deleteItem = (req,res) => {
    item.deleteOne({name:req.body.name},err=>{
        if(err)
        res.send("Error")
        else
        res.send("Item deleted")
        

    })
};