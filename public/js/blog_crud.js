const newFormHandler = async (event) => {
	event.preventDefault();

	const name = document.querySelector("#blog-title").value.trim();
	const description = document.querySelector("#blog-entry").value.trim();

	if (name && description) {
		const response = await fetch(`/api/blogs`, {
			method: "POST",
			body: JSON.stringify({ entry_title: name, entry: description }),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (response.ok) {
			document.location.replace("/dash");
		} else {
			alert("Failed to create project");
		}
	}
};

document
	.querySelector(".new-project-form")
	.addEventListener("submit", newFormHandler);

module.exports = router;
