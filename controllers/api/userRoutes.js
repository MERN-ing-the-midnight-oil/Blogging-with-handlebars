const router = require("express").Router(); //pulls the router process from express
const { User } = require("../../models");

//Creating a new user------------------------------------------------------------------------------------------------
router.post("/", async (req, res) => {
	try {
		const userData = await User.create(req.body); //
		req.session.save(() => {
			//this is creating a cookie to send to the client
			req.session.user_id = userData.id; //saved in cookie //!!!!
			req.session.logged_in = true; //saved in cookie

			res.status(200).json(userData); //user data sent back to the browser (id, name, password)
		});
	} catch (err) {
		res.status(400).json(err);
	}
});
//exports all the router paths to the server

//login ----------------------------------------------------------------
router.post("/login", async (req, res) => {
	//its a "post" simply because we need a req body, not because any change happens to the db
	// /api/user/  is already implied
	//localhost3001/api/users/login
	try {
		const userData = await User.findOne({ where: { email: req.body.email } });

		if (!userData) {
			res
				.status(400)
				.json({ message: "Incorrect email or password, please try again" });
			return;
		}

		const validPassword = await userData.checkPassword(req.body.password); //notice validPassword is a boolean
		//userData is what we named the current user, any user can use the checkPassword method
		if (!validPassword) {
			res
				.status(400)
				.json({ message: "Incorrect email or password, please try again" }); //returns a response body
			return;
		}

		req.session.save(() => {
			//save is a method of the session object , calling "save" on the session object
			req.session.user_id = userData.id; //tells "session" that it now has a user id that is what it is
			req.session.logged_in = true; //tells "session" that it has a true logged in value

			res.json({ user: userData, message: "You are now logged in!" }); //server gives client a response object which is user data and a message
		});
	} catch (err) {
		res.status(400).json(err);
	}
});

router.post("/logout", (req, res) => {
	if (req.session.logged_in) {
		//more logic done on a request body
		req.session.destroy(() => {
			res.status(204).end();
		});
	} else {
		res.status(404).end();
	}
});

module.exports = router;
