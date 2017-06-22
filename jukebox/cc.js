var request = require('request'); // "Request" library

var client_id = 'ec3bd0195e4842709f5185ce8f988143'; // Your client id
var client_secret = 'b8ecb40b09b8481abdfa6f3c2760fdf3'; // Your secret

// your application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

console.log(authOptions);



request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    console.log("test1");
    // use the access token to access the Spotify Web API
    var token = body.access_token;
    console.log(token);
    var options = {

      uri: 'https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V',
      headers: {
        'Authorization': 'Bearer ' + token
      },

      json: false
    };
    console.log(options);
    // request.get(options, function(error, response, body) {
    //   console.log(body);
    // });
  }

  //request.get()
});
