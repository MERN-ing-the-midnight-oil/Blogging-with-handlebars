const router = require("express").Router();
const { Blogs } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
	console.log(`The NEW BLOG!!`);
	try {
		console.log(`The NEW BLOG in the TRY!!`);
		const newBlogs = await Blogs.create({
			...req.body,
			user_id: req.session.user_id, //user_id is what the session knows the user ID as.
		});
		console.log(`The NEW BLOG variable!!`, newBlogs);
		res.json({ ok: true });
		//res.status(200).json(newBlogs);
	} catch (err) {
		res.status(400).json(err);
	}
});

module.exports = router;
