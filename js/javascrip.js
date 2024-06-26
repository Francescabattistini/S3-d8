const taskMaker = document.getElementById("myForm");

// logica per la to-do list e per il task-maker
taskMaker.addEventListener("submit", function (event) {
  event.preventDefault();

  const customTask = document.getElementById("custom-task");
  const list = document.getElementById("list");
  // create elements

  const div = document.createElement("div");
  const check = document.createElement("input");
  check.type = "checkbox";
  check.addEventListener("click", function () {
    check.parentNode.classList.add("fade-out");
    setTimeout(function () {
      check.parentNode.remove();
    }, 1000);
  });
  const task = document.createElement("p");
  task.classList.add("task");
  task.addEventListener("click", function (event) {
    task.classList.toggle("crossed");
  });

  // rende la prima lettera della task maiuscola di default
  const upperCase =
    customTask.value.slice(0, 1).toUpperCase() + customTask.value.slice(1);
  task.innerText = upperCase;
  // mette sulla stessa linea il checkbox e la task
  check.classList.add("inline");
  check.classList.add("clickable");
  task.classList.add("inline");
  // append elements
  div.append(check, task);
  list.append(div);
  //reset form
  taskMaker.reset();
});

const header = document.getElementsByTagName("header")[0];

header.appendChild(randomMotivation());
