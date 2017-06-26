console.log("connected")

function Quiz() {
  this.songs = [
    { artist: "David Bowie",  title: "Life on Mars",  audio: "David Bowie - Life On Mars.mp3", similarArtists: ["Lou Reed", "Iggy Pop", "The Velvet Underground"]},
    { artist: "Led Zeppelin",  title: "Whole Lotta Love",  audio: "Led Zeppelin - Whole Lotta Love.mp3", similarArtists: ["Aerosmith", "Deep Purple", "The Who"]},
    { artist: "Gorillaz",  title: "Feel Good Inc",  audio: "Gorillaz - Feel Good Inc.mp3", similarArtists: ["Blur", "LCD Soundsystem", "The Chemical Brothers"]},
    { artist: "Metronomy",  title: "The Bay",  audio: "Metronomy - The Bay.mp3", similarArtists: ["Friendly Fires", "Hot Chip", "The Rapture"]},
    { artist: "Tame Impala",  title: "Elephant",  audio: "Tame Impala - Elephant.mp3", similarArtists: ["Unknown Mortal Orchestra", "Beach House", "Real Estate"]},
    { artist: "The Doors",  title: "Break On Through",  audio: "The Doors - Break On Through.mp3", similarArtists: ["Jefferson Airplane", "Jimmy Hendrix", "The Kinks"]},
    { artist: "The Black Keys",  title: "Lonely Boy",  audio: "The Black Keys - Lonely Boy.mp3", similarArtists: ["The White Stripes", "Band of Skulls", "The Kills"]},
    { artist: "Blur",  title: "Girls and Boys",  audio: "Blur - Girls and Boys.mp3", similarArtists: ["Supergrass", "Pulp", "The Verve"]},
    { artist: "Daft Punk",  title: "One More Time",  audio: "Daft Punk - One More Time.mp3", similarArtists: ["Digitalism", "Justice", "The Chemical Brothers"]},
    { artist: "Franz Ferdinand",  title: "Take Me Out",  audio: "Franz Ferdinand - Take Me Out.mp3", similarArtists: ["Kaiser Chiefs", "Bloc Party", "Kasabian"]}
  ]

  this.artistsArray = [];
  this._shuffleSongs();
  this._createArtistArray();


var divSongs = ""

  // for (i = 0; i < this.songs.length; i++) {
  //   divs += '<div class="song" id="' + this.songs[i].artist + '"><audio id="' + this.songs[i].title + '"><source src="music/' + this.songs[i].audio + '" type="audio/mpeg">Your browser does not support the audio tag.</audio></div>';
  // }

  for (i = 0; i < this.songs.length; i++) {
    divSongs += '<div class="song" id="' + this.songs[i].artist + '">';
    // divs += '<audio id="' + this.songs[i].title.split(" ").join("_") + '">';
    divSongs += '<audio id="song' + (i+1) + '">';
    divSongs += '<source src="music/' + this.songs[i].audio + '" type="audio/mpeg">';
    divSongs += 'Your browser does not support the audio tag.</audio></div>';
  }

  document.getElementById("container").innerHTML = divSongs;




};
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


Quiz.prototype._createArtistArray = function() {
  for (var i = 0; i < this.songs.length; i++) {
    this.artistsArray.push(this.songs[i].artist);
  }
};



// _______END OF GAME PROTOTYPE_________


var quiz;


$(document).ready(function() {
quiz = new Quiz;
console.log(this);
console.log(quiz.songs[0].artist);
var correctAnswer = "";
var that = this;



// ON CLICK PLAY-PAUSE SONG

$(".song").on("click", function() {
  console.log("clicked");
  if ($(this).hasClass("playing")) {
    $(this).removeClass("playing");
    document.getElementById($(this.children).attr("id")).pause();
  }
  else {
    $(this).addClass("playing");
    correctAnswer = $(this).attr("id");
    // console.log(quiz.findIndexByKeyValue(object, "artist", "David Bowie"));
    // console.log(quiz.songs[0].artist);
    document.getElementById($(this.children).attr("id")).play();
    // setTimeout(document.getElementById($(this.children).attr("id")).pause(), 5000);
  }

  console.log(correctAnswer);
  console.log(quiz.songs);

});


// END OF ON CLICK PLAY-PAUSE SONG







// Closing jQuery function
});
