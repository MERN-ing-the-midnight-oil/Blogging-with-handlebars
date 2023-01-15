const router = require("express").Router();

const apiRoutes = require("./api");
const pageRoutes = require("./pageRoutes");

router.use("/api", apiRoutes); //equivalent to localhost3001/api/
router.use("/", pageRoutes); //equivalent to localhost3001/

module.exports = router;
