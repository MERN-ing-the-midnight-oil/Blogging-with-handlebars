//this file should fetch a post to the database using commentsRoutes.js
console.log(
	"!!! !!! !!! this is the start of comment_crud, which does a POST of a new comment"
);
const newFormHandler = async (event) => {
	event.preventDefault();

	const comment = document.querySelector("#comment").value.trim();
	console.log(
		"! ! ! this is the comment that comment_crud is about to use to POST to api/comments:" +
			comment
	);
	if (comment.length > 0) {
		const response = await fetch(`/api/comments`, {
			method: "POST",
			//"entry" is what the comment text is called in the model
			body: JSON.stringify({ entry: comment }),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (response.ok) {
			document.location.replace("/");
		} else {
			alert("Failed to create comment");
		}
	}
};

document
	.querySelector(".new-comment-form")
	.addEventListener("submit", newFormHandler);

module.exports = router;
