const router = require("express").Router();

const blogRoutes = require("./blogsRoutes");

router.use("/blogs", blogRoutes); //give blogRoutes the path /blogs

module.exports = router;
