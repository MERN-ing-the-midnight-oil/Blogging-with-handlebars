const { Model, DataTypes } = require("sequelize"); //datatypes is a sequelize process
const sequelize = require("../config/connection"); //how I connect to my database

class Comments extends Model {}

Comments.init(
	//telling sequelize to initialize the table
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		//The id of the user who made the entry
		user_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "user",
				key: "id",
			},
		},
		blogs_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "blogs", //references what I have stored in the model name (backend name)
				key: "id",
			},
		},
		entry: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		sequelize, //tells sequelize how to act
		freezeTableName: true,
		underscored: true, //allows underscores in column names no need for camelcasing
		modelName: "comments", //establishes the name of the table as seen from mysql /the back end
	}
);
module.exports = Comments; //exporting the model
