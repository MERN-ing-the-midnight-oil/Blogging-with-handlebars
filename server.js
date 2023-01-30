const sequelize = require("./config/connection");
const path = require("path");
const express = require("express");
const session = require("express-session");
const routes = require("./controllers"); //equivalent to /controllers/index.js
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");

//importing express-session, so we can save user data between URL reloads , for example whether the user is logged in or not
//express-session is middleware
//const session = require("express-session");
const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions
// defaults for the sesh ID cookie is httpOnly:true, secure:false, maxAge: null. Because httpOnly is true, user won't see the sesh data even if they look in the dev tools
const sesh = {
	secret: "o872of8hfo4uihofhoiufli3unlu",
	cookie: {
		maxAge: 300000,
		httpOnly: true,
		secure: false,
		sameSite: "strict",
	},
	resave: false,
	saveUninitialized: false,
};
app.use(session(sesh));

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes); //"when express is called, use the routes referred to by the const routes which require ./controllers  in line 4"

app.listen(PORT, () => {
	console.log(
		`Hey , YO, your app express is listening on port ${PORT}! (techblog, server.js)`
	);
	sequelize.sync({ force: false });
});
