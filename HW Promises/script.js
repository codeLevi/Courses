 $(window).on("load", onHtmlLoaded);
var apiUrl = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke';

function onHtmlLoaded() {

  
$.ajax(apiUrl)
 .then(function(response) {
   var elJokes = document.getElementById("jokes");
   elJokes.innerHTML = "Joke of the day is:<br> <strong>" + response.setup + "<br>" + "</strong>";
 
  onclick = punchLine;
    function punchLine() {
      alert(response.punchline);
}
});
 }

// function getPosts() {
//   $.ajax(apiUrl)
//     .then(callOnSuccess, callOnError)
//     .then(function(posts) {
//     console.log("The 10 posts are" , posts);
//     for(var i=0; i<posts.length; i++) {
//       var post = posts[i];
//       $.ajax(apiUrl + '/' + post.id + '/comments').then(callOnCommentsSuccess)
//     }
//   });
// }

// function callOnSuccess(response) {
//     console.log('Success = ', response);
//   var posts = response.slice(0,10);
// //  console.log('POST = ', posts);
//   return posts;
//   }


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