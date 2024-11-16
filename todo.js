const taskInput = document.getElementById('inputtask');
const taskList = document.getElementById('taskList');



function addTask() {
    const tasktext = taskInput.value.trim();
    if (tasktext === "") return;

    const li = document.createElement('li');
    li.innerHTML = `<span>${tasktext}</span>
                            <button onclick="doneTask(this)">Done</button>
                            <button onclick="editTask(this)">Edit</button>
                            <button onclick="deleteTask(this)">Delete</button>`;

    taskList.appendChild(li);
    taskInput.value = "";
}


function doneTask(button) {
    const task = button.parentElement;
    task.classList.toggle("completed");
}


function editTask(button) {
    const task = button.parentElement;
    const span = task.querySelector('span');
    const newText = prompt('Edit task:', span.innerText);
    if (newText !== null) {
        span.innerText = newText;
    }
}



function deleteTask(button) {
    const task = button.parentElement;
    task.remove();
}