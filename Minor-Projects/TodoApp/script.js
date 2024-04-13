const addButton = document.querySelector(".todo-add-btn");
const todoInput = document.querySelector("#todo-input ");
const todoItems = document.querySelector(".todo-items");

if (localStorage.length == 0) {
  localStorage.setItem("todos", "");
}

let todotodo = localStorage.getItem("todos");

if (todotodo != "") {
  todotodo = todotodo.split(",");
  todotodo.forEach((todo) => {
    const newTodo = document.createElement("div");
    newTodo.setAttribute("class", "todo-item");
    newTodo.innerHTML = `<div class="item-text">
              <p>${todo}</p>
          </div>
          <div class="item-btn">
              <button id="delete"></button>
              <input type="checkbox" id="checkbox">
          </div>`;
    todoItems.appendChild(newTodo);
    todoInput.value = "";
  });
}

addButton.addEventListener("click", () => {
  var ExistingTodos = localStorage.getItem("todos");

  if (ExistingTodos == "") {
    ExistingTodos = [];
  } else {
    ExistingTodos = ExistingTodos.split(",");
  }

  const todoText = todoInput.value;
  const newTodo = document.createElement("div");
  newTodo.setAttribute("class", "todo-item");
  if (!todoText == "") {
    newTodo.innerHTML = `<div class="item-text">
        <p>${todoText}</p>
    </div>
    <div class="item-btn">
        <button id="delete"></button>
        <input type="checkbox" id="checkbox">
    </div>`;
    todoItems.appendChild(newTodo);
  }
  todoInput.value = "";

  ExistingTodos.push(todoText);
  //   console.log(ExistingTodos);
  localStorage.setItem("todos", ExistingTodos);
});


todoItems.addEventListener("click", (e) => {
  const targetTodo = e.target.parentNode.parentNode;
  if (e.target.id == "delete") {
    let todotxt= targetTodo.querySelector("p").innerHTML;
    console.log(todotxt);
    var todos = localStorage.getItem("todos").split(",");
    console.log(todos);
    const filteredTodos = [];
    for (let i = 0; i < todos.length; i++) {
      if (todotxt == todos[i]) {
        continue;
      } else {
        filteredTodos.push(todos[i]);
      }
    }
    localStorage.setItem("todos", filteredTodos);
    todoItems.removeChild(targetTodo);
  }
  if (e.target.id == "checkbox") {
    targetTodo.style.backgroundColor = "#283d3b";
    e.target.setAttribute("disabled", "true");
    let todotxt = targetTodo.querySelector("p").innerHTML;
    targetTodo.querySelector("p").style.textDecoration="line-through";
    // targetTodo.querySelector("#delete").setAttribute("disabled","true")
    console.log(todotxt);
    var todos = localStorage.getItem("todos").split(",");
    console.log(todos);
    const filteredTodos = [];
    for (let i = 0; i < todos.length; i++) {
      if (todotxt == todos[i]) {
        continue;
      } else {
        filteredTodos.push(todos[i]);
      }
    }
    localStorage.setItem("todos", filteredTodos);
  }
});
