$(document).ready(function() {


  function Jukebox(playing) {
    var client_id = 'ec3bd0195e4842709f5185ce8f988143'; // Your client id
    var client_secret = 'b8ecb40b09b8481abdfa6f3c2760fdf3'; // Your secret
    this.isPlaying = playing;
    const audio = $("#audio1").get(0);
    var songName = $("audio[name]")
    var trackNum = 0;
    var access_token = prompt("Auth token");
    var tracks = ['Gorillaz - Let Me Out (Official Audio).mp3', 'Carpenter Brut - Le Perv.mp3'];
    console.log(tracks);
    $('#audio1').attr('src', tracks[trackNum]);

    this.playIt = function() {
      if (this.isPlaying) {
        audio.play();
        this.isPlaying = false;
      } else {
        audio.pause();
        this.isPlaying = true;
      }
    }

    this.stopIt = function() {
      audio.pause();
      audio.currentTime = 0;
      this.isPlaying = true;
    }

    this.loadNext = function() {
      if(trackNum == tracks.length-1){
        $('#audio1').attr('src', tracks[trackNum])
        audio.play();
      }else{
        trackNum++;
        $('#audio1').attr('src', tracks[trackNum]);
        console.log(trackNum);
        audio.play();
      }
    }

    this.loadPrev = function() {
      if(trackNum==0){
        $('#audio1').attr('src', tracks[0]);
        audio.play();
      }else{
        trackNum--;
        $('#audio1').attr('src', tracks[trackNum]);
        console.log(trackNum);
        audio.play();
      }
    }

     this.addSong = function() {
       path = $("#addSong").val();
       tracks.push(path);
       console.log(tracks);
     }

     this.spotiSong = function() {
      // alert(access_token = $("#spotifyAuth").val();
     }
// -----------------------------------------------------------------------------
     $.ajax({
        url: 'https://api.spotify.com/v1/search?q=love*&type=track',
        method: "GET",

        headers: {
          'Authorization': 'Bearer ' + access_token,
          'Content-Type': 'application/json'
        },
        success: function(response) {
          // console.log(response["tracks"]["items"][0]["name"]);
          console.log(response["tracks"]["items"][0]["name"]);
      //    tracks.push(response["preview_url"]);
        },
        error: function(){
          console.log("Did not return.");
        }
      });
// -----------------------------------------------------------------------------
     $.ajax({
        url: 'https://api.spotify.com/v1/tracks/7yMiX7n9SBvadzox8T5jzT',
        method: "GET",
        headers: {
          'Authorization': 'Bearer ' + access_token,
          'Content-Type': 'application/json'
        },
        success: function(response) {
          console.log(response["preview_url"]);
          tracks.push(response["preview_url"]);
        },
        error: function(){
          console.log("Did not return.");
        }
      });

    }

  juke = new Jukebox(true);

});
