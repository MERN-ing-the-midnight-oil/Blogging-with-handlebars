const sequelize = require("./config/connection");
const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(require("./controllers")); //added this line per ASK BCS skaliaperumal's advice

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}!`);
	sequelize.sync({ force: false });
});
