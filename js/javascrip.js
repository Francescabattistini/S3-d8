// richiamare gli elementi
const divPadreTask = document.getElementById("task-maker");
const valoreTestoBox = document.getElementById("custom-task");
const contenitoreList = document.getElementById("list");

divPadreTask.addEventListener("submit", function (event) {
  event.preventDefault();
  const div = document.createElement("div");
  const task = CreaTask();
  const check = creaCheck();
  div.append(check, task);
  contenitoreList.append(div);
  divPadreTask.reset();
});

function CreaTask() {
  const task = document.createElement("p");
  task.classList.add("task");
  task.addEventListener("click", function (event) {
    task.classList.toggle("crossed");
  });
  const primaLetteraMaiuscola =
    valoreTestoBox.value.slice(0, 1).toUpperCase() +
    valoreTestoBox.value.slice(1);

  task.innerText = primaLetteraMaiuscola;

  task.classList.add("inline");
  return task;
}

function creaCheck() {
  const check = document.createElement("input");
  check.type = "checkbox";
  check.addEventListener("click", function () {
    check.parentNode.classList.add("fade-out");
    setTimeout(function () {
      check.parentNode.remove();
    }, 1000);
  });
  check.classList.add("inline");
  check.classList.add("clickable");
  return check;
}
