$(document).ready(function(){
  $('.tweet-compose').on('focus',function() {
    $(this).css('height', '5em');
    $('#tweet-controls').show();
  var xTriggered = 140;
  $('#char-count').keyup(function(){
    xTriggered--;
    var msg = "Handler for .keyup called" + xTriggered + " time(s).";
    $.print(msg, "html");
    $.print(event);
    ('#char-count').keydown(function(event){
      if (event.which == 10) {
        event.preventDefault();
      }
    })
  })


  })
})
