function Game() {
  this._id = "";
  this.title = "";
  this.imageUrl = "";
  this.description = "";
}


Game.prototype.fetchData = function(_id) {
  var that = this;
  return $.ajax('https://games-world.herokuapp.com/games/' + _id, {
    method: 'GET',
    success: function(data) {
      that._id = data._id;
      that.title = data.title;
      that.imageUrl = data.imageUrl;
      that.description = data.description;
    },
    error: function() {
      alert('Something went wrong when fetching Post details!');
    }
  })
}