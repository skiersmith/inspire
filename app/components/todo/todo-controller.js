function TodoController() {
	// new up the TodoService that has already been configured for your use
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again
	var todoService = new TodoService()

	// Use this getTodos function as your callback for all other edits
	function getTodos() {
		//FYI DONT EDIT ME :)
		todoService.getTodos(draw)
		
	}



	


	function draw(todos) {
		//WHAT IS MY PURPOSE?
		//BUILD YOUR TODO TEMPLATE HERE
		var template = ''
		//DONT FORGET TO LOOP
		debugger
	
		for (var i = 0; i < todos.length; i++) {
			var todo = todos[i]
			debugger
			template += `
			<input type="checkbox" onclick="app.controllers.todoController.toggleTodoStatus(${i})" name="${i}"><label for="${i}">${todo.name}</label>
			`
		}
		document.getElementById('hihihi').innerHTML = template
	}

	this.addTodoFromForm = function (e) {
		e.preventDefault() // <-- hey this time its a freebie don't forget this
		// TAKE THE INFORMATION FORM THE FORM
		
		var todo = e.target.newToDo.value

		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(todo, getTodos)
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	}



	this.toggleTodoStatus = function (todoId) {
		
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, getTodos)
		// YEP THATS IT FOR ME
	}

	this.removeTodo = function () {
		// ask the service to run the remove todo with this id
		$.ajax({
            url: baseUrl + '/' + index,
			method: 'DELETE'
			
        })
            .then(getAutos)
            .fail(logError)
		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}

	// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???
getTodos()
}