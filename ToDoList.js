document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("addTask");
    button.onclick = function () {
        const input = document.getElementById("taskInput");
        const taskText = input.value;

        if (taskText !== "") {
            const list = document.getElementById("taskList");
            const listItem = document.createElement("li");
            listItem.innerText = taskText;

            const deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Delete";
            deleteBtn.onclick = function () {
                list.removeChild(listItem);
            };

            listItem.appendChild(deleteBtn);
            list.appendChild(listItem);
            input.value = "";
        }
    };
});