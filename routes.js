const routes = require('express').Router();
const adminController=require("./controllers/adminController")
const itemController=require("./controllers/itemController")
const userController=require("./controllers/userController")



routes.post('/admin/add',adminController.addItem );
routes.post('/admin/update',adminController.updateItem);
routes.post('/admin/delete',adminController.deleteItem);

routes.get("/products/items",itemController.getItems);

// routes.post("/login",userController.login)
// routes.post("/register",userController.register);



module.exports = routes;