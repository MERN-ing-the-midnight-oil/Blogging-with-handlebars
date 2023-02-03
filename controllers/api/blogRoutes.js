const router = require("express").Router();
const { Blogs } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
	try {
		const newBlogs = await Blogs.create({
			...req.body,
			user_id: req.session.user_id, //user_id is what the session knows the user ID as.
		});
		res.json({ ok: true });
	} catch (err) {
		res.status(400).json(err);
	}
});

module.exports = router;
