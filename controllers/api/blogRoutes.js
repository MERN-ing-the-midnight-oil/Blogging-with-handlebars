const router = require("express").Router();
const { Blogs } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/"),
	withAuth,
	async (req, res) => {
		try {
			const newBlogs = await Blogs.create({
				...req.body,
				user_id: req.session.user.id,
			});
			res.status(200).json(newBlogs);
		} catch (err) {
			res.status(400).json(err);
		}
	};
