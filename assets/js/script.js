// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// created a function to generate a unique task id
function generateTaskId() {
   const taskId = nextId; 
   nextId++;
   localStorage.setItem('nextId', JSON.stringify(nextId));
   return taskId 
}

// created a function to create a task card
function createTaskCard(task) {
    const taskId = generateTaskId();
    const taskCard = 
    <div class="task-card" data-task-id="${taskId}">
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <p>Due Date: ${task.dueDate}</p>
            <button class="delete-task-btn">Delete Task</button>
        </div>;
    
    $('.task-list').append(taskCard);
        
    task.id = taskId;
    taskList.push(task);
    localStorage.setItem('tasks', JSON.stringify(taskList));

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    $('.task-list').empty();
    taskList.forEach(task => {
        createTaskCard(task);
    });

    $('.task-card').draggable({
        revert: 'invalid',
        start: function() {
            $(this).addClass('dragging');
        },
        stop: function() {
            $(this).removeClass('dragging');
        }
    })
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
