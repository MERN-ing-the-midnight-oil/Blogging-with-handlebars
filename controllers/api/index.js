const router = require("express").Router();

const userRoutes = require("./userRoutes"); //refers to the js file userRoutes
const crudRoutes = require("./crudRoutes"); //refers to the js file crudRoutes

router.use("/users", userRoutes); //assigns the URL path /users to be the root of routes in the userRoutes js file
router.use("/crud", crudRoutes); //assigns the URL path /crud to be the root of routes in the crudRoutes js file

module.exports = router;
