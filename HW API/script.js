 $(window).on("load", onHtmlLoaded);

function onHtmlLoaded() {
  
$.ajax('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke', {
 method: 'GET',
 success: function(response) {
   var elJokes = document.getElementById("jokes");
   elJokes.innerHTML = "Joke of the day is:<br> <strong>" + response.setup + "<br>" + response.punchline + "</strong>";
 }
});
}

//   alert("Joke of the day is:" + response.setup + response.punchline);

//  var elPosts = document.getElementById('list-posts');
//   elPosts.innerHTML = "cannot get posts! Error!";
// }
//      var elPosts = document.getElementById("list-posts");

// var child = document.createElement("div");

// var textNode = document.createTextNode(response.setup);


// var elem = document.createElement('article');
//         elem.innerHTML = '<h2>' + item.title + '</h2>' +
//           '<p>' + item.body + '</p>' +
//           '<button data-edit-id="' + item.id + '">Edit</button><button data-delete-id="' + item.id + '">Delete</button>';
//         elPosts.appendChild(elem);