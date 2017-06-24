console.log("connected")

function Quiz() {
  this.songs = [
    { artist: "David Bowie",  title: "Life on Mars",  audio: "David Bowie - Life On Mars.mp3"},
    { artist: "Led Zeppelin",  title: "Whole Lotta Love",  audio: "Led Zeppelin - Whole Lotta Love.mp3"},
    { artist: "Gorillaz",  title: "Feel Good Inc",  audio: "Gorillaz - Feel Good Inc.mp3"},
    { artist: "Metronomy",  title: "The Bay",  audio: "Metronomy - The Bay.mp3"},
    { artist: "Tame Impala",  title: "Elephant",  audio: "Tame Impala - Elephant.mp3"},
    { artist: "The Doors",  title: "Break On Through",  audio: "The Doors - Break On Through.mp3"},
    { artist: "The Black Keys",  title: "Lonely Boy",  audio: "The Black Keys - Lonely Boy.mp3"},
    { artist: "Blur",  title: "Girls and Boys",  audio: "Blur - Girls and Boys.mp3"},
    { artist: "Daft Punk",  title: "One More Time",  audio: "Daft Punk - One More Time.mp3"},
    { artist: "Franz Ferdinand",  title: "Take Me Out",  audio: "Franz Ferdinand - Take Me Out.mp3"}
  ]

  this._shuffleSongs();


var divs = ""

  for (i = 0; i < this.songs.length; i++) {
    divs += '<div class="song">';
    divs += '<audio id="' + this.songs[i].artist + '">';
    divs += '<source="music/' + this.songs[i].audio + '" type="audio/mpeg">';
    divs += 'Your browser does not support the audio tag.</audio></div>';
  }

  document.getElementById("container").innerHTML = divs;

}

//END OF CONSTRUCTOR

Quiz.prototype._shuffleSongs = function() {
  var i = 0;
  var j = 0;
  var temp = null;
  for (i = this.songs.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = this.songs[i];
    this.songs[i] = this.songs[j];
    this.songs[j] = temp;
  }
};



var quiz;

$(document).ready(function() {
quiz = new Quiz;
console.log(quiz.songs);


// $(".song").on("click", function() {
//   console.log("clicked");
//   if ($(this).hasClass("playing")) {
//     $(this).removeClass("playing");
//     $('#player')[0].pause();
//   }
//   else {
//     $(this).addClass("playing");
//     $('#player')[0].play();
//   }
//
//   console.log($(this).attr("class"));
// });


// <div class="song"><audio id="player">
// <source src="music/David Bowie - Life On Mars.mp3" type="audio/mpeg">
// Your browser does not support the audio tag.</audio></div>

// Closing jQuery function
});
