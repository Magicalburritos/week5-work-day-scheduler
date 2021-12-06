// global vars selectors
var currentTime;
var displayTime = function () {
  currentTime = moment().format('HH');
};
// btn save on click to localstorage
$('#currentDay').html(moment().format('dddd MMM Do'));
var saveTasks = function (tasks, id) {
  localStorage.setItem(id, JSON.stringify(tasks));
};
$('i').on('click', function () {
  var id = $(this).attr('id');
  var task = $(this).parent().prev('.col-lg-8').children('input').val();

  saveTasks(task, id);
});
// time change color
var changeColors = function () {
  for (let i = 9; i <= 17; i++) {
    var input = $('#d' + i);
    if (currentTime > i) {
      input.addClass('past');
    }
    if (currentTime === i) {
      input.addClass('present');
    }
    if (currentTime < i) {
      input.addClass('future');
    }
  }
};

var loadTasks = function () {
  for (let i = 9; i <= 17; i++) {
    document.getElementById('d' + i).value = JSON.parse(
      localStorage.getItem(i)
    );
  }
};

loadTasks();

$(document).ready(function () {
  displayTime();
  changeColors();
  window.setInterval(function () {
    displayTime();
    changeColors();
  }, 1000);
});
