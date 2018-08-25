$(document).ready(function () {
  $("#exampleFormControlTextarea6").scroll(function () {
    if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
      $("#button-accept").removeAttr('disabled');
    }

  });
})