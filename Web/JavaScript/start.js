document.addEventListener('DOMContentLoaded', function() {
  var myButton = document.getElementById('start');
  if (myButton) {
    myButton.addEventListener('click', function() {
      window.location.href = '../html/new_Game.html';
    });
  }
});
