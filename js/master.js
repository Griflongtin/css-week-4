$(function() {
  $('.button').click(function() {
    var page = $(this).val();
    $('section').hide();
    $("#" + page).show();
  });

});
