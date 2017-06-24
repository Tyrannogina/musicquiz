console.log("connected")

$(document).ready(function() {


$(".container").on("click", function() {
  console.log("clicked");
  if ($(this).hasClass("playing")) {
    $(this).removeClass("playing");
    $('#player')[0].pause();
  }
  else {
    $(this).addClass("playing");
    $('#player')[0].play();
  }

  console.log($(this).attr("class"));
});




// Closing jQuery function
});
