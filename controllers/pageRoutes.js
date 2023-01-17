const router = require("express").Router(); //using the built in express router to trigger my routes
const { Blogs, User } = require("../models"); //javascript will automatically find the models by looking in the root index.js
const withAuth = require("../utils/auth"); //will redirect un-logged in user to login

//rendering a home page view from the "/" URL path
router.get("/", withAuth, async (req, res) => {
	//home page on 3001
	try {
		// Get all blogs and JOIN with user data
		const blogData = await Blogs.findAll({
			//"Blogs" is exported form models folder //findAll is a sequelize method
			include: [
				{
					model: User, //include information from the User model, limit to name
					attributes: ["name"], //limiting what the database hands to us
				},
			],
		});
		// Serialize data so the handlebars template can read it
		const blogsForTemplate = blogData.map((blogstuff) =>
			//strip out the metadata to make it cleaner before handing to fron end
			blogstuff.get({ plain: true })
		);
		//console.log(blogsForTemplate);  //Per Jamie's advice..
		data.blogsForTemplate = blogsForTemplate; //Jamie has this, not sure why
		// Pass serialized data and session flag into template
		blogsForTemplate.render("home", {
			//^---------------------------------//HANDLEBARS  !!!
			//renders home.handlebars
			//blogsForTemplate, //hands the view the clean blogs
			logged_in: req.session.logged_in, //hands the view the user logged on status
			data,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

//rendering a specific tech blog post from the "/post/:id" URL path
router.get("/post/:id", withAuth, async (req, res) => {
	try {
		const specificBlog = await Blogs.findByPk(req.params.id, {
			//searches the "Blogs" model
			include: [
				{
					model: User, //Include info from the "User" model
					attributes: ["name"],
				},
			],
		});
		//serialize (strip out the metadata) the response object
		const strippedResponse = specificBlog.get({ plain: true });

		res.render("SINGLEENTRY", {
			//HANDLEBARS HANDLEBARS HANDLEBARS HANDLEBARS HANDLEBARS HANDLEBARS !!!
			...strippedResponse,
			logged_in: req.session.logged_in,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

//rendering all blog posts AKA the dashboard  // Use withAuth middleware to prevent access to route
router.get("/dashboard", withAuth, async (req, res) => {
	//router.get("/dashboard", async (req, res) => {
	try {
		// Find the logged in user based on the session ID
		const userData = await User.findByPk(req.session.user_id, {
			//PK is the user id so find the user by PK
			attributes: { exclude: ["password"] }, //we don't want to get the password for security reasons
			include: [{ model: Blogs }], //includes all the blogs referenced by User (associated with that user)
		});
		//serialize (strip out the metadata from) the response object
		const strippedResponse = userData.get({ plain: true });

		res.render("dashboard", {
			...strippedResponse,
			logged_in: true,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get("/login", (req, res) => {
	// If the user tries to use the login route but is already logged in, redirects them to their dashboard
	if (req.session.logged_in) {
		res.redirect("/dashboard");
		return;
	}

	res.render("login");
});

module.exports = router;
