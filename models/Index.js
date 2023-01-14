const User = require("./User");
const Blogs = require("./Blog");

User.hasMany(Blogs, {
	foreignKey: "user_id",
	onDelete: "Cascade",
});

Blogs.belongsTo(User, {
	foreignKey: "user_id",
});

module.exports = { User, Blogs };
