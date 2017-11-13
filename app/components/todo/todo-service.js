function TodoService() {
	// A local copy of your todos
	var todoList = []
	var baseUrl = 'https://inspire-server.herokuapp.com/api/todos/Hunter'

	function Todo(name) {
		this.name = name
		this.completed = false
	}
	function logError(err) {
		console.error('UMM SOMETHING BROKE: ', err)
		//CAN YOU NOTIFY THE USER IF SOMETHING BREAKS? 
		//do this without breaking the controller/service responsibilities
	}

	this.getTodos = function (draw) {
		$.get(baseUrl)
			.then(function (res) { // <-- WHY IS THIS IMPORTANT????
				todoList = res
				console.log(todoList)
				draw(res)
			})
			.fail(logError)
	}

	this.addTodo = function (todoname, cb) {
		// WHAT IS THIS FOR???
		if (!todoname || !cb || typeof cb != 'function') { return console.error('Unable to add todo', 'bad parameters', todoname, cb) }
		var newTodo = new Todo(todoname)
		$.post(baseUrl, newTodo)
			.then(function (res) { // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
				console.log('success')
				todoList.push(newTodo)

				cb()
			})
			.fail(logError)
	}

	this.toggleTodoStatus = function (todoId, getTodos) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList
		var editedTodo = todoList[todoId]
		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		editedTodo.completed = !editedTodo.completed
		//STEP 3: Here is that weird Ajax request because $.put doesn't exist
		$.ajax({
			method: 'PUT',
			contentType: 'application/json',
			url: baseUrl + '/' + todoId,
			data: JSON.stringify(editedTodo)
		})
			.then(function (res) {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
				getTodos()
			})
			.fail(logError)
	}

	this.removeTodo = function (todoId, getTodos) {
		// Umm this one is on you to write.... It's also unique, like the ajax call above. The method is a DELETE
		$.ajax({
			method: 'DELETE',
			contentType: 'application/json',
			url: baseUrl + '/' + todoId,
			data: JSON.stringify(todoId)
		})
			.then(function (res) {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
				this.getTodos(draw)
			})
			.fail(logError)
	}

}
