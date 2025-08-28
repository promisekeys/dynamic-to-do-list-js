
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");


function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        
        const li = document.createElement("li");
        li.textContent = taskText;

        
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-btn");


        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

    
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        
        taskInput.value = "";
    }
}


addButton.addEventListener("click", addTask);


taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
