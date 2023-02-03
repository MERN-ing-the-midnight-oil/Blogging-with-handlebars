const router = require("express").Router();
const { Comments } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", async (req, res) => {
	console.log("posting a comment, about to try here is req.body:", req.body);
	try {
		const newComment = await Comments.create({
			...req.body,
			user_id: req.session.user.id,
		});
		console.log("! ! ! This is the newComment", newComment);
		res.json({ ok: true });
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});
module.exports = router;
