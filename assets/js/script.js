// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// created a function to generate a unique task id
function generateTaskId() {
   const taskId = nextId; nextId++;
   localStorage.setItem('nextId', JSON.stringify(nextId));
   return taskId 
}

// created a function to create a task card
function createTaskCard(task) {
    const taskId = generateTaskId();
    const taskCard = generateTaskCard();
  
    $('.task-list').append(taskCard);
        
    task.id = taskId;
    taskList.push(task);
    localStorage.setItem('tasks', JSON.stringify(taskList));



}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
//   $( function() {
//     $( "#draggable" ).draggable();
//   } );
  
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
