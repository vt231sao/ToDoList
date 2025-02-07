document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("addTask");
    button.addEventListener("click", addTask);
});

function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value;

    if (taskText !== "") {
        const list = document.getElementById("taskList");
        const listItem = document.createElement("li");
        listItem.innerText = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener("click", function () {
            removeTask(listItem);
        });

        listItem.appendChild(deleteBtn);
        list.appendChild(listItem);
        input.value = "";
    }
}

function removeTask(taskElement) {
    const list = document.getElementById("taskList");
    list.removeChild(taskElement);
}
