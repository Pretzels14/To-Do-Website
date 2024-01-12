

/*
 JavaScript code that allows user to enter simple to-do list tasks consisting of a category,
 the body of text, the due date and whether or not the user has completed the task or not
 */

 // Will Update website.html to allow the user to add a due date and select different types of categories (ie personal or work related items)


// Create a function that allows user to add tasks to be displayed


function addTasks() {
    const inputTask = document.getElementById('taskInput');
    const dueDateInput = document.getElementById('dueDateInput');
    const categoryInput = document.getElementById('categoryInput');


    const taskText = inputTask.value.trim();

    if (inputTask !== '') {

        // This will retrieve tasks from the websites local storage or utilize an empty array if there are none
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        // Create a new task with all of the information above. set our completed statement to false, as the user has not yet completed the task they created

        const newTask = {
            text: taskText,
            dueDate: dueDateInput.value,
            category: categoryInput.value,
            completed: false
        };

        // Add our new task to the task array
        tasks.push(newTask);

        // Have to update tasks in the users local storage
        localStorage.setItem('tasks', JSON.stringify(tasks));

        loadTasks();

        // Now, add our new task to the object model
        addTaskToDOM(newTask, tasks.length - 1);

        inputTask.value = '';
        dueDateInput.value = '';
        categoryInput.value = '';
    }


    // Load tasks from the local storage and display them to the user on the screen

    // Maybe allow the user to delete a task so it can be gone from memory?

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
            <input type="checkbox" id="task${index}" ${task.completed ? 'checked' : ''}>
            <label for="task${index}" ${task.completed ? 'class="completed"' : ''}>${task.text}</label>
            <span class="due-date">${task.dueDate}</span>
            <span class="category">${task.category}</span>
            <button onclick="deleteTask(${index})">Delete Task</button>
        `;
    
        listItem.querySelector('input').addEventListener('change', function () {
            updateCompletionStatus(index, this.checked);
        });
    
        taskList.appendChild(listItem);
    }
    


       function deleteTask(index) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];


        tasks.splice(index, 1);

        localStorage.setItem('tasks', JSON.stringify(tasks));

        loadTasks();
       }

       function updateCompletionStatus(index, completed) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];


        tasks[index].completed = completed;

        localStorage.setItem('tasks', JSON.stringify(tasks));

        loadTasks();
       }
}