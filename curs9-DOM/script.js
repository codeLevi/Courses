var commentsList = document.getElementById('comments-list');
console.log(commentsList); //null

window.addEventListener("load", onHtmlLoaded);

function onHtmlLoaded() {
  //finding elements in HTML
  var commentsList = document.getElementById('comments-list');
  console.log(commentsList); //the element
  console.log("comments items", document.getElementsByClassName("comment-item"));
  console.log("comment items by tag", document.getElementsByTagName("section"));
  var commentItems = document.getElementsByTagName("section");
  console.log("first comment item", commentItems[0]);
  console.log("second comment item", commentItems[1]);
  console.log("First paragraph inside section", document.querySelector("section > p"));
  console.log("First paragraph inside section", document.querySelectorAll("section > p"));
  


//Updating HTMl Elements
var h1Array = document.getElementsByTagName("h1"); //returns an array of elements
console.log(h1Array[0]); //get the first element of the array
  
  var h1 = document.querySelector("h1"); //returns the fist element that 
  console.log(h1);
  
  console.log(h1Array.innerHTML);
  console.log(h1Array[0].innerHTML);
  console.log(h1.innerHTML);
  
  h1.innerHTML = "JS DOM Manipulation Modified"; //modify content
  
  //get & set attributes
  
  var list = document.getElementById("comments-list"); //letrehozom a list variablet, ez alapján kezel a comment-list IDval rendelkezo objektumot
  console.log("Element id", list.id, list.getAttribute("id"));
  
  list.id = "comments-list-new-id";
  list.setAttribute("id", "comments-list-new");
  
  list.style.border = "solid 1px red";  
  list.style.padding = "5px";
  
  //Creating element
  
  var comment = document.createElement("section"); //create a new section element
  comment.className = "comment-item"; //set the class on this element
  var commentClassList = comment.classList;
  commentClassList.add("second-comment-item");
  comment.innerHTML = "<h2>Levi</h2><p>Comment from Levi</p>";
  
  //add it in the page
  list.appendChild(comment);
 var anaComment = document.querySelector(".comment-item");
  list.removeChild(anaComment);
  
  console.log(comment.children);
  console.log(comment.querySelector("p"));
  
  //events
  
  var submitButton = document.getElementById("btn-submit");
  submitButton.addEventListener("click", handleClick);
  
  function handleClick(event) {
    event.preventDefault(); //stops the default execution and executes the following lines
    console.log(event.target); //the element that was clicked
  
  }
  
  
  
  
  
  
  
  
  }


















































