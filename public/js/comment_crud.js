const newFormHandler = async (event) => {
	event.preventDefault();

	const comment = document.querySelector("#comment").value.trim();

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
