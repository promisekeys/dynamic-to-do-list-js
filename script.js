// Run code after page loads
document.addEventListener("DOMContentLoaded", function () {
    // Select DOM elements
    const addButton = document.getElementById("addButton");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create new list item
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-btn");

        // Remove task when button clicked
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append button and li
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input
        taskInput.value = "";
    }

    // Event listener for Add button
    addButton.addEventListener("click", addTask);

    // Event listener for Enter key
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
