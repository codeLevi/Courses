window.onload = function() {
var currentPost = new Game();
var currentPostId = getUrlParameter("postId");
//console.log(currentPostId);
currentPost.fetchData(currentPostId).then(function() {
  //console.log(currentPost);
  var postDetailsContainer = document.getElementById("game-details");
  //create title HTML node and populate it with currentPostData
  var postTitleEl = document.createElement("h3");
  postTitleEl.innerHTML = currentPost.title;
  postDetailsContainer.appendChild(postTitleEl);
  //create body HTML node and populate it with currentPostData
  var postBodyEl = document.createElement("img");
  postBodyEl.innerHTML = currentPost.imageUrl;
  postDetailsContainer.appendChild(postBodyEl);
}).catch(function() {
  console.log("Something went wrong on Game Details View");
});
function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

}