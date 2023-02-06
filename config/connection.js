//This is my connection to the back end

const Sequelize = require("sequelize");
require("dotenv").config();
var sequelize;

if (process.env.JAWSDB_URL) {
	sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
	sequelize = new Sequelize(
		process.env.DB_NAME,
		process.env.DB_USER,
		process.env.DB_PW,
		{
			host: "localhost",
			dialect: "mysql",
		}
	);
}
module.exports = sequelize;
