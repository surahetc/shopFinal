const cors=require('cors')
const routes = require('./routes');
const express=require('express')
var bodyParser = require('body-parser');
var user =require( './models/user');
const mongoose=require('mongoose');
var jwt = require('jsonwebtoken');
const auth = require("./middleware/auth");
const cookieParser=require('cookie-parser');
const cartRoutes=require('./cartRoutes')
const wishlistRoutes=require('./wishlistRoutes')



mongoose.connect('mongodb+srv://surajhetc:simplilearn@cluster0.tutmx.mongodb.net/shop',{useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app= express();
const port = 5000;
app.use(bodyParser.json()); 
app.use(cors({
    origin:"*",
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
    credentials:true
}))
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(cookieParser());


app.use('/wishlist',wishlistRoutes)
app.use('/cart',cartRoutes)
app.use('/', routes);

app.get('/getUser',async (req,res)=>
{
    const token =req.cookies.token;
 

    if (!token) {
      return res.status(403).send("A token is required for authentication");
    }
    try {
      const decoded = await jwt.verify(token, "This is secret text");

      res.send(JSON.stringify(decoded.username))
    } catch (err) {
      return res.status(401).send("Invalid Token");
    }
   
 
    
    
    
})

app.post('/login',async (req,res)=>
{
    

     user.findOne({username:req.body.username,password:req.body.password},async (err,data)=>{
        if(err)
        {
            res.send("Wrong credentials")
        }
        else if(data)
        {
            const token=await jwt.sign({username:data.username},"This is secret text",{expiresIn: 120});

            
            
            res.cookie('token',token,{
                httpOnly:true
            })
            res.redirect("/products")
        }
        
        else
        {
          res.send("Error ");
        }
        
    })
})




app.post('/register',async (req,res)=>{

    

    if(req.body.password!=req.body.passwordRepeat)
    res.send("Password not same");



    newUser=new user();
    newUser.username=req.body.username;
    newUser.password=req.body.password;
    try
    {
        const save=await newUser.save();

    }
    catch(err)
    {
        if(err)
        {
            res.json({msg:'Error : The user is not saved'})
        }
    }
    const token = await jwt.sign({username:newUser.username},"This is secret text",{expiresIn: 120})
    // res.status(200).json(token);
    res.send("User registered")
    
    
});





app.listen(port, () => {
    console.log("Server running at ",port)
  })
