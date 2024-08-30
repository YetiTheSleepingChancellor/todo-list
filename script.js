const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.ariaValueMax;

    if (taskText != '') {
        const li = document.createElement('li');
        li.textContent =textText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function() {
            taskList.removeChild(li);
        };

        li.addEventListener('click', function() {
            li.classList.toggle('completed')
        });

        li.appendChild(deleteBtn);

        taskList.appendChild(li);

        taskInput.value = '';
    }
}

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(event) {
    if(event.key === 'Emter') {
        addTask(); 
    }
})

