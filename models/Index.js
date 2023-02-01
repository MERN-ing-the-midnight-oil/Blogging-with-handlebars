const User = require("./User");
const Blogs = require("./Blogs");
const Comments = require("./Comments");

User.hasMany(Blogs, {
	foreignKey: "user_id",
	onDelete: "Cascade",
});

User.hasMany(Comments, {
	foreignKey: "user_id",
});

Blogs.belongsTo(User, {
	foreignKey: "user_id",
});

Blogs.hasMany(Comments, {
	foreignKey: "blogs_id",
});

Comments.belongsTo(Blogs, {
	foreignKey: "blogs_id",
	onDelete: "Cascade",
});

Comments.belongsTo(User, {
	foreignKey: "user_id",
	onDelete: "Cascade",
});

module.exports = { User, Blogs };
