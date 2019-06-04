document.addEventListener("DOMContentLoaded", () => {

  document.querySelector("#create-task-form").addEventListener('submit', (event) => {
    event.preventDefault();
    let newTask = event.target[0].value;
    let setPriority = event.target[1].value;
    addTaskToList(newTask, setPriority);
    event.target[0].value = "";

  });

  function addTaskToList(task, priority) {
    const taskList = document.querySelector("#tasks");
    let newTask = document.createElement("li");
    newTask.textContent = task;
    newTask.style.color = priority;
    let deleteButton = document.createElement("button")
    deleteButton.innerHTML = "X"

    taskList.appendChild(newTask);
    newTask.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
      newTask.parentNode.removeChild(newTask);
    })
  }
})