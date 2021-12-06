// global vars selectors

// local storage var
$('#currentDay').html(moment().format('dddd MMM Do'));
// btn save on click to localstorage

var saveTasks = function (tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
$('i').on('click', function () {
  var id = $(this).attr('id');
  var task = $(this).parent().prev('.col-lg-8').children('input').val();
  //   task = 'hi';
  saveTasks(task, id);
  console.log(localStorage.getItem('tasks'));
});
// time change color

var loadTasks = function () {
  //   for (let i = 1; i <= 9; i++) {
  //     console.log(i);
  //     var row = document
  //       .getElementById('row-' + i)
  //       .getElementsByClassName('description');
  //     row.value = localStorage.getItem(i);
  //     console.log(localStorage.getItem(i));
  //   }
  console.log(localStorage.getItem('tasks'));
};

loadTasks();
