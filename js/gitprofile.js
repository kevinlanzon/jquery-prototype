$(document).ready(function() {

  $('.gitprofile').on('submit', function(e) {

    e.preventDefault();

    var url = 'https://api.github.com/users/' + $('input.username').val();

    var template = $('template').html();

    $.get(url, function(info) {
      $('.container').prepend(Mustache.render(template, info));
    }).fail(function noInfo() {
      $('.container').prepend("User not found")
    }).always(function clearBox() {
      $('input.username').val('');
      });
  });
});
