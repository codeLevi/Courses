window.onload = onHtmlLoaded;
var apiUrl = 'https://jsonplaceholder.typicode.com/posts';
function onHtmlLoaded() {
  getPosts();
}

function getPosts() {
  fetch(
  apiURL, {
    method: 'GET'
  }).then(function(response){
    console.log("RESPONSE", response);
    return response.json();
  }).then(callOnSuccess);
}

function callOnSuccess(response) {
    console.log('Success = ', response);
  var posts = response.slice(0,10);
//  console.log('POST = ', posts);
  return posts;
  }

function callOnError(xhr) {
    console.log('Error = ', xhr);
  var elPosts = document.getElementById('list-posts');
  elPosts.innerHTML = "cannot get posts! Error!";
}

function callOnCommentsSuccess(response) {
  console.log("Comments = ", response);
}