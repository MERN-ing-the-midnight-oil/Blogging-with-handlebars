const router = require("express").Router();

const homeRoutes = require("./homeRoutes");
const apiRoutes = require("./apiRoutes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes); //same as localhost3001/api/
module.exports = router;
