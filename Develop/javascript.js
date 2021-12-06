// global vars selectors
var taskItems = [];
// local storage var
$('#currentDay').html(moment().format('dddd MMM Do'));
// btn save on click to localstorage

var saveTasks = function (tasks, id) {
  localStorage.setItem(id, JSON.stringify(tasks));
  console.log(document.getElementById('d1').value);
};
$('i').on('click', function () {
  var id = $(this).attr('id');
  var task = $(this).parent().prev('.col-lg-8').children('input').val();

  saveTasks(task, id);
  console.log(localStorage.getItem('tasks'));
});
// time change color

var loadTasks = function () {
  for (let i = 1; i <= 9; i++) {
    console.log(i);
    document.getElementById('d' + i).value = JSON.parse(
      localStorage.getItem(i)
    );
    console.log(localStorage.getItem(i));
  }
  console.log(localStorage.getItem('tasks'));
};

loadTasks();
