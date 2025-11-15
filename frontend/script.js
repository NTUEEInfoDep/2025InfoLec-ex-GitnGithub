const apiRoot = "http://localhost:3000/api";

async function main() {
	const getBtn = document.getElementById("btn-get");
	const postBtn = document.getElementById("btn-post");
	const putBtn = document.getElementById("btn-put");
	const deleteBtn = document.getElementById("btn-delete");
	const postName = document.getElementById("input-name-post");
	const postPwd = document.getElementById("input-pwd-post");
	const putId = document.getElementById("input-id-put");
	const putName = document.getElementById("input-name-put");
	const putPwd = document.getElementById("input-pwd-put");
	const deleteId = document.getElementById("input-id-delete");
	const result = document.getElementById("result");
	getBtn.addEventListener("click", async () => {
		try {
			const res = await getPeople();
			result.innerHTML = JSON.stringify(res);
		} catch (error) {
			alert("Failed to GET");
			return;
		}
	});
	postBtn.addEventListener("click", async () => {
		const name = postName.value;
		const pwd = postPwd.value;
		if (!name) {
			alert("Please enter the name!");
			return;
		}
		if (!pwd) {
			alert("Please enter the pwd!");
			return;
		}
		try {
			const res = await createPeople({ name, pwd });
			result.innerHTML = JSON.stringify(res);
		} catch (error) {
			alert("Failed to POST");
			return;
		}
	});
	putBtn.addEventListener("click", async () => {
		const id = putId.value;
		const name = putName.value;
		const pwd = putPwd.value;
		if (!id) {
			alert("Please enter the id!");
			return;
		}
		if (!name) {
			alert("Please enter the name!");
			return;
		}
		if (!pwd) {
			alert("Please enter the pwd!");
			return;
		}
		try {
			const res = await updatePeople(id, { name, pwd });
			result.innerHTML = JSON.stringify(res);
		} catch (error) {
			alert("Failed to PUT");
			return;
		}
	});
	deleteBtn.addEventListener("click", async () => {
		const id = deleteId.value;
		if (!id) {
			alert("Please enter the id!");
			return;
		}
		try {
			const res = await deletePeople(id);
			result.innerHTML = JSON.stringify(res);
		} catch (error) {
			alert("Failed to DELETE");
			return;
		}
	});
}

async function getPeople() {
	const response = await fetch(`${apiRoot}/`);
	return response.json();
}

async function createPeople(data) {
	const response = await fetch(`${apiRoot}/`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
	return response.json();
}

async function updatePeople(id, data) {
	const response = await fetch(`${apiRoot}/${id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
	return response.json();
}

async function deletePeople(id) {
	const response = await fetch(`${apiRoot}/${id}`, {
		method: "DELETE"
	});
	return response.json();
}

main();