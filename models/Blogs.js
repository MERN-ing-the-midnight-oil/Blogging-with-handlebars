const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Blogs extends Model {}

//This table contains everything needed to display one blog entry
Blogs.init(
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

		entry_title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		//the text of the blog entry
		entry: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		sequelize,
		freezeTableName: true,
		underscored: true,
		modelName: "blogs",
	}
);

module.exports = Blogs;
