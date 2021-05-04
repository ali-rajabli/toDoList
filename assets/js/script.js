var counter = 0;
var storage = localStorage.getItem("toDoData");
if (storage === null) {
    var todolist = [];
} else {
    var todolist = JSON.parse(storage);
}
for (let i in todolist) {
    var toDoItem = $(`<div class="item"></div>`);
    toDoItem.attr("id", "task-" + i);
    toDoItem.append(`<span>${todolist[i]}</span>`);
    console.log(todolist[i])
    var toDoClose = $(`<button class="btn-dark">`);
    toDoClose.attr("data-to-do", counter);
    toDoClose.addClass("checkbox");
    toDoClose.append(`<i class="fa fa-check"></i>`);
    toDoItem = toDoItem.prepend(toDoClose);
    $("#todolist").append(toDoItem);
    $("#inpt-task").val("");
    counter++;
}

$("#btn-clear").on("click", function(event) {
    $('#todolist').empty();
    localStorage.clear();
});

$("#btn-add").on("click", function(event) {
    event.preventDefault();
    var tasks = $('#inpt-task').val().trim();
    var toDoItem = $(`<div class="item"></div>`);
    toDoItem.attr("id", "task-" + counter);
    toDoItem.append(`<span>${tasks}</span>`);

    var toDoClose = $(`<button class="btn-dark">`);

    toDoClose.attr("data-to-do", counter);
    toDoClose.addClass("checkbox");
    toDoClose.append(`<i class="fa fa-check"></i>`);
    toDoItem = toDoItem.prepend(toDoClose);
    $("#todolist").append(toDoItem);
    $("#inpt-task").val("");
    counter++;

    todolist.push(tasks);
    localStorage.setItem('toDoData', JSON.stringify(todolist))
});

$(document.body).on("click", ".checkbox", function() {
    var toDoNumber = $(this).attr("data-to-do");
    $("#task-" + toDoNumber).remove();
    var todolist = JSON.parse(localStorage.getItem("toDoData"));
    var currentIndex = $(this).attr("data-index");

    // Deletes the item marked for deletion
    todolist.splice(currentIndex, 1);

    localStorage.setItem("toDoData", JSON.stringify(todolist));
});