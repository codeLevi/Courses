window.onload = function() {
  var games = new GameList();
  games.fetchData().then(function(){
    //console.log(posts.items.length);
    var containerEl = document.getElementById("container");
    for(var i = 0; i < games.items.length; i++) {
      var postEl = document.createElement("a");
      postEl.setAttribute("href", "http://cursuri-ambaruslevente775940.codeanyapp.com/HW-Games/pages/gameDetails.html?postId=" + games.items[i]._id);
      //opens a new page
//       postEl.setAttribute("target", "blank");
      postEl.innerHTML = games.items[i].title;      
      containerEl.appendChild(postEl);
      var imgEl = document.createElement("img");
      imgEl.setAttribute("src", games.items[i].imageUrl, "<br>");
      containerEl.appendChild(imgEl);
      
    }
  }).catch(function(){
    console.log("hope not");
  });
} 