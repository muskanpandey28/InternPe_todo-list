// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return; // If no text, don't add an empty task

    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(li);
    taskInput.value = ''; // Clear the input after adding the task
}

// Function to mark a task as completed
function toggleCompleted(element) {
    element.classList.toggle('completed');
}

// Function to delete a task
function deleteTask(element) {
    element.parentNode.remove();
}

// Event listener for marking a task as completed
taskList.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('task-text')) {
        toggleCompleted(e.target);
    }
});

// Event listener for adding a new task on pressing Enter key
taskInput.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});