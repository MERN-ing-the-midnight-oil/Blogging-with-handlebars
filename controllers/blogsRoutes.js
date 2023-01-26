const router = require("express").Router();
//const { json } = require("sequelize/types");
const { Blogs, User } = require("../models");
//rendering the main page
console.log("about to render all Blogs");

router.get("/", async (req, res) => {
	//home page on 3001
	try {
		//get all blogs and JOIN with user data, specifically the name
		const blogsData = await Blogs.findAll({
			//"Blogs" is exported from models folder //findAll is a sequelize method
			include: [
				{
					model: User, //include the user, limit to name
					attributes: [`name`], //limiting what the database hands to us
				},
			],
		});
		//Serialize data so the handlebars template can read it
		const bloggs = blogsData.map((blag) => blag.get({ plain: true }));

		res.render("mainpage", {
			bloggs,
			//should probably also hand in the logged_in: req.session.logged_in
		});
	} catch (err) {
		res.status(500).json(err);
	}
});
