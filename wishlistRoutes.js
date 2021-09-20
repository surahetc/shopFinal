const routes = require('express').Router();
const wishlistController=require('./controllers/wishlistController')


routes.get('/getItem/:user',wishlistController.getItems)
routes.get('/addTowishlist/:username/:name',wishlistController.addTowishlist)
routes.get('/delete/:username',wishlistController.buy)




module.exports = routes;



