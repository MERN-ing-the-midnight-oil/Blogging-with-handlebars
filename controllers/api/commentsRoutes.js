const router = require("express").Router();
const { Comments } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
	try {
		const newComment = await Comments.create({
			...req.body,
			user_id: req.session.user.id,
		});
		res.json({ ok: true });
	} catch (err) {
		res.status(400).json(err);
	}
});
module.exports = router;
