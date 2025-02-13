getElementById("addTask").addEventListener("click", () => {
    const taskText = getElementById("taskInput").value.trim();
    getElementById("taskInput").value = ""
    
    if (taskText === "")
        return;
    
    const listItem = document.createElement("li")
    listItem.innerText = taskText;
    
    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", () => {
        getElementById("taskList").removeChild(listItem)
    });
    
    listItem.appendChild(deleteBtn)
    getElementById("taskList").appendChild(listItem)
})

function getElementById(id) {
    return document.getElementById(id);
}
