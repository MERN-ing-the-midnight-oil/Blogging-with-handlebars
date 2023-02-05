//this file is the http request to the back end to POST a new comment
const router = require("express").Router();
const { Comments } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", async (req, res) => {
	console.log(
		"! ! ! this is commentsRoutes posting a comment, about to TRY- here is the req.body sent here from comment_crud.js:",
		req.body
	);
	try {
		const newComment = await Comments.create({
			...req.body,
			user_id: req.session.user_id,
		});
		console.log(
			"! ! ! This is the newComment we just did a POST with:",
			newComment
		);
		res.json({ ok: true });
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});
module.exports = router;
