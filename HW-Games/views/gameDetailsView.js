window.onload = onHtmlLoaded;

function onHtmlLoaded() {
  bindEvent();
}

window.onload = function() {
var currentPost = new Game();
var currentPostId = getUrlParameter(currentPost.id);
//console.log(currentPostId);
currentPost.fetchData(currentPostId).then(function() {
  //console.log(currentPost);
  var postDetailsContainer = document.getElementById("game-details");
  //create title HTML node and populate it with currentPostData
  var postTitleEl = document.createElement("h2");
  postTitleEl.innerHTML = currentPost.title;
  postDetailsContainer.appendChild(postTitleEl);
  //create body HTML node and populate it with currentPostData
  var postBodyEl = document.createElement("img");
  postBodyEl.innerHTML = currentPost.imageUrl;
  postDetailsContainer.appendChild(postBodyEl);
  postBodyEl.setAttribute("src", currentPost.imageUrl);
  //create body HTML node and populate it with currentPostData
  var postDescriptionEl = document.createElement("p");
  postDescriptionEl.innerHTML = currentPost.description;
  postDetailsContainer.appendChild(postDescriptionEl);

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

function bindEvent() {
  var submitBtn = document.getElementById('post-submit');
  submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    var id = document.getElementById('id-post').value;
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    var data = {
      title: title,
      description: description
    }
    
    updatePost();
  });
}