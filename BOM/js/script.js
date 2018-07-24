//window.console.log same shit
console.log("wtf");
console.warn("This is a warning!");
console.error("This is an error message!");

window.onload = () => {
// const iframeBody = document.getElementById("fame-body");
// iframeBody.innerHTML = "Something new";
  console.log(window.frames.length);
  window.name = "Parent master window";
  const openWinBtn = document.getElementById("new-win");
  openWinBtn.addEventListener("click", () => {
    window.open("http://cursuri-ambaruslevente775940.codeanyapp.com/BOM/secondPage.html");
  })
  
  
  
  
  
  
  
  
  
  
  
  
}
