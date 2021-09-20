const routes = require('express').Router();
const cartController=require('./controllers/cartController')


routes.get('/getItem/:user',cartController.getItems)
routes.get('/addToCart/:username/:name',cartController.addToCart)
routes.get('/delete/:username',cartController.buy)



module.exports = routes;