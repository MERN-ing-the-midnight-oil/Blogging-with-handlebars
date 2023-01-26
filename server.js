const sequelize = require("./config/connection");
const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");

//importing express-session, so we can save user data between URL reloads , for example whether the user is logged in or not
//express-session is middleware
const session = require("express-session");
const app = express();
const PORT = process.env.PORT || 3001;

//Set up sessions
//defaults for the sesh ID cookie is httpOnly:true, secure:false, maxAge: null. Because httpOnly is true, user won't see the sesh data even if they look in the dev tools
const sesh = {
	secret: "some sort of secret",
	resave: false,
	saveUninitialized: false,
};
//app.use(session(sesh));

const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
//app.use(require("./controllers")); //added this line per ASK BCS skaliaperumal's advice

app.listen(PORT, () => {
	console.log(
		`Hey , YO, your app express is listening on port ${PORT}! (techblog, server.js)`
	);
	sequelize.sync({ force: false });
});
