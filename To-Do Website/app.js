

/*
 JavaScript code that allows user to enter simple to-do list tasks consisting of a category,
 the body of text, the due date and whether or not the user has completed the task or not
 */



// Create a function that allows user to add tasks to be displayed





function addTask() {
    const taskInput = document.getElementById('taskInput');
    const dueDateInput = document.getElementById('dueDateInput');
    const categoryInput = document.getElementById('categoryInput');

    const taskText = taskInput.value.trim();
    const dueDate = new Date(dueDateInput.value);

    // Check to make sure the name isn't blank, if it is, display a warning message and exit.
    if (taskText === '') {
        displayError('Task name cannot be blank. Please enter a task name before adding.');
        return;
    }

    // Ensures the 'dueDate' is a date in the future
    if (isNaN(dueDate) || dueDate <= new Date()) {
        displayError('Due date must be in the future. Please select a valid due date.');
        return;
    }

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const newTask = {
        text: taskText,
        dueDate: dueDateInput.value,
        category: categoryInput.value,
        completed: false
    };

    tasks.push(newTask);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Call loadTasks after the task is added to local storage
    loadTasks();

    taskInput.value = '';
    dueDateInput.value = '';
    categoryInput.value = '';
}


    // Load tasks from the local storage and display them to the user on the screen


    function loadTasks() {
        const taskList = document.getElementById('taskList');
    
        // Check if taskList exists before modifying its innerHTML
        if (taskList) {
            taskList.innerHTML = '';
    
            // Retrieve tasks from local storage; if none or not an array, initialize an empty array
            const storedTasks = localStorage.getItem('tasks');
            const tasks = storedTasks ? JSON.parse(storedTasks) : [];
    
            // Check if tasks is an array before using forEach
            if (Array.isArray(tasks)) {
                tasks.forEach(function (task, index) {
                    addTaskToDOM(task, index);
                });
            }
        }
    }

    

       // have to be able to add a task to the document model

       function addTaskToDOM(task, index) {
        const taskList = document.getElementById('taskList');
    
        // create a new list item
        const listItem = document.createElement('li');
    
        listItem.innerHTML = `
            <input type="checkbox" id="task${index}" ${task.completed ? 'checked' : '' }>
            <label for="task${index}" ${task.completed ? 'class="completed"' : ''}>${task.text}</label>
            <span class="due-date">${task.dueDate}</span>
            <span class="category">${task.category}</span>
            <button onclick="deleteTask(${index})">Delete Task</button>
        `;
    
        listItem.querySelector('input').addEventListener('change', function () {
            updateCompletionStatus(index, this.checked);
        });
        
        listItem.querySelector('button').addEventListener('click', function() {
            deleteTask(index);
        });

    
        taskList.appendChild(listItem);
    }
    


       function deleteTask(index) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        if (index >= 0 && index < tasks.length) {
            tasks.splice(index, 1);

            localStorages.setItem('tasks', JSON.stringify(tasks));

            loadTasks();
       } else {
            console.error('invalid input');
       }
       
    }

       function updateCompletionStatus(index, completed) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];


        tasks[index].completed = completed;

        localStorage.setItem('tasks', JSON.stringify(tasks));

       
}