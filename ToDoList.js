document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("addTask");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    button.addEventListener("click", addTask);

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerText = taskText;

            const deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Delete";
            deleteBtn.addEventListener("click", function () {
                removeTask(listItem);
            });

            listItem.appendChild(deleteBtn);
            taskList.appendChild(listItem);
            taskInput.value = "";
        }
    }

    function removeTask(taskElement) {
        taskList.removeChild(taskElement);
    }
});
