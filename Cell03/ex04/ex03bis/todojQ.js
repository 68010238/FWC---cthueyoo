function setCookie(name, value, days) {
	const date = new Date();
	date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
	document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + date.toUTCString() + ";path=/";
}

function getCookie(name) {
	const cookies = document.cookie.split(";");
	for (let i = 0; i < cookies.length; i++) {
		let cookie = cookies[i].trim();
		if (cookie.indexOf(name + "=") === 0) {
			return decodeURIComponent(cookie.substring(name.length + 1));
		}
	}
	return null;
}

function getTodos() {
	const cookie = getCookie("todos");
	if (!cookie) {
		return [];
	}
	return JSON.parse(cookie);
}

function saveTodos(todos) {
	setCookie("todos", JSON.stringify(todos), 365);
}

function createTodoElement(text) {
	const $todoDiv = $("<div>").addClass("todo-item").text(text);

	$todoDiv.on("click", function () {
		const confirmed = confirm("Remove this to-do item?");
		if (confirmed) {
			$todoDiv.remove();

			const todos = getTodos();
			const index = todos.indexOf(text);
			if (index !== -1) {
				todos.splice(index, 1);
				saveTodos(todos);
			}
		}
	});

	return $todoDiv;
}

function addTodo(text, save) {
	const $todoDiv = createTodoElement(text);
	$("#ft_list").prepend($todoDiv);

	if (save) {
		const todos = getTodos();
		todos.unshift(text);
		saveTodos(todos);
	}
}

$("#new-btn").on("click", function () {
	const text = prompt("Enter your new to-do:");
	if (text !== null && text.trim() !== "") {
		addTodo(text.trim(), true);
	}
});

// Load existing todos from cookie on page load
const savedTodos = getTodos();
savedTodos.forEach(function (text) {
	addTodo(text, false);
});