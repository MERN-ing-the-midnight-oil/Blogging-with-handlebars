const router = require("express").Router();
const homeRoutes = require("./homeRoutes"); //refers to the local file path
// const apiRoutes = require("./api"); //refers to the local file path
router.use("/", homeRoutes); //gives homeRoutes to the front end URL at "/"
// router.use("/api", apiRoutes); // gives files in the api subfolder  to the front facing URL at "/api" those files include userRoutes and blogRoutes
module.exports = router;
