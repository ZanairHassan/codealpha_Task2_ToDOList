const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        
        // Add delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            taskItem.remove();
            // Show pop-up message
            alert('Task has deleted successfully!');
        });

        // Add update button
        const updateButton = document.createElement('button');
        updateButton.textContent = 'Update';
        updateButton.addEventListener('click', function() {
            const updatedText = prompt('Enter updated task:');
            if (updatedText !== null && updatedText.trim() !== '') {
                taskItem.textContent = updatedText.trim();
                // Show pop-up message
                alert('Task has updated successfully!');
            }
        });

        taskItem.appendChild(deleteButton);
        taskItem.appendChild(updateButton);

        taskList.appendChild(taskItem);
        taskInput.value = '';

        // Show pop-up message
        alert('Task has added successfully!');
    }
}
