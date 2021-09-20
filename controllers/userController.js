const mongoose=require('mongoose');
const user=require('../models/user');

// module.exports.login = (res,req)
// {

// }

module.exports.register = (res,req)=>
{
    console.log("Register");
    if(req.body.password!=req.body.passwordRepeat)
    res.send("Password not same");

    console.log(req.body.username);

    newUser=new user();
    newUser.username=req.body.username;
    newUser.password=req.body.password;
    newUser.save((err)=>{
        if(err)
        {
            res.send("User already exists")
        }
        else
        res.send("Registration done")
    })

}