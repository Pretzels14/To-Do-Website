

/*
 JavaScript code that allows user to enter simple to-do list tasks consisting of a category,
 the body of text, the due date and whether or not the user has completed the task or not
 */

 // Will Update website.html to allow the user to add a due date and select different types of categories (ie personal or work related items)


// Create a function that allows user to add tasks to be displayed

function addTasks() {
    const inputTask = document.getElementById('taskInput');
    const taskText = inputTask.value.trim();

    if (inputTask !== '') {

        // This will retrieve tasks from the websites local storage or utilize an empty array if there are none
        const tasks = JSON.parse(localStorage.getItem)
    }
}