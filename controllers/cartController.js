const user=require('../models/user')
const cart=require('../models/cart')
const {item}=require('../models/item')



module.exports.buy = (req,res)=>{
    console.log("IN DELETING")
    const {username}=req.params
    cart.deleteOne({username},(Err,data)=>
    {
        if(Err)
        {
            console.log("Error in buying")
        }
    })
}












module.exports.getItems = (req,res) => {
    console.log("GETTING ITEMS cart")
    cart.findOne({username:req.params.user},(err,data)=>
    {
        if(err)
        {
            res.status(400).send({
                message: 'This is an error!'
             })
        }
        else
        {
            if(!data)
            res.status(400).send(null)
            else
            {
                res.send(data.items)
            }
            
        }
    })
}


module.exports.addToCart = async (req,res) => 
{

    
    const {username,name}=req.params
    console.log(username,name)

    

    cart.findOne({username},(err,cartdata)=>
    {
        if(err)
        {
            console.log("Error ikn fi")
        }
        else if(!cartdata)
        {
            console.log("no such cart available")
            let newCart = new cart();
            newCart.username=username;
            newCart.items.push({name})
            newCart.save(err,result=>
                {
                    if(err)
                    {console.log("NOT Working")}
                    else
                    console.log("saved")
                })
        }

        else
        {
           var match=cartdata.items.filter(item=>item.name==name)
           if(match.length>0)
           {
               console.log("Already in cart")
           }
           else
           {
               console.log(name)
               cartdata.items.push({name})
               console.log("Trying hard to replace")
               cart.replaceOne({username},cartdata,(err,prev)=>
               {
                   console.log("In replacing")
                   if(err)
                   {
                       console.log("Error in saving the not already elemeent")
                   }
               })
           }
        }
    })
//     // var newCart = new cart();
//     // const {user:username,item}=req.params
//     // cart.findOne({username,item}).then(data=>{
//     //     if(data)
//     //     {
            
//     //     }
//     // }).catch(err=>
//     //     {
//     //         if(err)
//     //         {
//     //         newCart.username=username;
//     //         newCart.item=item;
//     //         newCart.save()
//     //         }
//     //     })}
// //     user.findOne({username},(err,user)=>
// //     {
// //         if(err)
// //         {
// //             console.log("USER NOT FOUND")
// //         }
// //         console.log(user)
// //         item.findOne({name},(err,itemData)=>
// //         {
// //             if(err)
// //         {
// //             console.log("ITEM NOT FOUND")
// //         }
// //         console.log(itemData)
// //         cart.findOne({username},(err,cartData)=>
// //         {
// //             if(err)
// //             {
// //                 var newCart=new cart()
// //                 newCart.username=username;
// //                 newCart.items=[...items,itemData]
// //                 console.log(newCart)
// //                 newCart.save();
// //             }
// //             else
// //             console.log("Item already added to cart")
// //         })
// //         }
// //         )


// //     })

// //     res.send(req.params)
}