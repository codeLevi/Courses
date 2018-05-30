function GameList() {
  this.items = [];
}

GameList.prototype.fetchData = function() {
  var that = this;
  return $.ajax('https://games-world.herokuapp.com/games', {
    method: 'GET',
    success: function(postsData) {
      for(var i=0;i<postsData.length; i++) {
        var postItem = postsData[i];
        var postModel = new Game();
        //set all the data that we received from Server
        //on the post model
        postModel._id = postItem._id;
        postModel.title = postItem.title;
        postModel.imageUrl = postItem.imageUrl;
        postModel.description = postItem.description;
        //push the model in items array
        that.items.push(postModel)
      }      
    },
    error: function(xhr) {
      alert('Something went wrong when fetching posts!');
    }
  });
}