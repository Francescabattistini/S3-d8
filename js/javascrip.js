const taskMaker = document.getElementById("task-maker");

// logica per la to-do list e per il task-maker
taskMaker.addEventListener("submit", function (event) {
  event.preventDefault();
  // ho preso gli elementi
  const customTask = document.getElementById("custom-task");
  const list = document.getElementById("list");
  // ho creato gli elementi
  const div = document.createElement("div");
  const check = document.createElement("input");
  //definisco il comportamento della check
  check.type = "checkbox";
  check.addEventListener("click", function () {
    check.parentNode.classList.add("fade-out");
    setTimeout(function () {
      check.parentNode.remove();
    }, 1000);
  });

  // creo elemento p e ci aggiungo la classe task
  const task = document.createElement("p");
  task.classList.add("task");
  //creo la linea e la disabilito al click
  task.addEventListener("click", function (event) {
    task.classList.toggle("crossed");
  });
  // rende la prima lettera della task maiuscola di default
  const upperCase =
    customTask.value.slice(0, 1).toUpperCase() + customTask.value.slice(1); // seleziono la prima lettera a cui fare la maiuscola ,
  // ma poi mi toglie tutte le altre quindi gli dico dalla prima aggiungi il resto
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
