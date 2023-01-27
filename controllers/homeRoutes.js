const router = require("express").Router();
//const { json } = require("sequelize/types");
const { Blogs, User } = require("../models");

//render the main page
//--------------------------------------------------------------------------------------
router.get("/", async (req, res) => {
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
		const blogz = blogsData.map((blag) => blag.get({ plain: true }));
		//Pass the werialized data into template

		res.render("homepage", {
			blogz,
			//logged_in: req.session.logged_in, //hands the view the logged on status
			//should probably also hand in the logged_in: req.session.logged_in
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

//Render the dashboard 
//------------------------------------------------------------------------------------------
router.get("/dash", withAuth, async (req, res) => {
try{
	//find the logged on user based on the session ID
	const userData = await User.findByPk(req.session.user_id),
	{
		attributes: { exclude: ['password'] },
		include: [{ model: Blogs }],
	}
	const user = userData.get({ plain: true });
	res.render('dashboard', {
		...user,
		logged_in: true,
	});
}
catch (err) {
	res.status(500).json(err);
}
});

//------------------------------------------------------------------------------------------



//render a blog post by id
//------------------------------------------------------------------------------------------
router.get("/post/:id", async (req, res) => {
	try {
		const singleData = await Blogs.findByPk(req.params.id, {
			include: [
				{
					model: User,
					attributes: ["name"],
				},
			],
		});
		const single = singleData.get({ plain: true });
		res.render("single", {
			...single,
			//logged_in req.session.logged_in,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});d
//------------------------------------------------------------------------------------------



//------------------------------------------------------------------------------------------
module.exports = router;
