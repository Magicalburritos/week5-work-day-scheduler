// global vars selectors
var currentTime;

// helper function

var displayTime = function () {
  currentTime = moment().format('HH');
};

var saveTasks = function (tasks, id) {
  localStorage.setItem(id, JSON.stringify(tasks));
};

// on click save to storage
$('i').on('click', function () {
  var id = $(this).attr('id');
  var description = $('#d' + id).val();

  saveTasks(description, id);
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

// main function
$(document).ready(function () {
  $('#currentDay').html(moment().format('dddd MMM Do'));
  displayTime();
  loadTasks();
  changeColors();

  // continued check every 1 min
  window.setInterval(function () {
    $('#currentDay').html(moment().format('dddd MMM Do'));
    displayTime();
    changeColors();
  }, 60000);
});
