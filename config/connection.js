//This is my connection to the back end

const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASSWORD,
	{
		host: "localhost",
		dialect: "mysql",
		//port: 3001,  //per advice from an ASK BCS LA abradshaw, I'm removing this line because it's interfering with 3001 on server.js
	}
);

module.exports = sequelize;
