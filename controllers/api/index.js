const router = require("express").Router();
const userRoutes = require("./userRoutes");
const blogRoutes = require("./blogRoutes");
const commentsRoutes = require("./commentsRoutes");
router.use("/user", userRoutes); //url will be localhost3001/api/user
router.use("/blogs", blogRoutes); //url will be localhost3001/api/blogs
router.use("/comments", commentsRoutes);
module.exports = router;
