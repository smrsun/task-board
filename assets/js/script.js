// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// created a function to generate a unique task id
function generateTaskId() {
   const taskId = nextId; nextId++;
   localStorage.setItem('nextId', JSON.stringify(nextId));
   console.log(taskId);
   return taskId 
   
}

// created a function to create a task card
function createTaskCard(task) {
    const taskCard = $('<div>')
    .addClass('card task-id draggable')
    .attr('data-task-id', task.id);
    const cardTitle = $('<div>').addClass('card-title').text(task.name);
    const cardDescription = $('<p>').addClass('card-text').text(task.type);
    const cardDueDate 
    

    const deleteBtn = $('<button>')
    .addClass('btn btn-danger delete')
    .text('Delete')
    .attr('data-task-id', task.id);
    deleteBtn.on('click', handleDeleteTask);

    if(taskList.dueDate && taskList.status !== 'done') {
        const due = dayjs();
        const taskDueDate = dayjs(tasks.dueDate, 'MM/DD/YYYY');

        

    }

  

button.addEventListener('click', function('delete'), );
    
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    $(".task-list").empty(); // Clear existing task cards

    taskList.forEach(task => {
        createTaskCard(task);
    });

    // Make the task cards draggable
    $(".task-card").draggable({
        revert: "invalid",
        start: function() {
            $(this).addClass("dragging");
        },
        stop: function() {
            $(this).removeClass("dragging");
        }
    });

  
}


// Todo: create a function to handle adding a new task
function handleAddTask(event){
    const addTask = $('task');
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){


}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    printTaskItems

    $('#taskCardDueDate').datepicker({
        changeMonth: true,
        changeYear: true,
      });
    
      $('.lanes').droppable({
        accept: '.draggable',
        drop: handleDrop,
      });

});
