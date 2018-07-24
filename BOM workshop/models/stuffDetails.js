function Gadget() {
  this.id = "";
  this.name = "";
  this.imageUrl = "";
  this.quantity = ""; 
  this.price = "";
}
window.onload = onHtmlLoaded;

function onHtmlLoaded() {
  bindEvent();
}

Gadget.prototype.fetchData = function(id) {
  var that = this;
  return stuffFromLocalStorageObj.id, {
    success: function(data) {
      that.id = data.id;
      that.name = data.name;
      that.imageUrl = data.imageUrl;
      that.quantity = data.quantity;
      that.price = data.price;
    },
    error: function() {
      alert('Something went wrong when fetching Gadget details!');
    }
  }
}

window.onload = function() {
var currentGadget = new Gadget();
var currentGadgetId = getUrlParameter(gadget.id);
//console.log(currentPostId);
currentGadget.fetchData(currentGadgetId).then(function() {
  //console.log(currentPost);
  var postDetailsContainer = document.getElementById("showStuffDetails");
  //create title HTML node and populate it with currentPostData
  var postTitleEl = document.createElement("h2");
  postTitleEl.innerHTML = currentGadget.name; 
  postDetailsContainer.appendChild(postTitleEl);
  //create body HTML node and populate it with currentPostData
  var postBodyEl = document.createElement("img");
  postBodyEl.innerHTML = currentGadget.imageUrl;
  postDetailsContainer.appendChild(postBodyEl);
  postBodyEl.setAttribute("src", currentGadget.imageUrl);
  //create body HTML node and populate it with currentPostData
  var postDescriptionEl = document.createElement("p");
  postDescriptionEl.innerHTML = currentGadget.quantity;
  postDetailsContainer.appendChild(postDescriptionEl);
  var postPriceEl = document.createElement("p");
  postPriceEl.innerHTML = currentGadget.quantity;
  postDetailsContainer.appendChild(postPriceEl);

}).catch(function() {
  console.log("Something went wrong on Gadget Details View");
});


function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

}







