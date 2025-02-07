document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("addTask");
    button.onclick = function () {
        var input = document.getElementById("taskInput");
        var taskText = input.value;

        if (taskText !== "") {
            var list = document.getElementById("taskList");
            var listItem = document.createElement("li");
            listItem.innerText = taskText;

            var deleteBtn = document.createElement("button");
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